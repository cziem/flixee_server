(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin.routing */ "./src/app/admin/admin.routing.ts");
/* harmony import */ var _components_product_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/product/list/list.component */ "./src/app/admin/components/product/list/list.component.ts");
/* harmony import */ var _components_product_add_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/product/add/add.component */ "./src/app/admin/components/product/add/add.component.ts");
/* harmony import */ var _components_admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin-register/admin-register.component */ "./src/app/admin/components/admin-register/admin-register.component.ts");
/* harmony import */ var _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin-login/admin-login.component */ "./src/app/admin/components/admin-login/admin-login.component.ts");
/* harmony import */ var _components_admin_input_admin_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin-input/admin-input.component */ "./src/app/admin/components/admin-input/admin-input.component.ts");
/* harmony import */ var _components_career_detail_career_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/career-detail/career-detail.component */ "./src/app/admin/components/career-detail/career-detail.component.ts");
/* harmony import */ var _components_career_list_career_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/career-list/career-list.component */ "./src/app/admin/components/career-list/career-list.component.ts");
/* harmony import */ var _components_university_list_university_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/university-list/university-list.component */ "./src/app/admin/components/university-list/university-list.component.ts");
/* harmony import */ var _components_university_detail_university_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/university-detail/university-detail.component */ "./src/app/admin/components/university-detail/university-detail.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/admin/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/admin/components/home/home.component.ts");
/* harmony import */ var _components_skill_detail_skill_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/skill-detail/skill-detail.component */ "./src/app/admin/components/skill-detail/skill-detail.component.ts");
/* harmony import */ var _components_skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/skill-list/skill-list.component */ "./src/app/admin/components/skill-list/skill-list.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_21__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
                _components_product_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"],
                _components_product_add_add_component__WEBPACK_IMPORTED_MODULE_6__["AddProductionComponent"],
                _components_admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_7__["AdminRegisterComponent"],
                _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_8__["AdminLoginComponent"],
                _components_admin_input_admin_input_component__WEBPACK_IMPORTED_MODULE_9__["AdminInputComponent"],
                _components_career_detail_career_detail_component__WEBPACK_IMPORTED_MODULE_10__["CareerDetailComponent"],
                _components_career_list_career_list_component__WEBPACK_IMPORTED_MODULE_11__["CareerListComponent"],
                _components_university_list_university_list_component__WEBPACK_IMPORTED_MODULE_12__["UniversityListComponent"],
                _components_university_detail_university_detail_component__WEBPACK_IMPORTED_MODULE_13__["UniversityDetailComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _components_skill_detail_skill_detail_component__WEBPACK_IMPORTED_MODULE_19__["SkillDetailComponent"],
                _components_skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_20__["SkillListComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_21__["FileSelectDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _admin_routing__WEBPACK_IMPORTED_MODULE_4__["AdminRouting"]
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_14__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_15__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],],
            bootstrap: [_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.routing.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.routing.ts ***!
  \****************************************/
/*! exports provided: AdminRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRouting", function() { return AdminRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _components_product_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product/list/list.component */ "./src/app/admin/components/product/list/list.component.ts");
/* harmony import */ var _components_product_add_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product/add/add.component */ "./src/app/admin/components/product/add/add.component.ts");
/* harmony import */ var _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin-login/admin-login.component */ "./src/app/admin/components/admin-login/admin-login.component.ts");
/* harmony import */ var _components_admin_input_admin_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin-input/admin-input.component */ "./src/app/admin/components/admin-input/admin-input.component.ts");
/* harmony import */ var _components_admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin-register/admin-register.component */ "./src/app/admin/components/admin-register/admin-register.component.ts");
/* harmony import */ var _guards_admin_auth_guard___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guards/admin-auth.guard. */ "./src/app/guards/admin-auth.guard..ts");
/* harmony import */ var _admin_components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../admin/components/home/home.component */ "./src/app/admin/components/home/home.component.ts");









var routes = [
    {
        path: 'admin',
        component: _admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"],
        children: [
            { path: '', component: _admin_components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
            { path: 'product/list', component: _components_product_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductListComponent"] },
            { path: 'product/add', component: _components_product_add_add_component__WEBPACK_IMPORTED_MODULE_3__["AddProductionComponent"] },
            { path: 'login', component: _components_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_4__["AdminLoginComponent"] },
            { path: 'input', component: _components_admin_input_admin_input_component__WEBPACK_IMPORTED_MODULE_5__["AdminInputComponent"], canActivate: [_guards_admin_auth_guard___WEBPACK_IMPORTED_MODULE_7__["AdminAuthGuard"]] },
            { path: 'register', component: _components_admin_register_admin_register_component__WEBPACK_IMPORTED_MODULE_6__["AdminRegisterComponent"] },
        ]
    }
];
var AdminRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/admin/components/admin-input/admin-input.component.css":
/*!************************************************************************!*\
  !*** ./src/app/admin/components/admin-input/admin-input.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/admin-input/admin-input.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/admin-input/admin-input.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"container\">\n  <div class=\"row\">\n    \n    <div class=\"col-md-4\">\n      <h2 class=\"page-header\"> University</h2>\n      <div  *ngIf=\"showUniDetail\">\n          <app-university-detail\n          [university]=\"selectedUniversity\"\n          (updateUniversityEvent)=onUpdateUniversityEvent($event)\n          (deleteUniversityEvent)=onDeleteUniversityEvent($event)></app-university-detail>\n      </div>\n      <div *ngIf=\"!showUniDetail\">\n        <button (click)=\"newUniversity()\" type=\"button\" style=\"margin-bottom: 2px;\" class=\"btn btn-success btn-block\">+ New University</button>\n        <div *ngIf=\"hideNewUniversity\">\n          <app-university-list\n          [universities]=\"universities\"\n          (SelectUniversity)= onSelectUniversity($event)\n          (click)=\"showUniDetail=!showUniDetail\"></app-university-list>\n        </div>\n\n        <div *ngIf=\"!hideNewUniversity\">\n          <form (submit)=\"onUniversitySubmit()\" class=\"well\">\n            <div class=\"form-group\">\n              <label for=\"username\">University Name</label>\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"universityName\" name=\"name\" >\n            </div>\n            \n            <input type=\"submit\" class=\"btn btn-primary\" value=\"Add University\">&nbsp;\n            <input type=\"button\" class=\"btn btn-default\" (click)=\"goUniBack()\" value=\"Go Back\">\n          </form>\n        </div>\n      </div>\n      \n    </div>\n\n\n    <div class=\"col-md-4\">\n        <h2 class=\"page-header\">Career</h2>\n        <div *ngIf=\"showDetail\">\n            <app-career-detail\n            [career]=\"selectedCareer\"\n            (updateCareerEvent)=onUpdateCareerEvent($event)\n            (deleteCareerEvent)=onDeleteCareerEvent($event)></app-career-detail>\n        </div>\n        \n\n        <div *ngIf=\"!showDetail\">\n            <button (click)=\"newCareer()\"  type=\"button\" style=\"margin-bottom: 2px;\" class=\"btn btn-success btn-block\">+ New Career</button>\n            <div *ngIf=\"hideNewCareer\">\n              <app-career-list\n              [careers]=\"careers\"\n              (SelectCareer)= onSelectCareer($event)\n              (click)=\"showDetail=!showDetail\"></app-career-list>\n            </div>\n            \n          <div *ngIf=\"!hideNewCareer\">\n            <form (submit)=\"onCareerSubmit()\" class=\"well\">\n                \n              <div class=\"form-group\">\n                <label for=\"username\">Career Name</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"careerName\" name=\"name\" >\n              </div>\n              \n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Add Career\">&nbsp;\n              <input type=\"button\" class=\"btn btn-default\" (click)=\"goBack()\" value=\"Go Back\">\n            </form>\n          </div>\n        </div>\n        \n    </div>\n\n    <div class=\"col-md-4\">\n        <h2 class=\"page-header\">Skills</h2>\n        <div *ngIf=\"showSkillDetail\">\n            <app-skill-detail\n            [skill]=\"selectedSkill\"\n            (updateSkillEvent)=onUpdateSkillEvent($event)\n            (deleteSkillEvent)=onDeleteSkillEvent($event)></app-skill-detail>\n        </div>\n        \n\n        <div *ngIf=\"!showSkillDetail\">\n            <button (click)=\"newSkill()\"  type=\"button\" style=\"margin-bottom: 2px;\" class=\"btn btn-success btn-block\">+ New Skill</button>\n            <div *ngIf=\"hideNewSkill\">\n              <app-skill-list\n              [skills]=\"skills\"\n              (SelectSkill)= onSelectSkill($event)\n              (click)=\"showSkillDetail=!showSkillDetail\"></app-skill-list>\n            </div>\n            \n          <div *ngIf=\"!hideNewSkill\">\n            <form (submit)=\"onSkillSubmit()\" class=\"well\">\n                \n              <div class=\"form-group\">\n                <label for=\"name\">Skill Name</label>\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"skillName\" name=\"name\" >\n              </div>\n              <div class=\"form-group\">\n                  <label for=\"career\">Skill Career</label>\n                  <select name=\"career\" id=\"career\" class=\"form-control\" [(ngModel)]=\"skillCareer\">\n                    <option></option>\n                    <option *ngFor=\"let career of careers\" value=\"{{career.name}}\">{{ career.name }} </option>\n                  </select>\n                </div>\n              \n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Add Skill\">&nbsp;\n              <input type=\"button\" class=\"btn btn-default\" (click)=\"goSkillBack()\" value=\"Go Back\">\n            </form>\n          </div>\n        </div>\n        \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/admin-input/admin-input.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/admin-input/admin-input.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminInputComponent", function() { return AdminInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_input_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/admin-input.service */ "./src/app/services/admin-input.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminInputComponent = /** @class */ (function () {
    function AdminInputComponent(adminInput, validateService, toastr, router) {
        this.adminInput = adminInput;
        this.validateService = validateService;
        this.toastr = toastr;
        this.router = router;
        this.hideNewCareer = true;
        this.hideNewUniversity = true;
        this.hideNewSkill = true;
        this.showDetail = false;
        this.showUniDetail = false;
        this.showSkillDetail = false;
        this.editTitle = false;
        this.form = false;
    }
    AdminInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        // getting all careers in data base
        this.adminInput.getCareer()
            .subscribe(function (resCareerData) { return _this.careers = resCareerData; });
        // getting all universities in data base
        this.adminInput.getUniversity()
            .subscribe(function (resUniversityData) { return _this.universities = resUniversityData; });
        // getting all skills in data base
        this.adminInput.getSkill()
            .subscribe(function (resSkillData) { return _this.skills = resSkillData; });
    };
    AdminInputComponent.prototype.ngOnChanges = function () {
        this.editTitle = false;
        this.form = false;
    };
    // Register university
    AdminInputComponent.prototype.onUniversitySubmit = function () {
        var _this = this;
        var university = {
            name: this.universityName,
        };
        if (!this.validateService.validateInput(university.name)) {
            this.toastr.error('Error sending form', 'Please fill in the field', { timeOut: 3000 });
            return false;
        }
        this.adminInput.addUniversity(university).subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('Successfully.', 'The university has been added.', { timeOut: 3000 });
                _this.hideNewUniversity = true;
                _this.universities.push(data.msg); // Add to career list
            }
            else {
                _this.toastr.error('Duplicated Try again.', 'Something went wrong.', { timeOut: 3000 });
                _this.hideNewUniversity = true;
                _this.router.navigate(['/admin/input']);
            }
        });
    };
    AdminInputComponent.prototype.onUpdateCareerEvent = function (career) {
        this.adminInput.updateCareer(career)
            .subscribe(function (resUpdateCareer) { return career = resUpdateCareer; });
        this.showDetail = false;
        this.toastr.success('Successfully.', 'The career has been updated.', { timeOut: 3000 });
        //this.selectedVideo = null;
    };
    AdminInputComponent.prototype.onDeleteCareerEvent = function (career) {
        var careerArray = this.careers;
        this.adminInput.deleteCareer(career)
            .subscribe(function (resDeleteCareer) {
            for (var i = 0; i < careerArray.length; i++) {
                if (careerArray[i]._id === career._id) {
                    careerArray.splice(i, 1);
                }
            }
        });
        this.toastr.error('Successfully.', 'The career has been deleted.', { timeOut: 3000 });
        this.showDetail = false;
    };
    AdminInputComponent.prototype.onUpdateSkillEvent = function (skill) {
        this.adminInput.updateSkill(skill)
            .subscribe(function (resUpdateCareer) { return skill = resUpdateCareer; });
        this.showSkillDetail = false;
        this.toastr.success('Successfully.', 'The skill has been updated.', { timeOut: 3000 });
        //this.selectedVideo = null;
    };
    AdminInputComponent.prototype.onDeleteSkillEvent = function (skill) {
        var skillArray = this.skills;
        this.adminInput.deleteSkill(skill)
            .subscribe(function (resDeleteSkill) {
            for (var i = 0; i < skillArray.length; i++) {
                if (skillArray[i]._id === skill._id) {
                    skillArray.splice(i, 1);
                }
            }
        });
        this.toastr.error('Successfully.', 'The skill has been deleted.', { timeOut: 3000 });
        this.showSkillDetail = false;
    };
    AdminInputComponent.prototype.onUpdateUniversityEvent = function (university) {
        this.adminInput.updateUniversity(university)
            .subscribe(function (resUpdateUniversity) { return university = resUpdateUniversity; });
        this.toastr.success('Successfully.', 'The university has been updated.', { timeOut: 3000 });
        this.showUniDetail = false;
    };
    AdminInputComponent.prototype.onDeleteUniversityEvent = function (university) {
        var universityArray = this.universities;
        this.adminInput.deleteUniversity(university)
            .subscribe(function (resDeleteUniversity) {
            for (var i = 0; i < universityArray.length; i++) {
                if (universityArray[i]._id === university._id) {
                    universityArray.splice(i, 1);
                }
            }
        });
        this.toastr.error('Successfully.', 'The university has been deleted.', { timeOut: 3000 });
        this.showUniDetail = false;
    };
    // Register Career
    AdminInputComponent.prototype.onCareerSubmit = function () {
        var _this = this;
        var career = {
            name: this.careerName,
        };
        if (!this.validateService.validateInput(career)) {
            this.toastr.error('Error sending form', 'Please fill in the field', { timeOut: 3000 });
            return false;
        }
        this.adminInput.addCareer(career).subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('Successfully.', 'The career has been added.', { timeOut: 3000 });
                _this.hideNewCareer = true;
                _this.careers.push(data.msg); // Add to career list
            }
            else {
                _this.toastr.error('Duplicated data. Try again.', 'Something went wrong.', { timeOut: 3000 });
                _this.hideNewCareer = true;
                _this.router.navigate(['/admin/input']);
            }
        });
    };
    AdminInputComponent.prototype.onSkillSubmit = function () {
        var _this = this;
        var skill = {
            name: this.skillName,
            career: this.skillCareer
        };
        if (!this.validateService.validateSkillInput(skill)) {
            this.toastr.error('Error sending form', 'Please fill in the field', { timeOut: 3000 });
            return false;
        }
        this.adminInput.addSkill(skill).subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('Successfully.', 'The skill has been added.', { timeOut: 3000 });
                _this.hideNewSkill = true;
                _this.skills.push(data.msg); // Add to skill list
            }
            else {
                _this.toastr.error('Duplicated Data. Try again.', 'Something went wrong.', { timeOut: 3000 });
                _this.hideNewSkill = true;
                _this.router.navigate(['/admin/input']);
            }
        });
    };
    AdminInputComponent.prototype.newCareer = function () {
        this.hideNewCareer = false;
    };
    AdminInputComponent.prototype.newUniversity = function () {
        this.hideNewUniversity = false;
    };
    AdminInputComponent.prototype.newSkill = function () {
        this.hideNewSkill = false;
    };
    AdminInputComponent.prototype.onTitleClick = function () {
        this.editTitle = true;
    };
    AdminInputComponent.prototype.onSelectCareer = function (career) {
        this.selectedCareer = career;
        this.hideNewCareer = true;
        // console.log(this.selectedCareer)
    };
    AdminInputComponent.prototype.onSelectUniversity = function (university) {
        this.selectedUniversity = university;
        this.hideNewUniversity = true;
        // console.log(this.selectedUniversity)
    };
    AdminInputComponent.prototype.onSelectSkill = function (skill) {
        this.selectedSkill = skill;
        this.hideNewSkill = true;
        // console.log(this.selectedUniversity)
    };
    AdminInputComponent.prototype.goBack = function () {
        this.hideNewCareer = true;
    };
    AdminInputComponent.prototype.goUniBack = function () {
        this.hideNewUniversity = true;
    };
    AdminInputComponent.prototype.goSkillBack = function () {
        this.hideNewSkill = true;
    };
    AdminInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-input',
            template: __webpack_require__(/*! ./admin-input.component.html */ "./src/app/admin/components/admin-input/admin-input.component.html"),
            styles: [__webpack_require__(/*! ./admin-input.component.css */ "./src/app/admin/components/admin-input/admin-input.component.css")],
        }),
        __metadata("design:paramtypes", [_services_admin_input_service__WEBPACK_IMPORTED_MODULE_1__["AdminInputService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminInputComponent);
    return AdminInputComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/admin-login/admin-login.component.css":
/*!************************************************************************!*\
  !*** ./src/app/admin/components/admin-login/admin-login.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/admin-login/admin-login.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/admin-login/admin-login.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"col-md-6 col-md-offset-3\">\n  <h2 class=\"page-header\">Admin Login</h2>\n  <form (submit)=\"onLoginSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"username\">Email</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" >\n      </div>\n      \n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n      </div>\n      \n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/components/admin-login/admin-login.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/admin-login/admin-login.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLoginComponent = /** @class */ (function () {
    function AdminLoginComponent(auth, router, toastr, jwtHelper) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.jwtHelper = jwtHelper;
    }
    AdminLoginComponent.prototype.ngOnInit = function () {
    };
    AdminLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.auth.authenticateUser(user).subscribe(function (data) {
            _this.userType = data;
            if (data.success) {
                if (data.user.type === 'Admin') {
                    console.log(_this.jwtHelper.isTokenExpired());
                    _this.auth.storeUserData(data.token, data.user);
                    _this.toastr.success(data.msg, 'You are now logged in.', { timeOut: 5000 });
                    _this.router.navigate(['/admin']);
                    return true;
                }
                else {
                    _this.toastr.error(data.msg, 'You are not authorized as an admin.', { timeOut: 5000 });
                    _this.router.navigate(['/admin/login']);
                }
            }
            else {
                _this.toastr.error(data.msg, 'Invalid login details.', { timeOut: 5000 });
                _this.router.navigate(['/admin/login']);
            }
        });
    };
    AdminLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-login',
            template: __webpack_require__(/*! ./admin-login.component.html */ "./src/app/admin/components/admin-login/admin-login.component.html"),
            styles: [__webpack_require__(/*! ./admin-login.component.css */ "./src/app/admin/components/admin-login/admin-login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]])
    ], AdminLoginComponent);
    return AdminLoginComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/admin-register/admin-register.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/admin/components/admin-register/admin-register.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/admin-register/admin-register.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/admin-register/admin-register.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h2 class=\"page-header\"> Admin Register</h2>\n<form (submit)=\"onRegisterSubmit()\" class=\"well\">\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"username\">Usename</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\"required >\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" required>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"rtppassword\">Repeat Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"rptpassword\" name=\"rptpassword\" required>\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>\n\n"

/***/ }),

/***/ "./src/app/admin/components/admin-register/admin-register.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/components/admin-register/admin-register.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AdminRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRegisterComponent", function() { return AdminRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminRegisterComponent = /** @class */ (function () {
    function AdminRegisterComponent(validateService, toastr, auth, router) {
        this.validateService = validateService;
        this.toastr = toastr;
        this.auth = auth;
        this.router = router;
    }
    AdminRegisterComponent.prototype.ngOnInit = function () {
    };
    AdminRegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            type: 'Admin',
            username: this.username,
            password: this.password,
            rptpassword: this.rptpassword
        };
        //Reguired Field
        if (!this.validateService.validateRegister(user)) {
            this.toastr.error('Error sending form', 'Please fill in all fields', { timeOut: 3000 });
            return false;
        }
        //Reguired Email
        if (!this.validateService.validateEmail(user.email)) {
            console.log('Please use a valid email ');
            this.toastr.error('Error sending form', 'Please use a valid email', { timeOut: 3000 });
            return false;
        }
        //Reguired Field
        if (!this.validateService.validatePassword(user)) {
            console.log('Password not matched');
            this.toastr.error('Error sending form', 'Password not matched', { timeOut: 3000 });
            return false;
        }
        // Register User
        this.auth.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('Thanks.', 'You have now registered and can login.', { timeOut: 3000 });
                _this.router.navigate(['/admin/login']);
            }
            else {
                _this.toastr.error('Try again later. Thanks.', 'Something went wrong.', { timeOut: 3000 });
                _this.router.navigate(['/admin/register']);
            }
        });
    };
    AdminRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-register',
            template: __webpack_require__(/*! ./admin-register.component.html */ "./src/app/admin/components/admin-register/admin-register.component.html"),
            styles: [__webpack_require__(/*! ./admin-register.component.css */ "./src/app/admin/components/admin-register/admin-register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminRegisterComponent);
    return AdminRegisterComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/career-detail/career-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/admin/components/career-detail/career-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/career-detail/career-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/admin/components/career-detail/career-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    \n    <form>\n      <div class=\"form-group\">\n        <input *ngIf=\"editTitle\" type=\"input\" class=\"form-control\" name=\"name\" \n        required placeholder=\"name\" [(ngModel)]=\"career.name\">\n      </div>\n      <h3 *ngIf=\"!editTitle\" (click)=\"onTitleClick()\">{{ career.name }}</h3>        \n        <button type=\"button\" (click)=\"updateCareer()\" class=\"btn btn-primary\">Update</button> &nbsp;\n        <button type=\"button\" (click)=\"deleteCareer()\" class=\"btn btn-danger\">Delete</button>&nbsp;\n       <button type=\"button\" class=\"btn btn-default\" (click)=\"goBack()\">Go Back</button>\n        \n    </form>\n  </div>\n"

/***/ }),

/***/ "./src/app/admin/components/career-detail/career-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/career-detail/career-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: CareerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerDetailComponent", function() { return CareerDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CareerDetailComponent = /** @class */ (function () {
    function CareerDetailComponent(location) {
        this.location = location;
        this.editTitle = false;
        this.updateCareerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteCareerEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ;
    CareerDetailComponent.prototype.ngOnInit = function () {
    };
    CareerDetailComponent.prototype.ngOnChanges = function () {
        this.editTitle = false;
    };
    CareerDetailComponent.prototype.onTitleClick = function () {
        this.editTitle = true;
    };
    CareerDetailComponent.prototype.updateCareer = function () {
        this.updateCareerEvent.emit(this.career);
    };
    CareerDetailComponent.prototype.deleteCareer = function () {
        this.deleteCareerEvent.emit(this.career);
    };
    CareerDetailComponent.prototype.goBack = function () {
        location.reload();
    };
    CareerDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-career-detail',
            template: __webpack_require__(/*! ./career-detail.component.html */ "./src/app/admin/components/career-detail/career-detail.component.html"),
            styles: [__webpack_require__(/*! ./career-detail.component.css */ "./src/app/admin/components/career-detail/career-detail.component.css")],
            inputs: ['career'],
            outputs: ['updateCareerEvent', 'deleteCareerEvent',]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], CareerDetailComponent);
    return CareerDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/career-list/career-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/admin/components/career-list/career-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/career-list/career-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/career-list/career-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pill nav-stacked\" >\n              \n    <li *ngFor=\"let career of careers\"\n    (click)=\"onSelect(career)\"\n    ><a>{{ career.name }}</a></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/admin/components/career-list/career-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/career-list/career-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: CareerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerListComponent", function() { return CareerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CareerListComponent = /** @class */ (function () {
    function CareerListComponent() {
        this.SelectCareer = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    CareerListComponent.prototype.ngOnInit = function () {
    };
    CareerListComponent.prototype.onSelect = function (career) {
        this.SelectCareer.emit(career);
    };
    CareerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-career-list',
            template: __webpack_require__(/*! ./career-list.component.html */ "./src/app/admin/components/career-list/career-list.component.html"),
            styles: [__webpack_require__(/*! ./career-list.component.css */ "./src/app/admin/components/career-list/career-list.component.css")],
            inputs: ['careers'],
            outputs: ['SelectCareer']
        }),
        __metadata("design:paramtypes", [])
    ], CareerListComponent);
    return CareerListComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n        <h1>MEAN Authentication Application Admin</h1>\r\n        <p class=\"lead\">Welcome to our custom Mean authentication application built from scratch</p>\r\n        <div>\r\n          <a *ngIf=\"!auth.loggedIn()\" routerLink=\"/admin/login\" class=\"btn btn-default\">Login</a>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col-md-4\">\r\n          <h3>Express Backend</h3>\r\n          <P>A rock solid Node.js/ Express server udsing Mongoose to organize models and query the databse</P>\r\n        </div>\r\n      \r\n        <div class=\"col-md-4\">\r\n          <h3>Angular6-Cli</h3>\r\n          <P> Angular6-Cli to generate components, services and more. Local dev server and easy compilation</P>\r\n        </div>\r\n      \r\n        <div class=\"col-md-4\">\r\n          <h3>JWT Tokens</h3>\r\n          <P>Full featured authentication using JSON web tokens. Login and store user data</P>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/admin/components/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/components/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/admin/components/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/navbar/navbar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/admin/components/navbar/navbar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/navbar/navbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/navbar/navbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span> \n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/admin\" routerLinkActive=\"Active\" >MEAN Auth App Admin</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar\">\n        <li *ngIf=\"!auth.loggedIn()\"><a routerLink=\"/admin\" routerLinkActive=\"Active\" >Home</a></li>\n        \n        <li *ngIf=\"auth.loggedIn()\" ><a routerLink=\"/admin/input\" routerLinkActive=\"Active\">Add Career & University</a></li>\n       \n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n       \n        <li *ngIf=\"!auth.loggedIn()\"><a routerLink=\"/admin/login\" routerLinkActive=\"Active\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n        <li *ngIf=\"auth.loggedIn()\"><a href='#' (click)=\"onLogoutClick()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/admin/components/navbar/navbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/components/navbar/navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router, toastr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem('user');
        console.log(this.user);
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.auth.logout();
        this.toastr.info('Thanks for visiting', 'You have logged out of your account', { timeOut: 3000 });
        this.router.navigate(['/admin/login']);
        this.user = null;
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/admin/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/admin/components/navbar/navbar.component.css")],
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/product/add/add.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/product/add/add.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Add Product Page - Admin</h3>"

/***/ }),

/***/ "./src/app/admin/components/product/add/add.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/components/product/add/add.component.ts ***!
  \***************************************************************/
/*! exports provided: AddProductionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductionComponent", function() { return AddProductionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddProductionComponent = /** @class */ (function () {
    function AddProductionComponent() {
    }
    AddProductionComponent.prototype.ngOnInit = function () {
    };
    AddProductionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/admin/components/product/add/add.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AddProductionComponent);
    return AddProductionComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/product/list/list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin/components/product/list/list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Production List Page - Admin </h3>"

/***/ }),

/***/ "./src/app/admin/components/product/list/list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/components/product/list/list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/admin/components/product/list/list.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/skill-detail/skill-detail.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/admin/components/skill-detail/skill-detail.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/skill-detail/skill-detail.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/admin/components/skill-detail/skill-detail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <form>\n        <div class=\"form-group\" *ngIf=\"editSkillTitle\">\n          <input  type=\"input\" class=\"form-control\" name=\"name\" \n          required placeholder=\"name\" [(ngModel)]=\"skill.name\">\n        </div>\n        <h3 *ngIf=\"!editSkillTitle\" (click)=\"onSkillTitleClick()\">{{ skill.name }}</h3>\n        <div class=\"form-group\">\n            <input  type=\"input\" class=\"form-control\" name=\"career\" \n            required placeholder=\"career\" [(ngModel)]=\"skill.career\">\n        </div>\n        \n          \n        <button type=\"button\" (click)=\"updateSkill()\" class=\"btn btn-primary\">Update</button> &nbsp;\n        <button type=\"button\" (click)=\"deleteSkill()\" class=\"btn btn-danger\">Delete</button>&nbsp;\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"goBack()\">Go Back</button>\n          \n      </form>\n    </div>\n"

/***/ }),

/***/ "./src/app/admin/components/skill-detail/skill-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/skill-detail/skill-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: SkillDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillDetailComponent", function() { return SkillDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillDetailComponent = /** @class */ (function () {
    function SkillDetailComponent(location) {
        this.location = location;
        this.editSkillTitle = false;
        this.updateSkillEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteSkillEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ;
    SkillDetailComponent.prototype.ngOnInit = function () {
    };
    SkillDetailComponent.prototype.ngOnChanges = function () {
        this.editSkillTitle = false;
    };
    SkillDetailComponent.prototype.onSkillTitleClick = function () {
        this.editSkillTitle = true;
    };
    SkillDetailComponent.prototype.updateSkill = function () {
        this.updateSkillEvent.emit(this.skill);
    };
    SkillDetailComponent.prototype.deleteSkill = function () {
        this.deleteSkillEvent.emit(this.skill);
    };
    SkillDetailComponent.prototype.goBack = function () {
        location.reload();
    };
    SkillDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skill-detail',
            template: __webpack_require__(/*! ./skill-detail.component.html */ "./src/app/admin/components/skill-detail/skill-detail.component.html"),
            styles: [__webpack_require__(/*! ./skill-detail.component.css */ "./src/app/admin/components/skill-detail/skill-detail.component.css")],
            inputs: ['skill'],
            outputs: ['updateSkillEvent', 'deleteSkillEvent',]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], SkillDetailComponent);
    return SkillDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/skill-list/skill-list.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/components/skill-list/skill-list.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/skill-list/skill-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/skill-list/skill-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pill nav-stacked\" >\n    <li *ngFor=\"let skill of skills\"\n    (click)=\"onSelect(skill)\"><a>{{ skill.name }}</a></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/admin/components/skill-list/skill-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/skill-list/skill-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: SkillListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillListComponent", function() { return SkillListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillListComponent = /** @class */ (function () {
    function SkillListComponent() {
        this.SelectSkill = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    SkillListComponent.prototype.ngOnInit = function () {
    };
    SkillListComponent.prototype.onSelect = function (skill) {
        this.SelectSkill.emit(skill);
    };
    SkillListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skill-list',
            template: __webpack_require__(/*! ./skill-list.component.html */ "./src/app/admin/components/skill-list/skill-list.component.html"),
            styles: [__webpack_require__(/*! ./skill-list.component.css */ "./src/app/admin/components/skill-list/skill-list.component.css")],
            inputs: ['skills'],
            outputs: ['SelectSkill']
        }),
        __metadata("design:paramtypes", [])
    ], SkillListComponent);
    return SkillListComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/university-detail/university-detail.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/admin/components/university-detail/university-detail.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/university-detail/university-detail.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/components/university-detail/university-detail.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form>\n      <div class=\"form-group\" *ngIf=\"editUniTitle\">\n        <input  type=\"input\" class=\"form-control\" name=\"name\" \n        required placeholder=\"name\" [(ngModel)]=\"university.name\">\n      </div>\n      <h3 *ngIf=\"!editUniTitle\" (click)=\"onUniTitleClick()\">{{ university.name }}</h3>\n      \n        \n        <button type=\"button\" (click)=\"updateUniversity()\" class=\"btn btn-primary\">Update</button> &nbsp;\n        <button type=\"button\" (click)=\"deleteUniversity()\" class=\"btn btn-danger\">Delete</button>&nbsp;\n       <button type=\"button\" class=\"btn btn-default\" (click)=\"goBack()\">Go Back</button>\n        \n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/admin/components/university-detail/university-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/admin/components/university-detail/university-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UniversityDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityDetailComponent", function() { return UniversityDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UniversityDetailComponent = /** @class */ (function () {
    function UniversityDetailComponent(location) {
        this.location = location;
        this.editUniTitle = false;
        this.updateUniversityEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteUniversityEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ;
    UniversityDetailComponent.prototype.ngOnInit = function () {
    };
    UniversityDetailComponent.prototype.ngOnChanges = function () {
        this.editUniTitle = false;
    };
    UniversityDetailComponent.prototype.onUniTitleClick = function () {
        this.editUniTitle = true;
    };
    UniversityDetailComponent.prototype.updateUniversity = function () {
        this.updateUniversityEvent.emit(this.university);
    };
    UniversityDetailComponent.prototype.deleteUniversity = function () {
        this.deleteUniversityEvent.emit(this.university);
    };
    UniversityDetailComponent.prototype.goBack = function () {
        location.reload();
    };
    UniversityDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-university-detail',
            template: __webpack_require__(/*! ./university-detail.component.html */ "./src/app/admin/components/university-detail/university-detail.component.html"),
            styles: [__webpack_require__(/*! ./university-detail.component.css */ "./src/app/admin/components/university-detail/university-detail.component.css")],
            inputs: ['university'],
            outputs: ['updateUniversityEvent', 'deleteUniversityEvent',]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], UniversityDetailComponent);
    return UniversityDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/university-list/university-list.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/admin/components/university-list/university-list.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/components/university-list/university-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/admin/components/university-list/university-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pill nav-stacked\" >\n    <li *ngFor=\"let university of universities\"\n    (click)=\"onSelect(university)\"><a>{{ university.name }}</a></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/admin/components/university-list/university-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/admin/components/university-list/university-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UniversityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversityListComponent", function() { return UniversityListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UniversityListComponent = /** @class */ (function () {
    function UniversityListComponent() {
        this.SelectUniversity = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    UniversityListComponent.prototype.ngOnInit = function () {
    };
    UniversityListComponent.prototype.onSelect = function (university) {
        this.SelectUniversity.emit(university);
    };
    UniversityListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-university-list',
            template: __webpack_require__(/*! ./university-list.component.html */ "./src/app/admin/components/university-list/university-list.component.html"),
            styles: [__webpack_require__(/*! ./university-list.component.css */ "./src/app/admin/components/university-list/university-list.component.css")],
            inputs: ['universities'],
            outputs: ['SelectUniversity']
        }),
        __metadata("design:paramtypes", [])
    ], UniversityListComponent);
    return UniversityListComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















function tokenGetter() {
    return localStorage.getItem('token');
}
var appRoutes = [
    { path: '', redirectTo: '/user', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            ],
            imports: [
                _user_user_module__WEBPACK_IMPORTED_MODULE_14__["UserModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_15__["AdminModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
                    positionClass: 'toast-top-full-width'
                }),
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ['localhost:10255', 'localhost:4200', 'meanstacklinux.azurewebsites.net'],
                        blacklistedRoutes: ['localhost:3001/auth/']
                    }
                })
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_9__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/admin-auth.guard..ts":
/*!*********************************************!*\
  !*** ./src/app/guards/admin-auth.guard..ts ***!
  \*********************************************/
/*! exports provided: AdminAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function() { return AdminAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAuthGuard = /** @class */ (function () {
    function AdminAuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AdminAuthGuard.prototype.canActivate = function () {
        if (this.auth.userType()) {
            return true;
        }
        else {
            this.router.navigate(['/admin/login']);
            return false;
        }
    };
    AdminAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/user/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/admin-input.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/admin-input.service.ts ***!
  \*************************************************/
/*! exports provided: AdminInputService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminInputService", function() { return AdminInputService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminInputService = /** @class */ (function () {
    function AdminInputService(http) {
        this.http = http;
    }
    AdminInputService.prototype.addUniversity = function (input) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post('/api/user/university', JSON.stringify(input), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AdminInputService.prototype.addCareer = function (input) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post('/api/user/career', JSON.stringify(input), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AdminInputService.prototype.addSkill = function (input) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post('/api/user/skills', JSON.stringify(input), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AdminInputService.prototype.getCareer = function () {
        return this.http.get('/api/user/career')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AdminInputService.prototype.getSkill = function () {
        return this.http.get('/api/user/skills')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AdminInputService.prototype.getUniversity = function () {
        return this.http.get('/api/user/university')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AdminInputService.prototype.updateCareer = function (career) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put('/api/user/career/' + career._id, JSON.stringify(career), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AdminInputService.prototype.deleteCareer = function (career) {
        return this.http.delete('/api/user/career/' + career._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AdminInputService.prototype.updateSkill = function (skill) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put('/api/user/skills/' + skill._id, JSON.stringify(skill), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AdminInputService.prototype.deleteSkill = function (skill) {
        return this.http.delete('/api/user/skills/' + skill._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AdminInputService.prototype.updateUniversity = function (university) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put('/api/user/university/' + university._id, JSON.stringify(university), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AdminInputService.prototype.deleteUniversity = function (university) {
        return this.http.delete('/api/user/university/' + university._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AdminInputService.prototype.getCareerSkills = function (career) {
        return this.http.get('/api/user/skills/' + career)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AdminInputService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AdminInputService);
    return AdminInputService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { tokenNotExpired } from 'angular2-jwt';
var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post('/api/user/register', JSON.stringify(user), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        console.log(localStorage.getItem('user'));
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post('/api/user/authenticate', JSON.stringify(user), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AuthService.prototype.addProfile = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put('/api/user/profiles/' + user._id, JSON.stringify(user), options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return !!localStorage.getItem('id_token');
    };
    AuthService.prototype.userType = function () {
        return !!localStorage.getItem('type');
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json',
            'Authorization': this.authToken
        });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get('/api/user/profile', options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        if (user.type == "Admin") {
            localStorage.setItem('type', user.type);
        }
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        this.usertype = null;
        localStorage.clear();
    };
    AuthService.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        this.jwtHelper.isTokenExpired(token);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.rptpassword == undefined || user.password == undefined || user.username == undefined || user.email == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateInput = function (input) {
        if (input == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateSkillInput = function (input) {
        if (input.name == undefined || input.career == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateProfileInput = function (input) {
        if (input.university == undefined || input.career == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService.prototype.validatePassword = function (user) {
        if (user.password !== user.rptpassword) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/user/components/aboutus/aboutus.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user/components/aboutus/aboutus.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>About us Page - User</h3>"

/***/ }),

/***/ "./src/app/user/components/aboutus/aboutus.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/components/aboutus/aboutus.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/user/components/aboutus/aboutus.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/user/components/dashboard/dashboard.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/user/components/dashboard/dashboard.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/components/dashboard/dashboard.component.html":
/*!********************************************************************!*\
  !*** ./src/app/user/components/dashboard/dashboard.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your dashboard</p>\n"

/***/ }),

/***/ "./src/app/user/components/dashboard/dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/user/components/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/user/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/user/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/user/components/home/home.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user/components/home/home.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/components/home/home.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user/components/home/home.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>MEAN Authentication Application</h1>\n  <p class=\"lead\">Welcome to our custom Mean authentication application built from scratch</p>\n  <div *ngIf=\"!auth.loggedIn()\">\n    <a routerLink=\"/user/register\" class=\"btn btn-primary\">Register</a>&nbsp;\n    <a routerLink=\"/user/login\" class=\"btn btn-default\">Login</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-4\">\n    <h3>Express Backend</h3>\n    <P>A rock solid Node.js/ Express server udsing Mongoose to organize models and query the databse</P>\n  </div>\n\n  <div class=\"col-md-4\">\n    <h3>Angular6-Cli</h3>\n    <P> Angular6-Cli to generate components, services and more. Local dev server and easy compilation</P>\n  </div>\n\n  <div class=\"col-md-4\">\n    <h3>JWT Tokens</h3>\n    <P>Full featured authentication using JSON web tokens. Login and store user data</P>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/user/components/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(auth) {
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/user/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/user/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/user/components/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user/components/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/components/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/user/components/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"col-md-6 col-md-offset-3\">\n\n  <h2 class=\"page-header\">Login</h2>\n  <form (submit)=\"onLoginSubmit()\" class=\"well\">\n      <div class=\"form-group\">\n        <label for=\"username\">Email</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" >\n      </div>\n      \n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n      </div>\n      \n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n  </form>\n</div> "

/***/ }),

/***/ "./src/app/user/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, toastr, jwtHelper) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
        this.jwtHelper = jwtHelper;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.auth.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                var use = localStorage.getItem('user');
                console.log(use);
                console.log(_this.jwtHelper.isTokenExpired());
                _this.auth.storeUserData(data.token, data.user);
                _this.toastr.success(data.msg, 'You are now logged in.', { timeOut: 5000 });
                _this.router.navigate(['/user']);
            }
            else {
                _this.toastr.error(data.msg, 'Invalid login details.', { timeOut: 5000 });
                _this.router.navigate(['/user/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/user/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/user/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user/components/navbar/navbar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user/components/navbar/navbar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/components/navbar/navbar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user/components/navbar/navbar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span> \n      </button>\n      <a class=\"navbar-brand\"routerLink=\"/user\" routerLinkActive=\"Active\">MEAN Auth App</a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar\">\n        <li><a routerLink=\"/user\" routerLinkActive=\"Active\" >Home</a></li>\n        <li *ngIf=\"auth.loggedIn()\"><a routerLink=\"/user/profile\" routerLinkActive=\"Active\">Profile</a></li>\n        <li *ngIf=\"auth.loggedIn()\"><a routerLink=\"/user/dashboard\" routerLinkActive=\"Active\">Dashboard</a></li>\n      \n       \n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"!auth.loggedIn()\"><a routerLink=\"/user/register\" routerLinkActive=\"Active\"><span class=\"glyphicon glyphicon-user\"></span> Register</a></li>\n        <li *ngIf=\"!auth.loggedIn()\"><a routerLink=\"/user/login\" routerLinkActive=\"Active\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n        <li *ngIf=\"auth.loggedIn()\"><a href='#' (click)=\"onLogoutClick()\"><span class=\"glyphicon glyphicon-log-out\"></span> Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/user/components/navbar/navbar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user/components/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(auth, router, toastr) {
        this.auth = auth;
        this.router = router;
        this.toastr = toastr;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = localStorage.getItem('user');
        console.log(this.user);
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.auth.logout();
        this.toastr.info('Thanks for visiting', 'You have logged out of your account', { timeOut: 3000 });
        this.router.navigate(['/user/login']);
        this.user = null;
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/user/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/user/components/navbar/navbar.component.css")],
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/user/components/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/user/components/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/components/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/user/components/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n  <h2 class=\"page-header\">{{ user.name }}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{ user.username }}</li>\n    <li class=\"list-group-item\">Email: {{ user.email }}</li>\n    <li class=\"list-group-item\">User Type: {{ user.type }}</li>\n    <li class=\"list-group-item\">Career: {{ user.career }}</li>\n    <li class=\"list-group-item\">University: {{ user.university }}</li>\n \n  </ul>\n</div> -->\n<br>\n\n<div class=\"col-md-6 col-md-offset-3\" >\n    <h2 class=\"page-header\">Profile</h2>\n    <form (submit)=\"onCareerSubmit()\" class=\"well\">\n        <div class=\"form-group\">\n            <label for=\"university\">Select University:</label>\n            <select class=\"form-control\" id=\"university\" name=\"university\" [(ngModel)]=\"university\" required> \n              <option></option>\n              <option *ngFor=\"let university of universities\">{{ university.name }}</option>\n            </select>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"career\">Select Career:</label>\n          <select class=\"form-control\" id=\"career\" name=\"career\" [(ngModel)]=\"career\" (ngModelChange)=\"onCareerChange($event)\">\n            <option></option>\n            <option *ngFor=\"let career of careers\" value=\"{{career.name}}\">{{ career.name }} </option>\n          </select>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"skills\">Pick the skills you have:</label>\n        \n        <select class=\"form-control\" id=\"skills\" name=\"skills\" [(ngModel)]=\"skills\" multiple>\n          <option></option>\n          <option *ngFor=\"let skill of careerskills\"> {{ skill.name }} </option>\n        </select>\n    </div>\n    \n      <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n    </form>\n   \n\n</div>\n\n"

/***/ }),

/***/ "./src/app/user/components/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/user/components/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_admin_input_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/admin-input.service */ "./src/app/services/admin-input.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth, router, adminInput, validateService, toastr, location) {
        this.auth = auth;
        this.router = router;
        this.adminInput = adminInput;
        this.validateService = validateService;
        this.toastr = toastr;
        this.location = location;
        this.showForm = true;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            // getting all careers in data base
            _this.adminInput.getCareer()
                .subscribe(function (resCareerData) { return _this.careers = resCareerData; });
            // getting all universities in data base
            _this.adminInput.getUniversity()
                .subscribe(function (resUniversityData) { return _this.universities = resUniversityData; });
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.onCareerSubmit = function () {
        var _this = this;
        this.showForm = false;
        this.user_pro = {
            career: this.career,
            university: this.university,
            skills: this.skills,
            _id: this.user._id
        };
        if (!this.validateService.validateProfileInput(this.user_pro)) {
            this.toastr.error('Error sending form', 'Please fill in the field', { timeOut: 3000 });
            return false;
        }
        this.auth.addProfile(this.user_pro).subscribe(function (data) {
            if (data) {
                _this.toastr.success('Successfully.', 'The career has been added.', { timeOut: 3000 });
                _this.user = data;
                //location.reload();
            }
            else {
                _this.toastr.error('Try again later.', 'Something went wrong.', { timeOut: 3000 });
                _this.router.navigate(['/profile']);
            }
        });
    };
    ProfileComponent.prototype.onCareerChange = function (career) {
        this.getSkills(career);
    };
    ProfileComponent.prototype.getSkills = function (car) {
        var _this = this;
        // getting all skills for career in data base
        this.adminInput.getCareerSkills(car)
            .subscribe(function (resCareerSkillData) { return _this.careerskills = resCareerSkillData; });
        console.log(this.careerskills);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/user/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/user/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_admin_input_service__WEBPACK_IMPORTED_MODULE_3__["AdminInputService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_5__["ValidateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/components/register/register.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/user/components/register/register.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/components/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/user/components/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"col-md-6 col-md-offset-3\">\n  <h2 class=\"page-header\">Register</h2>\n  <form (submit)=\"onRegisterSubmit()\" class=\"well\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"username\">Usename</label>\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\"required >\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\" required>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"rtppassword\">Repeat Password</label>\n      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"rptpassword\" name=\"rptpassword\" required>\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/user/components/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/user/components/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, toastr, auth, router) {
        this.validateService = validateService;
        this.toastr = toastr;
        this.auth = auth;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            type: 'User',
            username: this.username,
            password: this.password,
            rptpassword: this.rptpassword
        };
        //Reguired Field
        if (!this.validateService.validateRegister(user)) {
            this.toastr.error('Error sending form', 'Please fill in all fields', { timeOut: 3000 });
            return false;
        }
        //Reguired Email
        if (!this.validateService.validateEmail(user.email)) {
            console.log('Please use a valid email ');
            this.toastr.error('Error sending form', 'Please use a valid email', { timeOut: 3000 });
            return false;
        }
        //Reguired Field
        if (!this.validateService.validatePassword(user)) {
            console.log('Password not matched');
            this.toastr.error('Error sending form', 'Password not matched', { timeOut: 3000 });
            return false;
        }
        // Register User
        this.auth.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.toastr.success('Thanks.', 'You have now registered and can login.', { timeOut: 3000 });
                _this.router.navigate(['/user/login']);
            }
            else {
                _this.toastr.error('Please Try again. Thanks.', 'Something went wrong. Email already exist', { timeOut: 3000 });
                _this.router.navigate(['/user/Register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/user/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/user/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/user/components/home/home.component.ts");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/user/components/aboutus/aboutus.component.ts");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.routing */ "./src/app/user/user.routing.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/user/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/user/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/user/components/register/register.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/user/components/profile/profile.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/user/components/dashboard/dashboard.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/validate.service */ "./src/app/services/validate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _user_routing__WEBPACK_IMPORTED_MODULE_5__["UserRouting"],
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_14__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],],
            bootstrap: []
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/user.routing.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.routing.ts ***!
  \**************************************/
/*! exports provided: UserRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRouting", function() { return UserRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/user/components/home/home.component.ts");
/* harmony import */ var _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/aboutus/aboutus.component */ "./src/app/user/components/aboutus/aboutus.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/user/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/user/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/user/components/profile/profile.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/user/components/dashboard/dashboard.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../guards/auth.guard */ "./src/app/guards/auth.guard.ts");









var routes = [
    {
        path: 'user',
        component: _user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"],
        children: [
            { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'about-us', component: _components_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_3__["AboutUsComponent"] },
            { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
            { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
            { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
            { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
        ]
    }
];
var UserRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tumininu\Desktop\angular\MEAN Admin\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map