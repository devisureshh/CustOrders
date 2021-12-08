import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustOrders';
  userFromLogin : any = localStorage.getItem('localRole');
 isAdmin():boolean{
    if(this.userFromLogin=='admin')
    {
      return true;
    }
    return false;
 }
}
