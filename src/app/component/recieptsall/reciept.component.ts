import { Component, OnInit } from '@angular/core';
import { ApiFetchRecieptService } from 'src/app/services/ApiFetchReciept.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiRecieptMsgService } from 'src/app/services/ApiRecieptMsg.service';




@Component({
  selector: 'app-recieptall',
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.css']

})
export class RecieptAllCreateComponent implements OnInit {

  public stdcode;
  public currentTime = new Date();
  public todoQrdatalist: any = [];
  // public us;
  public sem;
  public year;
  public telnum;
  public refkey;
  public total;
  public duedate;
  public duetime = "2359";
  public urlFecthqar;
  public todolist: any = [];
  public todomsg: any = [];
  public tmptodoCourse: any = [];
  public cntTodoCourse;
  public txtsem;
  public namethai;
  public msg;
  public chkTodoCourse = false;
  //get Date
  curDate = new Date();
  public arrDateToStr: any[] = [];

  constructor(private ApiFetchReciept: ApiFetchRecieptService,
    private ApiRecieptMsg: ApiRecieptMsgService,
    private router: Router,
    private activerouter: ActivatedRoute,
    private http: HttpClient

  ) {

  }
  ngOnInit() {
    this.getProfileData();
  }

  async getProfileData() {

    this.stdcode = await sessionStorage.getItem('stdcode');
    this.sem = await sessionStorage.getItem("sem");
    this.year = await sessionStorage.getItem("year");
    this.telnum = await sessionStorage.getItem("tel");
    this.namethai = await sessionStorage.getItem("namethai");

    if (!this.stdcode && this.sem && this.year && this.telnum && this.namethai) {
      alert('please login again');
      this.backClicked();
    } else {
      await this.loading();
    }
    this.getRepList();
  }

  async getRepList() {
    /* this.ApiFetchReciept.getJSON().subscribe((data) => {
       this.todolist = data.results;
       let cnt = Object.keys(this.todolist).length;
       //alert(cnt);
       if (cnt === 0) {
         this.chkTodoCourse = true;
       } else {
         this.chkTodoCourse = false;
       }
     });//*/

    let data = await this.ApiFetchReciept.getJsonRegisSlipt(this.stdcode,this.sem,this.year).toPromise();
    if (data) {
      this.todolist = data.results;
      let cnt = Object.keys(this.todolist).length;
     // alert(cnt);
      if (cnt === 0) {
        this.chkTodoCourse = true;
      } else {
        this.chkTodoCourse = false;
      }
    } else {
      this.loading();
    }

    //get msg
    let res = await this.ApiRecieptMsg.getJSON().toPromise();
    this.msg = res.msg;
    console.log(JSON.stringify(this.msg))
  }


  async getSlip(refkey) {
    if (refkey) {
      window.open('http://sevkn.ru.ac.th:8888/etestgbackend/GetSlipt?stdcode=' + btoa(this.stdcode) + '&refkey='
      + btoa(refkey) + '&sem=' + btoa(this.sem) + '&year=' + btoa(this.year), "_blank");
    } else {
      alert("Can't load Data please reload now!");
      this.router.navigate(['recieptall']);
    }
  }

  backClicked() {
    sessionStorage.removeItem("stdcode");
    sessionStorage.clear();
    window.location.href = 'https://www.ru.ac.th/th/';
  }

  backhome() {
    // this._location.back();
    this.router.navigate(['/']);
  }


  showSpinner: boolean = false;
  async loading() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 1500);
  }
}
