import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinkFourUserData } from '../interfaces/link-four-user-data';
@Injectable({
  providedIn: 'root',
})
export class LinkFourUserService {
  private randomNumber = Math.floor(Math.random() * 7 + 1);
  linkFourUser = `https://reqres.in/api/users/${this.randomNumber}`;
  constructor(private http: HttpClient) {}

  getLinkFourUser(): Observable<LinkFourUserData> {
    return this.http.get<LinkFourUserData>(this.linkFourUser);
  }
}
