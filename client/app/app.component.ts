import {Component, OnInit} from '@angular/core';
import {ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES, Router} from '@angular/router'
import { HTTP_PROVIDERS } from '@angular/http';
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
@Routes([
    { path: '/welcome', component: WelcomeComponent},
    { path: '/newRelease', component: NewReleaseComponent },
    { path: '/myGames', component: MyGamesComponent },
    { path: '/register', component: RegisterComponent },
    { path: '/forgotPassword', component: ForgotPasswordComponent },
    { path: '/payment', component: SetupPaymentComponent },
    { path: '/search/:q', component: SearchResultsComponent },
    { path: '/gameDetail/:isin', component: GameDetailComponent }
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
        this._router.navigate(['/search', this.q]);         
    }
    
}