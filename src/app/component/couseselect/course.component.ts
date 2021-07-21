import { Component, ViewEncapsulation, OnInit, Inject,TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatCalendarCellCssClasses,  MatDatepickerInputEvent,} from '@angular/material/datepicker';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {
  FormGroup,
  FormArray,
  FormControl
} from '@angular/forms';
import { ApiFetchETCourseService } from 'src/app/services/ApiFetchETCourse.service';
import * as moment from 'moment';
import { Location } from '@angular/common';
import { ApiCheckSelectDateService } from 'src/app/services/ApiCheckSelectDate.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PublicDialogComponent } from '../publicdialog/dialog.component';
import { GlobalUrlToRedirect,MessegeNoti } from '../../interfaces/GlobalUrlToRedirect';

export interface PeriodicElement {
  courseno: string;
  coursename: string;
  credit: string;
  // symbol: string;
}

export class newArray {
  index: number;
  couse: string;
}


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CourseComponent implements OnInit {
  coursetest = [
    { courseno: 'COS2101', credit: 3, status: false },
    { courseno: 'COS2102', credit: 3, status: false },
  ];

  sectionfix = [{ section: 1 }, { section: 2 }, { section: 3 }, { section: 4 }];
  private baseUrlRedirec = GlobalUrlToRedirect.BASE_REDIRECT_URL;
  public stdcode = sessionStorage.getItem('stdcode');
  public sem = sessionStorage.getItem('sem');
  public year = sessionStorage.getItem('year');
  public txtsem = sessionStorage.getItem('txtsem');
  public newData: newArray[] = [];

  public todoCourse: any = [];
  public todoSelectCourse: any = [];
  public todoSection: any = [];
  public todoHis: any = [];
  json_tmp: any = [];

  public selectCourseCmplt: boolean = false;
  public selectCourse: boolean = true;
  public isChecked = false;
  public sectionselect: boolean = false;
  public dateselect: string = '';
  public selectArr = [];
  public tempChkCourse = [];
  public tempChkCourseName = [];
  public tempChkCourseDate = [];
  public tempChkCourseSec = [];
  form: FormGroup;
  public chkCourseData = [];
  public cntCourseNo = 0;
  public selectedSection = [];
  public chkDupDateAndSec: boolean = false;
  public strDate;
  public endDate;
  public subStrYear;
  public subStrEndYear;
  public subStrMonth;
  public subStrEndMonth;
  public subStrDate;
  public subStrEndDate;
  public events: string[] = [];
  public selectedDay: string[] = [];
  public eventstmp = [{ date: null }];
  public startDate;
  public endtDate;
  public isEnable: boolean = true;
  public registerForm: FormGroup;
  public submitted = false;
  public dateCurrent = new Date();
  public arrDateToStr: any = [];
  public todoCalendar: any = [];
  public tempTodoHis: any = [];
  public msgSectionsta = false;
  public statusSectSelect = false;
  public cntDate=0;
  public chktodoCourse = true;
  constructor(
    private apiFetchETCourse: ApiFetchETCourseService,
    private apiCheckSelectDate: ApiCheckSelectDateService,
    private _location: Location,
    private modalService: BsModalService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    //this.addCheckboxes();
  }

  // -------------- dialog component ----------------
  openDialog() {
    this.dialog.open(PublicDialogComponent, {
      width: '950px',
      data: { header: 'ข้อความจากระบบ!', txt: 'wtf' },
      disableClose: true,
    });
    sessionStorage.setItem('xdialog', 'Y');
  }

  async openAlertDialog() {
    this.dialog.open(PublicDialogComponent, {
      width: '500px',
      data: { header: 'ข้อความจากระบบ!', txt: 'ท่านไม่มีวิชาที่สามารถลงทะเบียนสอบได้' },
      disableClose: true,
    });
    setTimeout(() => {
      this.showSpinner = false;
      this.router.navigate(['/']);
    }, 1200);
    //this.router.navigate(['/confirm']);
  }

async openAlertDialogLogin() {
     this.dialog.open(PublicDialogComponent, {
       width: '400px',
       data: { header: 'ข้อความจากระบบ!', txt: 'Please login again' },
       disableClose: true,
     });
     setTimeout(() => {
       this.showSpinner = false;
     }, 1200);
     this.backClicked();
   }

   async openAlertDialogSystemClose() {
    await this.dialog.open(PublicDialogComponent, {
       width: '400px',
       data: { header: 'ข้อความจากระบบ!', txt: 'ปิดการลงทะเบียน' },
       disableClose: true,
     });
    await setTimeout(() => {
       this.showSpinner = false;
       this.router.navigate(['/']);
     }, 1200);
   }
  // ------------------------------------------------

  submit() {
    const selectedOrderIds = this.form.value.tempChkCourse
      .map((v, i) => (v ? this.coursetest[i].courseno : null))
      .filter((v) => v !== null);
    // console.log(selectedOrderIds);
  }

  ngOnInit() {
    this.clearDataOnLoad();
    this.onLoadPage();
    this.setCalendar();
    //this.getEtCourse();
  }

  async setCalendar() {
    var tmpdate = await this.dateCurrent;
    var numberOfDaysToAdd = 5;
    tmpdate.setDate(tmpdate.getDate() + numberOfDaysToAdd);

    this.arrDateToStr.push(this.dateCurrent);
    var tmpDateCurrent = moment(new Date(this.arrDateToStr.join())).format(
      'DDMMYYYY'
    );

    this.startDate = new Date(
      Number(tmpDateCurrent.substring(4)),
      Number(tmpDateCurrent.substring(2, 4)) - 1,
      Number(tmpDateCurrent.substring(0, 2))
    );
    this.endtDate = new Date(2020, 7, 31);
  }

  async onLoadPage() {
    let us = await sessionStorage.getItem('stdcode');
    if (us == null) {
      this.openAlertDialogLogin();
     // alert('Please login again');
      //this.backClicked();
    } else {
      this.stdcode = await sessionStorage.getItem('stdcode');
      this.sem = await sessionStorage.getItem('sem');
      this.year = await sessionStorage.getItem('year');
      this.strDate = await sessionStorage.getItem('enddate');
      this.endDate = await sessionStorage.getItem('startdate');
     // this.getCalendar(this.sem, this.year);
      this.getEtCourse();
    }
  }

  confirm() {
    this.router.navigate(['/confirm']);
  }

  //paint alert day
  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return date === 0 || date === 0 ? 'dateAleart-class' : '';
  };

  holidayList: any[] = [];
  //disable select dayList
  myFilter = (d: Date | null): boolean => {
    for (let i = 0; i < this.todoCalendar.length; i++) {
      //this.holidayList=[new Date(Number(this.todoCalendar[i].tmpYear), Number(this.todoCalendar[i].tmpMonth), Number(this.todoCalendar[i].tmpDate)).getTime()];
      this.holidayList.push(
        new Date(
          Number(this.todoCalendar[i].tmpYear),
          Number(this.todoCalendar[i].tmpMonth) - 1,
          Number(this.todoCalendar[i].tmpDate)
        ).getTime()
      );
    }

    const time = d.getTime();
    //console.log("Gettime : " + time);
    return this.holidayList.find((x) => x == time);
  };

  showSpinner: boolean = false;
  loading(todo) {
    if (todo == null) {
      this.showSpinner = true;
      setTimeout(() => {
        this.showSpinner = false;
      }, 1200);
    }
  }

  loadingWait() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 1200);
  }

  backClicked() {
    // this._location.back();
    sessionStorage.clear();
    window.location.href = this.baseUrlRedirec;
  }

  async checkConfirm() {
    //alert('ท่านเลือกวันที่มีคาบสอบตรงกัน กรุณาทำการเลือกใหม่!!');
    var tempA = this.todoSelectCourse;
    //console.log('tempA = ' +  JSON.stringify(tempA));
    for (let i = 0; i < tempA.length; i++) {
      if (tempA[i].section == '') {
        this.isEnable = true;
        break;
      } else {
        this.isEnable = false;
      }
    }

    this.tempTodoHis = await JSON.parse(sessionStorage.getItem('todoHis'));
    //console.log('this.tempTodoHis = ' + JSON.stringify(this.tempTodoHis));
    var tmpA = this.todoSelectCourse;
    var chkExamdate: any[];
    var chkSec: any[];
    var cntSame = 0;
    var cntSame2 = 0;
    var iExamDateHis: [];
    var iSectionHis: [];
    for (let i = 0; i < tmpA.length; i++) {
      chkExamdate = this.todoSelectCourse[i].examdate;
      chkSec = tmpA[i].section;
      for (let j = 0; j < i; j++) {
        //  console.log('chkExamdate = ' + chkExamdate);
        if (chkExamdate == tmpA[j].examdate && chkSec == tmpA[j].section) {
          cntSame++;
          this.chkDupDateAndSec = true;
          this.isEnable = true;
        } else {
          //alert('ท่านเลือกวันที่มีคาบสอบตรงกัน กรุณาทำการเลือกใหม่!!');break;
          //this.chkDupDateAndSec = false;
          // this.isEnable = false;
        }
      }
      var tmpcourseno;
      this.tempTodoHis.forEach((e) => {
        tmpcourseno = e.courseno;
      });
      //console.log('this.tempTodoHis.courseno = ' + tmpcourseno);
      var x = 0;
      //check his data
      if (tmpcourseno != 'N') {
        for (let k = 0; k < this.tempTodoHis.length; k++) {
          if (
            chkExamdate == this.tempTodoHis[k].examdate &&
            this.tempTodoHis[k].sec == chkSec
          ) {
            cntSame2++;
            this.chkDupDateAndSec = true;
            this.isEnable = true;
          } else {
            this.chkDupDateAndSec = false;
            // this.isEnable = false;
          }
          x++;
        }
      } //console.log('cntSame2 = ' + cntSame2);
    }
    if (cntSame > 0 || cntSame2 > 0) {
      this.chkDupDateAndSec = true;
      this.isEnable = true;
    } else {
      this.chkDupDateAndSec = false;
      // this.isEnable = false;
    }
  }

  async getEtCourse() {
    let chk = '';
    let res = await this.apiFetchETCourse.getJsonData(this.stdcode,this.sem,this.year).toPromise();
   // console.log(JSON.stringify(res) );
    let x;
     res.resultsCalendar.forEach(e => {
      x= e.tmpMonth;
     });//alert(JSON.stringify(x) );

    if (x != "") {
      this.todoCalendar = res.resultsCalendar;
          this.todoCalendar.forEach((e) => {
            if (e.tmpMonth == "") {
              alert('จำนวนการลงทะเบียนเต็มแล้ว');
              this.router.navigate(['/']);
            }});
    } else {
       alert('จำนวนการลงทะเบียนเต็มแล้ว');
       this.router.navigate(['/']);
    }

    if (res.results != null) {
      res.results.forEach((e) => {
        chk = e.courseno;
      });

      if (res.results != null && chk != 'N') {
        sessionStorage.setItem('todoHis', JSON.stringify(res.his));
        this.todoCourse = res.results;
        let tmp;
        this.todoCourse.forEach((e) => {
          tmp = e.status;
        });

        this.cntCourseNo = Object.keys(res).length;
        //console.log('this.cntCourseNo = ' + this.cntCourseNo);
        if (
          sessionStorage.getItem('enddate') != '' &&
          sessionStorage.getItem('startdate') != '' &&
          sessionStorage.getItem('stdcode') != null
        ) {
          this.subStrYear = Number(this.strDate.substring(6, 10)) - 543;
          this.subStrEndYear = Number(this.endDate.substring(6, 10)) - 543;
          this.subStrMonth = this.strDate.substring(0, 2);
          this.subStrEndMonth = this.endDate.substring(0, 2);
          this.subStrDate = this.strDate.substring(3, 5);
          this.subStrEndDate = this.endDate.substring(3, 5);

          //  this.getEtHisregister();
        } else {
          this.openAlertDialog();
         //this.checkRegisCourseNull();
          //this.backClicked();
        }

        if (this.todoCourse == null || this.todoCourse == '' || tmp == 'N') {
          // alert('iffff ' + this.cntCourseNo);
          this.openAlertDialog();
          this.chktodoCourse = true;
        } else {
          // alert('ELSE ' + this.cntCourseNo);
          this.chktodoCourse = false;
        }
      } else {
        this.openAlertDialog();
       // this.checkRegisCourseNull();
      }
    } else {
      this.loading(res);
    }
  }

  async checkRegisCourseNull() {
   //this.openAlertDialog()
    alert('ท่านไม่มีวิชาที่สามารถลงทะเบียนสอบได้');
    await this.router.navigate(['/']);
    // this._location.back();
    // sessionStorage.clear();
    // window.location.href = 'https://www.ru.ac.th/';
  }

  //check box event
  checkValue(event: any) {
    if (event != 'B') {
      this.selectCourse = false;
      //  console.log(' เข้า ' + event);
    } else {
      this.selectCourse = true;
      // console.log(' เข้า - ' + event);
    }

    //console.log(event);
  }

  pushtest: any = [];
  checked: boolean[] = [];
  selectedCourse;

  toggleVisibility(courseno, inx) {
    this.todoCourse.filter((arr) => {
      if (arr.courseno == courseno) {
        arr.status = !arr.status;
        if (arr.status === false) {
          // alert(this.pushtest.indexOf(courseno));
          this.selectedDay[inx] = '';
          this.selectedSection[inx] = '';
          arr.secstatus = false;

          for (var i = 0; i < this.todoSelectCourse.length; i++)
            if (this.todoSelectCourse[i].courseno === courseno) {
              this.todoSelectCourse.splice(i, 1);
              this.pushtest.splice(i, 1);
              break;
            }
          sessionStorage.setItem('todoSelectCourse', JSON.stringify(this.todoSelectCourse));
        } else {
          this.pushtest.push(arr.courseno);
          this.todoSelectCourse.push({
            courseno: arr.courseno,
            credit: parseInt(arr.credit),
            examdate: '',
            section: '',
            sectime: '',
            tmpSection: '',
          });
          sessionStorage.setItem('todoSelectCourse', JSON.stringify(this.todoSelectCourse));
        }
      }
      this.checkConfirm();
    });
  }

  dateselected = [];
  Date = new Date();
  chkdate: Date;

  ss = [];
  public onDate(event): void {
    this.ss = event;
    //  console.log(this.ss);
    // this.getData(this.roomsFilter.date);
  }

  async selected(event: any) {
    this.selectedSection = await event.target.value;
    //sessionStorage.setItem("ssss", this.selectedSection);
    // console.log('sec = ' + this.selectedSection);
    //  alert(this.selectedSection);
  }

  //event handler for the select element's change event
  changeDropdown(obj: any, index: any) {
    var tmpsec = '';
    var sectime = '';

    for (let i = 0; i < this.selectedSection.length; i++) {
      tmpsec = this.selectedSection[i];
    }

    var tempA = this.todoSelectCourse;
    tempA.filter((arr) => {
      if (arr.courseno == obj) {
        arr.section = this.selectedSection[index];
        if (tmpsec == '1') {
          sectime = '9.30 - 12.00';
        } else if (tmpsec == '2') {
          sectime = '12.00 - 14.30'; //alert("6666");
        } else if (tmpsec == '3') {
          sectime = '15:00-17:30';
        } else if (tmpsec == '4') {
          sectime = '18:00-20:30';
        }
        // arr.sectime = sectime;
      }
    });
    //   console.log('sectime = ' + sectime);

    sessionStorage.setItem('todoSelectCourse', JSON.stringify(tempA));
    this.checkConfirm();
  }

  async chkOldRegisCourse(tempA) {
    // console.log('tempA check = ' + JSON.stringify(tempA));
    this.tempTodoHis = await JSON.parse(sessionStorage.getItem('todoHis'));
    if (this.tempTodoHis == null) {
      sessionStorage.removeItem('todoHis');
      alert('Loade data faild please try again.');
      this.router.navigate(['/']);
    }

    // console.log('tempTodoHis = ' + this.tempTodoHis);
    var iExamdate: [];
    var iExamDateHis: [];
    var iSectionHis: [];

    for (let i = 0; i < tempA.length; i++) {
      iExamdate = tempA[i].examdate;
      iSectionHis = tempA[i].section;
      for (let j = 0; j < this.tempTodoHis.length; j++) {
        // iExamDateHis = tempTodoHis[j].examdate;
        if (
          iExamdate == this.tempTodoHis[j].examdate &&
          iSectionHis == this.tempTodoHis[j].sec
        ) {
          this.chkDupDateAndSec = true;
          this.isEnable = true;
          alert('ท่านเลือกวันที่มีคาบสอบตรงกัน กรุณาทำการเลือกใหม่!!');
        } else {
          //alert('xท่านเลือกวันที่มีคาบสอบตรงกัน กรุณาทำการเลือกใหม่!!');
          //this.chkDupDateAndSec = false;
          // this.isEnable = true;
        }
      }
    }
  }

  addData(obj: any, index: any): void {
    this.selectedSection[index] = '';
    var tempA = null;
    tempA = this.todoSelectCourse;
    var tmpstr = this.selectedDay;
  }

  changeEvent(obj: any, index: any) {
    this.selectedSection[index] = '';
    var tempA = this.todoCourse;
    this.todoCourse.filter((arr) => {
      if (arr.courseno == obj.courseno) {
        arr.secstatus = false;
        // console.log('arr.secstatus = ' + arr.secstatus);
      }
    });
  }

  isSelectdate = false;
  addEvent(event: MatDatepickerInputEvent<Date>, index: any, courseno) {
    this.selectedSection[index] = '';
    console.clear();
    this.events.push(`${event.value}`);
    //console.log('this.events = ' + JSON.stringify(this.events));
    var tmpdatetoStr = moment(new Date(this.events.join())).format(
      'DD/MM/YYYY'
    );
    var tmpdatetoStr2 = moment(new Date(this.events.join())).format('DDMMYYYY');
    sessionStorage.setItem('tmpdatetoStr', tmpdatetoStr);
    var tempA = this.todoSelectCourse;
    var tmpDate = `${event.value}`;

    tempA.filter((arr) => {
      if (arr.courseno == courseno) {
        arr.examdate = tmpdatetoStr;
        arr.section = '';

        this.checkConfirm();
        //arr.secstatus = !arr.secstatus;
      }
    });

    if (tmpdatetoStr != null) {
      this.getSection(tmpdatetoStr, courseno, tmpdatetoStr2, tmpDate, index);
    }

    this.todoSelectCourse = tempA;
    sessionStorage.setItem('todoSelectCourse', JSON.stringify(tempA));
    this.events.splice(0, 1);
  }

  getSection(tmpdatetoStr, courseno, tmpdatetoStr2, tmpDate, index) {
    if (courseno != null) {
      this.apiCheckSelectDate
        .getJSON(
          this.stdcode,
          this.sem,
          this.year,
          tmpdatetoStr,
          courseno,
          tmpdatetoStr2
        )
        .subscribe((res) => {
          this.todoSection = res;
          var seemCourseno = false;
          var inxJson_tmp = 0;

          for (let i = 0; i < this.json_tmp.length; i++) {
            if (this.json_tmp[i].courseno == this.todoSection[0].courseno) {
              seemCourseno = true;
              inxJson_tmp = i;
            }
          }

          if (seemCourseno) {
            this.json_tmp[inxJson_tmp].examdate = this.todoSection[0].examdate;
            this.json_tmp[inxJson_tmp].section = this.todoSection[0].section;
            // console.log('tmps seemCourseno = ' + this.todoSection[0].cntdate);
          } else {
            this.json_tmp.push(this.todoSection[0]);
          }

          if (this.json_tmp.length == 0) {
            //  console.log('null');
            this.json_tmp.push(this.todoSection[0]);
          }

          //   console.log('json_tmp =' + JSON.stringify(this.json_tmp));
          this.todoSection = this.json_tmp;

          if (this.todoSection.examdate == null) {
            this.todoCourse.filter((arr) => {
              //    console.log('todoCourse =' + JSON.stringify(this.todoCourse));
              if (arr.courseno == courseno) {
                arr.secstatus = true;
              }
            });
          }
        });
    }
  }

  async checkSystemStatus() {
    var tempA = await JSON.parse(sessionStorage.getItem('todosys'));
    // console.log('tempA = ' + JSON.stringify(tempA));
    if (Object.keys(tempA).length === 0 || tempA == null) {
      window.location.reload();
      setTimeout(() => {
        this.showSpinner = false;
      }, 2000);
    }

    var tmp;
    setTimeout(function () {
      tmp = JSON.stringify(tempA.close);
    }, 100);

    //   console.log('tempA.close = ' + JSON.stringify(tempA.close));
    if (tempA.close === 'N') {
      //alert('System Close!');
      this.openAlertDialogSystemClose();
      // this.router.navigate(['systemcomponent']);
    }
  }

  modalRef: BsModalRef;
  message;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }

  btnconfirm(): void {
    this.message = 'Confirmed!';
    this.router.navigate(['/']);
  }

  btndecline(): void {
    this.message = 'Declined!';
    this.modalRef.hide();
  }

  clearDataOnLoad(): void {
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
  }
}
