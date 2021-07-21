
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


export interface TodoProfile {
  STD_CODE: string
  NameThai: string;
  NameEng: string;
  Birth: string;
}

@Injectable()
export class ApiFectSelectPayQrService {

 url = "http://sevkn.ru.ac.th/etest-api-12c/getPayQr.jsp?STD_CODE=";
  constructor(private http: HttpClient) { }

  getJSON(username:string,sem:string,year:string,refkey:string){
    return this.http.get(this.url+username+'&sem='+sem+'&year='+year+'&refkey='+refkey)
                .pipe(map((response: any)=> response ),
                      catchError(err => {return (err)}));
  }



}
