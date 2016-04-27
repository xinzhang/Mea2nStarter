
import {Injectable} from 'angular2/core';

import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
    private _url = '/auth';
        
    constructor(private _http: Http) { }
    
    register(any):void {        
        // return this._http.post(this._url + '/register', any) 
        //     .map( (resp:Response) => <IProduct[]>resp.json() )
        //     .do(data => this.cachedProducts = data)
        //     .catch(this.handleError);
        console.log('service level register');
    }
    
    login(any) : void {        
        // return this.cachedProducts.find(x => x.productId == id);
        console.log('service level login');
    }
    
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
