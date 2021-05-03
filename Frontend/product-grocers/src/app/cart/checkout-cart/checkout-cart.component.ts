import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent implements OnInit {

  cart = [];
  ordr = {};
  userId = JSON.parse(localStorage.getItem('userId'))
  user: Array<User>;
  constructor(public usrService:UserService, public ordService:OrderService, public proService:ProductService, private router:Router ) { }

  ngOnInit(): void {

      var jsonString = sessionStorage.getItem(this.userId);
      var jsonObject = JSON.parse(jsonString);
      //console.log(jsonString);
      this.cart.push(jsonObject);
      //console.log(this.cart[0]);
      this.getCurrentUser(this.userId);

  }

  checkout(){

    this.ordr['total'] = this.cart[0].total;
    this.ordr['userId'] = this.userId;
    this.ordr['products'] = this.cart[0].products;
    this.ordr['status'] = 'paid'; 
    //console.log(this.ordr);
    //sessionStorage.setItem('user1',JSON.stringify(this.ordr));

    
    
    this.ordService.storeOrderDetailsInfo({total: this.ordr['total'], userId: this.userId, products: this.ordr['products']}).toPromise()
    .then((value: any) => { 
      console.log(JSON.parse(value)) 
      this.usrService.userOrderPurchase({
        order: JSON.parse(value), //gets order object,
      }).subscribe((result: string) => {
        console.log(result)
      }); 
    })
      .catch((err: any) => { console.log(err) })

    this.ordr['products'].forEach(item =>{
      this.proService.reduceQuantity({productId: item.productId, quantity: item.qty}).subscribe((result: string) => {
        console.log(result)
      }); 

      this.router.navigate(['/cart']);
    })

    
    
    //console.log(this.cartItems);
  }
  getCurrentUser(id:any){
    this.usrService.retrieveUserById(id).subscribe((res: Array<User>)=>this.user = res);
  }


}
