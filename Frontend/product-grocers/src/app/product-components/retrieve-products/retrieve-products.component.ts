import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-retrieve-products',
  templateUrl: './retrieve-products.component.html',
  styleUrls: ['./retrieve-products.component.css']
})
export class RetrieveProductsComponent implements OnInit {


  products?:Array<Product>
  constructor(public proService:ProductService) { }

  ngOnInit(): void {
    this.proService.retrieveAllProductDetails().subscribe(result=>console.log(result[0]));
    this.proService.retrieveAllProductDetails().subscribe(result=>this.products=result);
  }

  
  
}
