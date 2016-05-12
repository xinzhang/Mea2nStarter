import {Component, OnInit} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import { RouteParams, Router } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; //load all features

import {WelcomeComponent} from './home/welcome.component';
import {NewReleaseComponent} from './home/newRelease.component';
import {MyGamesComponent} from './home/myGames.component';
import {SearchResultsComponent} from './gameLibrary/searchResults.component';
import {GameDetailComponent} from './gameLibrary/gameDetail.component';

import {RegisterComponent} from './auth/register.component';
import {LoginComponent} from './auth/login.component';
import {ForgotPasswordComponent} from './auth/forgotPassword.component';
import {SetupPaymentComponent} from './auth/setupPayment.component';

import {HighlightDirective} from './attributes/highlight.directive';

import {AuthService} from './services/auth.service';
import {GameService} from './services/game.service';
import {GameLibraryService} from './services/gameLibrary.service';
import {PaymentService} from './services/payment.service';
import {UsernameValidator} from './validators/usernameValidator'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, LoginComponent, HighlightDirective],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, 
        AuthService, GameService, GameLibraryService, PaymentService, 
        UsernameValidator
    ]
})
@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/newRelease', name: 'NewRelease', component: NewReleaseComponent },
    { path: '/myGames', name: 'MyGames', component: MyGamesComponent },
    { path: '/register', name: 'Register', component: RegisterComponent },
    { path: '/forgotPassword', name: 'ForgotPassword', component: ForgotPasswordComponent },
    { path: '/payment', name: 'Payment', component: SetupPaymentComponent },
    { path: '/search/:q', name: 'Search', component: SearchResultsComponent }
    { path: '/gameDetail/:isin', name: 'GameDetail', component: GameDetailComponent }
])
export class AppComponent implements OnInit {
    pageTitle: string = "this is the first app component.";
    q: string = "";
    
    constructor(public authService : AuthService, private _router: Router) {        
    }
    
    ngOnInit(): void {
        this.authService.CurrentUser = JSON.parse(sessionStorage.getItem('session-user'));                        
    }

    signout(): void {                
        this.authService.logout()
            .subscribe( data => {
                sessionStorage.removeItem('session-user');
                this.authService.CurrentUser = null;        
            })
    }

    onLoginSuccess(message: string): void {
        //this.user = user;
        console.log(message);
    }
    
    search(): void {
        console.log('search ' + this.q);
        this._router.navigate(['Search', {q:this.q}]);         
    }
    
}