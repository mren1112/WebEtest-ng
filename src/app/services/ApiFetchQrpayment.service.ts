import { Component,Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class ApiFetchQrPaymentService {


  public us = sessionStorage.getItem("stdcode");
  public sem = sessionStorage.getItem("sem");
  public year = sessionStorage.getItem("year");
  //public tmpdatetoStr = sessionStorage.getItem("tmpdatetoStr");


  urlFetch = "http://sevkn.ru.ac.th/etest-api-12c/getQrpaylist.jsp?STD_CODE=";



  constructor(private http: HttpClient) {
    /*this.getJSON().subscribe(response => {
      //console.log(response);
     // sessionStorage.setItem("stdcode", response.STD_CODE);
    });*/
  }
  /*getJSON(): Observable<any> {
    return this.http.get(this.urlFetch+this.us+"&sem="+this.sem+"&year="+this.year)
                .pipe(map((response: any)=> response ),
                      catchError(err => {return (err)}));
  }*/

  getJsonQrData(stdcode:string,sem:string,year:string): Observable<any> {
    return this.http.get(this.urlFetch+ stdcode + "&sem=" + sem + "&year=" + year)
                .pipe(map((response: any)=> response ),
                      catchError(err => {return (err)}));
  }

}

