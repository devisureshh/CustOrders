import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrls: ['./successful.component.css']
})
export class SuccessfulComponent implements OnInit {
   userFromLogin : any = localStorage.getItem('localRole');
   isAdmin():boolean{
    if (this.userFromLogin=='admin')
    {return true;}
    else{
return false;
    }
  }
  constructor() { }

  ngOnInit(): void {
    this.isAdmin();
    
  }

}
