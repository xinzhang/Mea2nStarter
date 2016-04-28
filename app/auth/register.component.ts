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
    public userObject: any;

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
            user => {
                this.userObject = user;
                console.log(this.userObject);
                localStorage.setItem('jwt', this.userObject.email);
                //this._router.navigate(['Welcome']);
                this.REGISTER_SUCCESS.emit(this.userObject.email);
            },
            error => this.errorMessage = <any>error);   
        )
        
        this._router.navigate(['Welcome']);
    }


}
