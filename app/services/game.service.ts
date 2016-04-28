
import {Injectable} from 'angular2/core';

import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {IGame} from './game';

@Injectable()
export class GameService {
    //private _games_url = '/games';
    private _games_url = 'api/products/games.json';
    
    private games: IGame[] = [];  

    constructor(private _http: Http) { }

    getNewRelease(): Observable<IGame[]> {
        
        console.log('service level newRelease ';
        
        return this._http.get(this._games_url)
            .map ( 
                (resp: Response) => <IGame[]>resp.json()
            )
            .do( 
                data => this.games = data
            )
            .catch(this.handleError);
    }
        
    getGameById(id: number) : IGame {
        return this.games.find( x=> x.gameId == id);
    }

    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
