import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
   userLink = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    // TODO: add eventHandle - pipe into catchError
    return this.http.get<any>(this.userLink);
  }
  // handleError(error: any){
  //   console.log("the initial error: ", error)
  //   let errorMessage = '';
  //   if(error.error instanceof ErrorEvent){
  //     // Client-side error
  //     errorMessage = `Error: ${error.error.message}`;
  //   }else {
  //     // Server-side error
  //     errorMessage = `Error Code: ${error.status} \nMessage: ${error.message}`;
  //   }
  //   console.log("errorMessage: ", errorMessage)
  //   return throwError(()=> {
  //     return errorMessage;
  //   })
  // }

}
