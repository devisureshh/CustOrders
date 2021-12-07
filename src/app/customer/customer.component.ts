import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  //one way databinding
customerDetails: string ="This is customer text";
//! makes it ok to not initialize
customerName !: string ;
customerEmail !: string;
color: string="blue";
username: string ="devisureshh";
customerList: string[]=["tim","tom","john","jim","kim"];

customerObject : Customer[]=[
  new Customer('tim',1,'123 north way',7143523366),
  new Customer('jim',2,'999 south stree',7776665555),
  new Customer('ken',3,'777 east west',88866966),
];

word ="initial";
counter=5;
countChangeHandler(count : number){
this.counter =count;
console.log(count);
alert(count);
}
showData(){
  alert("this is a click event");
}
  constructor() { }

  ngOnInit(): void {
    this.customerName="devi";
this.customerEmail = "ddd@gmail.com"
  }

  stringHandler(word : string )
  {
this.word = word;
  }
}
