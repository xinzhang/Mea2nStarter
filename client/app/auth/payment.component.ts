import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
 
import {PaymentService} from '../services/payment.service';

@Component({
    selector: 'my-payment',
    templateUrl: 'app/auth/payment.component.html',
    
})
export class PaymentComponent {
    public pageTitle : string = "Setup your payment";
    public card = {
        payamount: "18.89",
        name: "",
        cvv: "",
        cardno:  "",
        expmonth:  "",
        expyear:  ""         
    }
    
    public errorMessage: string = "";
                  
    constructor(private paymentService : PaymentService, 
                private _router: Router) {        
    }
           
    paynow(): void {
        
        console.log( JSON.stringify(this.card));
                
        // this.paymentService.process()
        //     .subscribe(data => {                                 
        //     },
        //     error => this.errorMessage = <any>error);
        // )         
    }
        
}