import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkTwoUserService {

  private linkTwoUser = "https://random-data-api.com/api/users/random_user"

  constructor(private http: HttpClient) { }

  getLinkTwoUsers(): Observable<any> {
    return this.http.get<any>(this.linkTwoUser);
  }
}
