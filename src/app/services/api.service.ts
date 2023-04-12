import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment as configs } from 'environments/environment';

@Injectable({
   providedIn: 'root',
})

export class APIService {
   public baseURL: string = configs.baseUrl;
   constructor(private http: HttpClient) { }


   // default collections header
   public defaultHeader(): any {
      // const cId: any = this._cryptoService.decrypting(localStorage.getItem('c_id'));
      // return new HttpHeaders({
      //    'e_id': configs.e_id,
      //    'c_id': cId,
      //    token: localStorage.getItem('_ac'),
      // });
      return
   }


  

   // error handling
   public handleError(error: any) {
      return of(error);
   }

   // http get method
   get(path: string, params?: string, type?: any, obj?: any): Observable<any> {
      return this.http.get(`${configs.baseUrl}${path}${params}`, {
         headers: this.defaultHeader(),
      }).pipe(catchError(this.handleError));
   }

   // http post method
   post(path: string, params: string, body: any, type?: string): Observable<any> {
      return this.http.post(`${configs.baseUrl}${path}${params}`, body, {
         headers: this.defaultHeader(),
      }).pipe(catchError(this.handleError));
   }
}
