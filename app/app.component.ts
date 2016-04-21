import {Component} from 'angular2/core';
import {ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {WelcomeComponent} from './home/welcome.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]    
})
@RouteConfig([
    { path: '/welcome', name:'Welcome', component: WelcomeComponent, useAsDefault:true}
])
export class AppComponent {
    pageTitle : string = "this is the first app component." ;
    user1: string = "abc3";    
}