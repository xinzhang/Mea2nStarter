import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
 
import {AuthService} from '../services/auth.service';

@Component({
    selector: 'my-login',
    templateUrl: 'app/auth/login.component.html',
    
})
export class LoginComponent {
    public userEmail : string = "";
    public password : string = "";
    
    public errorMessage: string = "";
                  
    constructor(private _authService : AuthService, 
                private _router: Router) {        
    }
    
    @Output() LOGIN_SUCCESS: EventEmitter<string> = new EventEmitter<string>();
       
    login(): void {
                
        this._authService.login({
           'email': this.userEmail,
           'password': this.password 
        }).subscribe(
            data => {                 
                //localStorage.setItem('jwt', data.email);
                //this._router.navigate(['Welcome']);
                
                this._authService.AuthorisedUser = data.email;
                this._authService.setAuthorisedUserData(data);
                                                                
                this.LOGIN_SUCCESS.emit("login success message");                                
            },
            error => this.errorMessage = <any>error);
        )         
    }
        
}