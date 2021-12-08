import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NormalUserComponent } from './normal-user/normal-user.component';
import { SuccessfulComponent } from './successful/successful.component';


const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'successful', component: SuccessfulComponent,canActivate:[AuthenticationGuard]},
  {path : 'logout', component: LogoutComponent},
  {path: 'normalUser', component: NormalUserComponent,canActivate:[AuthenticationGuard]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
