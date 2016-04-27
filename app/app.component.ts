import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {WelcomeComponent} from './home/welcome.component';
import {RegisterComponent} from './auth/register.component';
import {LoginComponent} from './auth/login.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES, LoginComponent],
    providers: [ROUTER_PROVIDERS]    
})
@RouteConfig([
    { path: '/welcome', name:'Welcome', component: WelcomeComponent, useAsDefault:true} ,
    { path: '/register', name:'Register', component: RegisterComponent}
])
export class AppComponent {
    pageTitle : string = "this is the first app component." ;
    user1: string = "abc3";    
}