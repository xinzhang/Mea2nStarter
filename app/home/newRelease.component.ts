import {Component, OnInit} from 'angular2/core';

import {IGame} from '../services/game';
import {GameService} from '../services/game.service';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { GamePlatformFilterPipe } from '../services/game-platform.filter';
import { GameOrderFilterPipe } from '../services/game-order.filter';

@Component({
    selector: 'new-release',
    templateUrl: 'app/home/newRelease.component.html',
    styleUrls: ['app/home/newRelease.component.css'],
    pipes: [GamePlatformFilterPipe, GameOrderFilterPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class NewReleaseComponent implements OnInit {
    pageTitle: string = "New Release";
    games:IGame[] = [];
    errorMessage:string = "";
    
    platformList:string[] = ['ps4', 'xbox one', 'ps3'];
    
    platformFilter: string = '';
    orderbyFilter: string = ''; 
    
    constructor(private _gameService: GameService) {        
    }
    
    ngOnInit(): void {
        console.log('game new release componet initialized.');
        this._gameService.getNewRelease()
            .subscribe(
                games => this.games = games,
                error => this.errorMessage = <any>error);;
    }
    
    updatePlatformFilter(val:string): void {
        this.platformFilter = val;
    }
    
    orderby(val:string): void {
        this.orderbyFilter = val;
    }
    
}