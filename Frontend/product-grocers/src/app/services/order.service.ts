import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Order} from '../models/order.model'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public http: HttpClient) { }
  storeOrderDetailsInfo(orderRef: any): any {
    return this.http.post("http://localhost:9090/order/storeOrderDetails", orderRef, { responseType: "text" })
  }
  retrieveAllOrderDetails(): Observable<Order[]> {
    return this.http.get<Order[]>("http://localhost:9090/order/allOrderDetails")
  }

  retrieveOrderById(id: any): Observable<Order[]> {
    return this.http.get<Order[]>("http://localhost:9090/order/retrieveOrderById/" + id)
  }

  //by default all HttpClient method return type is observable with json format data. 
  deleteOrderById(id: any): any {
    return this.http.delete("http://localhost:9090/order/deleteOrderById/" + id, { responseType: 'text' });
  }

  updateOrder(orderRef: any): any {
    return this.http.put("http://localhost:9090/order/updateOrderStatus", orderRef, { responseType: 'text' })
  }
}
