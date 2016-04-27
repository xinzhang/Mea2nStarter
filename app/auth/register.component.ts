import {Component} from 'angular2/core';

@Component({    
    templateUrl: 'app/auth/register.component.html'
})
export class RegisterComponent {
    public userEmail : string = "";
    public password : string = "";
    
    register(): void {
        console.log('register ' + this.userEmail);
        
    }
}
