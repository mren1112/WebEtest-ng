import { Component,Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class ApiFetchAllCourseRegisService {

<<<<<<< HEAD

  public us = sessionStorage.getItem("stdcode");
  public sem = sessionStorage.getItem("sem");
  public year = sessionStorage.getItem("year");


  urlFetchAllCourse= "http://sevkn.ru.ac.th//etest/getAllCourseRegis.jsp?STD_CODE="+this.us+"&sem="+this.sem+"&year="+this.year;
=======
/*
  public us = sessionStorage.getItem("stdcode");
  public sem = sessionStorage.getItem("sem");
  public year = sessionStorage.getItem("year");*/


  //urlFetchAllCourse= "http://sevkn.ru.ac.th//etest/getAllCourseRegis.jsp?STD_CODE="+this.us+"&sem="+this.sem+"&year="+this.year;
  urlFetchAllCourse= "http://sevkn.ru.ac.th//etest/getAllCourseRegis.jsp?STD_CODE=";
>>>>>>> 762a820f (bk commit)



  constructor(private http: HttpClient) {
<<<<<<< HEAD
    console.log(this.urlFetchAllCourse);
    this.getJSON().subscribe(response => {
      //console.log(response);
      //console.log("response std = " + this.us);
    });
=======
   // console.log(this.urlFetchAllCourse);
    /*this.getJSON().subscribe(response => {
      //console.log(response);
      //console.log("response std = " + this.us);
    });*/
>>>>>>> 762a820f (bk commit)
  }
  getJSON(): Observable<any> {
    return this.http.get(this.urlFetchAllCourse)
                .pipe(map((res: any)=> res ),
                      catchError(err => {return (err)}));
  }

<<<<<<< HEAD

=======
  getJsonFetchCourse(stdcode:string,sem:string,year:string): Observable<any> {
    return this.http.get(this.urlFetchAllCourse+stdcode+"&sem="+sem+"&year="+year)
                .pipe(map((res: any)=> res ),
                      catchError(err => {return (err)}));
  }
>>>>>>> 762a820f (bk commit)
}

