import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiFetchQrPaymentService } from 'src/app/services/ApiFetchQrpayment.service';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-qrlist',
  templateUrl: './qrpagelist.component.html',
  styleUrls: ['./qrpagelist.component.css'],
  providers: [DatePipe]
})
export class QrpagelistCreateComponent implements OnInit {


  public stdcode ='';
  public sem ='';
  public year ='';
  public telnum ='';
  public refkey ='';
  public total ='';
  public duedate ='';
  public duetime = "2359";
  public urfltest = 'https://devtest.ru.ac.th/ThaiQR/eTestQR?totalAmount=1&username=6299999991&tel=0812345678&duedate=200820&yearsem=631&refnum=000001';
  public urlFecthqar ='';
  public todoCourse: any = [];
  public tmptodoCourse: any = [];
  public cntTodoCourse;
  public txtsem ='';
  public namethai ='';

  public currentTime = new Date();
  public todoQrdatalist: any = [];
  //get Date
  curDate = new Date();
  public arrDateToStr: any[] = [];
  public chkTodoCourse = false;
  constructor(private apiFetchQrPaylist: ApiFetchQrPaymentService,
    private router: Router,
  ) {

  }
  ngOnInit() {
    sessionStorage.removeItem('refkey');
    //console.log(this.currentTime);
    // this.getQrDatalist();
    if (sessionStorage.getItem('stdcode') == null) {
      alert('please login again');
      this.backClicked();
    } else {
      this.getQrDatalist();
    }


  }

  backClicked() {
    // this._location.back();
    sessionStorage.clear();
    window.location.href = 'https://www.ru.ac.th/th/';
  }

 async getQrDatalist() {
    this.sem = await sessionStorage.getItem("sem");
    this.txtsem = await sessionStorage.getItem("txtsem");
    this.year = await sessionStorage.getItem("year");
    this.stdcode = await sessionStorage.getItem("stdcode");
    this.telnum = await sessionStorage.getItem("tel");
    this.namethai = await sessionStorage.getItem("namethai");
    this.arrDateToStr.push(this.curDate);
    var tmpDateCurrent = moment(new Date(this.arrDateToStr.join())).format('DDMMYY');
    this.duedate = tmpDateCurrent;

    let res = await this.apiFetchQrPaylist.getJsonQrData(this.stdcode,this.sem,this.year).toPromise();
    this.todoQrdatalist = res.results;
    if (this.todoQrdatalist == "") {
      this.chkTodoCourse = true;
    }

  }


  getQrcodefromlist(refkey:string, duedate:string, datetime:string, fullrefkey:string,repdate:string) {
    //console.log('refkey = ' + refkey);
    if (fullrefkey != '' || fullrefkey != null) {
     // sessionStorage.setItem("subrefkey", subrefkey);
      sessionStorage.setItem("repdate", repdate);
      sessionStorage.setItem("refkey", refkey);
      //sessionStorage.setItem("duedate", duedate);
      //sessionStorage.setItem("datetime", datetime);
      sessionStorage.setItem("fullrefkey", fullrefkey);
      this.router.navigate(['listqrpayment']);
    } else {
      alert("Can't load Data please reload now!");
      this.router.navigate(['qrpagelist']);
    }

  }

  backhome() {
    // this._location.back();
    sessionStorage.removeItem("reloadqrlist");
    this.router.navigate(['/']);
  }

  setArrStorage(refkey) {
    this.router.navigate(['payment']);
  }

  backbtn() {
    sessionStorage.removeItem("reloadqrlist");
    sessionStorage.removeItem("dataregister");
    sessionStorage.removeItem('refkey');
    sessionStorage.removeItem('fullrefkey');
    sessionStorage.removeItem('datetime');
    sessionStorage.removeItem('duedate');
    this.router.navigate(['/']);
  }

}
