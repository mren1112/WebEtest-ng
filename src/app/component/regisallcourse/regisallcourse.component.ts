import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ApiFetchAllCourseRegisService } from '../../services/ApiFetchAllCourseRegis.service';
=======
>>>>>>> 762a820f (bk commit)
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-regisall',
  templateUrl: './regisallcourse.component.html',
  styleUrls: ['./regisallcourse.component.css']

})
export class RegisAllCourseCreateComponent implements OnInit {

  public allCourse: any = [];
<<<<<<< HEAD
  public us;
  public sem;
  public year;
  public majorname;
  public namethai;
  public facname;

  constructor(
    private apiFetchAllCourseRegis: ApiFetchAllCourseRegisService,
=======
  public stdcode = '';
  public sem = "";
  public year = '';
  public majorname = '';
  public namethai = '';
  public facname = '';
  showSpinner: boolean = false;
  public checkCourseNull: boolean = false;
  constructor(
>>>>>>> 762a820f (bk commit)
    private router: Router,
    private activerouter: ActivatedRoute,

  ) {

  }

  ngOnInit() {
    this.fecthStorage();
<<<<<<< HEAD
    this.getAllCourseRegis();
    if (sessionStorage.getItem('reloadqrlist') == null) {
      window.location.reload();
      sessionStorage.setItem('reloadqrlist', 'Y')
    }
}

  fecthStorage() {
    this.us = sessionStorage.getItem("stdcode");
    this.sem = sessionStorage.getItem("sem");
    if (this.sem === '3') {
        this.sem = "summer";
    }
    this.year = sessionStorage.getItem("year");
    this.majorname = sessionStorage.getItem("majornamthai");
    this.namethai = sessionStorage.getItem("sem");
    this.facname = sessionStorage.getItem("facName");
}

  getAllCourseRegis() {
    this.apiFetchAllCourseRegis.getJSON().subscribe(res => {
      this.allCourse = res.rec;
    //  console.log("regisAll" + JSON.stringify(this.allCourse))
    })
  }

  backhome() {
    // this._location.back();
    sessionStorage.removeItem("reloadqrlist");
=======

  }

  async fecthStorage() {
    this.stdcode = await sessionStorage.getItem("stdcode");
    this.sem = await sessionStorage.getItem("sem");
    if (this.sem === '3') {
      this.sem = "ฤดูร้อน";
    }
    this.year = await sessionStorage.getItem("year");
    this.majorname = await sessionStorage.getItem("majornamthai");
    this.namethai = await sessionStorage.getItem("sem");
    this.facname = await sessionStorage.getItem("facName");
   // console.log('data =' + this.stdcode +' '+this.sem+' '+this.year)
    this.getAllCourseRegis();
  }

  async getAllCourseRegis() {
   // console.log('data =' + this.stdcode +' '+this.sem+' '+this.year)
    if (this.stdcode && this.sem && this.year) {
      //let res = await this.apiFetchAllCourseRegis.getJsonFetchCourse(this.stdcode, this.sem, this.year).toPromise();
      let res = await JSON.parse(sessionStorage.getItem("todoRegisallcourse"));
      if (res) {
        this.allCourse = res;
        if (Object.keys(this.allCourse).length > 0) {
            this.checkCourseNull = true;
        } else {
          this.checkCourseNull = false;
        }
       // console.log('data =' + Object.keys(this.allCourse).length);
      } else {
        this.loading();
      }
    } else {
      this.loading();
    }

  }

  loading() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 3000);
  }

  backhome() {
>>>>>>> 762a820f (bk commit)
    this.router.navigate(['/']);
  }

}
