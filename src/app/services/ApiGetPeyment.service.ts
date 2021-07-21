import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable()
export class ApiGetPaymentService {

  private urlFetchCourse = "http://sevkn.ru.ac.th/etest/getPayment.jsp?STD_CODE=";

  constructor(private http: HttpClient) { 
  }
  getJSON(): Observable<any> {
    return this.http.get(this.urlFetchCourse);
  }

  getJsonPayment(username:string,sem:string,year:string,refkey:string){
    return this.http.get(this.urlFetchCourse+username+'&sem='+sem+'&year='+year+'&refkey='+refkey)
                .pipe(map((response: any)=> response ),
                      catchError(err => { return (err)}));
  }
}

