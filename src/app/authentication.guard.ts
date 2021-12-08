import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { stringify } from 'querystring';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
role!:string;

  canActivate():boolean{
    

    return this.checkLogin();
  }

  checkLogin():boolean{
    let userFromLogin : any = localStorage.getItem('localUsername');
    //alert(userFromLogin);
    let passFromLogin: any = localStorage.getItem('localPassword');
    //alert(passFromLogin);
    

    if(userFromLogin=='admin' && passFromLogin =='admin')
    { 
        return true;
    }
    else if (userFromLogin=='user' && passFromLogin =='user'){
  
      return true;

    }
    return false;
  }
}
