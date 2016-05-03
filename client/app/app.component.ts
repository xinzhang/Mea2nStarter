import {Component, OnInit} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; //load all features

import {WelcomeComponent} from './home/welcome.component';
import {NewReleaseComponent} from './home/newRelease.component';

import {RegisterComponent} from './auth/register.component';
import {LoginComponent} from './auth/login.component';
import {ForgotPasswordComponent} from './auth/forgotPassword.component';

import {HighlightDirective} from './attributes/highlight.directive';

import {AuthService} from './services/auth.service';
import {GameService} from './services/game.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, LoginComponent, HighlightDirective],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, AuthService, GameService]
})
@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/newRelease', name: 'NewRelease', component: NewReleaseComponent },
    { path: '/register', name: 'Register', component: RegisterComponent },
    { path: '/forgotPassword', name: 'ForgotPassword', component: ForgotPasswordComponent }
])
export class AppComponent implements OnInit {
    pageTitle: string = "this is the first app component.";
        
    constructor(public authService : AuthService) {        
    }
    
    ngOnInit(): void {
        this.authService.AuthorisedUser = localStorage.getItem('jwt');        
    }

    signout(): void {
        localStorage.removeItem('jwt');
        this.authService.AuthorisedUser = null;
    }

    onLoginSuccess(message: string): void {
        //this.user = user;
        console.log(message);
    }
    
}