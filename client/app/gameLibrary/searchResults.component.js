System.register(['angular2/core', 'angular2/router', '../services/gameLibrary.service', '../services/auth.service', '../services/game-platform.filter', '../services/game-order.filter'], function(exports_1, context_1) {
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
    var core_1, router_1, gameLibrary_service_1, auth_service_1, router_2, game_platform_filter_1, game_order_filter_1;
    var SearchResultsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (gameLibrary_service_1_1) {
                gameLibrary_service_1 = gameLibrary_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (game_platform_filter_1_1) {
                game_platform_filter_1 = game_platform_filter_1_1;
            },
            function (game_order_filter_1_1) {
                game_order_filter_1 = game_order_filter_1_1;
            }],
        execute: function() {
            SearchResultsComponent = (function () {
                function SearchResultsComponent(_gameLibraryService, _authService, _router, _routeParams) {
                    this._gameLibraryService = _gameLibraryService;
                    this._authService = _authService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.pageTitle = "New Release";
                    this.games = [];
                    this.errorMessage = "";
                    this.platformList = ['ps4', 'xbox one', 'ps3'];
                    this.platformFilter = '';
                    this.orderbyFilter = '';
                }
                SearchResultsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var query = this._routeParams.get('q');
                    this._gameLibraryService.search(query)
                        .subscribe(function (games) { return _this.games = games; }, function (error) { return _this.errorMessage = error; });
                };
                SearchResultsComponent.prototype.updatePlatformFilter = function (val) {
                    this.platformFilter = val;
                };
                SearchResultsComponent.prototype.orderby = function (val) {
                    this.orderbyFilter = val;
                };
                SearchResultsComponent = __decorate([
                    core_1.Component({
                        selector: 'search-results',
                        templateUrl: 'app/gameLibrary/searchResults.component.html',
                        pipes: [game_platform_filter_1.GamePlatformFilterPipe, game_order_filter_1.GameOrderFilterPipe],
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [gameLibrary_service_1.GameLibraryService, auth_service_1.AuthService, router_1.Router, router_1.RouteParams])
                ], SearchResultsComponent);
                return SearchResultsComponent;
            }());
            exports_1("SearchResultsComponent", SearchResultsComponent);
        }
    }
});
//# sourceMappingURL=searchResults.component.js.map