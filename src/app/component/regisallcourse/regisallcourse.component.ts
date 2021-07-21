import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-regisall',
  templateUrl: './regisallcourse.component.html',
  styleUrls: ['./regisallcourse.component.css']

})
export class RegisAllCourseCreateComponent implements OnInit {

  public allCourse: any = [];
  public stdcode = '';
  public sem = "";
  public year = '';
  public majorname = '';
  public namethai = '';
  public facname = '';
  showSpinner: boolean = false;
  public checkCourseNull: boolean = false;
  constructor(
    private router: Router,
    private activerouter: ActivatedRoute,

  ) {

  }

  ngOnInit() {
    this.fecthStorage();

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
    this.router.navigate(['/']);
  }

}
