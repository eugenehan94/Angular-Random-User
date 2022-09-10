import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { LinkOneUserData } from '../interfaces/link-one-user-data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
   userLink = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) {}

  getUser(): Observable<LinkOneUserData> {
    return this.http.get<LinkOneUserData>(this.userLink);
  }
}
