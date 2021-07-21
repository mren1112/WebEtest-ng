<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ApiFetchQrPaymentService } from 'src/app/services/ApiFetchQrpayment.service';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiFectSelectPayQrService } from 'src/app/services/ApiFecthSelectPayQr.service';
=======
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {  Router } from '@angular/router';
import { ApiFectSelectPayQrService } from 'src/app/services/ApiFecthSelectPayQr.service';
import { PublicDialogComponent } from '../publicdialog/dialog.component';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { GlobalUrlToRedirect,MessegeNoti } from '../../interfaces/GlobalUrlToRedirect';

>>>>>>> 762a820f (bk commit)

@Component({
  selector: 'app-listqrpayment',
  templateUrl: './listqrpayment.component.html',
  styleUrls: ['./listqrpayment.component.css'],
  providers: [DatePipe]
})
export class ListQrPaymentComponent implements OnInit {

<<<<<<< HEAD
=======
  private baseUrlRedirec = GlobalUrlToRedirect.BASE_REDIRECT_URL;
  private baseUrlQR = GlobalUrlToRedirect.BASE_QRPAYMENT_URL;
  private baseUrlQRTest = GlobalUrlToRedirect.BASE_QRPAYMENT_URL_TEST;
>>>>>>> 762a820f (bk commit)
  public us;
  public currentTime = new Date();
  public todoQrdatalist: any = [];
  // public us;
  public sem;
  public year;
  public telnum;
  public refkey;
  public total;
  public duedate;
  public datetime;
  public fullrefkey;

<<<<<<< HEAD
  public urfltest = 'https://devtest.ru.ac.th/ThaiQR/eTestQR?totalAmount=1&username=6299999991&tel=0812345678&duedate=200820&yearsem=631&refnum=000001';
=======
  ///public urfltest = 'https://devtest.ru.ac.th/ThaiQR/eTestQR?totalAmount=1&username=6299999991&tel=0812345678&duedate=200820&yearsem=631&refnum=000001';
>>>>>>> 762a820f (bk commit)
  public urlFecthqar;
  public todoCourse: any = [];
  public tmptodoCourse: any = [];
  public cntTodoCourse;
  public txtsem;
  public namethai;
<<<<<<< HEAD
=======
  qrdata = 'err';
>>>>>>> 762a820f (bk commit)

  public expText;
  //get Date
  curDate = new Date();
  public arrDateToStr: any[] = [];
<<<<<<< HEAD
  constructor(private httpclient: HttpClient,
    private apiFetchQrPaylist: ApiFetchQrPaymentService,
    private router: Router,
    private activerouter: ActivatedRoute,
    private apifecthSelecPayQr: ApiFectSelectPayQrService
  ) {

  }
  ngOnInit() {
    console.log('this.currentTime = ' + this.currentTime);
=======
  constructor(
    private router: Router,
    private apifecthSelecPayQr: ApiFectSelectPayQrService,
    private dialog:MatDialog,
    private http:HttpClient,
    private sanitizer: DomSanitizer
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
    //console.log('this.currentTime = ' + this.currentTime);
>>>>>>> 762a820f (bk commit)
    if (sessionStorage.getItem('stdcode') == null) {
      alert('please login again');
      this.backClicked();
    } else {
      this.us = sessionStorage.getItem('stdcode');
<<<<<<< HEAD
=======
      this.loading();

>>>>>>> 762a820f (bk commit)
      this.getQrDatalist();
    }
  }



  backClicked() {
    // this._location.back();
    sessionStorage.clear();
<<<<<<< HEAD
    window.location.href = 'https://www.ru.ac.th/th/';
  }




  getQrDatalist() {

    var getrefkey;
    // var subrefkey;
    if (sessionStorage.getItem("refkey") != null || sessionStorage.getItem("refkey") != "" || sessionStorage.getItem("subduedate") != "") {
      //getrefkey = sessionStorage.getItem("getrefkey");
      this.refkey = sessionStorage.getItem("refkey");
      this.duedate =sessionStorage.getItem("duedate");

      this.fullrefkey = sessionStorage.getItem("fullrefkey");
      this.datetime =sessionStorage.getItem("datetime");
   //   console.log('refkey = ' + this.refkey);
    } else {
      alert("Can't load Data please reload now!");
      this.router.navigate(['listqrpayment']);
    }


    // this.todoCourse = JSON.parse(sessionStorage.getItem('todoCourse'));
    //console.log('listqrpay = ' + JSON.stringify(this.todoCourse));


    this.sem = sessionStorage.getItem("sem");
    this.year = sessionStorage.getItem("year");
    this.us = sessionStorage.getItem("stdcode");
    this.telnum = sessionStorage.getItem("tel");
    this.namethai = sessionStorage.getItem("namethai");

    //this.arrDateToStr.push(this.curDate);
    //var tmpDateCurrent = moment(new Date(this.arrDateToStr.join())).format('DDMMYY');

   // this.duedate = tmpDateCurrent;
    console.log('sem = ' + this.sem);
    console.log('year = ' + this.year);
    console.log('us = ' + this.us);
    console.log('telnum = ' + this.telnum);
    console.log('duedate = ' + this.duedate);
    console.log('datetime = ' + this.datetime);
    console.log('fullrefkey = ' + this.fullrefkey);
    console.log('refkey = ' + this.refkey);
    console.log('total = ' + this.total);
=======
    window.location.href = this.baseUrlRedirec;
  }

  showSpinner = false;
  async loading() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 2000);

  }



 async getQrDatalist() {

    let getrefkey;
    let refkey = await sessionStorage.getItem("refkey");
    let subduedate = await sessionStorage.getItem("subduedate");

    // var subrefkey;
    if (refkey != null || refkey != "" || subduedate != "") {
      //getrefkey = sessionStorage.getItem("getrefkey");
      this.refkey = await sessionStorage.getItem("refkey");
      //this.duedate = await sessionStorage.getItem("duedate");

      this.fullrefkey = await sessionStorage.getItem("fullrefkey");
      //this.datetime = await sessionStorage.getItem("datetime");
   //   console.log('refkey = ' + this.refkey);
    } else {
      alert("Can't load Data please reload now!");
      await this.router.navigate(['listqrpayment']);
    }

    this.sem = await sessionStorage.getItem("sem");
    this.year = await sessionStorage.getItem("year");
    this.us = await sessionStorage.getItem("stdcode");
    this.telnum = await sessionStorage.getItem("tel");
    this.namethai = await sessionStorage.getItem("namethai");

>>>>>>> 762a820f (bk commit)

    if (this.sem == '3') {
      this.txtsem = 'ฤดูร้อน'
    } else {
      this.txtsem = this.sem;
    }

<<<<<<< HEAD

   /* if (this.telnum !== null && this.duedate !== null && this.year !== null && this.sem !== null && this.us !== null /* && this.refkey !== null) {
      var str = this.year.substring(2, 4);
      console.log('str = ' + str);
      this.urlFecthqar = 'https://devtest.ru.ac.th/ThaiQR/eTestQR?totalAmount=' + this.total + '&username=' + this.us
        + '&tel=' + this.telnum + '&duedate=' + this.duedate + '&yearsem=' + str + this.sem + '&refnum=' + this.refkey;
      console.log(this.urlFecthqar);
    } else {
      console.log('Values is null');
    }*/

    this.apifecthSelecPayQr.getJSON(this.us, this.sem, this.year, this.fullrefkey).subscribe((res) => {
=======
    let res = await this.apifecthSelecPayQr.getJSON(this.us, this.sem, this.year, this.fullrefkey).toPromise();
    if (res) {
>>>>>>> 762a820f (bk commit)
      this.tmptodoCourse = res.results;
      this.todoCourse = res.results;
      this.total = this.tmptodoCourse.total;

<<<<<<< HEAD
      console.log('listqrpay = ' + JSON.stringify(this.tmptodoCourse));
      var amount;
      this.tmptodoCourse.forEach(e => {
          amount = e.total;
          sessionStorage.setItem("total",amount);
          this.total = amount;
          this.expText = e.txtpaydate;
      });
      //this.total = sessionStorage.getItem("total");

      if (this.tmptodoCourse == "") {
        console.log(' this.err = ');
        alert("Can't load Data, please reload now!");
        this.router.navigate(['qrpagelist']);
      } else {
        if (this.telnum !== null && this.duedate !== null && this.year !== null && this.sem !== null && this.us !== null  && this.refkey !== null) {
          var str = this.year.substring(2, 4);
          console.log('str = ' + str);
          this.urlFecthqar = 'https://devtest.ru.ac.th/ThaiQR/eTestQR?totalAmount=' + this.total + '&username=' + this.us
            + '&tel=' + this.telnum + '&duedate=' + this.duedate + '&datetime=' + this.datetime + '&refnum=' + this.refkey;
          console.log(this.urlFecthqar);
        } else {
          console.log('Load datas is null');
        }


      }
    });



    /*this.apiFetchQrPaylist.getJSON().subscribe((data) => {
      this.todoQrdatalist = data.results;

    });*/

  }

  cleardata(key): void {
    console.log(key);
     if (key == 1) {
=======
      this.tmptodoCourse.forEach(e => {
          //sessionStorage.setItem("total",e.total);
          this.total = e.total;
          this.expText = e.txtpaydate;
          this.duedate = e.duedate;
          this.datetime = e.datetime;
      });


      this.openAlertDialog();


      if (this.tmptodoCourse == "") {
       // console.log(' this.err = ');
        alert("Can't load Data, please reload now!");
        this.router.navigate(['qrpagelist']);
      } else {
        const blob = new Blob([this.baseUrlQRTest], { type: 'application/octet-stream' });
        if (this.telnum !== null && this.duedate !== null && this.year !== null && this.sem !== null && this.us !== null  && this.refkey !== null) {
         // console.log('str = ' + str);
          this.urlFecthqar = (this.baseUrlQR + this.total + '&username=' + this.us
            + '&tel=' + this.telnum + '&duedate=' + this.duedate + '&datetime=' + this.datetime + '&refnum=' + this.refkey);//*/
          //console.log(this.urlFecthqar);

         /* let img ='https://static.remove.bg/remove-bg-web/2a274ebbb5879d870a69caae33d94388a88e0e35/assets/start_remove-79a4598a05a77ca999df1dcb434160994b6fde2c3e9101984fb1be0f16d0a74e.png'
          this.urlFecthqar = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${img}`);
         /* this.qrdata = 'https://devtest.ru.ac.th/ThaiQR/eTestQR?totalAmount=' + this.total + '&username=' + this.us
            + '&tel=' + this.telnum + '&duedate=' + this.duedate + '&datetime=' + this.datetime + '&refnum=' + this.refkey;*/
        } else {
          alert('ไม่สามารถสร้าง Qr code ชำระเงินได้');
          setTimeout(() => {
            this.cleardata(1);
          }, 800);
        }
    }
   }

//.--------------------- block ------------------
//this.imageURL =  this.sanitizer.bypassSecurityTrustHtml(this.URL);


//-----------------------------------------------


   }

   URL: string = `https://fireflysemantics.github.io/i/service-parts-help/electrocardiogram-36732.png`;
   image: Blob;
   imageURL: SafeUrl;
   loadImage(): Observable<Blob> {
    return this.http.get(this.URL, {
      responseType: "blob"
    });
  }



  cleardata(key): void {
>>>>>>> 762a820f (bk commit)
      sessionStorage.removeItem("todoCourse");
      sessionStorage.removeItem("repdate");
      sessionStorage.removeItem("todoSelectCourse");

      sessionStorage.removeItem("dataregister");
      sessionStorage.removeItem("Etsno");
      sessionStorage.removeItem("refkey");
<<<<<<< HEAD
=======
      sessionStorage.removeItem('subrefkey');
>>>>>>> 762a820f (bk commit)
      sessionStorage.removeItem("fullrefkey");
      sessionStorage.removeItem("duedate");
      sessionStorage.removeItem("datetime");
      sessionStorage.removeItem("total");
      sessionStorage.removeItem('subduedate');
<<<<<<< HEAD
      this.router.navigate(['/']);
    }
  }

  clearqrdata(key): void {
    console.log(key);
     if (key == 1) {
      sessionStorage.removeItem("todoCourse");
      sessionStorage.removeItem("repdate");

      sessionStorage.removeItem("dataregister");
      sessionStorage.removeItem("todoSelectCourse");
      sessionStorage.removeItem("Etsno");
      sessionStorage.removeItem("refkey");
      sessionStorage.removeItem("fullrefkey");
      sessionStorage.removeItem("duedate");
      sessionStorage.removeItem("datetime");
      sessionStorage.removeItem("total");
      sessionStorage.removeItem('subduedate');
      this.router.navigate(['qrpagelist']);
    }
  }

}
=======

      if (key ===1) {
        this.router.navigate(['/']);
      }else if (key ===2) {
        this.router.navigate(['qrpagelist']);
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
function requestOptions(url: any, requestOptions: any) {
  throw new Error('Function not implemented.');
}

>>>>>>> 762a820f (bk commit)
