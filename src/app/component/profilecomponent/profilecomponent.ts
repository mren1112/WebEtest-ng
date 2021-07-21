import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profilecomponent',
  templateUrl: './profilecomponent.html',
  //styleUrls: ['./profilecomponent.css']

})
export class ProfileComponent implements OnInit {
  public stdcode = "";
  public sem =  "";
  public year =  "";
  public  majorname = "";
  public namethai = "";
  public facname = "";
  public tel = "";
  constructor() {
    this.getProfile();
  }

  ngOnInit() {
   //   this.getProfile();
  }

  async getProfile() {
    this.stdcode = await sessionStorage.getItem("stdcode");
    this.sem = await sessionStorage.getItem("sem");
    this.year = await sessionStorage.getItem("year");
    this.majorname = await sessionStorage.getItem("majornamthai");
    this.namethai = await sessionStorage.getItem("namethai");
    this.facname = await sessionStorage.getItem("facName");
    this.tel = await sessionStorage.getItem("tel");
  }

}
