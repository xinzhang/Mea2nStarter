
import {Injectable} from 'angular2/core';

import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
    private _register_url = '/auth/register';
    private _login_url = '/auth/login';
    
    AuthorisedUser:string = null;

    constructor(private _http: Http) { }

    register(data: any): Observable<any> {
        
        console.log('service level register ' + data);
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(this._register_url, JSON.stringify(data), options)
            .map(resp => resp.json())            
            .catch(this.handleError);
    }

    login(data: any): Observable<any> {        
        console.log('service level login ' + data);
        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this._http.post(this._login_url, JSON.stringify(data), options) 
             .map ( resp => resp.json())
            .catch(this.handleError);        
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
