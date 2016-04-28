import {Component} from 'angular2/core';
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
    public userObject: any;
    
    constructor(private _authService : AuthService, 
                private _router: Router) {        
    }
    
    login(): void {
        console.log('login ' + this.userEmail + "-" + this.password);
        
        this._authService.login({
           'email': this.userEmail,
           'password': this.password 
        }).subscribe(
            data => { 
                this.userObject = data;
                console.log(this.userObject);
                localStorage.setItem('jwt', this.userObject.email);
                this._router.navigate(['welcome']);
            },
            error => this.errorMessage = <any>error);
        )         
    }
        
}