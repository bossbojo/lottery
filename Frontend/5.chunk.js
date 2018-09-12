webpackJsonp([5],{

/***/ "../../../../../src/app/Modules/SendTo/SendTo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-gray\">\r\n    <span class=\"alert-date\">\r\n        <a class=\"btn-map\" [routerLink]=\"['/',Url.Home]\"><i class=\"fas fa-bars\"></i> เมนูหลัก</a> / ส่งหวยต่อ\r\n    </span>\r\n  </div>\r\n  <div class=\"container\">\r\n    \r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/Modules/SendTo/SendTo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Modules/SendTo/SendTo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs_url_config__ = __webpack_require__("../../../../../src/app/configs/url.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendToComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SendToComponent = (function () {
    function SendToComponent() {
        this.Url = __WEBPACK_IMPORTED_MODULE_0__configs_url_config__["a" /* UrlConfig */];
    }
    SendToComponent.prototype.ngOnInit = function () {
    };
    return SendToComponent;
}());
SendToComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Component */])({
        selector: 'app-SendTo',
        template: __webpack_require__("../../../../../src/app/Modules/SendTo/SendTo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Modules/SendTo/SendTo.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SendToComponent);

//# sourceMappingURL=SendTo.component.js.map

/***/ }),

/***/ "../../../../../src/app/Modules/SendTo/SendTo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SendTo_routing__ = __webpack_require__("../../../../../src/app/Modules/SendTo/SendTo.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SendTo_component__ = __webpack_require__("../../../../../src/app/Modules/SendTo/SendTo.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendToModule", function() { return SendToModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SendToModule = (function () {
    function SendToModule() {
    }
    return SendToModule;
}());
SendToModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__SendTo_routing__["a" /* SendToRoutes */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__SendTo_component__["a" /* SendToComponent */]]
    })
], SendToModule);

//# sourceMappingURL=SendTo.module.js.map

/***/ }),

/***/ "../../../../../src/app/Modules/SendTo/SendTo.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SendTo_component__ = __webpack_require__("../../../../../src/app/Modules/SendTo/SendTo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendToRoutes; });


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__SendTo_component__["a" /* SendToComponent */] },
];
var SendToRoutes = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=SendTo.routing.js.map

/***/ })

});
//# sourceMappingURL=5.chunk.js.map