import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service'
import { Order } from '../models/order.model'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-generate-reports',
  templateUrl: './generate-reports.component.html',
  styleUrls: ['./generate-reports.component.css']
})
export class GenerateReportsComponent implements OnInit {
  totalSpent?: any
  ordersPlaced?: any
  productsBought?
  filteredOrders?: any

  orders?: Array<Order>
  option: string | undefined;

  

  constructor(public ordService: OrderService) { }

  ngOnInit(): void {
    this.ordService.retrieveAllOrderDetails().subscribe(result => this.orders = result);
  }

  GenerateReports(reportRef: any) {
    var datePipe = new DatePipe('en-US');
    this.totalSpent = 0
    this.ordersPlaced = 0;
    this.productsBought = 0
    this.filteredOrders = []

    if (reportRef.time == "daily") {

      this.orders?.forEach(order => {
        var orderDate = new Date(order.date).toISOString().slice(0, 10)
        if (orderDate == reportRef.date) {
          this.productsBought = this.productsBought + order.products.length
          this.totalSpent = this.totalSpent + order.total
          this.ordersPlaced += 1
          this.filteredOrders.push(order)
        }

      })
    } else if (reportRef.time == "range") {
      var startDate = new Date(reportRef.start)
      var endDate = new Date(reportRef.end)
      var date = new Date(startDate)
      var dates = []

      //range of dates
      while (date <= endDate) {
        var newDate = date.setDate(date.getDate() + 1);
        dates.push(new Date(newDate))
      }

      this.orders?.forEach(order => {
        var orderDate = new Date(order.date)
         orderDate = new Date(orderDate.setDate(orderDate.getDate()))
        
        //check if range of dates are in orders
        if (!!dates.find(date => { 
          return datePipe.transform(date, 'dd-MMM-YYYY ') == datePipe.transform(orderDate, 'dd-MMM-YYYY ')
        })) {
          this.totalSpent = this.totalSpent + order.total
          this.ordersPlaced += 1
          this.productsBought = this.productsBought + order.products.length
          this.filteredOrders.push(order)
        }
      })
    }

    this.totalSpent = this.totalSpent
    this.ordersPlaced = this.ordersPlaced
    this.productsBought = this.productsBought
  }
}
