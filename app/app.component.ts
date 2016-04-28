import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx'; //load all features

import {WelcomeComponent} from './home/welcome.component';
import {NewReleaseComponent} from './home/newRelease.component';

import {RegisterComponent} from './auth/register.component';
import {LoginComponent} from './auth/login.component';
import {InnerLoginComponent} from './auth/innerLogin.component';
import {ForgotPasswordComponent} from './auth/forgotPassword.component';

import {AuthService} from './services/auth.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, LoginComponent],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, AuthService]    
})
@RouteConfig([
    { path: '/welcome', name:'Welcome', component: WelcomeComponent, useAsDefault:true} ,
    { path: '/newRelease', name:'NewRelease', component: NewReleaseComponent} ,
    { path: '/register', name:'Register', component: RegisterComponent},
    { path: '/login', name:'Login', component: LoginComponent},
    { path: '/forgotPassword', name:'ForgotPassword', component: ForgotPasswordComponent}
])
export class AppComponent {
    pageTitle : string = "this is the first app component." ;
    user1: string = "abc3";    
}