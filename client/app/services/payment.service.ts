
import {Injectable} from 'angular2/core';

import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PaymentService {
    private _payment_url = '/auth/register';
    
    private secret:string = "vD3FnO5n7elLWkK-z4zJpg";
    private pubkey:string = "pk_R0jSerMKd4ZmzkmioV3Z3g";
    
    process(data:any): Observable<any> {
        console.log("process");
        return null;
    }
    
    
}
