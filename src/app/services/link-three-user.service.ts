import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkThreeUserService {

  linkThreeUser = "https://fakerapi.it/api/v1/persons?_quantity=1"

  constructor(private http: HttpClient) { }

  getLinkThreeUser(): Observable<any> {
    return this.http.get<any>(this.linkThreeUser)
  }
}
