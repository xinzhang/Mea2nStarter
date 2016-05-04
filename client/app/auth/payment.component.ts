import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
 
import {PaymentService} from '../services/payment.service';

@Component({
    selector: 'my-payment',
    templateUrl: 'app/auth/payment.component.html',
    
})
export class PaymentComponent {
    public pageTitle : string = "Setup your payment";
    public userEmail : string = "";
    public password : string = "";
    
    public errorMessage: string = "";
                  
    constructor(private paymentService : PaymentService, 
                private _router: Router) {        
    }
           
    paynow(): void {
                
        this.paymentService.process()
            .subscribe(data => {                                 
            },
            error => this.errorMessage = <any>error);
        )         
    }
        
}