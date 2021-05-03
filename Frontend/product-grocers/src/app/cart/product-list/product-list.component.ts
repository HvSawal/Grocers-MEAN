import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/product';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Products[] = [];
  products?:Array<Product>

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products)=>{
      this.productList = products;
    });
    //console.log(this.productService.getProducts());
  }

}
