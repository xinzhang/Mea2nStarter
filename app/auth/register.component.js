System.register(['angular2/core', '../services/auth.service'], function(exports_1, context_1) {
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
    var core_1, auth_service_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent(_authService) {
                    this._authService = _authService;
                    this.userEmail = "";
                    this.password = "";
                    this.errorMessage = "";
                }
                RegisterComponent.prototype.register = function () {
                    var _this = this;
                    console.log('register ' + this.userEmail);
                    this._authService.register({
                        'email': this.userEmail,
                        'password': this.password
                    }).subscribe(function (user) { return _this.userObject = user; }, function (error) { return _this.errorMessage = error; });
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/auth/register.component.html'
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.component.js.map