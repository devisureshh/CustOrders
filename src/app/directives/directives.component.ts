import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
loggedIn : boolean=true;
loggedOut: boolean=false;

logInName : string="devi";

  constructor() { }

  ngOnInit(): void {
  }

}
