webpackJsonp([10],{

/***/ "../../../../../src/app/Modules/ListBuy/ListBuy.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-gray\">\r\n  <span class=\"alert-date\">\r\n    <a class=\"btn-map\" [routerLink]=\"['/',Url.Home]\">\r\n      <i class=\"fas fa-bars\"></i> เมนูหลัก</a> / ซื้อหวย\r\n  </span>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <ul class=\"nav nav-tabs\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"TabName = '1'\" [ngClass]=\"{'active':TabName == '1'}\">ซื้อหวย</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"TabName = '2'\" [ngClass]=\"{'active':TabName == '2'}\">ซื้อหวยก็อบปี้/พิมพ์</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"TabName == '1'\">\r\n    <div class=\"modal-body\">\r\n      <form [formGroup]=\"FormBuying\" (submit)=\"OnBuyingSubmit()\">\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"sel1\">\r\n                <i style=\"color: #fcbb43;\" class=\"fas fa-calendar-alt\"></i> ประจำงวดวันที่ :</label>\r\n              <input type=\"date\" class=\"form-control\" formControlName=\"lot_dt\" id=\"sel1\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"sel1\">\r\n                <i style=\"color: #6a6aff;\" class=\"fas fa-male\"></i> เลือกผู้ซื้อ :</label>\r\n              <select class=\"form-control\" id=\"sel1\" formControlName=\"who\">\r\n                <option value=\"\">กรุณาเลือก</option>\r\n                <option value=\"{{DataMembers.Id}}\" *ngFor=\"let DataMembers of DataMember\">{{DataMembers.Name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"sel1\">\r\n                <i style=\"color: #91917d;\" class=\"fas fa-code-branch\"></i> หวยของ :</label>\r\n              <select class=\"form-control\" id=\"sel1\" formControlName=\"country\">\r\n                <option value=\"\">กรุณาเลือก</option>\r\n                <option *ngFor=\"let DataCountrys of DataCountry\" value=\"{{DataCountrys.Id}}\">{{DataCountrys.country_name}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div class=\"form-group\">\r\n              <input type=\"tel\" class=\"form-control text-center\" formControlName=\"number\" placeholder=\"เลข\" maxlength=\"3\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div class=\"form-group\">\r\n              <input type=\"tel\" class=\"form-control text-center\" formControlName=\"price1\" placeholder=\"ราคา\">\r\n              <span class=\"X\">X</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <div class=\"form-group\">\r\n              <input type=\"tel\" class=\"form-control text-center\" formControlName=\"price2\" placeholder=\"ราคา\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12 text-center\">\r\n            <div class=\"show-number\" *ngIf=\"FormBuying.value.number\">\r\n              {{FormBuying.value.number}}\r\n              <span *ngIf=\"FormBuying.value.price1||FormBuying.value.price2\">=</span> {{FormBuying.value.price1}}\r\n              <span *ngIf=\"FormBuying.value.price1&&FormBuying.value.price2\">x</span> {{FormBuying.value.price2}}\r\n              <ng-container *ngIf=\"FormBuying.value.number.length == 2 && (FormBuying.value.price1||FormBuying.value.price2)\">\r\n                ({{FormBuying.value.price1?'บน':''}}{{FormBuying.value.price2?',ล่าง':''}})\r\n              </ng-container>\r\n              <ng-container *ngIf=\"FormBuying.value.number.length != 2 && (FormBuying.value.price1||FormBuying.value.price2)\">\r\n                ({{FormBuying.value.price1?'โต๊ด':''}}{{FormBuying.value.price2?',เต็ง':''}})\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-12\">\r\n            <button class=\"btn btn-danger\" style=\"width: 100%;\" type=\"submit\">เพิ่มการซื้อหวย</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"TabName == '2'\">\r\n    <div class=\"modal-body\">\r\n      <div class=\"form-group\">\r\n        <label for=\"sel1\">\r\n          <i style=\"color: #fcbb43;\" class=\"fas fa-calendar-alt\"></i> ประจำงวดวันที่ :</label>\r\n        <input type=\"date\" class=\"form-control\"  [(ngModel)]=\"lot_dt\" #ctrl=\"ngModel\" id=\"sel1\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"sel1\">\r\n          <i style=\"color: #6a6aff;\" class=\"fas fa-male\"></i> เลือกผู้ซื้อ :</label>\r\n        <select class=\"form-control\" [(ngModel)]=\"member\" id=\"sel1\" (change)=\"OnCopy()\">\r\n          <option value=\"\">กรุณาเลือก</option>\r\n          <option value=\"{{DataMembers.Id}}\" *ngFor=\"let DataMembers of DataMember\">{{DataMembers.Name}}</option>\r\n        </select>\r\n      </div>\r\n      \r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"sel1\">\r\n          <i style=\"color: #91917d;\" class=\"fas fa-code-branch\"></i> หวยของ :</label>\r\n        <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"conutry\" #ctrl=\"ngModel\" (change)=\"OnCopy()\">\r\n          <option value=\"\">กรุณาเลือก</option>\r\n          <option *ngFor=\"let DataCountrys of DataCountry\" value=\"{{DataCountrys.Id}}\">{{DataCountrys.country_name}}</option>\r\n        </select>\r\n      </div>\r\n      <label class=\"petten\">รูปเเบบที่สามารถรับได้ \"เลข=ราคาXราคา\"</label>\r\n      <textarea class=\"form-control\" style=\"width:100%;\" rows=\"6\" [(ngModel)]=\"copy\" #ctrl=\"ngModel\" (keyup)=\"OnCopy()\"></textarea>\r\n      <hr>\r\n      <ng-container *ngIf=\"FromGroupCopyLottery\">\r\n        <form [formGroup]=\"FromGroupCopyLottery\">\r\n          <div class=\"row text-center\" formArrayName=\"buying\" *ngFor=\"let listbuying of FromGroupCopyLottery.get('buying').controls;let i=index\">\r\n            <div class=\"col-1\">\r\n              {{i+1}}\r\n            </div>\r\n            <div class=\"col-4\">\r\n              <div class=\"form-group\" [formGroupName]=\"i\">\r\n                <input type=\"tel\" class=\"form-control text-center\" formControlName=\"number\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              = {{ FromGroupCopyLottery.value.buying[i].price1}}\r\n              <span *ngIf=\"FromGroupCopyLottery.value.buying[i].price1&&FromGroupCopyLottery.value.buying[i].price2\">x</span>\r\n              {{FromGroupCopyLottery.value.buying[i].price2}}\r\n              <ng-container *ngIf=\"FromGroupCopyLottery.value.buying[i].number.length == 2\">\r\n                ({{FromGroupCopyLottery.value.buying[i].price1?'บน':''}}{{FromGroupCopyLottery.value.buying[i].price2?',ล่าง':''}})\r\n              </ng-container>\r\n              <ng-container *ngIf=\"FromGroupCopyLottery.value.buying[i].number.length != 2\">\r\n                ({{FromGroupCopyLottery.value.buying[i].price1?'โต๊ด':''}}{{FromGroupCopyLottery.value.buying[i].price2?',เต็ง':''}})\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <button class=\"btn btn-danger\" style=\"width: 100%;\" type=\"submit\" (click)=\"OnSubmit()\">เพิ่มการซื้อหวย</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Modules/ListBuy/ListBuy.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".check-box {\n  padding-top: 8px; }\n\ntable {\n  font-size: 12px; }\n\n.btn-sm {\n  padding: 0px 4px 0px 4px;\n  font-size: 12px; }\n\n.X {\n  position: absolute;\n  top: 5px;\n  right: -5px; }\n\n.show-number {\n  padding: 10px;\n  background-color: #b2b2b2;\n  margin: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Modules/ListBuy/ListBuy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_url_config__ = __webpack_require__("../../../../../src/app/configs/url.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListBuyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListBuyComponent = (function () {
    function ListBuyComponent(build, http, route, datep) {
        this.build = build;
        this.http = http;
        this.route = route;
        this.datep = datep;
        this.Url = __WEBPACK_IMPORTED_MODULE_2__configs_url_config__["a" /* UrlConfig */];
        this.today = Date.now();
        this.copy = '';
        this.country = '';
        this.member = '';
        this.conutry = '';
        this.DataFrom = [];
        this.TabName = '1';
        this.FormBuying = this.build.group({
            lot_dt: [datep.transform(this.today, 'yyyy-MM-dd'), [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            who: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            country: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            type: [''],
            number: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            price1: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            price2: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
        });
        this.lot_dt = this.datep.transform(this.today, 'yyyy-MM-dd');
    }
    ListBuyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.requestGet('get/all/country').subscribe(function (res) {
            _this.DataCountry = res.data;
        });
        this.http.requestGet('get/all/type').subscribe(function (res) {
            _this.DataPlay = res.data;
        });
        this.http.requestGet('get/all/member').subscribe(function (res) {
            _this.DataMember = res.data;
        });
    };
    ListBuyComponent.prototype.OnBuyingSubmit = function () {
        var _this = this;
        if (this.FormBuying.valid) {
            this.FormBuying.controls['type'].setValue(this.FormBuying.controls['number'].value.length == 2 ? 'two' : 'three');
            this.http.requestPost('create/buy/lottery/one', this.FormBuying.value).subscribe(function (res) {
                alert("เพิ่มการซื้อเเล้ว");
                _this.FormBuying.reset();
                _this.route.navigate(['/', __WEBPACK_IMPORTED_MODULE_2__configs_url_config__["a" /* UrlConfig */].ListBuying]);
            });
        }
        else {
            alert("กรุณากรอบข้อมูลให้ครบ");
        }
    };
    ListBuyComponent.prototype.OnCopy = function () {
        var _this = this;
        this.DataFrom = [];
        var reso1 = this.copy.split('\n');
        reso1.forEach(function (e) {
            var number = e.split('=');
            if (number[1]) {
                if (number[1].toLowerCase().includes('x')) {
                    var price1 = number[1].split('x')[0];
                    var price2 = number[1].split('x')[1];
                    if (price1 || price2)
                        _this.ConvertData(number[0], price1, price2);
                }
                else {
                    _this.ConvertData(number[0], number[1], 0);
                }
            }
        });
        this.SetFromGroup();
    };
    ListBuyComponent.prototype.ConvertData = function (number, price1, price2) {
        var _this = this;
        var check = number.split(',');
        check.forEach(function (element) {
            var country = _this.conutry;
            var type = '';
            var play = '';
            if (element.length == 2) {
                type = 'two';
            }
            else {
                type = 'three';
            }
            _this.DataFrom.push(new m_Copy(element, parseInt(price1), parseInt(price2), type));
        });
    };
    ListBuyComponent.prototype.SetFromGroup = function () {
        var _this = this;
        var FormGroup = [];
        this.DataFrom.forEach(function (element) {
            FormGroup.push(_this.build.group({
                number: [element.number, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
                price1: [element.price1, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
                price2: [element.price2, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
                type: [element.type, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]]
            }));
        });
        this.FromGroupCopyLottery = this.build.group({
            lot_dt: [this.lot_dt, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            who: [this.member, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            country: [this.conutry, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            buying: this.build.array(FormGroup)
        });
    };
    ListBuyComponent.prototype.OnSubmit = function () {
        var _this = this;
        if (this.FromGroupCopyLottery) {
            if (this.FromGroupCopyLottery.valid) {
                this.http.requestPost('create/buy/lottery/many', this.FromGroupCopyLottery.value).subscribe(function (res) {
                    $('#AddCopyLotteryModal').modal('hide');
                    _this.route.navigate(['/', __WEBPACK_IMPORTED_MODULE_2__configs_url_config__["a" /* UrlConfig */].ListBuying]);
                });
            }
            else {
                alert("กรุณา เลือกผู้ซื้อ เลือกหวยของ เเละใส่การซื้อ ให้ครบก่อนบันทึก");
            }
        }
    };
    return ListBuyComponent;
}());
ListBuyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Component */])({
        selector: 'app-ListBuy',
        template: __webpack_require__("../../../../../src/app/Modules/ListBuy/ListBuy.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Modules/ListBuy/ListBuy.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__services_http_service__["a" /* HttpService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* DatePipe */]) === "function" && _d || Object])
], ListBuyComponent);

var m_Copy = (function () {
    function m_Copy(number, price1, price2, type) {
        this.number = number;
        this.price1 = price1;
        this.price2 = price2;
        this.type = type;
    }
    return m_Copy;
}());
var _a, _b, _c, _d;
//# sourceMappingURL=ListBuy.component.js.map

/***/ }),

/***/ "../../../../../src/app/Modules/ListBuy/ListBuy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__("../../../../../src/app/Modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ListBuy_routing__ = __webpack_require__("../../../../../src/app/Modules/ListBuy/ListBuy.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ListBuy_component__ = __webpack_require__("../../../../../src/app/Modules/ListBuy/ListBuy.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBuyModule", function() { return ListBuyModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ListBuyModule = (function () {
    function ListBuyModule() {
    }
    return ListBuyModule;
}());
ListBuyModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ListBuy_routing__["a" /* ListBuyRoutes */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__ListBuy_component__["a" /* ListBuyComponent */]]
    })
], ListBuyModule);

//# sourceMappingURL=ListBuy.module.js.map

/***/ }),

/***/ "../../../../../src/app/Modules/ListBuy/ListBuy.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListBuy_component__ = __webpack_require__("../../../../../src/app/Modules/ListBuy/ListBuy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListBuyRoutes; });


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__ListBuy_component__["a" /* ListBuyComponent */] },
];
var ListBuyRoutes = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=ListBuy.routing.js.map

/***/ })

});
//# sourceMappingURL=10.chunk.js.map