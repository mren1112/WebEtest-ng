import { Component,Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class ApiFetchRecieptService {


  public us = sessionStorage.getItem("stdcode");
  public sem = sessionStorage.getItem("sem");
  public year = sessionStorage.getItem("year");
  //public tmpdatetoStr = sessionStorage.getItem("tmpdatetoStr");


<<<<<<< HEAD
  urlFetch = "http://sevkn.ru.ac.th//etest/getRepall.jsp?STD_CODE="+this.us+"&sem="+this.sem+"&year="+this.year;
=======
 // urlFetch = "http://sevkn.ru.ac.th//etest/getRepall.jsp?STD_CODE="+this.us+"&sem="+this.sem+"&year="+this.year;
  urlFetch = "http://sevkn.ru.ac.th/etest-api-12c/getRepall.jsp?STD_CODE=";
>>>>>>> 762a820f (bk commit)



  constructor(private http: HttpClient) {
<<<<<<< HEAD
    this.getJSON().subscribe(response => {
      //console.log(response);
     // sessionStorage.setItem("stdcode", response.STD_CODE);
    });
=======
    /*this.getJSON().subscribe(response => {
      //console.log(response);
     // sessionStorage.setItem("stdcode", response.STD_CODE);
    });//*/
>>>>>>> 762a820f (bk commit)
  }
  getJSON(): Observable<any> {
    return this.http.get(this.urlFetch)
                .pipe(map((response: any)=> response ),
                      catchError(err => {return (err)}));
  }

<<<<<<< HEAD
=======
  getJsonRegisSlipt(stdcode:string,sem:string,year:string): Observable<any> {
    return this.http.get(this.urlFetch + stdcode + "&sem="+ sem + "&year=" + year)
                .pipe(map((response: any)=> response ),
                      catchError(err => {return (err)}));
  }
>>>>>>> 762a820f (bk commit)

}

