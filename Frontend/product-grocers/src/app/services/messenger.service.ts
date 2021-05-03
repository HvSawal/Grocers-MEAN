import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Products } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  query = [];

  constructor() { }

  sendMsg(product: Products) {
    //console.log(product);
    
    //event trigger
    //called by productItem
    this.subject.next(product);
    //this.subject.complete();
  }

  getMsg() {
    return this.subject.asObservable();
  }

  // sendDelMsg(product: Products){
  //   this.subject.next(product);
  // }

  // getDelMsg(){
  //   return this.subject.asObservable();
  // }
}
