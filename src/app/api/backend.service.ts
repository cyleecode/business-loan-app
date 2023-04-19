import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IApiStart } from '../interfaces/iapi-start';
import { Observable } from 'rxjs';
import { IApiBalanceSheet } from '../interfaces/iapi-balance-sheet';
import { ISubmitApplication } from '../interfaces/isubmit-application';
import { ISubmitForm } from '../interfaces/isubmit-form';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  host = environment.apiUrl + '/api';
  constructor(private http: HttpClient) {}

  getStart(): Observable<IApiStart> {
    return this.http.get<IApiStart>(this.host + '/start');
  }

  getBalanceSheet(form: ISubmitForm): Observable<IApiBalanceSheet> {
    const { provider, company } = form;
    const params = new HttpParams()
      .set('company', company)
      .set('provider', provider);
    return this.http.get<IApiBalanceSheet>(
      this.host + '/balance?' + params.toString()
    );
  }

  submitApplication(form: ISubmitForm): Observable<ISubmitApplication> {
    return this.http.post<ISubmitApplication>(this.host + '/submit', form);
  }
}
