import {Component, Output, EventEmitter} from 'angular2/core';
import {
    FormBuilder,
    Validators,
    Control,
    ControlGroup,
    FORM_DIRECTIVES
} from 'angular2/common';

import {RouteParams, Router} from 'angular2/router';


@Component({
    templateUrl: 'app/auth/setupPayment.component.html',
    styleUrls: ['app/auth/setupPayment.component.css'],
    directives: [FORM_DIRECTIVES]
})

export class SetupPaymentComponent {
    public currentPage: number = 1;
    public pageTitle : string = "Setup your payment";
    public card = {
        payamount: "18.89",
        name: "",
        cvv: "",
        cardno:  "",
        expmonth:  "",
        expyear:  ""         
    }

    next(): void {
        this.currentPage++;
    }
    
    prev(): void {
        this.currentPage--;
    }
    
}
