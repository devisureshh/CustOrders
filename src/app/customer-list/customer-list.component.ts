import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Customer } from '../customer';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
@Input() customerListFromParent !: string[];
@Input() customerExampleList !: Customer[];

@Input() count !: number;
@Output() countChanged : EventEmitter<number>=new EventEmitter();

@Input() word !: string; 
@Output () wordInitialized : EventEmitter<string>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  
append(){
  this.word="WORD";
  this.wordInitialized.emit(this.word)
}

  increment(){
    this.count++;
    this.countChanged.emit(this.count);
  }
decrement(){
  this.count--;
  this.countChanged.emit(this.count);
}
}
