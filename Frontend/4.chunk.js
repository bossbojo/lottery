webpackJsonp([4],{

/***/ "../../../../../src/app/Modules/Setting/Setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-gray\">\r\n  <span class=\"alert-date\">\r\n    <a class=\"btn-map\" [routerLink]=\"['/',Url.Home]\">\r\n      <i class=\"fas fa-bars\"></i> เมนูหลัก</a> / {{TabName == 'persent'?'ส่วนเเบ่งต่าง ๆ รวม 100%':'ราคาหวย'}}\r\n  </span>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <ul class=\"nav nav-tabs\">\r\n        <li class=\"nav-item\" *ngIf=\"s\">\r\n          <a class=\"nav-link\" (click)=\"TabName = 'persent'\" [ngClass]=\"{'active':TabName == 'persent'}\">เปอร์เซ็น</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"TabName = 'price'\" [ngClass]=\"{'active':TabName == 'price'}\">ราคา</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <!-- เปอร์เซ็น -->\r\n\r\n      <div class=\"persent-sale\" *ngIf=\"TabName == 'persent'\">\r\n          <div class=\"form-group\">\r\n            <div class=\"row\">\r\n              <div class=\"col-8\">\r\n                <Label for=\"Share\">เปอร์เซ็นเเม่ :</Label>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <input type=\"tel\" class=\"form-control text-center\"  placeholder=\"XX%\" id=\"Share\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"row\">\r\n              <div class=\"col-8\">\r\n                <Label for=\"Share\">เปอร์เซ็นผู้ขาย :</Label>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <input type=\"tel\" class=\"form-control text-center\" placeholder=\"XX%\" id=\"Share\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <div class=\"row\">\r\n              <div class=\"col-8\">\r\n                <Label for=\"Share\">เปอร์เซ็นผู้ซื้อ :</Label>\r\n              </div>\r\n              <div class=\"col-4\">\r\n                <input type=\"tel\" class=\"form-control text-center\" placeholder=\"XX%\" id=\"Share\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div class=\"text-right\">\r\n            <button class=\"btn btn-success\">บันทึก</button>\r\n          </div>\r\n        </div>\r\n\r\n  <!-- ราคา -->\r\n  <form [formGroup]=\"FromPrice\">\r\n  <div class=\"persent-sale\" *ngIf=\"TabName == 'price'\">\r\n      <div class=\"form-group\">\r\n        <div class=\"row\">\r\n          <div class=\"col-8\">\r\n            <Label for=\"Share\">เลขท้าย 2 ตัว : บาทละ</Label>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <input type=\"tel\" class=\"form-control text-center\" formControlName=\"two_number\" placeholder=\"XX฿\" id=\"Share\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"row\">\r\n          <div class=\"col-8\">\r\n            <Label for=\"Share\">เลขท้าย 3 ตัว โต๊ค: บาทละ</Label>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <input type=\"tel\" class=\"form-control text-center\" formControlName=\"unstraight\" placeholder=\"XX฿\" id=\"Share\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"row\">\r\n          <div class=\"col-8\">\r\n            <Label for=\"Share\">เลขท้าย 3 ตัว เต็ง : บาทละ</Label>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <input type=\"tel\" class=\"form-control text-center\" formControlName=\"straight\" placeholder=\"XX฿\" id=\"Share\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <div class=\"text-right\">\r\n        <button class=\"btn btn-success\">บันทึก</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/Modules/Setting/Setting.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-8 {\n  padding: 8px; }\n\n.row {\n  padding: 15px; }\n\n.bg-gray {\n  background-color: #e8ebee;\n  padding: 10px; }\n\n.alert-date {\n  font-size: 11px; }\n\n.nav-link {\n  background-color: none; }\n\nLabel {\n  font-size: 14px; }\n\n.col-12 {\n  padding: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Modules/Setting/Setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs_url_config__ = __webpack_require__("../../../../../src/app/configs/url.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingComponent = (function () {
    function SettingComponent(Authen, build) {
        this.Authen = Authen;
        this.build = build;
        this.Url = __WEBPACK_IMPORTED_MODULE_0__configs_url_config__["a" /* UrlConfig */];
        this.TabName = 'price';
        this.FromPrice = this.build.group({
            straight: [Authen.User.straight, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            unstraight: [Authen.User.unstraight, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            two_number: [Authen.User.two_number, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
        });
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    return SettingComponent;
}());
SettingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Component */])({
        selector: 'app-Setting',
        template: __webpack_require__("../../../../../src/app/Modules/Setting/Setting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Modules/Setting/Setting.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object])
], SettingComponent);

var _a, _b;
//# sourceMappingURL=Setting.component.js.map

/***/ }),

/***/ "../../../../../src/app/Modules/Setting/Setting.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__("../../../../../src/app/Modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Setting_component__ = __webpack_require__("../../../../../src/app/Modules/Setting/Setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Setting_routing__ = __webpack_require__("../../../../../src/app/Modules/Setting/Setting.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SettingModule = (function () {
    function SettingModule() {
    }
    return SettingModule;
}());
SettingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__Setting_routing__["a" /* SettingRoutes */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__Setting_component__["a" /* SettingComponent */]]
    })
], SettingModule);

//# sourceMappingURL=Setting.module.js.map

/***/ }),

/***/ "../../../../../src/app/Modules/Setting/Setting.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Setting_component__ = __webpack_require__("../../../../../src/app/Modules/Setting/Setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingRoutes; });


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__Setting_component__["a" /* SettingComponent */] },
];
var SettingRoutes = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=Setting.routing.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map