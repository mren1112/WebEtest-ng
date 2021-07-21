<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFectSelectPayQrService } from 'src/app/services/ApiFecthSelectPayQr.service';
import { ApiFetchPaymentService } from 'src/app/services/ApiFetchPayment.service';
import { Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';
import { trigger } from '@angular/animations';
=======
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
>>>>>>> 762a820f (bk commit)

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  /* usr = '629949991';
   tel = '0123456789';
   total = '1000';*/
<<<<<<< HEAD
  public us;
  public sem;
  public year;
  public telnum;
  public refkey = '';
  public total;
  public duedate;
  public datetime;
  public urfltest = 'https://devtest.ru.ac.th/ThaiQR/eTestQR?totalAmount=1&username=6299999991&tel=0812345678&duedate=200820&yearsem=631&refnum=000001';
  public urlFecthqar;
=======
  public us = '';
  public sem = '';
  public year = '';
  public telnum = '';
  public refkey = '';
  public total = '';
  public duedate = '';
  public datetime = '';
  public urfltest = 'https://devtest.ru.ac.th/ThaiQR/eTestQR?totalAmount=1&username=6299999991&tel=0812345678&duedate=200820&yearsem=631&refnum=000001';
  public urlFecthqar = '';
>>>>>>> 762a820f (bk commit)
  public todoCourse: any = [];
  public tmptodoCourse: any = [];
  public dataregister: any = [];
  public cntTodoCourse;
<<<<<<< HEAD
  public txtsem;
  public namethai;
  public expText;
  public duetime = '2359';
  public fullrefkey;
  //get Date
  curDate = new Date();
  public arrDateToStr: any[] = [];
  public testregis;

  constructor(private router: Router, private route: ActivatedRoute, private httpClient: HttpClient,
    private apifecthSelecPayQr: ApiFectSelectPayQrService,
    private apiFetchPayment: ApiFetchPaymentService,
    private http: Http
  ) {

=======
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
>>>>>>> 762a820f (bk commit)
  }

  ngOnInit() {
    if (sessionStorage.getItem('stdcode') == null) {
      alert('please login again');
      this.backClicked();
    } else {
      if (sessionStorage.getItem('reloadpayment') == null) {
<<<<<<< HEAD
        location.reload();
        sessionStorage.setItem('reloadpayment', 'Y');
      }
=======
       // location.reload();
       // sessionStorage.setItem('reloadpayment', 'Y');
      }


>>>>>>> 762a820f (bk commit)
      this.chkTodoSelectCourse();
      console.log('not null qr');
    }
  }

  showSpinner = false;
<<<<<<< HEAD
  loading() {
    // alert('xx');

    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 3000);
=======
  async loading() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);
>>>>>>> 762a820f (bk commit)

  }



<<<<<<< HEAD
  fetcthUrl() {//location.reload();




    // sessionStorage.getItem('reload');
    if (sessionStorage.getItem('reloadpayment') == null) {
      // window.location.reload();
      sessionStorage.setItem('reloadpayment', 'Y');
    }
=======
 async fetcthUrl() {
>>>>>>> 762a820f (bk commit)

    this.fullrefkey = sessionStorage.getItem("fullrefkey");
    if (Object.keys(this.fullrefkey).length === 0) {
      location.reload();
    }
    this.sem = sessionStorage.getItem("sem");
<<<<<<< HEAD
=======
    this.txtsem = sessionStorage.getItem("txtsem");
>>>>>>> 762a820f (bk commit)
    this.year = sessionStorage.getItem("year");
    this.us = sessionStorage.getItem("stdcode");
    this.refkey = sessionStorage.getItem("refkey");
    this.telnum = sessionStorage.getItem("tel");
<<<<<<< HEAD
    this.total = sessionStorage.getItem("total");
=======
    //this.total = sessionStorage.getItem("total");
>>>>>>> 762a820f (bk commit)
    this.namethai = sessionStorage.getItem("namethai");

    this.arrDateToStr.push(this.curDate);
    var tmpDateCurrent = moment(new Date(this.arrDateToStr.join())).format('YYMMDD');
<<<<<<< HEAD
    //var timmtmp  = moment(new Date(this.arrDateToStr.join())).format('Y');

    this.duedate = tmpDateCurrent;
    console.log('sem = ' + this.sem);
    console.log('year = ' + this.year);
    console.log('us = ' + this.us);
    console.log('telnum = ' + this.telnum);
    console.log('duedate = ' + this.duedate);
    console.log('total = ' + this.total);
    console.log('refkey = ' + this.refkey);
    console.log('fullrefkey = ' + this.fullrefkey);

    if (this.sem == '3') {
      this.txtsem = 'ฤดูร้อน';
    } else {
      this.txtsem = this.sem;
    }
    this.httpClient.get('http://sevkn.ru.ac.th//etest/getPayment.jsp?STD_CODE='+this.us+'&sem='+this.sem+'&year='+this.year+'&refkey='+this.fullrefkey).subscribe((res)=> {
        this.testregis =res;
       // alert("dataregister", this.testregis);
      });

    if (this.fullrefkey != null) {


      //   this.http.get('http://sevkn.ru.ac.th//etest/getPayment.jsp?STD_CODE='+this.us+'&sem='+this.sem+'&year='+this.year+'&refkey='+this.fullrefkey).subscribe((res) => {
      this.apiFetchPayment.getJSON(this.us, this.sem, this.year, this.fullrefkey).subscribe((res) => {
        this.dataregister = res;
        // this.total = this.tmptodoCourse.total;
        // sessionStorage.setItem("dataregister", this.dataregister);
        if (this.dataregister == null || Object.keys(this.dataregister).length == 0) {
          this.loading();
        }

        console.log('temA = ' + JSON.stringify(this.dataregister));

        this.dataregister.forEach(e => {
          this.expText = e.expDate;
        });
      });
    }


    if (this.telnum !== null && this.duedate !== null && this.year !== null && this.sem !== null && this.us !== null /* && this.refkey !== null*/) {
      var str = this.year.substring(2, 4);
      console.log('str = ' + str);
      this.urlFecthqar = 'https://devtest.ru.ac.th/ThaiQR/eTestQR?totalAmount=' + this.total + '&username=' + this.us
        + '&tel=' + this.telnum + '&duedate=' + this.duedate + '&datetime=' + tmpDateCurrent + this.duetime + '&refnum=' + this.refkey;
      //console.log(this.urlFecthqar);
    } else {
      console.log('Values is null');
    }


    /* this.httpClient.get('http://sevkn.ru.ac.th//etest/ADManage/apinessy/etest/getDateSection.jsp?STD_CODE=' +
       this.us + '&sem=' + this.sem + '&year=' + this.year + '&dateselect=' + tmpdatetoStr + '&courseno=' + courseno + '&tmpdateselect=' + tmpdatetoStr2)
       .subscribe((res) => {
       });*/
=======

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
>>>>>>> 762a820f (bk commit)
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
<<<<<<< HEAD
      sessionStorage.removeItem("todoHis");
=======
>>>>>>> 762a820f (bk commit)
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
<<<<<<< HEAD
=======
      sessionStorage.removeItem("todoresults");
>>>>>>> 762a820f (bk commit)
      this.router.navigate(['/']);
    }

  }
<<<<<<< HEAD
=======

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

>>>>>>> 762a820f (bk commit)
}
