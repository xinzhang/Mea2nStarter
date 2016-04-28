System.register(['angular2/core', 'angular2/router', 'angular2/http', 'rxjs/Rx', './home/welcome.component', './home/newRelease.component', './auth/register.component', './auth/login.component', './auth/forgotPassword.component', './services/auth.service', './services/game.service'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, welcome_component_1, newRelease_component_1, register_component_1, login_component_1, forgotPassword_component_1, auth_service_1, game_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (welcome_component_1_1) {
                welcome_component_1 = welcome_component_1_1;
            },
            function (newRelease_component_1_1) {
                newRelease_component_1 = newRelease_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (forgotPassword_component_1_1) {
                forgotPassword_component_1 = forgotPassword_component_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (game_service_1_1) {
                game_service_1 = game_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.pageTitle = "this is the first app component.";
                    this.user = null;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.user = localStorage.getItem('jwt');
                    console.log('ngOnInit ' + this.user);
                };
                AppComponent.prototype.signout = function () {
                    localStorage.removeItem('jwt');
                    this.user = null;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES, login_component_1.LoginComponent],
                        providers: [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, auth_service_1.AuthService, game_service_1.GameService]
                    }),
                    router_1.RouteConfig([
                        { path: '/welcome', name: 'Welcome', component: welcome_component_1.WelcomeComponent, useAsDefault: true },
                        { path: '/newRelease', name: 'NewRelease', component: newRelease_component_1.NewReleaseComponent },
                        { path: '/register', name: 'Register', component: register_component_1.RegisterComponent },
                        { path: '/forgotPassword', name: 'ForgotPassword', component: forgotPassword_component_1.ForgotPasswordComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map