import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
//import { CustomvalidationService } from '../services/customvalidation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private route: Router,
    private loginService: AuthService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['',Validators.required],
      password: ['', Validators.required]
    }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

//   onSubmit() {
//     this.submitted = true;
//     if (this.registerForm.valid) {
//       alert('Form Submitted succesfully!!!\n Check the values in browser console.');
//       console.table(this.registerForm.value);
// this.route.navigate(['/successful']);
//     }
//   }
username!:string;
password!:string;
  onClickSubmit(data: any){
this.username=data.email;
this.password=data.password;
this.loginService.login(this.username,this.password);
this.route.navigate(['/successful']);

  }
}
