import {Component} from 'angular2/core'

import {AuthService} from '../services/auth.service'

@Component({
    selector: 'my-login',
    templateUrl: 'app/auth/login.component.html',
    
})
export class LoginComponent {
    public userEmail : string = "";
    public password : string = "";
    
    public errorMessage: string = "";    
    public userObject: any;
    
    constructor(private _authService : AuthService) {        
    }
    
    login(): void {
        console.log('login ' + this.userEmail + "-" + this.password);
        
        this._authService.login({
           'email': this.userEmail,
           'password': this.password 
        }).subscribe(
            user => this.userObject = user,
            error => this.errorMessage = <any>error);
        )                            
    }
        
}