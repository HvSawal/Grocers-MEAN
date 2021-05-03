import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-example-comp',
  templateUrl: './example-comp.component.html',
  styleUrls: ['./example-comp.component.css']
})
export class ExampleCompComponent implements OnInit {

  constructor(public exService: ExampleService) { }

  ngOnInit(): void {
  }

  showExample(vals:any){
    console.log(vals);
    this.exService.showExampleDetails(vals);
  }

}
