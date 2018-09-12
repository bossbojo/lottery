webpackJsonp([7],{

/***/ "../../../../../src/app/Modules/ProLong/ProLong.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-gray\">\r\n  <span class=\"alert-date\">\r\n    <a class=\"btn-map\" [routerLink]=\"['/',Url.Home]\">\r\n      <i class=\"fas fa-bars\"></i> เมนูหลัก</a> / ต่ออายุการใช้งาน\r\n  </span>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n      <div class=\"box-price text-center\">\r\n        <label class=\"mon\">1\r\n          <span class=\"mon-1\">เดือน</span>\r\n        </label>\r\n        <div class=\"price\">2,000 บาท</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <div class=\"box-price text-center\">\r\n        <label class=\"mon\">3\r\n          <span class=\"mon-1\">เดือน</span>\r\n        </label>\r\n        <div class=\"price\">1,899 บาท</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <div class=\"box-price text-center\">\r\n        <label class=\"mon\">6\r\n          <span class=\"mon-1\">เดือน</span>\r\n        </label>\r\n        <div class=\"price\">11,799 บาท</div>\r\n        \r\n      </div>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <div class=\"box-price text-center\">\r\n        <label class=\"mon\">12\r\n          <span class=\"mon-1\">เดือน</span>\r\n        </label>\r\n        <div class=\"price\">23,000 บาท</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Modules/ProLong/ProLong.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-price {\n  background-color: #d3d3d3;\n  padding: 10px; }\n\n.col-4 {\n  padding: 5px; }\n\n.mon {\n  font-size: 30px; }\n\n.mon-1 {\n  font-size: 12px; }\n\n.price {\n  color: white;\n  font-size: 13px;\n  background-color: #ff4040; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Modules/ProLong/ProLong.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs_url_config__ = __webpack_require__("../../../../../src/app/configs/url.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProLongComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProLongComponent = (function () {
    function ProLongComponent() {
        this.Url = __WEBPACK_IMPORTED_MODULE_0__configs_url_config__["a" /* UrlConfig */];
    }
    ProLongComponent.prototype.ngOnInit = function () {
    };
    return ProLongComponent;
}());
ProLongComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Component */])({
        selector: 'app-ProLong',
        template: __webpack_require__("../../../../../src/app/Modules/ProLong/ProLong.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Modules/ProLong/ProLong.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProLongComponent);

//# sourceMappingURL=ProLong.component.js.map

/***/ }),

/***/ "../../../../../src/app/Modules/ProLong/ProLong.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ProLong_routing__ = __webpack_require__("../../../../../src/app/Modules/ProLong/ProLong.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ProLong_component__ = __webpack_require__("../../../../../src/app/Modules/ProLong/ProLong.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProLongModule", function() { return ProLongModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProLongModule = (function () {
    function ProLongModule() {
    }
    return ProLongModule;
}());
ProLongModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__ProLong_routing__["a" /* ProLongRoutes */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__ProLong_component__["a" /* ProLongComponent */]]
    })
], ProLongModule);

//# sourceMappingURL=ProLong.module.js.map

/***/ }),

/***/ "../../../../../src/app/Modules/ProLong/ProLong.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ProLong_component__ = __webpack_require__("../../../../../src/app/Modules/ProLong/ProLong.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProLongRoutes; });


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__ProLong_component__["a" /* ProLongComponent */] },
];
var ProLongRoutes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=ProLong.routing.js.map

/***/ })

});
//# sourceMappingURL=7.chunk.js.map