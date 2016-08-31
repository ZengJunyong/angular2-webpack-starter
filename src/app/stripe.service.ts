import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';

import {Observable}     from 'rxjs/Observable';

@Injectable()
export class StripeService {
  constructor(private http: Http) {
  }

  pay(payment: any): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('http://letsgaigai.com/stripe', payment, options)
      .map((res: Response) => res.json());
  }


}

