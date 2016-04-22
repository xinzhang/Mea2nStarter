import {Component} from 'angular2/core';

@Component({    
    templateUrl: 'app/auth/register.component.html'
})
export class RegisterComponent {
    public useremail : string = "";
    public password : string = "";
    
    register(): void {
        console.log('register');
        
    }
}
