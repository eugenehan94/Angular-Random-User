import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkFourUserService {

  private randomNumber = Math.floor(Math.random() * 7 + 1);
  private linkFourUser = `https://reqres.in/api/users/${this.randomNumber}`
  constructor(private http: HttpClient) { }

  getLinkFourUser(): Observable<any> {
   return this.http.get<any>(this.linkFourUser)
  }


}
