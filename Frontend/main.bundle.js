webpackJsonp([15],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/Modules/Book/Book.module": [
		"../../../../../src/app/Modules/Book/Book.module.ts",
		13
	],
	"app/Modules/CheckLottery/CheckLottery.module": [
		"../../../../../src/app/Modules/CheckLottery/CheckLottery.module.ts",
		12,
		0
	],
	"app/Modules/Home/Home.module": [
		"../../../../../src/app/Modules/Home/Home.module.ts",
		11
	],
	"app/Modules/ListBuy/ListBuy.module": [
		"../../../../../src/app/Modules/ListBuy/ListBuy.module.ts",
		10,
		0
	],
	"app/Modules/ListBuying/ListBuying.module": [
		"../../../../../src/app/Modules/ListBuying/ListBuying.module.ts",
		9,
		0
	],
	"app/Modules/Notification/Notification.module": [
		"../../../../../src/app/Modules/Notification/Notification.module.ts",
		8
	],
	"app/Modules/ProLong/ProLong.module": [
		"../../../../../src/app/Modules/ProLong/ProLong.module.ts",
		7
	],
	"app/Modules/Profile/Profile.module": [
		"../../../../../src/app/Modules/Profile/Profile.module.ts",
		6,
		0
	],
	"app/Modules/SendTo/SendTo.module": [
		"../../../../../src/app/Modules/SendTo/SendTo.module.ts",
		5
	],
	"app/Modules/Setting/Setting.module": [
		"../../../../../src/app/Modules/Setting/Setting.module.ts",
		4,
		0
	],
	"app/Modules/SignIn/SignIn.module": [
		"../../../../../src/app/Modules/SignIn/SignIn.module.ts",
		2,
		0
	],
	"app/Modules/SignInPIN/SignInPIN.module": [
		"../../../../../src/app/Modules/SignInPIN/SignInPIN.module.ts",
		3,
		0
	],
	"app/Modules/SummedUp/SummedUp.module": [
		"../../../../../src/app/Modules/SummedUp/SummedUp.module.ts",
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar *ngIf=\"Authened\"></app-navbar>\r\n<div class=\"loading\">\r\n  <img src=\"assets\\img\\Spinner.gif\">\r\n</div>\r\n<div class=\"layout-main\">\r\n    <router-outlet (activate)=\"onGetComponent($event)\"></router-outlet>\r\n</div>\r\n<app-footer *ngIf=\"Authened\"></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".layout-main {\n  padding-top: 65px;\n  padding-bottom: 100px; }\n\n.loading {\n  z-index: 1;\n  display: none;\n  background-color: white;\n  padding-top: 250px;\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100%; }\n  .loading img {\n    width: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authen) {
        this.authen = authen;
        this.title = 'app';
    }
    AppComponent.prototype.onGetComponent = function (e) {
        this.Authened = this.authen.getAuthenticated;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_language_service__ = __webpack_require__("../../../../../src/app/services/language.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_global_value_service__ = __webpack_require__("../../../../../src/app/services/global-value.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__guards_allowAnonymous_guard__ = __webpack_require__("../../../../../src/app/guards/allowAnonymous.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_authentication_guard__ = __webpack_require__("../../../../../src/app/guards/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_12__app_routing__["a" /* RoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__guards_authentication_guard__["a" /* AuthenticationGuard */],
            __WEBPACK_IMPORTED_MODULE_4__guards_allowAnonymous_guard__["a" /* AllowAnonymousGuard */],
            __WEBPACK_IMPORTED_MODULE_3__services_global_value_service__["a" /* GlobalValueService */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_0__services_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_11__angular_common__["a" /* DatePipe */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_authentication_guard__ = __webpack_require__("../../../../../src/app/guards/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_allowAnonymous_guard__ = __webpack_require__("../../../../../src/app/guards/allowAnonymous.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_url_config__ = __webpack_require__("../../../../../src/app/configs/url.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* unused harmony export RoutesList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });




//pages
var Url = __WEBPACK_IMPORTED_MODULE_2__configs_url_config__["a" /* UrlConfig */];
var RoutesList = [
    {
        path: Url.Signin,
        loadChildren: 'app/Modules/SignIn/SignIn.module#SignInModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_allowAnonymous_guard__["a" /* AllowAnonymousGuard */]]
    },
    {
        path: Url.SigninPin,
        loadChildren: 'app/Modules/SignInPIN/SignInPIN.module#SignInPINModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_allowAnonymous_guard__["a" /* AllowAnonymousGuard */]]
    },
    {
        path: Url.Home,
        loadChildren: 'app/Modules/Home/Home.module#HomeModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_authentication_guard__["a" /* AuthenticationGuard */]]
    },
    {
        path: Url.Book,
        loadChildren: 'app/Modules/Book/Book.module#BookModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_authentication_guard__["a" /* AuthenticationGuard */]]
    },
    {
        path: Url.SummedUp,
        loadChildren: 'app/Modules/SummedUp/SummedUp.module#SummedUpModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_authentication_guard__["a" /* AuthenticationGuard */]]
    },
    {
        path: Url.ListBuy,
        loadChildren: 'app/Modules/ListBuy/ListBuy.module#ListBuyModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_authentication_guard__["a" /* AuthenticationGuard */]]
    },
    {
        path: Url.ListBuying,
        loadChildren: 'app/Modules/ListBuying/ListBuying.module#ListBuyingModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_authentication_guard__["a" /* AuthenticationGuard */]]
    },
    {
        path: Url.CheckLottery,
        loadChildren: 'app/Modules/CheckLottery/CheckLottery.module#CheckLotteryModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_authentication_guard__["a" /* AuthenticationGuard */]]
    },
    {
        path: Url.SendTo,
        loadChildren: 'app/Modules/SendTo/SendTo.module#SendToModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_authentication_guard__["a" /* AuthenticationGuard */]]
    },
    {
        path: Url.Setting,
        loadChildren: 'app/Modules/Setting/Setting.module#SettingModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_authentication_guard__["a" /* AuthenticationGuard */]]
    },
    {
        path: Url.Profile,
        loadChildren: 'app/Modules/Profile/Profile.module#ProfileModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_authentication_guard__["a" /* AuthenticationGuard */]]
    },
    {
        path: Url.Notification,
        loadChildren: 'app/Modules/Notification/Notification.module#NotificationModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_authentication_guard__["a" /* AuthenticationGuard */]]
    },
    {
        path: Url.ProLong,
        loadChildren: 'app/Modules/ProLong/ProLong.module#ProLongModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_authentication_guard__["a" /* AuthenticationGuard */]]
    },
    {
        path: '**',
        redirectTo: Url.Home,
        pathMatch: 'full'
    }
];
var RoutingModule = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(RoutesList);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-bottom \" style=\"padding: 0px;\" style=\"z-index: 2;padding-top: 0px;padding-left: 0px;padding-bottom: 0px;padding-right: 0px;\">\r\n  <div class=\"d-flex justify-content-around\" style=\"width: 100%;\">\r\n    <div class=\"p-2 btn-footer\" [routerLink]=\"['/',Url.Book]\" [routerLinkActive]=\"['active']\">\r\n      <i class=\"fas fa-address-book \"></i>\r\n    </div>\r\n    <div class=\"p-2 btn-footer\" [routerLink]=\"['/',Url.SummedUp]\" [routerLinkActive]=\"['active']\">\r\n      <i class=\"fas fa-coins \"></i>\r\n    </div>\r\n    <div class=\"p-2 btn-footer\" [routerLink]=\"['/',Url.ListBuy]\" [routerLinkActive]=\"['active']\">\r\n      <i class=\"fas fa-dollar-sign\"></i>\r\n    </div>\r\n    <div class=\"p-2 btn-footer\" [routerLink]=\"['/',Url.ListBuying]\" [routerLinkActive]=\"['active']\">\r\n      <i class=\"fas fa-list-alt\"></i>\r\n    </div>\r\n    <div class=\"p-2 btn-footer\" [routerLink]=\"['/',Url.CheckLottery]\" [routerLinkActive]=\"['active']\">\r\n      <i class=\"fas fa-calendar-check\"></i>\r\n    </div>\r\n    <!-- <div class=\"p-2 btn-footer\" [routerLink]=\"['/',Url.Notification]\" [routerLinkActive]=\"['active']\">\r\n      <i class=\"fas fa-bell\"></i>\r\n    </div> -->\r\n    <div class=\"p-2 btn-footer\" [routerLink]=\"['/',Url.Notification]\" [routerLinkActive]=\"['active']\">\r\n      <i class=\"fas fa-chalkboard-teacher\"></i>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-footer {\n  color: #7d7d7d;\n  padding: 10px 20px 10px 20px !important; }\n  .btn-footer:active {\n    background-color: #cecece;\n    cursor: pointer; }\n\n.active {\n  background-color: #cecece; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs_url_config__ = __webpack_require__("../../../../../src/app/configs/url.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent() {
        this.Url = __WEBPACK_IMPORTED_MODULE_0__configs_url_config__["a" /* UrlConfig */];
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light  fixed-top \" style=\"z-index: 2;\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/',Url.Home]\">\r\n    <img src=\"assets\\img\\logo.png\" width=\"40px\">\r\n    <span class=\"hidden-bang\"> โปรเเกรมเจ้ามือหวย</span>\r\n  </a>\r\n  <div>\r\n    <a class=\"\" [routerLink]=\"['/',Url.Home]\">\r\n      <i class=\"fas fa-bars\"></i>\r\n      <span class=\"hidden-bang\"> เมนูหลัก</span>\r\n    </a>\r\n    <a class=\"\" (click)=\"OnLogOut()\">\r\n      <i class=\"fas fa-sign-out-alt\"></i>\r\n      <span class=\"hidden-bang\">ออกจากระบบ</span>\r\n    </a>\r\n\r\n  </div>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hidden-bang {\n  display: inline; }\n\n@media screen and (max-width: 600px) {\n  .hidden-bang {\n    display: none; } }\n\ni {\n  font-size: 23px;\n  margin-left: 12px; }\n\na {\n  color: #6b6b6b;\n  text-decoration: none; }\n  a:active {\n    color: #3c3c3c; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs_url_config__ = __webpack_require__("../../../../../src/app/configs/url.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(authen) {
        this.authen = authen;
        this.Url = __WEBPACK_IMPORTED_MODULE_0__configs_url_config__["a" /* UrlConfig */];
        this.User = authen.getUser();
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.OnLogOut = function () {
        if (confirm('คุณต้องการออกจากระบบใช่หรือไม่')) {
            this.authen.logout();
        }
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/configs/storage.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageConfog; });
var StorageConfog = (function () {
    function StorageConfog() {
    }
    StorageConfog.setItem = function (key, item) {
        try {
            if (typeof item == 'string') {
                Storage.setItem(key, item);
            }
            else {
                Storage.setItem(key, JSON.stringify(item));
            }
        }
        catch (e) {
            //console.log('Storage set item error : ', e);
        }
    };
    StorageConfog.getItem = function (key) {
        try {
            return JSON.parse(Storage.getItem(key));
        }
        catch (e) {
            return Storage.getItem(key);
        }
    };
    StorageConfog.removeItem = function (key) {
        Storage.removeItem(key);
    };
    return StorageConfog;
}());

var Storage = localStorage;
//# sourceMappingURL=storage.config.js.map

/***/ }),

/***/ "../../../../../src/app/configs/url.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return baseUrl; });
/* unused harmony export baseUrlsignalr */
var production = false;
var UrlConfig = {
    Home: '',
    Signin: 'signin',
    SigninPin: 'signin-pin',
    Book: 'book',
    SummedUp: 'summed-up',
    ListBuy: 'list-buy',
    ListBuying: 'list-buying',
    CheckLottery: 'check-lottery',
    SendTo: 'send-to',
    Setting: 'setting',
    Profile: 'profile',
    Notification: 'notification',
    ProLong: 'prolong',
};
var baseUrl = production ? 'http://lottery-api.paramat.work/api' : 'http://localhost:58752/api';
var baseUrlsignalr = production ? 'http://lottery-api.paramat.work/' : 'http://localhost:58752/';
//# sourceMappingURL=url.config.js.map

/***/ }),

/***/ "../../../../../src/app/guards/allowAnonymous.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_url_config__ = __webpack_require__("../../../../../src/app/configs/url.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllowAnonymousGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllowAnonymousGuard = (function () {
    function AllowAnonymousGuard(authService, router) {
        this.authService = authService;
        this.router = router;
        this.Url = __WEBPACK_IMPORTED_MODULE_2__configs_url_config__["a" /* UrlConfig */];
    }
    AllowAnonymousGuard.prototype.canActivate = function (route, state) {
        if (this.authService.getAuthenticated) {
            this.router.navigate(['/', this.Url.Home]);
            return false;
        }
        return true;
    };
    return AllowAnonymousGuard;
}());
AllowAnonymousGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AllowAnonymousGuard);

var _a, _b;
//# sourceMappingURL=allowAnonymous.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/authentication.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configs_url_config__ = __webpack_require__("../../../../../src/app/configs/url.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_global_value_service__ = __webpack_require__("../../../../../src/app/services/global-value.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationGuard = (function () {
    function AuthenticationGuard(http, router, authService, global) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.global = global;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        // check authorizeation request from server
        this.global.OnShowLoading();
        return this.http.requestGet('Authentication')
            .finally(function () { return setTimeout(function () { return _this.global.OnHiddenLoading(); }, 1500); })
            .map(function (res) { return _this.destroyAuthenticated(res.data); })
            .catch(function (res) { return _this.destroyAuthenticatedCatch(res); });
    };
    AuthenticationGuard.prototype.destroyAuthenticatedCatch = function (res) {
        this.authService.destroyAuthenticated();
        this.router.navigate(['/', __WEBPACK_IMPORTED_MODULE_4__configs_url_config__["a" /* UrlConfig */].Signin]);
        // location.reload();
        this.global.OnHiddenLoading();
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].of(res);
    };
    AuthenticationGuard.prototype.destroyAuthenticated = function (res) {
        if (!res.Token || res.Token.trim() == '') {
            this.authService.destroyAuthenticated();
            // location.reload();
            this.router.navigate(['/', __WEBPACK_IMPORTED_MODULE_4__configs_url_config__["a" /* UrlConfig */].Signin]);
        }
        this.global.OnHiddenLoading();
        return res.Token.trim() != '';
    };
    return AuthenticationGuard;
}());
AuthenticationGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_global_value_service__["a" /* GlobalValueService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_global_value_service__["a" /* GlobalValueService */]) === "function" && _d || Object])
], AuthenticationGuard);

var _a, _b, _c, _d;
//# sourceMappingURL=authentication.guard.js.map

/***/ }),

/***/ "../../../../../src/app/languages/th.json":
/***/ (function(module, exports) {

module.exports = {"The field is required.":"กรุณากรอกข้อมูล","The pattern field is invalid.":"กรอกข้อมูลอยู่ในรูปแบบใม่ถูกต้อง","The number is invalid.":"กรอกข้อมูลตัวเลขไม่ถูกต้อง","The password is invalid.":"กรอกข้อมูลรหัสผ่านไม่ถูกต้อง","The email is invalid.":"กรอกข้อมูลอีเมล์ไม่ถูกต้อง","Password and Confirm password do not match.":"รหัสผ่านกับยืนยันรหัสผ่านไม่ต้องกัน","The phone number is invalid.":"กรอกข้อมูลเบอร์โทรไม่ถูกต้อง","The postcode is invalid.":"กรอกข้อมูลรหัสไปรษณีย์ไม่ถูกต้อง","This field is required":"ต้องระบุข้อมูลนี้","Telephone Number incorrect":"หมายเลขโทรศัพท์ไม่ถูกต้อง","Old code incorrect":"รหัสไม่ถูกต้อง","Incorrect password":"รหัสไม่ตรงกัน","Match old code":"ตรงกับรหัสเก่า","Can not select  `storage` less than old":"ไม่สามารถเลือก `หน่วยเก็บ` น้อยกว่าเดิม","Can not select `licenses`  less than old":"ไม่สามารถเลือก `ใบอนุญาต` น้อยกว่าเดิม","The order cannot have multiple update items":"คำสั่งซื้อไม่สามารถมีรายการอัพเดตได้หลายรายการ","Incorrect email":"อีเมลไม่ถูกต้อง","Login or password is incorrect":"อีเมลล์หรือรหัสผ่านไม่ถูกต้อง","The postcode is incorrect":"รหัสไปรษณีย์ไม่ถูกต้อง","Must not contain any special characters":"ต้องไม่มีตัวอักษรพิเศษ","Username":"ชื่อผู้ใช้","Password":"รหัสผ่าน","Confirm password":"ยืนยันรหัสผ่าน","User status":"สถานะผู้ใช้งาน","Login":"เข้าสู่ระบบ","Student":"นักเรียน/นักศึกษา","ok":"ตกลง","OK":"ตกลง","confirm":"ยืนยัน","cancel":"ยกเลิก","Admin":"ผู้ดูเเลระบบ","Teacher":"อาจารย์/คุณครู","Log Out":"ออกจากระบบ","Users":"ผู้ใช้งาน","Log Users":"ประวัติการใช้งาน","Wellcome":"ยินดีต้อนรับ","Button open menu":"ปุ่มเปิดเมนู","Button close menu":"ปุ่มปิดเมนู","Button change language":"ปุ่มเปลี่ยนภาษา","Your status":"สถานะของคุณ","Button log out":"ปุ่มออกจากระบบ","Show":"ดูรายเอียด","Edit":"แก้ไข","Block":"บล็อก","Remove":"ลบ","Reset":"รีเซ็ต","Recover":"กู้คืน","Add user":"เพิ่มผู้ใช้งาน","Thailand":"ภาษาไทย","English":"ภาษาอังกฤษ","TH":"ไทย","EN":"อังกฤษ","Submit":"ยืนยัน","Close":"ปิด","Play more, anywhere and anytime, on your own or with friends.":"เล่นได้ทุกที่ทุกเวลาด้วยตัวคุณเองหรือกับเพื่อน ๆ","Create your own quickquiz for FREE at quickquiz.com":"สร้าง quickquiz ของคุณเองฟรีที่ quickquiz.com","Go to quick":"ไปยัง Quiz","Password and Confirm password do not match":"รหัสผ่านและรหัสผ่านยืนยันไม่ตรงกัน","Is not serial number of R-pi":"ไม่ใช่หมายเลขซีเรียลของ R-pi"}

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_url_config__ = __webpack_require__("../../../../../src/app/configs/url.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configs_storage_config__ = __webpack_require__("../../../../../src/app/configs/storage.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
// Http service [ Created by Loem 21-04-2017 ]
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(route) {
        this.route = route;
        this.authorizationKey = 'authorization';
        this.authorizationDetail = 'user';
        this.authorizationType = 'usertype';
        // get realtime authenticated : แสดงข้อมูล authenticated เมื่อมี event เกิดขึ้น
        this.getAuthenticatedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
        this.getUser();
    }
    // set authenticated : เซตข้อมูลใส่ authenticated
    AuthenticationService.prototype.setAuthenticated = function (name, detail) {
        this.authenticated = name;
        this.authenticatedDetail = detail;
        this.storage.setItem(this.authorizationKey, this.authenticated);
        this.storage.setItem(this.authorizationDetail, JSON.stringify(this.authenticatedDetail));
        this.getAuthenticatedEvent.emit(this.authenticated);
        this.getUser();
    };
    // remove data authenticated : นำข้อมูลออกจาก  authenticated
    AuthenticationService.prototype.destroyAuthenticated = function () {
        this.authenticated = null;
        this.storage.removeItem(this.authorizationKey);
        this.getAuthenticatedEvent.emit(this.authenticated);
    };
    //logOut
    AuthenticationService.prototype.logout = function () {
        this.destroyAuthenticated();
        this.route.navigate(['/', __WEBPACK_IMPORTED_MODULE_2__configs_url_config__["a" /* UrlConfig */].Signin]);
        //  location.reload();
    };
    Object.defineProperty(AuthenticationService.prototype, "getAuthenticated", {
        // get authenticated : แสดงข้อมูล authenticated
        get: function () {
            this.authenticated = this.storage.getItem(this.authorizationKey);
            return this.authenticated;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.getUser = function () {
        this.User = __WEBPACK_IMPORTED_MODULE_3__configs_storage_config__["a" /* StorageConfog */].getItem('user');
        return this.User;
    };
    Object.defineProperty(AuthenticationService.prototype, "storage", {
        // Convert localStorage to clien session : แปลงข้อมูล localStorage
        get: function () {
            return localStorage;
        },
        enumerable: true,
        configurable: true
    });
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/global-value.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs_storage_config__ = __webpack_require__("../../../../../src/app/configs/storage.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalValueService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GlobalValueService = (function () {
    function GlobalValueService() {
        this.User = __WEBPACK_IMPORTED_MODULE_1__configs_storage_config__["a" /* StorageConfog */].getItem('user');
        this.OpenSideBar = false;
        //#endregion 
    }
    //#endregion
    //#region  loading
    GlobalValueService.prototype.OnShowLoading = function () {
        $('.loading').show();
    };
    GlobalValueService.prototype.OnHiddenLoading = function () {
        $('.loading').fadeOut();
    };
    return GlobalValueService;
}());
GlobalValueService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], GlobalValueService);

//# sourceMappingURL=global-value.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configs_url_config__ = __webpack_require__("../../../../../src/app/configs/url.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* unused harmony export ResponseModel */
// Http service [ Created by Loem 21-04-2017 ]
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpService = (function () {
    function HttpService(http, authenticated) {
        this.http = http;
        this.authenticated = authenticated;
        // Check domain is production or development : เช็คว่าที่อยู่เป็นอะไร ถ้าเรา build เป็น production หรือ development
        this.address = __WEBPACK_IMPORTED_MODULE_4__configs_url_config__["b" /* baseUrl */];
    }
    // Request to server by GET method : ส่งข้อมูลไปยัง server ผ่าน method GET
    HttpService.prototype.requestGet = function (url) {
        return this.onProcessRequest(this.http.get(this.convertURL(url), { headers: this.onRequestHeaders() }));
    };
    // Request to server by POST method : ส่งข้อมูลไปยัง server ผ่าน method POST
    HttpService.prototype.requestPost = function (url, model) {
        return this.onProcessRequest(this.http.post(this.convertURL(url), JSON.stringify(model), { headers: this.onRequestHeaders() }));
    };
    // Request to server by PUT method : ส่งข้อมูลไปยัง server ผ่าน method PUT
    HttpService.prototype.requestPut = function (url, model) {
        return this.onProcessRequest(this.http.put(this.convertURL(url), JSON.stringify(model), { headers: this.onRequestHeaders() }));
    };
    // Request to server by DELETE method : ส่งข้อมูลไปยัง server ผ่าน method DELETE
    HttpService.prototype.requestDelete = function (url) {
        return this.onProcessRequest(this.http.delete(this.convertURL(url), { headers: this.onRequestHeaders() }));
    };
    // Process map data : ตรวจสอบข้อมูลและแปลงเป็น Json 
    HttpService.prototype.onMapData = function (response) {
        var responseData = {};
        try {
            responseData.data = response.json();
            if (responseData.status == 401) {
                this.authenticated.logout();
            }
        }
        catch (e) {
            if (response.text()) {
                responseData.data = response.text();
            }
        }
        responseData.status = response.status;
        responseData.statusText = response.statusText;
        responseData.response = response;
        responseData.Message = responseData.data.Message ? responseData.data.Message : responseData.response.statusText;
        responseData.TempData = responseData.data.TempData ? responseData.data.TempData : null;
        responseData.Token = responseData.data.Token ? responseData.data.Token : null;
        responseData.Detail = responseData.data.Detail ? responseData.data.Detail : null;
        return responseData;
    };
    // Process do data : จัดการข้อมูลกรณีมีข้อมูลการ authentication ออกมา
    HttpService.prototype.onDoProcess = function (response) {
        if (response.Token)
            this.authenticated.setAuthenticated(response.Token, response.Detail);
        if (response.TempData)
            this.authenticated.TempData = response.TempData;
    };
    // Error handle : ส่ง error ออกไปเมื่อ server เกิดข้อผิดพลาด
    HttpService.prototype.onErrorHandle = function (response) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(this.onMapData(response));
    };
    // Request Headers : ส่งค่า Header เพื่อให้ Server รู้ว่าเราต้องการอะไร และเพื่อยืนยันตัวตน
    HttpService.prototype.onRequestHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        if (this.authenticated.getAuthenticated)
            headers.append('Authorization', this.authenticated.getAuthenticated);
        return headers;
    };
    // Convert Url : แปลงค่า Url เป็นค่าที่เรากำหนดไว้
    HttpService.prototype.convertURL = function (url) {
        var hostRequest = url[0] == '/' ? url : '/' + url;
        return this.address + hostRequest;
    };
    // Process request of http : เปลี่ยนการทำงานหลังจากที่มีการ Request ไปที่ server
    HttpService.prototype.onProcessRequest = function (httpProcess) {
        var _this = this;
        return httpProcess
            .map(function (res) { return _this.onMapData(res); })
            .do(function (res) { return _this.onDoProcess(res); })
            .catch(function (res) { return _this.onErrorHandle(res); });
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], HttpService);

// Custom response class : สร้างคลาส Response ขึ้นมาเอง
var ResponseModel = (function () {
    function ResponseModel() {
    }
    return ResponseModel;
}());

var _a, _b;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/language.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguageService = (function () {
    function LanguageService() {
        this.languageKey = 'lang';
        this.getLanguageStorageEvent = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.processStorageLanguage();
    }
    // Set lanugae [th, en] : Set ภาษาให้กับระบบเช่น [th, en]
    LanguageService.prototype.setLanguage = function (lang) {
        this.setLanguageStorage(lang);
        this.getLanguageStorageEvent.next(this.getLanguageStorage);
        this.processTranslateElementByAttribute();
    };
    // Translage language : แปลภาษา
    LanguageService.prototype.translage = function (language, key) {
        if (key === void 0) { key = null; }
        var languageTranslage = language;
        if (LANGUAGES_VALIABLE[this.getLanguageStorage]) {
            languageTranslage = LANGUAGES_VALIABLE[this.getLanguageStorage][key || language] || language;
        }
        return languageTranslage;
    };
    Object.defineProperty(LanguageService.prototype, "storage", {
        // Convert localStorage to clien session : แปลงข้อมูล localStorage
        get: function () {
            return localStorage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LanguageService.prototype, "getLanguageStorage", {
        // Get language storage : ดึงข้อมูล key of language storage ออกมา
        get: function () {
            return this.storage.getItem(this.languageKey);
        },
        enumerable: true,
        configurable: true
    });
    // Set language storage : set ข้อมูล key of language storage
    LanguageService.prototype.setLanguageStorage = function (lang) {
        this.storage.setItem(this.languageKey, lang.toUpperCase());
    };
    // Check language storage : ตรวจสอบข้อมูลของ storage ว่ามีภาษาอยู่แล้วหรือไม่ถ้าไม่มีก็ set ค่า default ให้กับภาษา
    LanguageService.prototype.processStorageLanguage = function (defaultLanguage) {
        if (defaultLanguage === void 0) { defaultLanguage = 'th'; }
        if (!this.getLanguageStorage)
            this.setLanguageStorage(defaultLanguage);
    };
    // translate by data-translate attribute
    LanguageService.prototype.processTranslateElementByAttribute = function () {
        var attr = 'data-translate';
        var elements = document.querySelectorAll("[" + attr + "]");
        if (elements.length == 0)
            return;
        for (var _i = 0, _a = elements; _i < _a.length; _i++) {
            var element = _a[_i];
            var elem = element;
            var text = elem.getAttribute(attr);
            if (!text)
                continue;
            elem.innerHTML = this.translage(text);
        }
    };
    return LanguageService;
}());
LanguageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LanguageService);

// set languages to LANGUAGES : เก็บค่าภาษาไว้ก่อน โดยดุึงจาก json file
var LANGUAGES_VALIABLE = {
    TH: __webpack_require__("../../../../../src/app/languages/th.json")
    //  KH: require('../languages/kh.json')
};
//# sourceMappingURL=language.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map