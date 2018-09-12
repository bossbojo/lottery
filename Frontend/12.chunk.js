webpackJsonp([12],{

/***/ "../../../../../src/app/Modules/CheckLottery/CheckLottery.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-gray\">\r\n  <span class=\"alert-date\">\r\n    <a class=\"btn-map\" [routerLink]=\"['/',Url.Home]\">\r\n      <i class=\"fas fa-bars\"></i> เมนูหลัก</a> / ตรวจสอบรางวัล\r\n  </span>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"col-12\">\r\n    <ul class=\"nav nav-tabs\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"TabName = '1'\" [ngClass]=\"{'active':TabName == '1'}\">รายการตรวจ</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"TabName = '2'\" [ngClass]=\"{'active':TabName == '2'}\">สร้างการตรวจ</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div *ngIf=\"TabName == '2'\">\r\n    <form [formGroup]=\"CreateCheck\" (submit)=\"OnSubmitCreateLottery()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-12\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sel1\">\r\n              <i style=\"color: #fcbb43;\" class=\"fas fa-calendar-alt\"></i> ประจำงวดวันที่ :</label>\r\n            <input type=\"date\" class=\"form-control\" id=\"sel1\" formControlName=\"lot_dt\" (change)=\"GetListHistoryLottery()\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12 text-center\">\r\n          <div class=\"form-check-inline\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"radio\" value=\"1\" class=\"form-check-input\" formControlName=\"Country_id\">\r\n              <img src=\"assets/img/Flag_of_Thailand.svg\" width=\"40px\" alt=\"\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-check-inline\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"radio\" value=\"2\" class=\"form-check-input\" formControlName=\"Country_id\">\r\n              <img src=\"assets/img/Flag_of_Laos.svg\" width=\"40px\" alt=\"\">\r\n            </label>\r\n          </div>\r\n          <div class=\"form-check-inline disabled\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"radio\" value=\"3\" class=\"form-check-input\" formControlName=\"Country_id\">\r\n              <img src=\"assets/img/Flag_of_Vietnam.png\" width=\"40px\" alt=\"\">\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-6 text-center\">\r\n          <span>\r\n            เลขท้าย 2 ตัวบน\r\n          </span>\r\n          <div class=\"form-group\">\r\n            <input type=\"tel\" class=\"form-control text-center\" placeholder=\"XX\" maxlength=\"2\" formControlName=\"number_upper\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6 text-center\">\r\n          <span>\r\n            เลขท้าย 2 ตัวล่าง\r\n          </span>\r\n          <div class=\"form-group\">\r\n            <input type=\"tel\" class=\"form-control text-center\" placeholder=\"XX\" maxlength=\"2\" formControlName=\"number_lower\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12 text-center\">\r\n          <span>\r\n            เลขท้าย 3 ตัว\r\n          </span>\r\n          <div class=\"form-group\">\r\n            <input type=\"tel\" class=\"form-control text-center\" placeholder=\"XXX\" maxlength=\"3\" formControlName=\"number_three\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <button type=\"submit\" class=\"btn btn-danger\" style=\"width: 100%;\">ตรวจรางวัล</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"TabName == '1'\">\r\n    <label>งวดนี้ที่ตรวจเเล้ว</label>\r\n    <table class=\"table table-sm\">\r\n      <thead class=\"text-center\">\r\n        <tr>\r\n          <th scope=\"col\">วว/ดด</th>\r\n          <th scope=\"col\">บน</th>\r\n          <th scope=\"col\">ล่าง</th>\r\n          <th scope=\"col\">3 ตัว</th>\r\n          <th scope=\"col\"></th>\r\n          <th scope=\"col\">ตัวเลือก</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody class=\"text-center\">\r\n        <tr *ngFor=\"let LotteyChecks of LotteyCheck\">\r\n          <td class=\"text-center\">\r\n            <img *ngIf=\"LotteyChecks.Country_id == 1\" src=\"assets/img/Flag_of_Thailand.svg\" width=\"25px\" alt=\"\">\r\n            <img *ngIf=\"LotteyChecks.Country_id == 2\" src=\"assets/img/Flag_of_Laos.svg\" width=\"25px\" alt=\"\">\r\n            <img *ngIf=\"LotteyChecks.Country_id == 3\" src=\"assets/img/Flag_of_Vietnam.png\" width=\"25px\" alt=\"\">\r\n            <br> {{LotteyChecks.lot_dt | date : 'dd/MM' }}\r\n          </td>\r\n          <td>{{LotteyChecks.number_upper?LotteyChecks.number_upper:'XX'}}</td>\r\n          <td>{{LotteyChecks.number_lower?LotteyChecks.number_lower:'XX'}}</td>\r\n          <td>{{LotteyChecks.number_three?LotteyChecks.number_three:'XXX'}}</td>\r\n          <td class=\"corrent\">\r\n            <i class=\"fas fa-male\"></i> {{LotteyChecks.count_check}}</td>\r\n          <td>\r\n            <a *ngIf=\"LotteyChecks.number_three\" style=\"color: #80ff55;\" data-toggle=\"modal\" data-target=\"#EditCheckLotteryModal\" (click)=\"OnEditCheckLottery(LotteyChecks)\">\r\n              <i class=\"fas fa-edit\"></i>\r\n            </a>\r\n            <a *ngIf=\"!LotteyChecks.number_three\" style=\"color: #3d6be9;\" (click)=\"OnCresteCheckLottery(LotteyChecks.lot_dt,LotteyChecks.Country_id)\">\r\n              <i class=\"fas fa-plus-square\"></i>\r\n            </a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<!--Edit Lottery Modal -->\r\n<div class=\"modal fade\" id=\"EditCheckLotteryModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\" *ngIf=\"EditCheck\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">\r\n          <i class=\"fas fa-edit\"></i> เเก้ไขการตรวจหวย</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <form [formGroup]=\"EditCheck\" (submit)=\"OnSubmitEditCheckLottery()\">\r\n        <div class=\"modal-body\" *ngIf=\"LotteyChecksModel\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <img *ngIf=\"LotteyChecksModel.Country_id == 1\" src=\"assets/img/Flag_of_Thailand.svg\" width=\"50px\" alt=\"\">\r\n              <img *ngIf=\"LotteyChecksModel.Country_id == 2\" src=\"assets/img/Flag_of_Laos.svg\" width=\"50px\" alt=\"\">\r\n              <img *ngIf=\"LotteyChecksModel.Country_id == 3\" src=\"assets/img/Flag_of_Vietnam.png\" width=\"50px\" alt=\"\">\r\n              <span *ngIf=\"LotteyChecksModel.Country_id == 1\">หวยไทย</span>\r\n              <span *ngIf=\"LotteyChecksModel.Country_id == 2\">หวยลาว</span>\r\n              <span *ngIf=\"LotteyChecksModel.Country_id == 3\">หวยฮานอย</span>\r\n              ประจำงวดวันที่ {{LotteyChecksModel.lot_dt | date : 'dd/MM' }}\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <div class=\"row\">\r\n            <div class=\"col-6 text-center\">\r\n              <span>\r\n                เลขท้าย 2 ตัวบน\r\n              </span>\r\n              <div class=\"form-group\">\r\n                <input type=\"tel\" class=\"form-control text-center\" placeholder=\"XX\" maxlength=\"2\" formControlName=\"number_upper\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-6 text-center\">\r\n              <span>\r\n                เลขท้าย 2 ตัวล่าง\r\n              </span>\r\n              <div class=\"form-group\">\r\n                <input type=\"tel\" class=\"form-control text-center\" placeholder=\"XX\" maxlength=\"2\" formControlName=\"number_lower\">\r\n              </div>\r\n            </div>\r\n            <div class=\"col-12 text-center\">\r\n              <span>\r\n                เลขท้าย 3 ตัว\r\n              </span>\r\n              <div class=\"form-group\">\r\n                <input type=\"tel\" class=\"form-control text-center\" placeholder=\"XXX\" maxlength=\"3\" formControlName=\"number_three\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-secondary\" data-dismiss=\"modal\">ยกเลิก</button>\r\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\">บันทึก</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Modules/CheckLottery/CheckLottery.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\n  padding: 10px; }\n\n.corrent {\n  color: #1c8dff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Modules/CheckLottery/CheckLottery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__configs_url_config__ = __webpack_require__("../../../../../src/app/configs/url.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("../../../../../src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckLotteryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckLotteryComponent = (function () {
    function CheckLotteryComponent(http, build, datep) {
        this.http = http;
        this.build = build;
        this.datep = datep;
        this.Url = __WEBPACK_IMPORTED_MODULE_0__configs_url_config__["a" /* UrlConfig */];
        this.today = Date.now();
        this.TabName = '1';
        this.CreateCheck = this.build.group({
            "lot_dt": datep.transform(this.today, 'yyyy-MM-dd'),
            "number_upper": ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(2)]],
            "number_lower": ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(2)]],
            "number_three": ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)]],
            "Country_id": '1'
        });
    }
    CheckLotteryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.requestGet("get/check").subscribe(function (res) {
            _this.LotteyCheck = res.data;
        });
    };
    CheckLotteryComponent.prototype.OnSubmitCreateLottery = function () {
        var _this = this;
        if (this.CreateCheck.valid) {
            this.http.requestPost("create/check", this.CreateCheck.value).subscribe(function (res) {
                _this.ngOnInit();
                _this.TabName = '1';
            }, function (err) {
                alert(err.data.Message);
            });
        }
        else {
            alert('กรุณาใส่ข้อมูลให้ครบ');
        }
    };
    CheckLotteryComponent.prototype.OnCresteCheckLottery = function (lot_dt, Country_id) {
        this.CreateCheck.controls['lot_dt'].setValue(this.datep.transform(lot_dt, 'yyyy-MM-dd'));
        this.CreateCheck.controls['Country_id'].setValue(Country_id + '');
        this.TabName = '2';
    };
    CheckLotteryComponent.prototype.OnEditCheckLottery = function (LotteyChecks) {
        this.LotteyChecksModel = LotteyChecks;
        this.EditCheck = this.build.group({
            "number_upper": [LotteyChecks.number_upper, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(2)]],
            "number_lower": [LotteyChecks.number_lower, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(2)]],
            "number_three": [LotteyChecks.number_three, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)]],
        });
    };
    CheckLotteryComponent.prototype.OnSubmitEditCheckLottery = function () {
        var _this = this;
        if (this.EditCheck.valid) {
            this.http.requestPut("update/check?Id=" + this.LotteyChecksModel.Id, this.EditCheck.value).subscribe(function (res) {
                _this.ngOnInit();
                $('#EditCheckLotteryModal').modal('hide');
            }, function (err) {
                alert(err.data.Message);
            });
        }
        else {
            alert('กรุณาใส่ข้อมูลให้ครบ');
        }
    };
    return CheckLotteryComponent;
}());
CheckLotteryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Component */])({
        selector: 'app-CheckLottery',
        template: __webpack_require__("../../../../../src/app/Modules/CheckLottery/CheckLottery.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Modules/CheckLottery/CheckLottery.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* DatePipe */]) === "function" && _c || Object])
], CheckLotteryComponent);

var _a, _b, _c;
//# sourceMappingURL=CheckLottery.component.js.map

/***/ }),

/***/ "../../../../../src/app/Modules/CheckLottery/CheckLottery.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CheckLottery_routing__ = __webpack_require__("../../../../../src/app/Modules/CheckLottery/CheckLottery.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CheckLottery_component__ = __webpack_require__("../../../../../src/app/Modules/CheckLottery/CheckLottery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_module__ = __webpack_require__("../../../../../src/app/Modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckLotteryModule", function() { return CheckLotteryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CheckLotteryModule = (function () {
    function CheckLotteryModule() {
    }
    return CheckLotteryModule;
}());
CheckLotteryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__CheckLottery_routing__["a" /* CheckLotteryRoutes */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__CheckLottery_component__["a" /* CheckLotteryComponent */]]
    })
], CheckLotteryModule);

//# sourceMappingURL=CheckLottery.module.js.map

/***/ }),

/***/ "../../../../../src/app/Modules/CheckLottery/CheckLottery.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CheckLottery_component__ = __webpack_require__("../../../../../src/app/Modules/CheckLottery/CheckLottery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckLotteryRoutes; });


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__CheckLottery_component__["a" /* CheckLotteryComponent */] },
];
var CheckLotteryRoutes = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=CheckLottery.routing.js.map

/***/ })

});
//# sourceMappingURL=12.chunk.js.map