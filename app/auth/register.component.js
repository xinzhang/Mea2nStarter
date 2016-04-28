System.register(['angular2/core', 'angular2/router', '../services/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, auth_service_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent(_authService, _router) {
                    this._authService = _authService;
                    this._router = _router;
                    this.userEmail = "";
                    this.password = "";
                    this.errorMessage = "";
                    this.REGISTER_SUCCESS = new core_1.EventEmitter();
                }
                RegisterComponent.prototype.register = function () {
                    var _this = this;
                    console.log('register ' + this.userEmail);
                    this._authService.register({
                        'email': this.userEmail,
                        'password': this.password
                    }).subscribe(function (user) {
                        _this.userObject = user;
                        console.log(_this.userObject);
                        localStorage.setItem('jwt', _this.userObject.email);
                        //this._router.navigate(['Welcome']);
                        _this.REGISTER_SUCCESS.emit(_this.userObject.email);
                    }, function (error) { return _this.errorMessage = error; });
                    this._router.navigate(['Welcome']);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], RegisterComponent.prototype, "REGISTER_SUCCESS", void 0);
                RegisterComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/auth/register.component.html'
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.component.js.map