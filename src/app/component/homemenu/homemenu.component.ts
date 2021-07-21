import { Component, TemplateRef, OnInit } from '@angular/core';
import {
  Event,
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,
  RouterEvent,
  ActivatedRoute,
  ParamMap,
} from '@angular/router';
import { clear } from 'console';
import { MatDialog } from '@angular/material/dialog';
import { PublicDialogComponent } from '../publicdialog/dialog.component';
import { GlobalUrlToRedirect,MessegeNoti } from '../../interfaces/GlobalUrlToRedirect';

@Component({
  selector: 'app-menu',
  templateUrl: './homemenu.component.html',
  styleUrls: ['./homemenu.component.css'],
})
export class HomeMenuCreateComponent implements OnInit {
  public stdcode='';
  public todoProfile: any = [];
  public todoCounter: any[];
  public us='';
  //todos:TodoProfile[] = [];
  public chkcoursefull: boolean = false;
  public chkStatus: boolean = false;
  public todoHis: any = [];
  public chkisnull=0;
  //public urlRedirect = 'https://beta-e-service.ru.ac.th/';
  private baseUrlRedirec = GlobalUrlToRedirect.BASE_REDIRECT_URL;
  messegeNoti: MessegeNoti[] = [{MESSEGE_HEADER: '', MESSEGE_TEXT1: "", MESSEGE_TEXT2: "", MESSEGE_STATUS: ""}];
  //-----------spinner----------------------

  public message = '';
  public showLoading = true;
  public title = 'mat-dialog-example';
  //----------------------------------------
  public id='';
  public todoCalendar: any = [];
  public showSpinner = false;
  //-----------------------------------------
  public sem = sessionStorage.getItem('sem');
  public year = sessionStorage.getItem('year');
  public txtsem='';
  public mySubscription: any;
  public todomsghome: any = [];

  constructor(private _router: Router, private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(PublicDialogComponent, {
      width: '950px',
      data: { header: 'ข้อความจากระบบ!', txt: 'wtf' },
      disableClose: true,
    });
    sessionStorage.setItem('xdialog', 'Y');
  }

  async openNotiDialog() {
   // let msgheader ='',txt1 ='',txt2 ='';
    let res = await JSON.parse(sessionStorage.getItem('todomsghome'));

    if (res) {
      this.todomsghome = res;
     // console.log(res);
      res.forEach(e => {
        this.messegeNoti[0].MESSEGE_HEADER = e.TXT_HEADER;
        this.messegeNoti[0].MESSEGE_TEXT1 = e.TXT_MSG1;
        this.messegeNoti[0].MESSEGE_TEXT2 = e.TXT_MSG2;
      });

     // this.messegeNoti[0].MESSEGE_HEADER = this.todomsghome[0].TXT_HEADER;


      this.dialog.open(PublicDialogComponent, {
        width: '950px',
        data: { header:  this.messegeNoti[0].MESSEGE_HEADER,
          txt: this.messegeNoti[0].MESSEGE_TEXT1, txt2: this.messegeNoti[0].MESSEGE_TEXT2  },
        disableClose: true,
      });
      sessionStorage.setItem('xdialog', 'Y');
    }
  }

  ngOnInit() {
    this.chekLoadInit();
  }

  async checkSeatIsfull() {
    let xdialog = await sessionStorage.getItem('xdialog');
    if (xdialog != 'Y') {

      setTimeout(() => {
        this.openNotiDialog();
      }, 1000);
    }
  }

  async chekLoadInit() {
    let getStd = await sessionStorage.getItem('stdcode');
    // let seat = await JSON.parse(sessionStorage.getItem('todosys'));
    if (getStd.length < 10) {
      alert('Please login again');
      this.backClicked();
    }

    if (sessionStorage.getItem('chkop') == 'N') {
      this.chkStatus = true;
    } else {
      //  console.log("chkop = " + sessionStorage.getItem("chkop"));
      this.chkStatus = true;
    }

    this.checkSeatIsfull();
    await this.loading();
    this.getProfile();
    sessionStorage.removeItem('subrefkey');
    sessionStorage.removeItem('refkey');
  }

  backClicked() {
    // this._location.back();
    sessionStorage.clear();
    localStorage.clear();
    //window.open('https://www.ru.ac.th/th/','_self');
    //window.location.replace("https://www.ru.ac.th/th/");
    window.location.href = this.baseUrlRedirec;
  }

  async loading() {
    let us = await sessionStorage.getItem('stdcode');
    let namethai = await sessionStorage.getItem('namethai');
    let chkop = await sessionStorage.getItem('chkop');
    if (us == '' || us == null || us == undefined) {
      sessionStorage.clear();
      window.open(this.baseUrlRedirec);
    } else {
      if (namethai) {
        // location.reload();
        this.showSpinner = true;
        setTimeout(() => {
          this.showSpinner = false;
        }, 2000);
      } else {
        if (chkop === 'N' || chkop == null || chkop == undefined) {
          //alert("chkop = " + sessionStorage.getItem("chkop"));
          this.chkStatus = false;
          //     alert('wtf')
        } else {
          //  console.log("chkop = " + sessionStorage.getItem("chkop"));
          this.chkStatus = true;
        }
      }
    }
  }

  async getProfile() {
    let us = await sessionStorage.getItem('stdcode');
    if (us != '') {
      this.id = sessionStorage.getItem('stdcode');
      // this.getEtHisregister();
    } else {
      this._router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };

      this.mySubscription = this._router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Trick the Router into believing it's last link wasn't previously loaded
          this._router.navigated = false;
        }
      });
      this.loading();
    }

    // let res = await this.apiFetchProfile.getJSON(this.id).toPromise();
    let tel = '',
    NameThai = '';
    let res = await JSON.parse(sessionStorage.getItem('todoProfile'));
    this.todoProfile = res;
    let cnt =0;
    this.chkisnull = Object.keys(this.todoProfile).length;
    console.log("chkisnull = " + JSON.stringify(this.chkisnull))
    if (Number(this.chkisnull) == 0) {
      //location.reload();
      alert('Loading data faild, Please close and access system again.');
    } else {
      this.todoProfile.forEach((e) => {
        sessionStorage.setItem('namethai', e.NameThai);
        sessionStorage.setItem('facno', e.FacNo);
        sessionStorage.setItem('majorno', e.MajorNo);
        sessionStorage.setItem('majornamthai', e.MajorNameThai);
        sessionStorage.setItem('facName', e.FacNameThai);
        sessionStorage.setItem('birth', e.Birth);
        tel = e.tel;
        NameThai = e.NameThai;
      });

      if (NameThai === '') {
        alert('ไม่สามารถเข้าสู่ระบบได้่');
        this.logout();
      } else {
        if (tel == '' || tel == null) {
          alert(
            'ท่านยังไม่ได้ระบุหมายเลขโทรศัพท์ กรุณาเพิ่มหมายเลขโทรศัพท์ที่สามารถติดต่อได้ที่ระบบ e-service. ก่อนทำการลงทะเบียน'
          );
          this.logout();
        } else {
          sessionStorage.setItem('tel', tel);
        }
      }
    }
  }

  logout() {
    sessionStorage.removeItem('stdcode');
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = this.baseUrlRedirec;
  }

  async checkSystemStatus() {
    let tempA = await sessionStorage.getItem('chkop');
    let seat = await JSON.parse(sessionStorage.getItem('todosys'));
    console.log(seat);
    //console.log('tempA = ' + tempA);
    if (Object.keys(tempA).length === 0 || tempA == null) {
      window.location.reload();
      setTimeout(() => {
        this.showSpinner = false;
      }, 1000);
    }

    //var tmp;
    setTimeout(function () {
      let tmp = JSON.stringify(tempA);
    }, 1000);
    //this.getCalendar();
    if (tempA === 'N'  ) {
      alert('ไม่อยู่ในช่วงการลงทะเบียน!');
      // this.router.navigate(['systemcomponent']);
    } else if (seat == null) {
      alert('ไม่สามารถโหลดข้อมูลการลงทะเบียนได้!');
    } else if (Number(seat.sumseat) == 0) {
      alert('จำนวนการลงทะเบียนเต็ม!');
    } else {
      this._router.navigate(['course']);
      // this.getCalendar();
    }
  }
}
