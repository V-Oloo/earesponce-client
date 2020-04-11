import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

    readonly _BaseUri = 'http://dev.reinitresearch.com/api';

  constructor(private http: HttpClient) { }

  contactUs(data: any) {
    return this.http.post<any>(this._BaseUri + '/send/message', data);
  }
}
