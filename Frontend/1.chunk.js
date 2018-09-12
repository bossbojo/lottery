webpackJsonp([1],{

/***/ "../../../../../src/app/Modules/SummedUp/SummedUp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-gray\">\r\n  <span class=\"alert-date\">\r\n    <a class=\"btn-map\" [routerLink]=\"['/',Url.Home]\"><i class=\"fas fa-bars\"></i> เมนูหลัก</a> / สรุปยอด\r\n  </span>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"text-center\">\r\n    <div>\r\n      <h3 class=\"total\">\r\n        20,000\r\n        <br>ยอดรวดทั้งหมด\r\n      </h3>\r\n    </div>\r\n    <div>\r\n      <hr>\r\n      <div class=\"row\">\r\n        <div class=\"col-6 text-left\"><i class=\"fas fa-user-tag\"></i> เเม่ <span>(60%)</span></div>\r\n        <div class=\"col-6\">12000.-</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-6 text-left\"><i class=\"fas fa-user\"></i> ขาย <span>(30%)</span></div>\r\n        <div class=\"col-6\">6000.-</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-6 text-left\"><i class=\"fas fa-shopping-cart\"></i> ซื้อ <span>(10%)</span></div>\r\n        <div class=\"col-6\">2000.-</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Modules/SummedUp/SummedUp.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".total {\n  background-color: #ff5959;\n  padding: 10px;\n  margin: 5px;\n  color: white; }\n\n.row {\n  padding: 8px; }\n  .row span {\n    font-size: 11px;\n    color: #c18e17; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Modules/SummedUp/SummedUp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configs_url_config__ = __webpack_require__("../../../../../src/app/configs/url.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummedUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummedUpComponent = (function () {
    function SummedUpComponent() {
        this.Url = __WEBPACK_IMPORTED_MODULE_1__configs_url_config__["a" /* UrlConfig */];
    }
    SummedUpComponent.prototype.ngOnInit = function () {
    };
    return SummedUpComponent;
}());
SummedUpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-SummedUp',
        template: __webpack_require__("../../../../../src/app/Modules/SummedUp/SummedUp.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Modules/SummedUp/SummedUp.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SummedUpComponent);

//# sourceMappingURL=SummedUp.component.js.map

/***/ }),

/***/ "../../../../../src/app/Modules/SummedUp/SummedUp.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SummedUp_routing__ = __webpack_require__("../../../../../src/app/Modules/SummedUp/SummedUp.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SummedUp_component__ = __webpack_require__("../../../../../src/app/Modules/SummedUp/SummedUp.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummedUpModule", function() { return SummedUpModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SummedUpModule = (function () {
    function SummedUpModule() {
    }
    return SummedUpModule;
}());
SummedUpModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__SummedUp_routing__["a" /* SummedUpRoutes */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__SummedUp_component__["a" /* SummedUpComponent */]]
    })
], SummedUpModule);

//# sourceMappingURL=SummedUp.module.js.map

/***/ }),

/***/ "../../../../../src/app/Modules/SummedUp/SummedUp.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SummedUp_component__ = __webpack_require__("../../../../../src/app/Modules/SummedUp/SummedUp.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummedUpRoutes; });


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__SummedUp_component__["a" /* SummedUpComponent */] },
];
var SummedUpRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=SummedUp.routing.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map