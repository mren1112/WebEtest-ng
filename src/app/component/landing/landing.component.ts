import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiFetchCounterService } from 'src/app/services/ApiFetchCounter.service';
import { BnNgIdleService } from 'bn-ng-idle';
import { stringify } from '@angular/compiler/src/util';
import { GlobalUrlToRedirect,MessegeNoti } from '../../interfaces/GlobalUrlToRedirect';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingPageComponent implements OnInit {
  public id;
  public todosys: any = [];
  public todomsghome: any = [];
  public todoProfile: any = [];
  public allCourse: any = [];
  public chkisnull=0;

  private baseUrlRedirec = GlobalUrlToRedirect.BASE_REDIRECT_URL;
  checkClose = false;
  todoCounter: any = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiGetCounter: ApiFetchCounterService,
    private bnIdle: BnNgIdleService
  ) {
    this.bnIdle.startWatching(1800).subscribe((res) => {
      if (res) {
        //console.log("session expired");
        alert('Session expired, Please access system again');
        this.logout();
      }
    });
  }

  logout() {
    /*sessionStorage.removeItem('stdcode');
    sessionStorage.clear();
    localStorage.clear();//*/
    window.open(this.baseUrlRedirec);
    // window.location.href = 'https://www.ru.ac.th/th/';
  }

  ngOnInit() {
    sessionStorage.clear();
    localStorage.clear();
    this.getLogin();
  }

  async getLogin() {
    sessionStorage.removeItem('stdcode');
    sessionStorage.clear();
    localStorage.clear();
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');

      // console.log("idddd = " + this.id);
      if (this.id === null || this.id.length < 10) {
        alert('ไม่สามารถเข้าสู่ระบบได้');
        this.closePage();
      } else {
        // alert("not null");

        this.id = sessionStorage.setItem('stdcode', this.id);
        let stdcode = sessionStorage.getItem('stdcode');
        this.loading();
        if (stdcode) {
          this.getCounter(stdcode);
        } else {
          alert('wwwq');
        }

      }
    });
  }

  showSpinner = false;
  loading() {
    if (
      sessionStorage.getItem('stdcode') == '' ||
      sessionStorage.getItem('stdcode') == null ||
      sessionStorage.getItem('stdcode') == undefined
    ) {
      this.showSpinner = true;
      setTimeout(() => {
        this.showSpinner = false;
      }, 3000);
    }
    // this.checkSystemStatus();
  }

  async getCounter(stdcode: string) {

    let sem = '';
    let chktel ='';
    let res = await this.apiGetCounter.getJsonData(stdcode).toPromise();
    this.todoCounter = res.counter || {};
    this.todosys = res.counter;
    this.todoProfile = res.profile;
    this.allCourse = res.registercourse;
    this.todomsghome = res.notimsg;

    this.chkisnull = Object.keys(this.todoProfile).length;
   // console.log("todoProfile" + JSON.stringify(this.chkisnull));

    if (Number(this.chkisnull)  > 0) {
      //get data to session -
     // this.todoCounter.forEach((e) => {
        sem = this.todoCounter[0].semester;
        sessionStorage.setItem('sem', this.todoCounter[0].semester);
        sessionStorage.setItem('year', this.todoCounter[0].year);
        sessionStorage.setItem('enddate', this.todoCounter[0].enddate);
        sessionStorage.setItem('startdate', this.todoCounter[0].startdate);
        sessionStorage.setItem('SYS_CLOSE', this.todoCounter[0].SYS_CLOSE);
     // });


      if (this.todoProfile[0].tel == null) {
        alert('ไม่สามารใช้งานระบบได้ ท่านยังไม่ได้ลงทะเบียนหมายเลขโทรศัพท์ที่ระบบ e-service ');
        this.closePage();
      } else {
        if (sem == '3') {
          sessionStorage.setItem('txtsem', 'ฤดูร้อน');
        } else {
          sessionStorage.setItem('txtsem', sem);
        }
        sessionStorage.setItem('todosys', JSON.stringify(this.todosys));
        sessionStorage.setItem('todoProfile', JSON.stringify(this.todoProfile));
        sessionStorage.setItem('todoRegisallcourse', JSON.stringify(this.allCourse));
        sessionStorage.setItem('todomsghome', JSON.stringify((this.todomsghome)));
      }
    } else {
      this.loading();
      res = await this.apiGetCounter.getJSON().toPromise();
      if (Number(this.chkisnull) == 0) {
        alert('Loading data faild, Please close and access system again.');
      }
    }

    //sessionStorage.setItem("chkop", this.todosys.close);
    sessionStorage.setItem('chkop', 'Y');
    // console.log("todoCounter" + JSON.stringify(res))
    setTimeout(() => {
      this.showSpinner = false;
    }, 1000);
    if (this.todosys.SYS_CLOSE === 'N') {
      this.checkClose = true;
      //alert('System Close!');
      //  this.router.navigate(['systemcomponent']);
    }
  }



  async closePage() {
    sessionStorage.clear();
    localStorage.clear();
    window.open(this.baseUrlRedirec, '_self');
    // win.close()
  }
  getHome() {

    if (Number(this.chkisnull) == 0) {
      alert('Loading data faild, Please close and access system again.');
      sessionStorage.clear();
      localStorage.clear();
    } else {
      this.router.navigate(['/']);
    }
  }


}
