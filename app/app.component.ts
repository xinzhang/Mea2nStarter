import {Component} from 'angular2/core';
import {WelcomeComponent} from './home/welcome.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    pageTitle : string = "this is the first app component." ;
    user1: string = "abc3";    
}