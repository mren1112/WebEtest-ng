
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { map, catchError } from 'rxjs/operators';
import { Http } from '@angular/http';
=======
import { map, catchError } from 'rxjs/operators';
>>>>>>> 762a820f (bk commit)


export interface TodoProfile {
  STD_CODE: string
  NameThai: string;
  NameEng: string;
  Birth: string;
}

@Injectable()
export class ApiFectSelectPayQrService {

<<<<<<< HEAD
  public us = sessionStorage.getItem("stdcode");


  //urlFetchETCourse = "http://sevkn.ru.ac.th//etest/ADManage/apinessy/etest/getProfile.jsp?STD_CODE=6290508511";
 //urlFetchETCourse = "http://sevkn.ru.ac.th//etest/ADManage/apinessy/etest/getProfile.jsp?STD_CODE="+this.us;
  constructor(private httppp: HttpClient,private http:Http) {
    /*this.getJSON().subscribe(data => {
      //sessionStorage.setItem("stdcode", data.STD_CODE);
      sessionStorage.setItem("namethai", data.NameThai);
      sessionStorage.setItem("facno", data.FacNo);
      sessionStorage.setItem("majorno", data.MajorNo);
      sessionStorage.setItem("majornamthai", data.MajorNameThai);
      sessionStorage.setItem("facName", data.FacNameThai);
      sessionStorage.setItem("birth", data.Birth);*/
      //console.log(response);
     // sessionStorage.setItem("stdcode", response.STD_CODE);
   // });
  }
  getJSON(username:string,sem:string,year:string,refkey:string){
    return this.httppp.get('http://sevkn.ru.ac.th/etest/getPayQr.jsp?STD_CODE='+username+'&sem='+sem+'&year='+year+'&refkey='+refkey)
=======
 url = "http://sevkn.ru.ac.th/etest-api-12c/getPayQr.jsp?STD_CODE=";
  constructor(private http: HttpClient) { }

  getJSON(username:string,sem:string,year:string,refkey:string){
    return this.http.get(this.url+username+'&sem='+sem+'&year='+year+'&refkey='+refkey)
>>>>>>> 762a820f (bk commit)
                .pipe(map((response: any)=> response ),
                      catchError(err => {return (err)}));
  }



}
