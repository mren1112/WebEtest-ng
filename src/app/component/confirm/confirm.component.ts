<<<<<<< HEAD
import { Component, OnInit,inject,Output,EventEmitter,TemplateRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { element } from 'protractor';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn,
} from '@angular/forms';
import * as moment from 'moment';
import { ApiConfirmService } from '../../services/ApiConfirm.service';
import { Http } from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
=======
import {
  Component,
  OnInit,
  inject,
  Output,
  EventEmitter,
  TemplateRef,
} from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import * as moment from 'moment';
import { ApiConfirmService } from '../../services/ApiConfirm.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PublicDialogComponent } from '../publicdialog/dialog.component';
>>>>>>> 762a820f (bk commit)

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css'],
})
<<<<<<< HEAD



=======
>>>>>>> 762a820f (bk commit)
export class ConfirmComponent implements OnInit {
  coursetest = [
    { courseno: 'COS2101', credit: 3, status: false },
    { courseno: 'COS2102', credit: 3, status: false },
  ];
  modalRef: BsModalRef;
  message: string;
  //todotest: any  = localStorage.getItem("todo");
  public cntTodoCourse;

  public perCourse = 200;
<<<<<<< HEAD
  public chkDupDateAndSec: boolean =false;
  public chkDupButton: boolean =true;

  //-----------------------------
=======
  public chkDupDateAndSec: boolean = false;
  public chkDupButton: boolean = true;

  //-----------------------------
  public todoregist: any = [];
>>>>>>> 762a820f (bk commit)
  public todoCourse: any = [];
  public tmptodoCourse: any = [];
  public tmpCourse: any = [];
  public sumCredit: number;
  public iCourse: any = [];
  public iCredit: any = [];
  public iFeelab: any = [];
  public iCourclass: any = [];
  public iSection: any = [];
  public cntCourseNo;
  public iExamdate: any = [];
  public sumMoney;
  public subyear;
  public year;
  public semester;
  public facno;
<<<<<<< HEAD
=======
  public txtsem = sessionStorage.getItem('txtsem');
>>>>>>> 762a820f (bk commit)

  public todocredit: any = [];
  public todo: any = [];
  public aCredit;
  public aCreditCost;
  public aMa;
  public aMaCost;
  public aStastd;
  public aStastdCost;
  public aNews;
  public aNewsCost;
  public aLab;
  public aLabCost;
  public aCommu;
  public aCommuCost;
  public stdstatus;
  public totalCredit;
  public fac;
  public majorno;
  public total;
  public name;
  public grad;
  public us;
  public feeTemp;
  public feeNo;
  public adddroptype;
  public sumCreditTodo;
  public sumCreditTmp;
  public isenabled: boolean = false;
  public alert = '';
  public stdcodeEnc;
  public tel;
  public stdyear;
  public creditMax;
  public creditMin;
  public creditMaxEnd;
  public sta = '';
  public expText;
  //----------------------------
<<<<<<< HEAD
 //get Date
 curDate = (new Date());
 public arrDateToStr: any[] = [];
=======
  //get Date
  curDate = new Date();
  public arrDateToStr: any[] = [];
  public msgmodal = '';
  public txtmsg ='';
>>>>>>> 762a820f (bk commit)

  constructor(
    private httpClient: HttpClient,
    private confirmservice: ApiConfirmService,
    public dialog: MatDialog,
    private modalService: BsModalService,
<<<<<<< HEAD
    private router: Router, private route: ActivatedRoute,
   ) {


  }


  ngOnInit() {


=======
    private router: Router,
    private route: ActivatedRoute
  ) {}

  async openAlertDialogRegisNotSuccess() {
    await this.dialog.open(PublicDialogComponent, {
      width: '500px',
      data: {
        header: 'ข้อความจากระบบ!',
        txt: this.txtmsg,// 'ท่านไม่มีวิชาที่สามารถลงทะเบียนสอบได้',
      },
      disableClose: true,
    });
    await setTimeout(() => {
      this.showSpinner = false;
      this.router.navigate(['/']);
    }, 3000);
    //this.router.navigate(['/confirm']);
  }

  ngOnInit() {
>>>>>>> 762a820f (bk commit)
    if (sessionStorage.getItem('stdcode') == null) {
      alert('please login again');
      this.backClicked();
    } else {
<<<<<<< HEAD
    this.loading();

    this.chkTodoSelectCourse();
    }

    //this.chbkconfirm();

=======
      this.loading();

      this.chkTodoSelectCourse();
    }

    //this.chbkconfirm();
>>>>>>> 762a820f (bk commit)
  }

  showSpinner = false;
  loading() {
<<<<<<< HEAD
    if (this.todoCourse == "" || this.todoCourse == null  || this.todoCourse == undefined) {
     // window.location.reload();
      this.showSpinner =true;
          setTimeout(() => {
              this.showSpinner = false;
          }, 4000);
=======
    if (
      this.todoCourse == '' ||
      this.todoCourse == null ||
      this.todoCourse == undefined
    ) {
      // window.location.reload();
      this.showSpinner = true;
      setTimeout(() => {
        this.showSpinner = false;
      }, 2000);
>>>>>>> 762a820f (bk commit)
    }
  }

  backClicked() {
    // this._location.back();
    sessionStorage.clear();
<<<<<<< HEAD
    window.location.href = 'https://www.ru.ac.th/th/';
   }

  chkTodoSelectCourse() {

    if (sessionStorage.getItem('todoSelectCourse') == null) {
      alert('ทำรายการไม่สำเร็จ กรุณาทำรายการใหม่')
      this.router.navigate(['/']);

    } else {
    this.grad = sessionStorage.getItem('neargrad');
    this.us = sessionStorage.getItem('stdcode');
    this.semester = sessionStorage.getItem('sem');
    this.year = sessionStorage.getItem('year');
    this.facno = sessionStorage.getItem('facno');
    this.grad = sessionStorage.getItem('grad');
    this.todoCourse = JSON.parse(sessionStorage.getItem('todoSelectCourse'));
    this.cntTodoCourse = Object.keys(this.todoCourse).length;
    this.tmptodoCourse = JSON.parse(sessionStorage.getItem('todoSelectCourse'));

    var tmpA = this.tmptodoCourse;
    tmpA.filter((arr) => {
=======
    window.location.href = 'https://beta-e-service.ru.ac.th/';
  }

  async chkTodoSelectCourse() {
    let temp = await sessionStorage.getItem('todoSelectCourse');
    if (temp == null) {
      alert('ทำรายการไม่สำเร็จ กรุณาทำรายการใหม่');
      this.router.navigate(['/']);
    } else {
      this.grad = await sessionStorage.getItem('neargrad');
      this.us = await sessionStorage.getItem('stdcode');
      this.semester = await sessionStorage.getItem('sem');
      this.year = await sessionStorage.getItem('year');
      this.facno = await sessionStorage.getItem('facno');
      this.grad = await sessionStorage.getItem('grad');
      this.todoCourse = await JSON.parse(
        sessionStorage.getItem('todoSelectCourse')
      );
      this.cntTodoCourse = await Object.keys(this.todoCourse).length;
      this.tmptodoCourse = await JSON.parse(sessionStorage.getItem('todoSelectCourse')
      );

      var tmpA = await this.tmptodoCourse;
      tmpA.filter((arr) => {
>>>>>>> 762a820f (bk commit)
        if (arr.section == '1') {
          arr.sectime = '9:00 - 11:30';
        } else if (arr.section == '2') {
          arr.sectime = '12:00 - 14:30'; //alert("6666");
        } else if (arr.section == '3') {
          arr.sectime = '15:00-17:30';
        } else if (arr.section == '4') {
          arr.sectime = '18:00-20:30';
        }
<<<<<<< HEAD
        console.log('sectime = ' + arr.sectime);
               // arr.sectime = sectime;
  });
   sessionStorage.setItem('todoSelectCourse', JSON.stringify(tmpA));

    var chkExamdate : any[];
    var chkSec : any[];
    var cntSame =0;

    for (let i = 0; i < tmpA.length; i++) {
      chkExamdate = tmpA[i].examdate;
      chkSec = tmpA[i].section;
      cntSame++;
    //  console.log('cntSame = ' + cntSame);
      console.log('chkExamdate = ' + chkExamdate);
      for (let j = 0; j < i; j++) {
        console.log('chkExamdate = ' + chkExamdate);
        if (chkExamdate == tmpA[j].examdate && chkSec == tmpA[j].section) {
=======
        //console.log('sectime = ' + arr.sectime);
        // arr.sectime = sectime;
      });
      sessionStorage.setItem('todoSelectCourse', JSON.stringify(tmpA));

      let chkExamdate: any[],
        chkSec: any[],
        cntSame = 0;

      for (let i = 0; i < tmpA.length; i++) {
        chkExamdate = tmpA[i].examdate;
        chkSec = tmpA[i].section;
        cntSame++;
        for (let j = 0; j < i; j++) {
          // console.log('chkExamdate = ' + chkExamdate);
          if (chkExamdate == tmpA[j].examdate && chkSec == tmpA[j].section) {
>>>>>>> 762a820f (bk commit)
            this.chkDupDateAndSec = true;
            this.chkDupButton = false;
            this.isenabled = true;
            alert('ท่านเลือกวันที่มีคาบสอบตรงกัน กรุณาทำการเลือกใหม่');
<<<<<<< HEAD
        }else {
          this.chkDupDateAndSec = false;
          this.chkDupButton = true;
          this.isenabled = false;
        }
      }
    }

    console.log('tmptodoCourse = ' + JSON.stringify(this.tmptodoCourse));
    this.total = Number(this.cntTodoCourse) * this.perCourse;
    if (this.total != 0) {
      sessionStorage.setItem('total', this.total);
    }

    if (this.tmptodoCourse != null || this.tmptodoCourse != "") {
        this.checkconfirmevent();
    } else {
      alert('Please Select courses again');
      this.router.navigate(['payment']);
    }
   }

  }

  //isenabled = true;
  chekconfirm() {
   // alert('55555')
    var cntchk;
    var chksection;
    var tmpSection: any[] = [];
    var chkarrSection= [];
    for (let i = 0; i < this.tmptodoCourse.length; i++) {
      if (this.todoCourse[i].courseno != null) {
        this.httpClient.get('http://sevkn.ru.ac.th//etest/chkDateSection.jsp?STD_CODE=' + this.us + '&sem=' + this.semester +
              '&year=' + this.year + '&dateselect=' + this.tmptodoCourse[i].examdate + '&period=' +
              this.tmptodoCourse[i].section).subscribe((res) => {
            chksection = res;
            tmpSection[i] = chksection.result;
            chkarrSection.push(tmpSection[i]) ;
            console.log('chkarrSection = ' + JSON.stringify(chkarrSection));

            if (tmpSection[i] == 0) {
              this.isenabled = true;
              cntchk+1;
              this.tmptodoCourse[i].tmpSection = '!คาบสอบที่เลือกเต็ม';
            } else {
             // this.confirm();
              //this.modalRef.hide();
            }
            // tmptodoCourse[i].push({tmpSection: chksection.result})
            // this.tmptodoCourse.filter((arr) => {

            //  });

            if (this.tmptodoCourse[i].tmpSection == 0) {
            }
           // console.log('tmpSection = ' + JSON.stringify(this.tmptodoCourse));
          });
      }
    }

        this.confirm();


    this.modalRef.hide();
  }

  confirm() {
    // load data to save.
    var tempA = JSON.parse(sessionStorage.getItem('todoSelectCourse'));

    if (tempA == null) {
          this.isenabled = false;
          this.loading();
=======
          } else {
            this.chkDupDateAndSec = false;
            this.chkDupButton = true;
            this.isenabled = false;
          }
        }
      }

      //  console.log('tmptodoCourse = ' + JSON.stringify(this.tmptodoCourse));
      this.total = Number(this.cntTodoCourse) * this.perCourse;
      if (this.total != 0) {
        sessionStorage.setItem('total', this.total);
      }

      if (this.tmptodoCourse != null || this.tmptodoCourse != '') {
        // this.testCheckconfirmevent()
        this.checkconfirmevent();
      } else {
        alert('Please Select courses again');
        this.router.navigate(['payment']);
      }
    }
  }

  //isenabled = true;
  async chekconfirm() {
    await this.checkconfirmevent();
    await this.confirm();
    await this.modalRef.hide();
  }

  async confirm() {
    // load data to save.
    let tempA = await JSON.parse(sessionStorage.getItem('todoSelectCourse'));

    if (tempA == null) {
      this.isenabled = false;
      this.loading();
>>>>>>> 762a820f (bk commit)
    } else {
      this.isenabled = true;
    }
    //console.log('tempA confirm = ' + JSON.stringify(tempA));
    this.sumCredit = 0;
<<<<<<< HEAD
    var x:any = [];
    this.cntCourseNo = Object.keys(tempA).length;
    for (var i = 0; i < tempA.length; i++) {
=======
    let x: any = [];
    this.cntCourseNo = Object.keys(tempA).length;
    for (let i = 0; i < tempA.length; i++) {
>>>>>>> 762a820f (bk commit)
      this.sumCredit = this.sumCredit + parseInt(tempA[i].credit);
      this.iCredit.push(tempA[i].credit);
      this.iCourse.push(tempA[i].courseno);
      this.iExamdate.push(tempA[i].examdate);
      this.iSection.push(tempA[i].section);
<<<<<<< HEAD
     // x.push(tempA[i].section);
    }//console.log('this.iSection confirm = ' + JSON.stringify(x));

    this.arrDateToStr.push(this.curDate);
    var tmpDateCurrent = moment(new Date(this.arrDateToStr.join())).format('DDMMYY');

    this.sta = sessionStorage.getItem("sta");
    console.log('this.iSection confirm = ' + JSON.stringify(this.iCourse));
   // if (this.sta != "1" ) {
        this.confirmservice
        .doConfirm(
          this.us,
          this.year,
          this.semester,
          this.cntCourseNo,
          this.grad,
          this.total,
          this.facno,
          this.iExamdate,
          this.iSection,
          this.iCourse,
          this.iCredit,
          tmpDateCurrent
        )
          .then((data: any) => {});

            this.iExamdate = [];
            this.iSection = [];
            this.iCourse = [];
            this.iCredit = [];

            //this.iFeelab= [];

            this.iCourclass= [];
            //his.aLabCost= [];

   /*   } else {
        console.log("err save = ");
      }*/
    this.modalRef.hide();
    this.showSpinner =true;
          setTimeout(() => {
              this.showSpinner = false;
          }, 3000);
    this.router.navigate(['qrpagelist']);

    //this.router.navigate(['registstatus']);

  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
=======
      // x.push(tempA[i].section);
    } //console.log('this.iSection confirm = ' + JSON.stringify(x));

    this.arrDateToStr.push(this.curDate);
    let tmpDateCurrent = moment(new Date(this.arrDateToStr.join())).format(
      'DDMMYY'
    );

    this.sta = await sessionStorage.getItem('sta');
    //  console.log('this.iSection confirm = ' + JSON.stringify(this.iCourse));
    // if (this.sta != "1" ) {
    this.confirmservice
      .doConfirm(
        this.us,
        this.year,
        this.semester,
        this.cntCourseNo,
        this.grad,
        this.total,
        this.facno,
        this.iExamdate,
        this.iSection,
        this.iCourse,
        this.iCredit,
        tmpDateCurrent
      )
      .then((data: any) => {
         console.log('save --- '+JSON.stringify(data));
        if (Number(data.bookstatus) == 1) {
          sessionStorage.setItem('save', 'Y');
          sessionStorage.setItem('todoresults', JSON.stringify(data));
          sessionStorage.setItem('refkey', data.refkey);
          sessionStorage.setItem('fullrefkey', data.fullrefkey);
          this.modalRef.hide();
          this.showSpinner = true;
          setTimeout(() => {
            this.showSpinner = false;
            //this.router.navigate(['qrpagelist']);
           // this.router.navigate(['waiting']);
          }, 1000);
        } else {
          sessionStorage.setItem('save', 'N');
          this.txtmsg = data.msg;

         // this.openAlertDialogRegisNotSuccess();
          //alert('Register Not seccess!');
        }
      });

    this.iExamdate = [];
    this.iSection = [];
    this.iCourse = [];
    this.iCredit = [];
    this.iCourclass = [];

    this.modalRef.hide();
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      //this.router.navigate(['qrpagelist']);
      //this.router.navigate(['waiting']);
    }, 1000);

    //this.router.navigate(['registstatus']);
  }

  openModalBackHome(template: TemplateRef<any>) {
    this.msgmodal = 'ยกเลิกการลงทะเบียน!';
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
  }

  openModal(template: TemplateRef<any>) {
    this.msgmodal = 'Do you want to confirm?';
    this.modalRef = this.modalService.show(template, { class: 'modal-md' });
>>>>>>> 762a820f (bk commit)
  }

  btnconfirm(): void {
    this.message = 'Confirmed!';
    this.chekconfirm();
<<<<<<< HEAD

=======
>>>>>>> 762a820f (bk commit)
  }

  btndecline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

<<<<<<< HEAD
  checkconfirmevent(){

    var chksection;
    var tmpSection: any[] = [];
    for (let i = 0; i < this.tmptodoCourse.length; i++) {
      if (this.todoCourse[i].courseno != null) {
        this.httpClient.get('http://sevkn.ru.ac.th//etest/chkDateSection.jsp?STD_CODE=' + this.us + '&sem=' + this.semester +
              '&year=' + this.year + '&dateselect=' + this.tmptodoCourse[i].examdate + '&period=' +
              this.tmptodoCourse[i].section).subscribe((res) => {
            chksection = res;
            tmpSection[i] = chksection.result;
            console.log('checkbuttonconfirmevent ');

            if (tmpSection[i] == 0) {
              this.isenabled = true;
              this.tmptodoCourse[i].tmpSection = '!คาบสอบที่เลือกเต็ม';
            }
          });
      }
    }

  }

  chkOldRegisCourse(tempA: any) {
    console.log('tempA check = ' + JSON.stringify(tempA));
    var tempTodoHis = JSON.parse(sessionStorage.getItem('todoHis'));
    var iExamdate: [];
    var iExamDateHis: [];


=======
  btndhome(): void {
    sessionStorage.removeItem('todoSelectCourse');
    sessionStorage.removeItem('todoHis');
    sessionStorage.removeItem('tmpdatetoStr');
    sessionStorage.removeItem('total');
    this.modalRef.hide();
    this.router.navigate(['/']);
  }

  async checkconfirmevent() {
    let iExamdate: any[] = [],
      iCourse: any[] = [],
      iSection: any[] = [],
      tmp: any[] = [],
      inx = 0;
    let tempA = await JSON.parse(sessionStorage.getItem('todoSelectCourse'));
    for (let i = 0; i < tempA.length; i++) {
      iCourse.push(tempA[i].courseno);
      iExamdate.push(tempA[i].examdate);
      iSection.push(tempA[i].section);
    }

    let res = await this.confirmservice
      .doCheckConfirm(
        this.us,
        this.semester,
        this.year,
        iExamdate,
        iSection,
        iCourse
      )
      .toPromise();
    //console.log(JSON.stringify(res));
    if (res) {
      tmp = res.result;
      for (let i = 0; i < tmp.length; i++) {
        if (Number(tmp[i].resultSeat) == 0) {
          this.isenabled = true;
          this.tmptodoCourse[i].tmpSection = '!คาบสอบที่เลือกเต็ม';
        }
      }
    } else {
      inx = inx + 1;
      this.loading();
      this.showSpinner = true;
      setTimeout(() => {
        this.showSpinner = false;
        sessionStorage.setItem('chkdup', inx.toString());
        if (inx < 2) {
          this.checkconfirmevent();
        } else {
          alert('คาบสอบที่เลือกเต็ม');
        }
      }, 2000);
    }

    iExamdate =[];
    iSection = [];
    iCourse= [];
  }

  chkOldRegisCourse(tempA: any) {
    // console.log('tempA check = ' + JSON.stringify(tempA));
    let tempTodoHis = JSON.parse(sessionStorage.getItem('todoHis'));
    let iExamdate: [];
    let iExamDateHis: [];
>>>>>>> 762a820f (bk commit)
    for (let i = 0; i < tempA.length; i++) {
      iExamdate = tempA[i].examdate;
      for (let j = 0; j < tempTodoHis.length; j++) {
        iExamDateHis = tempTodoHis[j].examdate;
        if (iExamdate == iExamDateHis) {
          this.chkDupDateAndSec = true;
<<<<<<< HEAD
         // this.isEnable = true;
          alert('ท่านเลือกวันที่มีคาบสอบตรงกัน กรุณาทำการเลือกใหม่!!');
        } else {
         // this.chkDupDateAndSec = false;
          //this.isEnable = false;
        }
      }

=======
          // this.isEnable = true;
          alert('ท่านเลือกวันที่มีคาบสอบตรงกัน กรุณาทำการเลือกใหม่!!');
        } else {
          // this.chkDupDateAndSec = false;
          //this.isEnable = false;
        }
      }
>>>>>>> 762a820f (bk commit)
    }
  }
}
