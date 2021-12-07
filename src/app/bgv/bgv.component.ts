import { Component, createPlatform, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-bgv',
  templateUrl: './bgv.component.html',
  styleUrls: ['./bgv.component.css']
})
export class BgvComponent implements OnInit {
contactForm!: FormGroup;
submitted !: boolean;
  constructor(private formbuilder : FormBuilder) 
  {this.createForm();}

  createForm(){
this.contactForm=this.formbuilder.group({
  firstname : ['' ,[Validators.required]],
  lastname :[''],
  email :[''],
  address : ['']
})
  }

  get contactFormControl() {
    return this.contactForm.controls;
  }

  onSubmit(){
    console.log(this.contactForm.value);
  }
  ngOnInit(): void {
  }

}
