import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {


  canActivate():boolean{
    

    return this.checkLogin();
  }

  checkLogin():boolean{
    let userFromLogin : any = localStorage.getItem('localUsername');
    //alert(userFromLogin);
    let passFromLogin: any = localStorage.getItem('localPassword');
    //alert(passFromLogin);
    if(userFromLogin=='devi@gmail.com' && passFromLogin =='pass123')
    {
        return true;
    }
    else{
      alert("authenticaiton failed");
      return false;

    }
    return false;
  }
}
