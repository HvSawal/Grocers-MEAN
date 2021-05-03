import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { Products } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  pro: Array<Product>;

  products: Products[] = [
    // new Products(1, 'Product 1', 'This is product 1 description. This is a nice product, please buy!', 100),
    // new Products(2, 'Product 2', 'This is product 2 description. This is a nice product, please buy!', 200),
    // new Products(3, 'Product 3', 'This is product 3 description. This is a nice product, please buy!', 300),
    // new Products(4, 'Product 4', 'This is product 4 description. This is a nice product, please buy!', 400),
    // new Products(5, 'Product 5', 'This is product 5 description. This is a nice product, please buy!', 500),
    // new Products(6, 'Product 6', 'This is product 6 description. This is a nice product, please buy!', 600),
    // new Products(7, 'Product 7', 'This is product 7 description. This is a nice product, please buy!', 700),

  ];
  constructor(public http: HttpClient) { }

  getProducts(): Observable<Products[]> {
    //TODO: populate product from an API
    //Also return observable
    return this.http.get<Products[]>("http://localhost:9090/product/allProductDetails");
  }

  
  //post method 1st parameter url and 2nd parameter json data. 
  storeProductDetailsInfo(productRef: any) {
    this.http.post("http://localhost:9090/product/storeProductDetails", productRef, { responseType: "text" }).
      subscribe(result => console.log(result), error => console.log(error));
  }
  retrieveAllProductDetails(): Observable<Product[]> {
    //this.pro = this.http.get<Product[]>("http://localhost:9090/product/allProductDetails");
    return this.http.get<Product[]>("http://localhost:9090/product/allProductDetails")
  }

  retrieveProductById(id: any): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:9090/product/retrieveProductById/" + id)
  }

  //by default all HttpClient method return type is observable with json format data. 
  deleteProductById(id: any): any {
    return this.http.delete("http://localhost:9090/product/deleteProductById/" + id, { responseType: 'text' });
  }

  updateProduct(productRef: any): any {
    return this.http.put("http://localhost:9090/product/updateProduct", productRef, { responseType: 'text' })
  }

  reduceQuantity(productRef: any): any {
    return this.http.put("http://localhost:9090/product/reduceQuantity", productRef, { responseType: 'text' })
  }
  
}
