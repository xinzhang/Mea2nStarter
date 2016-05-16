import {Component, OnInit} from '@angular/core';
import { Router, RouteSegment, OnActivate } from '@angular/router';

import {IGame} from '../services/game';
import {GameService} from '../services/game.service';
import {GameLibraryService} from '../services/gameLibrary.service';
import {AuthService} from '../services/auth.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'search-results',
    templateUrl: 'app/gameLibrary/gameDetail.component.html',    
    directives: [ROUTER_DIRECTIVES]
})
export class GameDetailComponent implements OnInit {
    pageTitle: string = "Detail";
    game:IGame = null;
    errorMessage:string = "";
        
    constructor(private _gameLibraryService: GameLibraryService, 
        private _authService: AuthService,
        private _router: Router) {            
    }
    
    routerOnActivate(curr: RouteSegment): void {
        let isin = curr.getParam('isin');
        
        this._gameLibraryService.getByIsin(isin)
            .subscribe(
                g => {
                    this.game = g; 
                },                    
                error => this.errorMessage = <any>error
            );        
    }
    
    ngOnInit(): void {
    }
        
        
    // addToCollection(g: IGame): void {
    //     this._gameService.AddToMy('collection', g.gameId)
    //         .subscribe(
    //             data => {                    
    //                 this._authService.CurrentUser.myCollection.push(g.gameId);
    //             },
    //             error => this.errorMessage = <any> error  
    //         );        
    // }
    
    // addToWish(g: IGame): void {
    //      this._gameService.AddToMy('wishlist', g.gameId)
    //         .subscribe(
    //             data => {
    //                 this._authService.CurrentUser.myWishlist.push(g.gameId);                    
    //             },
    //             error => this.errorMessage = <any> error  
    //         ); 
    // }
    
    // isInMy(type: string, gameId: number) {
        
    //     if (this._authService.CurrentUser == null)
    //         return false;
        
    //     if (type == 'collection') {
    //         if (this._authService.CurrentUser.myCollection == null || this._authService.CurrentUser.myCollection.length == 0)
    //             return false;
            
    //         return (this._authService.CurrentUser.myCollection.indexOf(gameId) > -1)
    //     }
        
    //     if (type == 'wishlist') {
    //         if (this._authService.CurrentUser.myWishlist== null || this._authService.CurrentUser.myWishlist.length == 0)
    //             return false;
            
    //         return (this._authService.CurrentUser.myWishlist.indexOf(gameId) > -1)            
    //     }
        
    //     return false;
    // }
    
}