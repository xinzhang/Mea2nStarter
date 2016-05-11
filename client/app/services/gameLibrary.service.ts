
import {Injectable} from 'angular2/core';

import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {IGame} from './game';

@Injectable()
export class GameLibraryService {                
    private _gamelib_search_url = '/gamelib/search/';
    private _gamelib_addToRent_url = '/gamelib/addToRent';
    
    constructor(private _http: Http) { }

    private games: IGame[] = [];
    
    search(q:string): Observable<IGame[]> {        
                
        return this._http.get(this._gamelib_search_url + q)
            .map ( 
                (resp: Response) => <IGame[]>resp.json()
            )
            .do( 
                data => {
                    console.log(data);
                    this.games = data;
                }
            )
            .catch(this.handleError);
    }
    
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    

}
