import {Component} from 'angular2/core'

@Component({
    selector: 'my-login',
    templateUrl: 'app/auth/login.component.html',
    
})
export class LoginComponent {
    public username : string = "";
    public password : string = "";
    
    login(): void {
        console.log('login ' + this.username + "-" + this.password);
        
    }
    
}