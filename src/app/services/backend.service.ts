import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resp } from './interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BackendService {
  // scriptPath: string = 'http://localhost/backendLawFirm/scripts/';
  // mediaPath: string = 'http://localhost/backendLawFirm/medias/';

  scriptPath: string = 'https://icc.ghwo.org/backendLawFirm/scripts/';
  mediaPath: string = 'https://icc.ghwo.org/backendLawFirm/medias/';

  constructor(private http: HttpClient) {}

  SubmitQuery(data: any): Observable<Resp[]> {
    return this.http.post<Resp[]>(this.scriptPath + 'upload.php', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
      }),
    });
  }

  request_session_for_stripe_card_process(data: any): Observable<Resp[]> {
    const _file = 'stripe_confirm_card_pay_process.php';
    return this.http.post<Resp[]>(this.scriptPath + _file, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
      }),
    });
  }

  requset_stripe_session(data: any): Observable<Resp[]> {
    const _file = 'stripe_checkout_one_off_process.php';
    return this.http.post<Resp[]>(this.scriptPath + _file, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
      }),
    });
  }
}
