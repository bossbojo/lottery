webpackJsonp([8],{

/***/ "../../../../../src/app/Modules/Notification/Notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-gray\">\r\n  <span class=\"alert-date\">\r\n    <a class=\"btn-map\" [routerLink]=\"['/',Url.Home]\">\r\n      <i class=\"fas fa-bars\"></i> เมนูหลัก</a> / เเจ้งเตือน\r\n  </span>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"text-center\">\r\n        <span>ยังไม่มีการเเจ้งเตือน</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Modules/Notification/Notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Modules/Notification/Notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs_url_config__ = __webpack_require__("../../../../../src/app/configs/url.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = (function () {
    function NotificationComponent() {
        this.Url = __WEBPACK_IMPORTED_MODULE_0__configs_url_config__["a" /* UrlConfig */];
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Component */])({
        selector: 'app-Notification',
        template: __webpack_require__("../../../../../src/app/Modules/Notification/Notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Modules/Notification/Notification.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NotificationComponent);

//# sourceMappingURL=Notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/Modules/Notification/Notification.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Notification_component__ = __webpack_require__("../../../../../src/app/Modules/Notification/Notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Notification_routing__ = __webpack_require__("../../../../../src/app/Modules/Notification/Notification.routing.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationModule", function() { return NotificationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NotificationModule = (function () {
    function NotificationModule() {
    }
    return NotificationModule;
}());
NotificationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__Notification_routing__["a" /* NotificationRoutes */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__Notification_component__["a" /* NotificationComponent */]]
    })
], NotificationModule);

//# sourceMappingURL=Notification.module.js.map

/***/ }),

/***/ "../../../../../src/app/Modules/Notification/Notification.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Notification_component__ = __webpack_require__("../../../../../src/app/Modules/Notification/Notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationRoutes; });


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__Notification_component__["a" /* NotificationComponent */] },
];
var NotificationRoutes = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=Notification.routing.js.map

/***/ })

});
//# sourceMappingURL=8.chunk.js.map