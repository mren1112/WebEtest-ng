import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { map, catchError } from 'rxjs/operators';


export interface ETCourse {
  year: string;
  semester: string;
  courseNo: string;
  credit: number;
  statusCourse: string;
  courseFee: string;
  insertDate: string;
  insertUser: string;
  updateDate: string;
  updateUser: string;
  status: boolean;
  // imageUrl: string;
}

@Injectable()
export class ApiFetchETCourseService {

  public us = sessionStorage.getItem("stdcode");
  public sem = sessionStorage.getItem("sem");
  public year = sessionStorage.getItem("year");

<<<<<<< HEAD
  urlFetchETCourse = "http://sevkn.ru.ac.th//etest/getEtCourse.jsp?STD_CODE=" + this.us + "&sem=" + this.sem + "&year=" + this.year;
  urlFetchHisETCourse = "http://sevkn.ru.ac.th//etest/gethisregiscourse.jsp?STD_CODE=" + this.us + "&sem=" + this.sem + "&year=" + this.year;
  urlFetchHisCourse = "http://sevkn.ru.ac.th//etest/gethisregiscourse.jsp?STD_CODE=";
=======
  //urlFetchETCourse = "http://sevkn.ru.ac.th/etest/getEtCourse.jsp?STD_CODE=" + this.us + "&sem=" + this.sem + "&year=" + this.year;
  urlFetchHisETCourse = "http://sevkn.ru.ac.th/etest/gethisregiscourse.jsp?STD_CODE=" + this.us + "&sem=" + this.sem + "&year=" + this.year;
  urlFetchHisCourse = "http://sevkn.ru.ac.th/etest/gethisregiscourse.jsp?STD_CODE=";
  private urlFetchETCourse = "http://sevkn.ru.ac.th/etest-api-12c/getEtCourse.jsp?STD_CODE=";
>>>>>>> 762a820f (bk commit)

  constructor(private http: HttpClient) {
   /* this.getJSON().subscribe(response => {
      if (response.grad === "") {
        sessionStorage.setItem('grad', '');
      } else {
        sessionStorage.setItem('grad', JSON.stringify(response.grad));
       // console.log('api = ' +response);
      }
      // sessionStorage.setItem('nocourse', JSON.stringify(response.results));
      sessionStorage.setItem('todoCourse', JSON.stringify(response));
      // console.log(response);
    });*/

<<<<<<< HEAD
    this.getHisregister().subscribe(res => {
      sessionStorage.setItem('todoHis', JSON.stringify(res.results));
      // console.log(response);
    });
=======
    /*this.getHisregister().subscribe(res => {
      sessionStorage.setItem('todoHis', JSON.stringify(res.results));
      // console.log(response);
    });//*/
>>>>>>> 762a820f (bk commit)
  }


  getJSON(): Observable<any> {
    return this.http.get(this.urlFetchETCourse)
      .pipe(map((response: any) => response),
        catchError(err => { return (err) }));
  }

  getHisregister(): Observable<any> {
    return this.http.get(this.urlFetchHisETCourse)
      .pipe(map((response: any) => response),
        catchError(err => { return (err) }));
  }

  getHisParsregister(sem: string, year: string) {
    return this.http.get(this.urlFetchHisCourse + this.us + '&sem=' + sem + '&year=' + year)
      .pipe(map((response: any) => response),
        catchError(err => {
          //  sessionStorage.setItem("dataregister", response);
          return (err)
        }));
  }
<<<<<<< HEAD
=======

   getJsonData(stdcode: string, sem: string, year: string): Observable<any> {
    return  this.http.get(this.urlFetchETCourse + stdcode + '&sem=' + sem + '&year=' + year)
      .pipe(map((response: any) => response),
        catchError(err => {
          //  sessionStorage.setItem("dataregister", response);
          return (err)
        }));
  }
>>>>>>> 762a820f (bk commit)
}
