import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  updateMsg?:string;
  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }
  updateProduct(productRef:any){
    console.log(productRef);
    this.proService.updateProduct(productRef).subscribe((result:string)=> {
      this.updateMsg=result;
    });
  }

}