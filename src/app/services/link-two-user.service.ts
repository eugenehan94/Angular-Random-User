import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinkTwoUserData } from '../interfaces/link-two-user-data';

@Injectable({
  providedIn: 'root',
})
export class LinkTwoUserService {
  linkTwoUser = 'https://random-data-api.com/api/users/random_user';

  constructor(private http: HttpClient) {}

  getLinkTwoUsers(): Observable<LinkTwoUserData> {
    return this.http.get<LinkTwoUserData>(this.linkTwoUser);
  }
}
