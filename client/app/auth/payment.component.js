System.register(['angular2/core', 'angular2/router', '../services/payment.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, payment_service_1;
    var PaymentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (payment_service_1_1) {
                payment_service_1 = payment_service_1_1;
            }],
        execute: function() {
            PaymentComponent = (function () {
                function PaymentComponent(paymentService, _router) {
                    this.paymentService = paymentService;
                    this._router = _router;
                    this.pageTitle = "Setup your payment";
                    this.card = {
                        payamount: "18.89",
                        name: "",
                        cvv: "",
                        cardno: "",
                        expmonth: "",
                        expyear: ""
                    };
                    this.errorMessage = "";
                }
                PaymentComponent.prototype.paynow = function () {
                    console.log(JSON.stringify(this.card));
                    // this.paymentService.process()
                    //     .subscribe(data => {                                 
                    //     },
                    //     error => this.errorMessage = <any>error);
                    // )         
                };
                PaymentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-payment',
                        templateUrl: 'app/auth/payment.component.html',
                    }), 
                    __metadata('design:paramtypes', [payment_service_1.PaymentService, router_1.Router])
                ], PaymentComponent);
                return PaymentComponent;
            }());
            exports_1("PaymentComponent", PaymentComponent);
        }
    }
});
//# sourceMappingURL=payment.component.js.map