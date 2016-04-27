import {Component} from 'angular2/core'

import {AuthService} from '../services/auth.service'

@Component({
    selector: 'my-login',
    templateUrl: 'app/auth/login.component.html',
    
})
export class LoginComponent {
    public username : string = "";
    public password : string = "";
    
    constructor(private _authService : AuthService) {        
    }
    
    login(): void {
        //console.log('login ' + this.username + "-" + this.password);
        this._authService.login({
           'username': this.username,
           'password': this.password 
        });
                            
    }
    
}