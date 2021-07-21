<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 762a820f (bk commit)


@Component({
  selector: 'app-profilecomponent',
  templateUrl: './profilecomponent.html',
  //styleUrls: ['./profilecomponent.css']

})
<<<<<<< HEAD
export class ProfileComponent{
  us = sessionStorage.getItem("stdcode");
  sem = sessionStorage.getItem("sem");
  year = sessionStorage.getItem("year");
  majorname = sessionStorage.getItem("majornamthai");
  namethai = sessionStorage.getItem("namethai");
  facname = sessionStorage.getItem("facName");
  tel = sessionStorage.getItem("tel");
  constructor(){

=======
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
>>>>>>> 762a820f (bk commit)
  }

}
