import {Component} from 'angular2/core';

import {AuthService} from '../services/auth.service';

@Component({
    templateUrl: 'app/auth/register.component.html'
})
export class RegisterComponent {
    public userEmail: string = "";
    public password: string = "";

    constructor(private _authService: AuthService) {
    }

    register(): void {
        console.log('register ' + this.userEmail);
        this._authService.register({
            'email': this.userEmail,            
            'password': this.password
        });
    }
}
