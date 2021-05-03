import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Products;
  constructor(private msgSrvc: MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    if(this.productItem.quantity>0){
      this.msgSrvc.sendMsg(this.productItem);
      this.productItem.quantity-=1;
    }
    else{
      window.alert("No more items remaining!");
    }
    
  }

  handleRemoveFromCart(){
    //this.msgSrvc.sendDelMsg(this.productItem);
  }

}
