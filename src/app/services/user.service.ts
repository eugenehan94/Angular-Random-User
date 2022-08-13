import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userLink = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    // TODO: add eventHandle - pipe into catchError
    return this.http.get<any>(this.userLink);
  }

}
