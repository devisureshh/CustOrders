import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DirectivesComponent } from './directives/directives.component';
import {MatMenuModule} from '@angular/material/menu';
import { CustomStyleDirective } from './custom-style.directive';
import { PipesComponent } from './pipes/pipes.component';
import { DigitCountPipe } from './digit-count.pipe';
import { StringCountPipe } from './string-count.pipe';
import { BgvComponent } from './bgv/bgv.component';
import { LoginComponent } from './login/login.component';
import { SuccessfulComponent } from './successful/successful.component';
import { AppRoutingModule } from './app-routing.module';
import { LogoutComponent } from './logout/logout.component';
import { User } from './user';
import { NormalUserComponent } from './normal-user/normal-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    DirectivesComponent,
    CustomStyleDirective,
    PipesComponent,
    DigitCountPipe,
    StringCountPipe,
    BgvComponent,
    LoginComponent,
    SuccessfulComponent,
    LogoutComponent,
    NormalUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    AppRoutingModule,
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
