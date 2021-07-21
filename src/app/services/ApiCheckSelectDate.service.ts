
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { element } from 'protractor';
import { map, catchError } from 'rxjs/operators';
import { Http } from '@angular/http';


export interface TodoProfile {
  STD_CODE: string
  NameThai: string;
  NameEng: string;
  Birth: string;
}

@Injectable()
export class ApiCheckSelectDateService {

  public us = sessionStorage.getItem("stdcode");


  //urlFetchETCourse = "http://sevkn.ru.ac.th//etest/ADManage/apinessy/etest/getProfile.jsp?STD_CODE=6290508511";
 //urlFetchETCourse = "http://sevkn.ru.ac.th//etest/ADManage/apinessy/etest/getProfile.jsp?STD_CODE="+this.us;
  constructor(private http: HttpClient,private httpp:Http) { }

  getJSON(username:string,sem:string,year:string,tmpdatetoStr:any,courseno:any,tmpdatetoStr2:any){
    return this.http.get('http://sevkn.ru.ac.th/etest-api-12c/getDateSection.jsp?STD_CODE=' +
    username + '&sem=' + sem + '&year=' + year + '&dateselect=' + tmpdatetoStr + '&courseno=' + courseno + '&tmpdateselect=' + tmpdatetoStr2)
                .pipe(map((response: any)=> response ),
                      catchError(err => {return (err)}));
  }



}
