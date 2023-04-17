import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IApiStart } from '../interfaces/iapi-start';
import { Observable } from 'rxjs';
import { IApiBalanceSheet } from '../interfaces/iapi-balance-sheet';
import { ISubmitApplication } from '../interfaces/isubmit-application';
import { ISubmitForm } from '../interfaces/isubmit-form';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  host = '/api';
  constructor(private http: HttpClient) {}

  getStart(): Observable<IApiStart> {
    return this.http.get<IApiStart>(this.host + '/start');
  }

  getBalanceSheet(): Observable<IApiBalanceSheet> {
    return this.http.get<IApiBalanceSheet>(this.host + '/balance');
  }

  submitApplication(form: ISubmitForm): Observable<ISubmitApplication> {
    return this.http.post<ISubmitApplication>(this.host + '/submit', form);
  }
}
