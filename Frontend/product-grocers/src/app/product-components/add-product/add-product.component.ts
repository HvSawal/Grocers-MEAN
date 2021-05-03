import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public proService:ProductService) { }

  ngOnInit(): void {
  }

  storeProduct(productRef:any){
    console.log(productRef);
    this.proService.storeProductDetailsInfo(productRef);
  }

}
