import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiFetchQrPaymentService } from 'src/app/services/ApiFetchQrpayment.service';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
<<<<<<< HEAD
import { ApiFectSelectPayQrService } from 'src/app/services/ApiFecthSelectPayQr.service';
=======
>>>>>>> 762a820f (bk commit)

@Component({
  selector: 'app-qrlist',
  templateUrl: './qrpagelist.component.html',
  styleUrls: ['./qrpagelist.component.css'],
  providers: [DatePipe]
})
export class QrpagelistCreateComponent implements OnInit {


<<<<<<< HEAD
  public us;
  public sem;
  public year;
  public telnum;
  public refkey;
  public total;
  public duedate;
  public duetime = "2359";
  public urfltest = 'https://devtest.ru.ac.th/ThaiQR/eTestQR?totalAmount=1&username=6299999991&tel=0812345678&duedate=200820&yearsem=631&refnum=000001';
  public urlFecthqar;
  public todoCourse: any = [];
  public tmptodoCourse: any = [];
  public cntTodoCourse;
  public txtsem;
  public namethai;
=======
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
>>>>>>> 762a820f (bk commit)

  public currentTime = new Date();
  public todoQrdatalist: any = [];
  //get Date
  curDate = new Date();
  public arrDateToStr: any[] = [];
  public chkTodoCourse = false;
  constructor(private apiFetchQrPaylist: ApiFetchQrPaymentService,
    private router: Router,
<<<<<<< HEAD
    private activerouter: ActivatedRoute,
    private apifecthSelecPayQr: ApiFectSelectPayQrService
=======
>>>>>>> 762a820f (bk commit)
  ) {

  }
  ngOnInit() {
    sessionStorage.removeItem('refkey');
<<<<<<< HEAD
    console.log(this.currentTime);
=======
    //console.log(this.currentTime);
>>>>>>> 762a820f (bk commit)
    // this.getQrDatalist();
    if (sessionStorage.getItem('stdcode') == null) {
      alert('please login again');
      this.backClicked();
    } else {
<<<<<<< HEAD

=======
>>>>>>> 762a820f (bk commit)
      this.getQrDatalist();
    }


  }

  backClicked() {
    // this._location.back();
    sessionStorage.clear();
    window.location.href = 'https://www.ru.ac.th/th/';
  }

<<<<<<< HEAD
  getQrDatalist() {
    this.sem = sessionStorage.getItem("sem");
    this.year = sessionStorage.getItem("year");
    this.us = sessionStorage.getItem("stdcode");
    this.telnum = sessionStorage.getItem("tel");
    //this.total = sessionStorage.getItem("total");
    //this.refkey = localStorage.getItem("Etsno");
    this.namethai = sessionStorage.getItem("namethai");

    this.arrDateToStr.push(this.curDate);
    var tmpDateCurrent = moment(new Date(this.arrDateToStr.join())).format('DDMMYY');

    this.duedate = tmpDateCurrent;
    console.log('sem = ' + this.sem);
    console.log('year = ' + this.year);
    console.log('us = ' + this.us);
    console.log('telnum = ' + this.telnum);
    //console.log('duedate = ' + this.duedate);
    // console.log('refkey = ' + this.refkey);
    console.log('total = ' + this.total);

    if (this.sem == '3') {
      this.txtsem = 'ฤดูร้อน'
    } else {
      this.txtsem = this.sem;
    }



    this.apiFetchQrPaylist.getJSON().subscribe((data) => {
      this.todoQrdatalist = data.results;
      console.log('data = ' + JSON.stringify(this.todoQrdatalist));
      if (this.todoQrdatalist == "") {

        this.chkTodoCourse = true;
      }

    });
    if (sessionStorage.getItem('reloadqrlist') == null) {
      window.location.reload();
      sessionStorage.setItem('reloadqrlist', 'Y')
    }
  }

  //get payment page from qr list
  //public tmptodoCourse: any = [];
  getQrcodefromlist(refkey, duedate, datetime, fullrefkey,repdate) {
    //console.log('refkey = ' + refkey);
    var subrefkey;
    var subduedate;
    if (fullrefkey != '' || fullrefkey != null) {
      //subrefkey = refkey.substring(15);
      //  subduedate = refkey.substring(5,15);
      sessionStorage.setItem("subrefkey", subrefkey);
      sessionStorage.setItem("repdate", repdate);
      sessionStorage.setItem("refkey", refkey);
      sessionStorage.setItem("duedate", duedate);
      sessionStorage.setItem("datetime", datetime);
      sessionStorage.setItem("fullrefkey", fullrefkey);
      //   console.log('subrefkey = ' + subrefkey);
      this.router.navigate(['listqrpayment']);
    } else {
      alert("Can't load Data please reload now!x");
=======
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
>>>>>>> 762a820f (bk commit)
      this.router.navigate(['qrpagelist']);
    }

  }
<<<<<<< HEAD
=======

>>>>>>> 762a820f (bk commit)
  backhome() {
    // this._location.back();
    sessionStorage.removeItem("reloadqrlist");
    this.router.navigate(['/']);
  }
<<<<<<< HEAD
  setArrStorage(refkey) {
    this.router.navigate(['payment']);
  }
  backbtn() {
    sessionStorage.removeItem("reloadqrlist");

    sessionStorage.removeItem("dataregister");
    sessionStorage.removeItem('refkey');
    sessionStorage.removeItem('duedate');
=======

  setArrStorage(refkey) {
    this.router.navigate(['payment']);
  }

  backbtn() {
    sessionStorage.removeItem("reloadqrlist");
    sessionStorage.removeItem("dataregister");
    sessionStorage.removeItem('refkey');
    sessionStorage.removeItem('fullrefkey');
    sessionStorage.removeItem('datetime');
>>>>>>> 762a820f (bk commit)
    sessionStorage.removeItem('duedate');
    this.router.navigate(['/']);
  }

}
