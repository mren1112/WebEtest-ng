import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { Http, RequestOptions } from '@angular/http';
import { ApiGetPaymentService } from 'src/app/services/ApiGetPeyment.service';
import { PublicDialogComponent } from '../publicdialog/dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  /* usr = '629949991';
   tel = '0123456789';
   total = '1000';*/
  public us = '';
  public sem = '';
  public year = '';
  public telnum = '';
  public refkey = '';
  public total = '';
  public duedate = '';
  public datetime = '';
  public urfltest = 'https://devtest.ru.ac.th/ThaiQR/etestQRCODE?totalAmount=1&username=6299999991&tel=0812345678&duedate=2359311221&semyear=633';
  public urlFecthqar = '';
  public todoCourse: any = [];
  public tmptodoCourse: any = [];
  public dataregister: any = [];
  public cntTodoCourse;
  public txtsem = '';
  public namethai = '';
  public expText = '';
  public duetime = '2359';
  public fullrefkey = '';
  //get Date
  curDate = new Date();
  public arrDateToStr: any[] = [];
  public testregis: any[] = [];
  qrdata = 'err';
  url ='';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private apiGetPayment: ApiGetPaymentService,
    private dialog: MatDialog,
  ) { }

  async openAlertDialog() {
     this.dialog.open(PublicDialogComponent, {
      width: '500px',
      data: {
        header: 'ข้อความจากระบบ!',
        txt: 'กรุณาชำระเงินภายในวันที่: '+this.expText+' เวลา 21.30 น.',
        txt2: 'ท่านสามารถตรวจสอบผลการลงทะเบียนได้ที่เมนูใบเสร็จลงทะเบียน กรณีชำระเงินแล้วระบบไม่แสดงผลการชำระเงิน',
      },
      disableClose: true,
    });

     /*setTimeout(() => {
      this.showSpinner = false;
      this.router.navigate(['/']);
    }, 1200);//*/
    //this.router.navigate(['/confirm']);
  }

  ngOnInit() {
    if (sessionStorage.getItem('stdcode') == null) {
      alert('please login again');
      this.backClicked();
    } else {
      if (sessionStorage.getItem('reloadpayment') == null) {
       // location.reload();
       // sessionStorage.setItem('reloadpayment', 'Y');
      }


      this.chkTodoSelectCourse();
      console.log('not null qr');
    }
  }

  showSpinner = false;
  async loading() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);

  }



 async fetcthUrl() {

    this.fullrefkey = sessionStorage.getItem("fullrefkey");
    if (Object.keys(this.fullrefkey).length === 0) {
      location.reload();
    }
    this.sem = sessionStorage.getItem("sem");
    this.txtsem = sessionStorage.getItem("txtsem");
    this.year = sessionStorage.getItem("year");
    this.us = sessionStorage.getItem("stdcode");
    this.refkey = sessionStorage.getItem("refkey");
    this.telnum = sessionStorage.getItem("tel");
    //this.total = sessionStorage.getItem("total");
    this.namethai = sessionStorage.getItem("namethai");

    this.arrDateToStr.push(this.curDate);
    var tmpDateCurrent = moment(new Date(this.arrDateToStr.join())).format('YYMMDD');

    /*if (this.sem == '3') {
      this.txtsem = 'ฤดูร้อน';
    } else {
      this.txtsem = this.sem;
    }*/


    if (this.fullrefkey != null) {
      let res = await this.apiGetPayment.getJsonPayment(this.us,this.sem,this.year,this.fullrefkey).toPromise();
      this.dataregister = res;
      if (this.dataregister == null || Object.keys(this.dataregister).length == 0) {
        this.loading();
      }else{
        this.showSpinner = true;
        setTimeout(() => {
          this.showSpinner = false;
        }, 1500);
      }

      this.dataregister.forEach(e => {
        this.expText = e.expDate;
        this.total = e.total;
        this.duedate = e.duedate;
        this.datetime = e.datetime;
      });

      this.openAlertDialog();

      if (this.telnum !== null && this.duedate !== null && this.year !== null && this.sem !== null && this.us !== null && this.refkey !== null) {
       // var str = this.year.substring(2, 4);
       // console.log('str = ' + str);
          /*this.urlFecthqar = 'https://devtest.ru.ac.th/ThaiQR/eTestQR?totalAmount=' + this.total + '&username=' + this.us
            + '&tel=' + this.telnum + '&duedate=' + this.duedate + '&datetime=' + this.datetime + '&refnum=' + this.refkey;//*/
          //console.log(this.urlFecthqar);


          this.qrdata = 'https://devtest.ru.ac.th/ThaiQR/eTestQR?totalAmount=' + this.total + '&username=' + this.us
          + '&tel=' + this.telnum + '&duedate=' + this.duedate + '&datetime=' + this.datetime + '&refnum=' + this.refkey;
        //console.log(this.urlFecthqar);
      } else {
        //console.log('Values is null');
        alert('โหลดข้อมูลไม่สำเร็จ ไม่สามารถสร้าง Qr code ');
        this.showSpinner = true;
        setTimeout(() => {
          this.cleardata(1);
        }, 800);
      }
    }
  }

  backClicked() {
    // this._location.back();
    sessionStorage.clear();
    window.location.href = 'https://www.ru.ac.th/th/';
  }



  chkTodoSelectCourse() {


    this.todoCourse = JSON.parse(sessionStorage.getItem('todoSelectCourse'));
    this.cntTodoCourse = Object.keys(this.todoCourse).length;
    this.tmptodoCourse = JSON.parse(sessionStorage.getItem('todoSelectCourse'));
    console.log('tmptodoCourse = ' + JSON.stringify(this.tmptodoCourse));
    if (sessionStorage.getItem('todoSelectCourse') != null) {
      //alert('zxxxxxxxxxxxxx' + JSON.stringify(this.tmptodoCourse));
      this.fetcthUrl();

    }

  }

  cleardata(key): void {
    console.log(key);
    if (key == 1) {
      sessionStorage.removeItem("refkey");
      sessionStorage.removeItem("dataregister");
      sessionStorage.removeItem("reloadpayment");
      sessionStorage.removeItem("todoCourse");
      sessionStorage.removeItem("todoSelectCourse");
      sessionStorage.removeItem("Etsno");
      sessionStorage.removeItem("getrefkey");
      sessionStorage.removeItem("subrefkey");
      sessionStorage.removeItem("total");
      sessionStorage.removeItem("todoHis");
      sessionStorage.removeItem("fullrefkey");
      sessionStorage.removeItem("tmpdatetoStr");
      sessionStorage.removeItem("todoresults");
      this.router.navigate(['/']);
    }

  }

  private convertBase64ToBlob(Base64Image: any) {
    // SPLIT INTO TWO PARTS
    const parts = Base64Image.split(';base64,');
    // HOLD THE CONTENT TYPE
    const imageType = parts[0].split(':')[1];
    // DECODE BASE64 STRING
    const decodedData = window.atob(parts[1]);
    // CREATE UNIT8ARRAY OF SIZE SAME AS ROW DATA LENGTH
    const uInt8Array = new Uint8Array(decodedData.length);
    // INSERT ALL CHARACTER CODE INTO UINT8ARRAY
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }
    // RETURN BLOB IMAGE AFTER CONVERSION
    return new Blob([uInt8Array], { type: imageType });
  }

}
