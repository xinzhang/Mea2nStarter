import {Component, Output, EventEmitter} from 'angular2/core';
import {
    FormBuilder,
    Validators,
    Control,
    ControlGroup,
    FORM_DIRECTIVES
} from 'angular2/common';

import {RouteParams, Router} from 'angular2/router';

import {AuthService} from '../services/auth.service';

import {UsernameValidator} from '../validators/usernameValidator';

@Component({
    templateUrl: 'app/auth/register.component.html',
    styleUrls: ['app/auth/register.component.css'],
    directives: [FORM_DIRECTIVES]
})

export class RegisterComponent {
    public userEmail: string = "";
    public password: string = "";
    public confirmPassword: string = "";

    public errorMessage: string = "";

    public username: Control;
    public pw: Control;
    public regForm: ControlGroup;

    constructor(private _authService: AuthService,
        private _router: Router,
        private builder: FormBuilder) 
    {
        this.username = new Control(
            "",
            Validators.compose([Validators.required, UsernameValidator.startsWithNumber]),
            UsernameValidator.usernameTaken
        );
        
        this.pw = new Control(
            "",
            Validators.compose([Validators.required, Validators.minLength(3)])
        )
        
        this.regForm = builder.group({
            username: this.username,
            pw: this.pw
        })

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
                this._authService.setAuthorisedUserData(data);
            },
            error => this.errorMessage = <any>error);   
        )
        
        this._router.navigate(['Welcome']);
    }

}
