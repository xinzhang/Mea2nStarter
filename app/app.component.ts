import {Component, OnInit} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; //load all features

import {WelcomeComponent} from './home/welcome.component';
import {NewReleaseComponent} from './home/newRelease.component';

import {RegisterComponent} from './auth/register.component';
import {LoginComponent} from './auth/login.component';
import {ForgotPasswordComponent} from './auth/forgotPassword.component';

import {AuthService} from './services/auth.service';
import {GameService} from './services/game.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, LoginComponent],
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
    user: string = null;
    ngOnInit(): void {
        
        this.user = localStorage.getItem('jwt');
        console.log('ngOnInit ' + this.user);
    }

    signout(): void {
        localStorage.removeItem('jwt');
        this.user = null;
    }
}