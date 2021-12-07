import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { DigitCountPipe } from '../digit-count.pipe';
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

presentDate= new Date() ; //gives present date
timeChange = new Observable<string>((observer: Observer<string>) => {
  setInterval(() => observer.next(new 
  Date().toString()), 1000); 
});
price: number =2000;

customerList= ["elyas","devi","red","thomas","jaimin","jerry"];
decimalOne:  number= 9.75;
decimalTwo: number= 10.32;
jsonData={
  id: '1',
  name: {username: 'devi'}
}
digit:number = 50000;

  constructor() { }

  ngOnInit(): void {
  }

}
