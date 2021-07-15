import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent  {

  currentname = "";
  isShow = true
  getVal(Val){
      this.currentname=Val;
      this.isShow=false;

  }

  constructor(private http:HttpClient){}


}
