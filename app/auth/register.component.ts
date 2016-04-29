import {Component, Output, EventEmitter} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {AuthService} from '../services/auth.service';

@Component({
    templateUrl: 'app/auth/register.component.html'
})

export class RegisterComponent {
    public userEmail: string = "";
    public password: string = "";

    public errorMessage: string = "";
    
    constructor(private _authService: AuthService,
                private _router: Router) {
    }

    @Output() REGISTER_SUCCESS = new EventEmitter();
    
    register(): void {
        console.log('register ' + this.userEmail);
        this._authService.register({
            'email': this.userEmail,
            'password': this.password
        }).subscribe(
            data => {
                localStorage.setItem('jwt', data.email);
                //this._router.navigate(['Welcome']);
                this._authService.AuthorisedUser = data.email;                
            },
            error => this.errorMessage = <any>error);   
        )
        
        this._router.navigate(['Welcome']);
    }

}
