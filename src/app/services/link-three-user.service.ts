import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinkThreeUserData } from '../interfaces/link-three-user-data';

@Injectable({
  providedIn: 'root',
})
export class LinkThreeUserService {
  linkThreeUser = 'https://fakerapi.it/api/v1/persons?_quantity=1';

  constructor(private http: HttpClient) {}

  getLinkThreeUser(): Observable<LinkThreeUserData> {
    return this.http.get<LinkThreeUserData>(this.linkThreeUser);
  }
}
