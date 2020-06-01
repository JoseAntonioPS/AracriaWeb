(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n  \n  <h1 class=\"h0\">.</h1>\n  <nav>\n    <div>     \n      <a routerLink=\"/home\">Home</a>\n      <a routerLink=\"/characters\">Characters</a>\n      <a routerLink=\"/designs\">Designs</a>\n      <a routerLink=\"/personaje\">Ranking</a>\n    </div>\n    <div>\n      <a href=\"/profile\" class=\"nav-link\" *ngIf=\"isLoggedIn\" routerLink=\"profile/{{username}}\">{{username}}</a>\n      <a *ngIf=\"lO\" routerLink=\"/register\">Register</a>\n      <a class=\"nav-link\" *ngIf=\"isLoggedIn\" (click)=\"logout()\">LogOut</a>\n      <a *ngIf=\"lO\" routerLink=\"/login\">Login</a>\n    </div>\n\n           \n  </nav> \n  <router-outlet></router-outlet>\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-admin/board-admin.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board-admin/board-admin.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>board-admin works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-moderator/board-moderator.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board-moderator/board-moderator.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>board-moderator works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-user/board-user.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/board-user/board-user.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>board-user works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chara-card/chara-card.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chara-card/chara-card.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"grid\">\n<div [ngStyle]=\"{'background-image':'url('+ruta+')'}\"></div>\n<div>\n    <div class=\"grid2\">\n        <div>\n            <button *ngIf=\"card\" (click)=\"enableUpload()\" class=\"B1\"></button>\n\n            <form\n            *ngIf=\"up\"\n            name=\"form\"\n            (ngSubmit)=\"f.form.valid && onSubmit()\"\n            #f=\"ngForm\"\n            novalidate> \n  \n             <div class=\"container\">\n                 <label for=\"name\"><b>Name of the Design</b></label>\n                 <input type=\"text\"\n                        class=\"form-control\"\n                        placeholder=\"Enter name\" \n                        name=\"name\" \n                        [(ngModel)]=\"form.name\"\n                        required\n                        #name=\"ngModel\">\n                <div class=\"alert-danger\" *ngIf=\"f.submitted && name.invalid\">\n                    <div *ngIf=\"name.errors.required\">name is required</div>\n                </div>\n            </div>\n\n            <div class=\"container\">\n                <label for=\"imagen\"><b>Image´s url</b></label>\n                <input type=\"text\"\n                       class=\"form-control\"\n                       placeholder=\"Enter url\" \n                       name=\"imagen\" \n                       [(ngModel)]=\"form.imagen\"\n                       required\n                       #imagen=\"ngModel\">\n               <div class=\"alert-danger\" *ngIf=\"f.submitted && imagen.invalid\">\n                   <div *ngIf=\"imagen.errors.required\">url is required</div>\n               </div>\n               <div *ngIf=\"di\">Design added</div>\n               <button type=\"submit\" class=\"B3\">Upload</button>\n                <button type=\"button\" class=\"B3\" (click)=\"disableUpload()\">Cancel</button>\n\n           </div>\n\n            </form>\n\n\n        </div>\n        <div>\n            <button *ngIf=\"card\" class=\"B2\"  (click)=\"capture(card)\"  routerLink=\"designs\"></button>\n        </div>\n    </div>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chara-page/chara-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chara-page/chara-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <h2>Characters</h2>\n\n  <div class = \"lista\">\n    <div (click)=\"capture(personaje)\" class= \"block\" *ngFor=\"let personaje of personajeList\" [ngStyle]=\"{'background-image':'url(assets/Avatar'+personaje.imagen+')'}\" href=\"chara/\" routerLink=\"chara/{{personaje.name}}\"></div>\n    </div>\n</main>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/des-inf/des-inf.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/des-inf/des-inf.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>{{perTemp.name}}</h2>\n<div *ngIf=\"aux\">\n    <button type=\"submit\">borra</button>\n</div>\n<div class=\"block\" [ngStyle]=\"{'background-image':'url('+perTemp.imagen+')'}\"></div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/design-page/design-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/design-page/design-page.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h2 *ngIf=\"public\">\n        Designs  \n    </h2>\n    <h2 *ngIf=\"onlyOne\">\n        {{perTemp.name}}´s Designs  \n    </h2>\n    <h4 *ngIf=\"onlyOne\">\n      {{perTemp.descripcion}}  \n    </h4>\n\n</div>\n\n<div class = \"lista\">\n    <div (click)=\"capture(design)\" class= \"block\" *ngFor=\"let design of list\" [ngStyle]=\"{'background-image':'url('+design.imagen+')'}\" href=\"design/\" routerLink=\"{{design.name}}\">\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2> Bienvenido sea </h2>\n<div class=\"container\">\n    <div class=\"info\">\n        <h4>Aracria es una página diseñada para compartir distintos diseños de los personajes pertenecientes a la absolutamente desconocida novela NoAca (No Todo Acaba tras la Muerte del Rey Demonio).        </h4>\n        <h4>Actualmente existen 6 volúmenes de esta saga de los cuales solo uno ha sido publicado:</h4>\n        <div class=\"block\"></div>\n        <h4>El Séptimo volumen aún está en proceso, y va a seguir estándolo hasta que empiece el verano y pueda finalmente volver a escribir</h4>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form *ngIf=\"!isLoggedIn\"\nname=\"form\"\n(ngSubmit)=\"f.form.valid && onSubmit()\"\n#f=\"ngForm\"\nnovalidate>\n    <div class=\"imgcontainer\">\n      <img src=\"assets\\Avatar.png\" alt=\"Avatar\" class=\"avatar\">\n    </div>\n  \n    <div class=\"container\">\n      <label for=\"username\"><b>Username</b></label>\n      <input type=\"text\" \n      placeholder=\"Enter Username\" \n      name=\"username\" \n      [(ngModel)]=\"form.username\"\n      required\n      #username=\"ngModel\">\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && username.invalid\">\n        <div *ngIf=\"username.errors.required\">Username is required</div>\n      </div>\n \n      <label for=\"password\"><b>Password</b></label>\n      <input type=\"password\" \n      placeholder=\"Enter Password\" \n      name=\"password\" \n      [(ngModel)]=\"form.password\"\n      required\n      minlength=\"6\"\n      #password=\"ngModel\">\n\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && password.invalid\">\n        <div *ngIf=\"password.errors.required\">Password is required</div>\n        <div *ngIf=\"password.errors.minlength\">\n          Password must be at least 6 characters\n        </div>\n    </div>\n  \n      <button type=\"submit\">Login</button>\n      <!-- <label>\n        <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\n      </label> -->\n    </div>\n  \n    <div class=\"container\" style=\"background-color:#f2ffac\">\n      <button type=\"button\" class=\"cancelbtn\">\n        <a routerLink=\"/home\" style=\"text-decoration: none\">Cancel</a>\n      </button>\n      <span class=\"psw\">Forgot <a href=\"#\">password?</a></span>\n    </div>\n  </form>\n  <div class=\"alert alert-success\" *ngIf=\"isLoggedIn\">\n    Logged in as {{ roles }}.\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/personaje/personaje.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/personaje/personaje.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html></html><div class=\"grid\">\n<div>\n    <div class=\"wrapper\">\n      \n        <div class=\"shape\">\n          \n          <div class=\"plane p1\" [ngStyle]=\"{'background-image':'url('+imagen1+')'}\"><p>Puesto 1</p></div>\n          <div class=\"plane p2\" [ngStyle]=\"{'background-image':'url('+imagen2+')'}\"><p>Puesto 2</p></div>\n          <div class=\"plane p3\" [ngStyle]=\"{'background-image':'url('+imagen3+')'}\"><p>Puesto 3</p></div>\n          <div class=\"plane p4\" [ngStyle]=\"{'background-image':'url('+imagen4+')'}\"><p>Puesto 4</p></div>\n          <div class=\"plane p5\" [ngStyle]=\"{'background-image':'url('+imagen5+')'}\"><p>Puesto 5</p></div>\n          <div class=\"plane p6\" [ngStyle]=\"{'background-image':'url('+imagen6+')'}\"><p>Puesto 6</p></div>\n          <div class=\"plane p7\" [ngStyle]=\"{'background-image':'url('+imagen7+')'}\"><p>Puesto 7</p></div>\n          <div class=\"plane p8\" [ngStyle]=\"{'background-image':'url('+imagen8+')'}\"><p>Puesto 8</p></div>\n          \n        </div>\n        \n      </div>\n    </div>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"areaP\" *ngIf=\"isLoggedIn\">\n    <header class=\"cab\">\n        <h2> {{username}}´s Profile</h2>\n    </header>\n    <main class=\"tit\">\n        <h3>Your´s Designs</h3>\n    </main>\n    <main class=\"des\">\n        <div class = \"lista\">\n            <div (click)=\"capture(designU)\" class= \"block\" *ngFor=\"let designU of list\" [ngStyle]=\"{'background-image':'url('+designU.imagen+')'}\" href=\"design/\" routerLink=\"design/{{designU.name}}\">\n             \n            </div>\n        </div>\n    </main>\n    <main class=\"opt\">\n        <div><h3>Options</h3></div>\n        <div>\n            <button type=\"button\" (click)=\"enableEmail()\">Change Email</button>\n            <button type=\"button\" (click)=\"enablePassword()\">Change Password</button>\n            <form\n            *ngIf=\"eE\"\n            name=\"form\"\n            (ngSubmit)=\"f.form.valid && onSubmit()\"\n            #f=\"ngForm\"\n            novalidate>\n                <input type=\"email\"\n                class=\"form-control\"\n                placeholder=\"Enter Email\"\n                name=\"email\"\n                [(ngModel)]=\"form.email\"\n                required\n                email\n                #email=\"ngModel\">\n\n                <div class=\"alert-danger\" *ngIf=\"f.submitted && email.invalid\">\n                    <div *ngIf=\"email.errors.required\">Email is required</div>\n                    <div *ngIf=\"email.errors.email\">\n                      Email must be a valid email address\n                    </div>\n                  </div>\n                <div *ngIf=\"di\">Email Updated</div>\n                <button type=\"submit\" class=\"button2\">Update</button>\n                <button type=\"button\" class=\"cancelbtn\" (click)=\"disableEmail()\">Cancel</button>\n            </form>\n\n            <form\n            *ngIf=\"eP && !eE\"\n            name=\"form\"\n            (ngSubmit)=\"f.form.valid && onSubmit()\"\n            #f=\"ngForm\"\n            novalidate>\n                <input type=\"password\"\n                class=\"form-control\"\n                placeholder=\"Enter Password\"\n                name=\"password\"\n                [(ngModel)]=\"form.password\"\n                required\n                minlength=\"6\"\n                password\n                #password=\"ngModel\"\n                >\n\n                <div class=\"alert-danger\" *ngIf=\"f.submitted && password.invalid\">\n                    <div *ngIf=\"password.errors.required\">Password is required</div>\n                    <div *ngIf=\"password.errors.minlength\">\n                      Password must be at least 6 characters\n                    </div>\n                </div>\n\n                <div *ngIf=\"di2\">Password Updated</div>\n                <button type=\"submit\" class=\"button2\">Update</button>\n                <button type=\"button\" class=\"cancelbtn\" (click)=\"disablePassword()\">Cancel</button>\n            </form>\n        </div>\n    </main>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"imgcontainer\">\n  <img src=\"assets\\Avatar.png\" alt=\"Avatar\" class=\"img.avatar\">\n</div>\n\n<form\n*ngIf=\"!isSuccessful\"\nname=\"form\"\n(ngSubmit)=\"f.form.valid && onSubmit()\"\n#f=\"ngForm\"\nnovalidate> \n  \n    <div class=\"container\">\n      <label for=\"username\"><b>Username</b></label>\n      <input type=\"text\"\n      class=\"form-control\"\n      placeholder=\"Enter Username\" \n      name=\"username\" \n      [(ngModel)]=\"form.username\"\n      required\n      minlength=\"3\"\n      maxlength=\"20\"\n      #username=\"ngModel\">\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && username.invalid\">\n        <div *ngIf=\"username.errors.required\">Username is required</div>\n      </div>\n\n      <label for=\"email\"><b>Email</b></label>\n      <input type=\"email\"\n      class=\"form-control\"\n      placeholder=\"Enter Email\"\n      name=\"email\"\n      [(ngModel)]=\"form.email\"\n      required\n      email\n      #email=\"ngModel\">\n\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && email.invalid\">\n        <div *ngIf=\"email.errors.required\">Email is required</div>\n        <div *ngIf=\"email.errors.email\">\n          Email must be a valid email address\n        </div>\n      </div>\n      \n  \n      <label for=\"password\"><b>Password</b></label>\n      <input type=\"password\"\n      class=\"form-control\"\n      placeholder=\"Enter Password\" \n      name=\"password\" \n      [(ngModel)]=\"form.password\"\n      required\n      minlength=\"6\"\n      #password=\"ngModel\">\n\n      <div class=\"alert-danger\" *ngIf=\"f.submitted && password.invalid\">\n        <div *ngIf=\"password.errors.required\">Password is required</div>\n        <div *ngIf=\"password.errors.minlength\">\n          Password must be at least 6 characters\n        </div>\n    </div>\n  \n      <button type=\"submit\">Register</button>\n      <button type=\"button\" class=\"cancelbtn\">\n        <a routerLink=\"/home\" style=\"text-decoration: none\">Cancel</a>\n      </button>\n    </div>\n\n    <div *ngIf=\"f.submitted && isSignUpFailed\">\n      Signup failed!<br />{{ errorMessage }}\n    </div>\n    <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\n      Your registration is successful!\n    </div>\n  \n  </form>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/_helpers/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/_helpers/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




const TOKEN_HEADER_KEY = 'Authorization';
let AuthInterceptor = class AuthInterceptor {
    constructor(token) {
        this.token = token;
    }
    intercept(req, next) {
        let authReq = req;
        const token = this.token.getToken();
        if (token != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
        }
        return next.handle(authReq);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthInterceptor);

const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: AuthInterceptor, multi: true }
];


/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const AUTH_API = 'http://localhost:8081/auth/';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
    }
    login(credentials) {
        return this.http.post(AUTH_API + 'signin', {
            username: credentials.username,
            password: credentials.password
        }, httpOptions);
    }
    register(user) {
        return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        }, httpOptions);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/_services/design.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/design.service.ts ***!
  \*********************************************/
/*! exports provided: DesignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignService", function() { return DesignService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DesignService = class DesignService {
    constructor(http) {
        this.http = http;
        this.API = 'http://localhost:8081/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    deleteDes(id) {
        return this.http.delete(this.API + "designs/" + id, this.httpOptions);
    }
    getDesignsByUsername(uname) {
        return this.http.get(this.API + 'getDesignsByUser?username=' + uname, this.httpOptions);
    }
    getDesigns(id) {
        return this.http.post(this.API + 'usuarios/' + id + "/disenU", this.httpOptions);
    }
    getAllDesigns() {
        return this.http.post(this.API + 'getDesigns', this.httpOptions);
    }
    getDesignsByPersonaje(pers) {
        return this.http.get(this.API + "getDesignsByPersonaje?name=" + pers, this.httpOptions);
    }
    postDes(uname, nam, des) {
        return this.http.post(this.API + "postDesign?username=" + uname + "&name=" + nam, {
            name: des.name,
            imagen: des.imagen
        }, this.httpOptions);
    }
};
DesignService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DesignService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DesignService);



/***/ }),

/***/ "./src/app/_services/personaje.service.ts":
/*!************************************************!*\
  !*** ./src/app/_services/personaje.service.ts ***!
  \************************************************/
/*! exports provided: PersonajeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonajeService", function() { return PersonajeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PersonajeService = class PersonajeService {
    constructor(http) {
        this.http = http;
        this.getP = 'http://localhost:8081/getPersonajes';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getPersonajes() {
        return this.http.get(this.getP, this.httpOptions);
    }
};
PersonajeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PersonajeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PersonajeService);



/***/ }),

/***/ "./src/app/_services/token-storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/token-storage.service.ts ***!
  \****************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
let TokenStorageService = class TokenStorageService {
    constructor() { }
    signOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    getToken() {
        return sessionStorage.getItem(TOKEN_KEY);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getUser() {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
    perTemp(per) {
        this.DES = per;
    }
    getPerTemp() {
        return this.DES;
    }
    perTemp2(per) {
        this.DES2 = per;
    }
    getPerTemp2() {
        return this.DES2;
    }
};
TokenStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenStorageService);



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const API_URL = 'http://localhost:8081/test/';
const API = 'http://localhost:8081/';
let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getPublicContent() {
        return this.http.get(API_URL + 'all', { responseType: 'text' });
    }
    getUserBoard() {
        return this.http.get(API_URL + 'user', { responseType: 'text' });
    }
    getModeratorBoard() {
        return this.http.get(API_URL + 'mod', { responseType: 'text' });
    }
    getAdminBoard() {
        return this.http.get(API_URL + 'admin', { responseType: 'text' });
    }
    changeEma(uname, ema) {
        return this.http.post(API + "changeEmail?username=" + uname + "&email=" + ema, this.httpOptions);
    }
    changePass(uname, pass) {
        return this.http.post(API + "changePassword?username=" + uname + "&password=" + pass, this.httpOptions);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _chara_page_chara_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chara-page/chara-page.component */ "./src/app/chara-page/chara-page.component.ts");
/* harmony import */ var _design_page_design_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./design-page/design-page.component */ "./src/app/design-page/design-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _personaje_personaje_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./personaje/personaje.component */ "./src/app/personaje/personaje.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _des_inf_des_inf_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./des-inf/des-inf.component */ "./src/app/des-inf/des-inf.component.ts");
/* harmony import */ var _chara_card_chara_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chara-card/chara-card.component */ "./src/app/chara-card/chara-card.component.ts");












const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'characters', component: _chara_page_chara_page_component__WEBPACK_IMPORTED_MODULE_4__["CharaPageComponent"] },
    { path: 'designs', component: _design_page_design_page_component__WEBPACK_IMPORTED_MODULE_5__["DesignPageComponent"] },
    { path: 'characters/chara/:name/designs', component: _design_page_design_page_component__WEBPACK_IMPORTED_MODULE_5__["DesignPageComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'personaje', component: _personaje_personaje_component__WEBPACK_IMPORTED_MODULE_8__["PersonajeComponent"] },
    { path: 'profile/:username', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
    { path: 'profile/:username/design/:name', component: _des_inf_des_inf_component__WEBPACK_IMPORTED_MODULE_10__["DesInfComponent"] },
    { path: 'designs/:name', component: _des_inf_des_inf_component__WEBPACK_IMPORTED_MODULE_10__["DesInfComponent"] },
    { path: 'characters/chara/:name/designs/:name', component: _des_inf_des_inf_component__WEBPACK_IMPORTED_MODULE_10__["DesInfComponent"] },
    { path: 'characters/chara/:name', component: _chara_card_chara_card_component__WEBPACK_IMPORTED_MODULE_11__["CharaCardComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a{\r\n    font-size: xx-large;  \r\n    color: rgb(81, 105, 185);\r\n    font-weight: bolder;\r\n    text-shadow: 1px 1px rgb(150, 160, 255);\r\n    text-decoration:none;\r\n    padding-right: 20px;\r\n}\r\na:hover{\r\n    color: rgb(20, 48, 139);\r\n}\r\nnav{\r\n    display: grid;\r\n    grid-template-columns: 5fr 1fr;\r\n}\r\n.h0{\r\n    color: rgba(125, 118, 255, 0);\r\n    text-align: center;\r\n    font-size: 70px;\r\n    margin-top: 0px;\r\n    padding: 0%;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    \r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQix1Q0FBdUM7SUFDdkMsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztJQUNYLDREQUE0RDs7QUFFaEUiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlOyAgXHJcbiAgICBjb2xvcjogcmdiKDgxLCAxMDUsIDE4NSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggcmdiKDE1MCwgMTYwLCAyNTUpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgICBjb2xvcjogcmdiKDIwLCA0OCwgMTM5KTtcclxufVxyXG5cclxubmF2e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcclxufVxyXG4uaDB7XHJcbiAgICBjb2xvcjogcmdiYSgxMjUsIDExOCwgMjU1LCAwKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");



let AppComponent = class AppComponent {
    constructor(tokenStorageService) {
        this.tokenStorageService = tokenStorageService;
        this.title = 'Aracria´s Designs';
        this.isLoggedIn = false;
        this.lO = false;
        this.showAdminBoard = false;
        this.showModeratorBoard = false;
    }
    ngOnInit() {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.roles = user.roles;
            this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
            this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
            this.username = user.username;
        }
        else {
            this.lO = true;
        }
    }
    logout() {
        this.tokenStorageService.signOut();
        window.location.reload();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _chara_page_chara_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chara-page/chara-page.component */ "./src/app/chara-page/chara-page.component.ts");
/* harmony import */ var _design_page_design_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./design-page/design-page.component */ "./src/app/design-page/design-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _personaje_personaje_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./personaje/personaje.component */ "./src/app/personaje/personaje.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./board-admin/board-admin.component */ "./src/app/board-admin/board-admin.component.ts");
/* harmony import */ var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./board-moderator/board-moderator.component */ "./src/app/board-moderator/board-moderator.component.ts");
/* harmony import */ var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./board-user/board-user.component */ "./src/app/board-user/board-user.component.ts");
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_helpers/auth.interceptor */ "./src/app/_helpers/auth.interceptor.ts");
/* harmony import */ var _des_inf_des_inf_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./des-inf/des-inf.component */ "./src/app/des-inf/des-inf.component.ts");
/* harmony import */ var _chara_card_chara_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chara-card/chara-card.component */ "./src/app/chara-card/chara-card.component.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
            _chara_page_chara_page_component__WEBPACK_IMPORTED_MODULE_6__["CharaPageComponent"],
            _design_page_design_page_component__WEBPACK_IMPORTED_MODULE_7__["DesignPageComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
            _personaje_personaje_component__WEBPACK_IMPORTED_MODULE_11__["PersonajeComponent"],
            _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_14__["BoardAdminComponent"],
            _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_15__["BoardModeratorComponent"],
            _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_16__["BoardUserComponent"],
            _des_inf_des_inf_component__WEBPACK_IMPORTED_MODULE_18__["DesInfComponent"],
            _chara_card_chara_card_component__WEBPACK_IMPORTED_MODULE_19__["CharaCardComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
        ],
        providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["authInterceptorProviders"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/board-admin/board-admin.component.css":
/*!*******************************************************!*\
  !*** ./src/app/board-admin/board-admin.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLWFkbWluL2JvYXJkLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/board-admin/board-admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/board-admin/board-admin.component.ts ***!
  \******************************************************/
/*! exports provided: BoardAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardAdminComponent", function() { return BoardAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BoardAdminComponent = class BoardAdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
BoardAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-admin/board-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board-admin.component.css */ "./src/app/board-admin/board-admin.component.css")).default]
    })
], BoardAdminComponent);



/***/ }),

/***/ "./src/app/board-moderator/board-moderator.component.css":
/*!***************************************************************!*\
  !*** ./src/app/board-moderator/board-moderator.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLW1vZGVyYXRvci9ib2FyZC1tb2RlcmF0b3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/board-moderator/board-moderator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/board-moderator/board-moderator.component.ts ***!
  \**************************************************************/
/*! exports provided: BoardModeratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardModeratorComponent", function() { return BoardModeratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BoardModeratorComponent = class BoardModeratorComponent {
    constructor() { }
    ngOnInit() {
    }
};
BoardModeratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board-moderator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board-moderator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-moderator/board-moderator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board-moderator.component.css */ "./src/app/board-moderator/board-moderator.component.css")).default]
    })
], BoardModeratorComponent);



/***/ }),

/***/ "./src/app/board-user/board-user.component.css":
/*!*****************************************************!*\
  !*** ./src/app/board-user/board-user.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLXVzZXIvYm9hcmQtdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/board-user/board-user.component.ts":
/*!****************************************************!*\
  !*** ./src/app/board-user/board-user.component.ts ***!
  \****************************************************/
/*! exports provided: BoardUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardUserComponent", function() { return BoardUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BoardUserComponent = class BoardUserComponent {
    constructor() { }
    ngOnInit() {
    }
};
BoardUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-board-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./board-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/board-user/board-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./board-user.component.css */ "./src/app/board-user/board-user.component.css")).default]
    })
], BoardUserComponent);



/***/ }),

/***/ "./src/app/chara-card/chara-card.component.css":
/*!*****************************************************!*\
  !*** ./src/app/chara-card/chara-card.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html{\r\n    background-image: url('Fondo2.png');\r\n    padding: 50%;\r\n}\r\n.container{\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n.form-control{\r\n    background-color: black;\r\n    color: rgb(255, 255, 255);\r\n    font-weight: bold;\r\n    height: 25px;\r\n    width: 245px;\r\n}\r\n.B1{\r\n    background-image: url('B1.png');\r\n    height: 95px;\r\n    width: 203px;\r\n    background-color: rgba(255, 255, 255, 0);\r\n    border: none;\r\n}\r\n.B2{\r\n    background-image: url('B2.png');\r\n    height: 95px;\r\n    width: 203px;\r\n    background-color: rgba(255, 255, 255, 0);\r\n    border: none;\r\n}\r\n.B3{\r\n    padding: 7%;\r\n    margin-left: 25px;\r\n    background-color: rgb(0, 0, 0);\r\n    border-radius: 25%;\r\n    color: white;\r\n    border: none;\r\n}\r\nbutton:hover {\r\n    opacity: 0.8;\r\n  }\r\n.grid{\r\n    display: grid;\r\n    grid-template-columns: 4fr 1fr;\r\n    background-image: url('Fondo2.png');\r\n    height: 770px;\r\n}\r\n.grid2{\r\n    display: grid;\r\n    grid-template-rows: 1fr 1fr;\r\n}\r\nbutton{\r\n    margin-top: 10%;\r\n    margin-left: 4%;\r\n    padding: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmEtY2FyZC9jaGFyYS1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBOEM7SUFDOUMsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksNERBQTREO0FBQ2hFO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksK0JBQTBDO0lBQzFDLFlBQVk7SUFDWixZQUFZO0lBQ1osd0NBQXdDO0lBQ3hDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLCtCQUEwQztJQUMxQyxZQUFZO0lBQ1osWUFBWTtJQUNaLHdDQUF3QztJQUN4QyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7RUFDZDtBQUVGO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQ0FBOEM7SUFDOUMsYUFBYTtBQUNqQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2hhcmEtY2FyZC9jaGFyYS1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1se1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjXFxhc3NldHNcXEZvbmRvMi5wbmdcIik7XHJcbiAgICBwYWRkaW5nOiA1MCU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxufVxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjQ1cHg7XHJcbn1cclxuLkIxe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjXFxhc3NldHNcXEIxLnBuZ1wiKTtcclxuICAgIGhlaWdodDogOTVweDtcclxuICAgIHdpZHRoOiAyMDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLkIye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjXFxhc3NldHNcXEIyLnBuZ1wiKTtcclxuICAgIGhlaWdodDogOTVweDtcclxuICAgIHdpZHRoOiAyMDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLkIze1xyXG4gICAgcGFkZGluZzogNyU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5idXR0b246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbi5ncmlke1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyY1xcYXNzZXRzXFxGb25kbzIucG5nXCIpO1xyXG4gICAgaGVpZ2h0OiA3NzBweDtcclxufVxyXG5cclxuLmdyaWQye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/chara-card/chara-card.component.ts":
/*!****************************************************!*\
  !*** ./src/app/chara-card/chara-card.component.ts ***!
  \****************************************************/
/*! exports provided: CharaCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharaCardComponent", function() { return CharaCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");
/* harmony import */ var _services_design_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/design.service */ "./src/app/_services/design.service.ts");




let CharaCardComponent = class CharaCardComponent {
    constructor(tokenStorageService, designService) {
        this.tokenStorageService = tokenStorageService;
        this.designService = designService;
        this.up = false;
        this.di = false;
        this.form = {};
    }
    ngOnInit() {
        this.getChara();
        this.ruta = "assets/" + this.card.imagen;
        if (this.tokenStorageService.getToken()) {
            this.username = this.tokenStorageService.getUser().username;
        }
        this.name = this.card.name;
        console.log(this.card);
    }
    onSubmit() {
        this.designService.postDes(this.username, this.name, this.form).subscribe(data => {
            console.log(data);
            this.di = true;
        });
    }
    getChara() {
        this.card = this.tokenStorageService.getPerTemp();
    }
    enableUpload() {
        this.up = true;
    }
    disableUpload() {
        this.up = false;
        this.di = false;
    }
    capture(perso) {
        this.tokenStorageService.perTemp(perso);
    }
};
CharaCardComponent.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] },
    { type: _services_design_service__WEBPACK_IMPORTED_MODULE_3__["DesignService"] }
];
CharaCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chara-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chara-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chara-card/chara-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chara-card.component.css */ "./src/app/chara-card/chara-card.component.css")).default]
    })
], CharaCardComponent);



/***/ }),

/***/ "./src/app/chara-page/chara-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/chara-page/chara-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".block{\r\n    display:inline-block;\r\n    background-color: rgba(0, 0, 0, 0.377);\r\n    background-size: cover;\r\n    height: 300px;\r\n    padding: 10%;\r\n    margin: 3%;\r\n    border-style: solid;\r\n    border-color: rgb(255, 145, 0);\r\n}\r\n\r\n.block:hover{\r\n    background-color: rgba(0, 0, 0, 0.568);\r\n    border-style: solid;\r\n    border-color: black;\r\n}\r\n\r\n.lista{\r\n    display: grid;\r\n    grid-template-columns: repeat(3, minmax(80px, 4fr));\r\n \r\n}\r\n\r\n@media (min-width: 400px){\r\n    .lista{\r\n        display: grid;\r\n        grid-template-columns: repeat(1, minmax(225px, 6fr));\r\n    }\r\n    }\r\n\r\n@media (min-width: 700px){\r\n.lista{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, minmax(225px, 6fr));\r\n}\r\n}\r\n\r\n@media (min-width: 990px){\r\n    .lista{\r\n        display: grid;\r\n        grid-template-columns: repeat(3, minmax(80px, 4fr));\r\n    }\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcmEtcGFnZS9jaGFyYS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbURBQW1EOztBQUV2RDs7QUFDQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLG9EQUFvRDtJQUN4RDtJQUNBOztBQUNKO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0RBQW9EO0FBQ3hEO0FBQ0E7O0FBQ0E7SUFDSTtRQUNJLGFBQWE7UUFDYixtREFBbUQ7SUFDdkQ7SUFDQSIsImZpbGUiOiJzcmMvYXBwL2NoYXJhLXBhZ2UvY2hhcmEtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2Nre1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzc3KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogMTAlO1xyXG4gICAgbWFyZ2luOiAzJTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDE0NSwgMCk7XHJcbn1cclxuXHJcbi5ibG9jazpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NjgpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5saXN0YXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoODBweCwgNGZyKSk7XHJcbiBcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpe1xyXG4gICAgLmxpc3Rhe1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgbWlubWF4KDIyNXB4LCA2ZnIpKTtcclxuICAgIH1cclxuICAgIH1cclxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KXtcclxuLmxpc3Rhe1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgyMjVweCwgNmZyKSk7XHJcbn1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkwcHgpe1xyXG4gICAgLmxpc3Rhe1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDgwcHgsIDRmcikpO1xyXG4gICAgfVxyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/chara-page/chara-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/chara-page/chara-page.component.ts ***!
  \****************************************************/
/*! exports provided: CharaPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharaPageComponent", function() { return CharaPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_personaje_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/personaje.service */ "./src/app/_services/personaje.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




let CharaPageComponent = class CharaPageComponent {
    constructor(personajeService, tokenStorageService) {
        this.personajeService = personajeService;
        this.tokenStorageService = tokenStorageService;
    }
    ngOnInit() {
        this.getPer();
    }
    getPer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.personajeService.getPersonajes().subscribe((datos) => {
                this.personajeList = datos;
                this.personaje = datos;
                this.numPersonajes = Object.entries(this.personaje).length;
                for (var i = 0; i < this.numPersonajes; i++) {
                    let persona = this.personaje[i];
                    this.personajeList[i] = persona;
                }
            });
        });
    }
    capture(perso) {
        this.tokenStorageService.perTemp(perso);
    }
};
CharaPageComponent.ctorParameters = () => [
    { type: _services_personaje_service__WEBPACK_IMPORTED_MODULE_2__["PersonajeService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
CharaPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chara-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chara-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chara-page/chara-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chara-page.component.css */ "./src/app/chara-page/chara-page.component.css")).default]
    })
], CharaPageComponent);



/***/ }),

/***/ "./src/app/des-inf/des-inf.component.css":
/*!***********************************************!*\
  !*** ./src/app/des-inf/des-inf.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".block{\r\n    display:inline-block;\r\n    background-color: rgba(0, 0, 0, 0.377);\r\n    background-size: cover;\r\n    height: 900px;\r\n    width: 55%;\r\n    padding: 10%;\r\n    border-style:solid;\r\n    border-color: darkorange;\r\n    margin-left: 13%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzLWluZi9kZXMtaW5mLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsc0NBQXNDO0lBQ3RDLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2Rlcy1pbmYvZGVzLWluZi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2Nre1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzc3KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDkwMHB4O1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICAgIGJvcmRlci1zdHlsZTpzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogZGFya29yYW5nZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMyU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/des-inf/des-inf.component.ts":
/*!**********************************************!*\
  !*** ./src/app/des-inf/des-inf.component.ts ***!
  \**********************************************/
/*! exports provided: DesInfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesInfComponent", function() { return DesInfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");
/* harmony import */ var _services_design_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/design.service */ "./src/app/_services/design.service.ts");




let DesInfComponent = class DesInfComponent {
    constructor(tokenStorageService, designService) {
        this.tokenStorageService = tokenStorageService;
        this.designService = designService;
        this.aux = false;
    }
    ngOnInit() {
        this.perTemp2 = this.tokenStorageService.getPerTemp2();
        this.tokenStorageService.perTemp2("");
        this.perTemp = this.tokenStorageService.getPerTemp();
        this.ids = this.perTemp.id;
        console.log(this.perTemp.id);
        this.tokenStorageService.perTemp("");
        if (this.perTemp2) {
            this.aux = true;
        }
    }
};
DesInfComponent.ctorParameters = () => [
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] },
    { type: _services_design_service__WEBPACK_IMPORTED_MODULE_3__["DesignService"] }
];
DesInfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-des-inf',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./des-inf.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/des-inf/des-inf.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./des-inf.component.css */ "./src/app/des-inf/des-inf.component.css")).default]
    })
], DesInfComponent);



/***/ }),

/***/ "./src/app/design-page/design-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/design-page/design-page.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".block{\r\n    display:inline-block;\r\n    background-color: rgba(0, 0, 0, 0.377);\r\n    background-size: cover;\r\n    height: 300px;\r\n    padding: 10%;\r\n    margin: 3%;\r\n    border-style: solid;\r\n    border-color: rgb(255, 145, 0);\r\n}\r\n\r\n.block:hover{\r\n    background-color: rgba(0, 0, 0, 0.568);\r\n    border-style: solid;\r\n    border-color: black;\r\n}\r\n\r\n.lista{\r\n    display: grid;\r\n    grid-template-columns: repeat(3, minmax(80px, 4fr));\r\n \r\n}\r\n\r\n@media (min-width: 400px){\r\n    .lista{\r\n        display: grid;\r\n        grid-template-columns: repeat(1, minmax(225px, 6fr));\r\n    }\r\n    }\r\n\r\n@media (min-width: 700px){\r\n.lista{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, minmax(225px, 6fr));\r\n}\r\n}\r\n\r\n@media (min-width: 990px){\r\n    .lista{\r\n        display: grid;\r\n        grid-template-columns: repeat(3, minmax(80px, 4fr));\r\n    }\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduLXBhZ2UvZGVzaWduLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtREFBbUQ7O0FBRXZEOztBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2Isb0RBQW9EO0lBQ3hEO0lBQ0E7O0FBQ0o7QUFDQTtJQUNJLGFBQWE7SUFDYixvREFBb0Q7QUFDeEQ7QUFDQTs7QUFDQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLG1EQUFtRDtJQUN2RDtJQUNBIiwiZmlsZSI6InNyYy9hcHAvZGVzaWduLXBhZ2UvZGVzaWduLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibG9ja3tcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM3Nyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICAgIG1hcmdpbjogMyU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAxNDUsIDApO1xyXG59XHJcblxyXG4uYmxvY2s6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTY4KTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubGlzdGF7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDgwcHgsIDRmcikpO1xyXG4gXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KXtcclxuICAgIC5saXN0YXtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgyMjVweCwgNmZyKSk7XHJcbiAgICB9XHJcbiAgICB9XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCl7XHJcbi5saXN0YXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMjI1cHgsIDZmcikpO1xyXG59XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MHB4KXtcclxuICAgIC5saXN0YXtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCg4MHB4LCA0ZnIpKTtcclxuICAgIH1cclxuICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/design-page/design-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/design-page/design-page.component.ts ***!
  \******************************************************/
/*! exports provided: DesignPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignPageComponent", function() { return DesignPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_design_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/design.service */ "./src/app/_services/design.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




let DesignPageComponent = class DesignPageComponent {
    constructor(designService, tokenStorageService) {
        this.designService = designService;
        this.tokenStorageService = tokenStorageService;
    }
    ngOnInit() {
        this.character();
        if (this.public) {
            this.getDesigns();
        }
        else if (this.onlyOne) {
            this.aux = this.getDesignsByName(this.perTemp.name);
            this.tokenStorageService.perTemp("");
        }
    }
    getDesigns() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.designService.getAllDesigns().subscribe((datos) => {
                this.list = datos;
                this.des = datos;
                this.numDes = Object.entries(this.des).length;
                for (var i = 0; i < this.numDes; i++) {
                    let d = this.des[i];
                    this.list[i] = d;
                }
                this.list.sort((a, b) => a.id - b.id).slice(0, 3);
            });
        });
    }
    getDesignsByName(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.designService.getDesignsByPersonaje(name).subscribe((datos) => {
                this.list = datos;
                this.des = datos;
                this.numDes = Object.entries(this.des).length;
                for (var i = 0; i < this.numDes; i++) {
                    let d = this.des[i];
                    this.list[i] = d;
                }
                this.list.sort((a, b) => a.id - b.id).slice(0, 3);
            });
        });
    }
    character() {
        this.perTemp = this.tokenStorageService.getPerTemp();
        if (this.perTemp) {
            this.public = false;
            this.onlyOne = true;
        }
        else {
            this.public = true;
        }
    }
    capture(des) {
        this.tokenStorageService.perTemp(des);
    }
};
DesignPageComponent.ctorParameters = () => [
    { type: _services_design_service__WEBPACK_IMPORTED_MODULE_2__["DesignService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
DesignPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-design-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./design-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/design-page/design-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./design-page.component.css */ "./src/app/design-page/design-page.component.css")).default]
    })
], DesignPageComponent);



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".info{\r\n    background-color: rgba(255, 255, 133, 0.685);\r\n}\r\n.block{\r\n    display: block;\r\n    margin-left: 33%;\r\n    padding: 17%;\r\n    width: 1px;\r\n    height: 220px;\r\n    background-color: rgba(0, 0, 0, 0.336);\r\n    background-image: url('Portada.png');\r\n    background-size: cover;\r\n}\r\nh4{\r\n    color: rgb(158, 84, 0);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixVQUFVO0lBQ1YsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxvQ0FBK0M7SUFDL0Msc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDEzMywgMC42ODUpO1xyXG59XHJcbi5ibG9ja3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMzJTtcclxuICAgIHBhZGRpbmc6IDE3JTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMzNik7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL1BvcnRhZGEucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuaDR7XHJcbiAgICBjb2xvcjogcmdiKDE1OCwgODQsIDApO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");



let HomePageComponent = class HomePageComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.userService.getPublicContent().subscribe(data => {
            this.content = data;
        }, err => {
            this.content = JSON.parse(err.error).message;
        });
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-page/home-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label{\r\n    font-size: x-large;\r\n    color: rgb(125, 118, 255);\r\n    text-align: center;\r\n    margin-top: 0px;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    padding-right: 10px;\r\n}\r\n\r\nform {\r\n  padding: 0% 35% 0% 35%;\r\n  text-align: center;\r\n  }\r\n\r\n.alert-danger{\r\n    color: rgb(5, 0, 92);\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  }\r\n\r\n/* Full-width inputs */\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 8px;\r\n    display: inline-block;\r\n    border: 1px solid rgb(255, 136, 0);\r\n    box-sizing: border-box;\r\n  }\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n    align-self: center;\r\n    font-weight: bold;\r\n    background-color: rgb(87, 202, 255);\r\n    color: rgb(78, 65, 255);\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    margin-right: 10px;\r\n    width: 30%;\r\n    border-radius: 15px;\r\n  }\r\n\r\n/* Add a hover effect for buttons */\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n  }\r\n\r\n/* Extra style for the cancel button (red) */\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    margin-left: -150px;\r\n    background-color: #ffbb00;\r\n  }\r\n\r\n/* Center the avatar image inside this container */\r\n\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n    \r\n  }\r\n\r\n/* Avatar image */\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n  }\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n    padding: 16px;\r\n    \r\n  }\r\n\r\n/* The \"Forgot password\" text */\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n\r\n  }\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n      display: block;\r\n      float: none;\r\n      \r\n    }\r\n    .cancelbtn {\r\n      width: 100%;\r\n      \r\n      \r\n    }\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw0REFBNEQ7SUFDNUQsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQjs7QUFFQTtJQUNFLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDREQUE0RDtFQUM5RDs7QUFFQSxzQkFBc0I7O0FBQ3RCO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyxzQkFBc0I7RUFDeEI7O0FBRUEsZ0NBQWdDOztBQUNoQztJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7O0FBRUEsbUNBQW1DOztBQUNuQztJQUNFLFlBQVk7RUFDZDs7QUFFQSw0Q0FBNEM7O0FBQzVDO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCOztBQUVBLGtEQUFrRDs7QUFDbEQ7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCOztFQUV2Qjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0lBQ0UsVUFBVTtFQUNaOztBQUVBLDhCQUE4Qjs7QUFDOUI7SUFDRSxhQUFhOztFQUVmOztBQUVBLCtCQUErQjs7QUFDL0I7SUFDRSxZQUFZO0lBQ1osaUJBQWlCOztFQUVuQjs7QUFFQSxvRUFBb0U7O0FBQ3BFO0lBQ0U7TUFDRSxjQUFjO01BQ2QsV0FBVzs7SUFFYjtJQUNBO01BQ0UsV0FBVzs7O0lBR2I7O0VBRUYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWx7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogcmdiKDEyNSwgMTE4LCAyNTUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgcGFkZGluZzogMCUgMzUlIDAlIDM1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWxlcnQtZGFuZ2Vye1xyXG4gICAgY29sb3I6IHJnYig1LCAwLCA5Mik7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICBcclxuICAvKiBGdWxsLXdpZHRoIGlucHV0cyAqL1xyXG4gIGlucHV0W3R5cGU9dGV4dF0sIGlucHV0W3R5cGU9cGFzc3dvcmRdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggOHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMTM2LCAwKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgMjAyLCAyNTUpO1xyXG4gICAgY29sb3I6IHJnYig3OCwgNjUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgYnV0dG9ucyAqL1xyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEV4dHJhIHN0eWxlIGZvciB0aGUgY2FuY2VsIGJ1dHRvbiAocmVkKSAqL1xyXG4gIC5jYW5jZWxidG4ge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmIwMDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ2VudGVyIHRoZSBhdmF0YXIgaW1hZ2UgaW5zaWRlIHRoaXMgY29udGFpbmVyICovXHJcbiAgLmltZ2NvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDI0cHggMCAxMnB4IDA7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLyogQXZhdGFyIGltYWdlICovXHJcbiAgaW1nLmF2YXRhciB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoZSBcIkZvcmdvdCBwYXNzd29yZFwiIHRleHQgKi9cclxuICBzcGFuLnBzdyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuXHJcbiAgfVxyXG4gIFxyXG4gIC8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMwMHB4KSB7XHJcbiAgICBzcGFuLnBzdyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAuY2FuY2VsYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");




let LoginComponent = class LoginComponent {
    constructor(authService, tokenStorage) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = 'F';
        this.roles = [];
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
        }
    }
    onSubmit() {
        this.authService.login(this.form).subscribe(data => {
            this.tokenStorage.saveToken(data.accessToken);
            this.tokenStorage.saveUser(data);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
            this.reloadPage();
        }, err => {
            this.errorMessage = err.error.message;
            this.isLoginFailed = true;
        });
    }
    reloadPage() {
        window.location.reload();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/personaje/personaje.component.css":
/*!***************************************************!*\
  !*** ./src/app/personaje/personaje.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes spin {\r\n    from {-webkit-transform:rotateY(0); }\r\n    to {-webkit-transform:rotateY(-360deg);}\r\n  }\r\n\r\n  .grid{\r\n      display: grid;\r\n      grid-row: 1fr 1fr;\r\n  }\r\n\r\n  .wrapper {\r\n  margin: -50px auto 0 auto;\r\n   \r\n    -webkit-perspective:2000;\r\n    -webkit-perspective-origin:50% 50px;\r\n  }\r\n\r\n  .shape {\r\n    margin:100px auto;\r\n    height:400px;\r\n    width:100px;\r\n    -webkit-transform-style: preserve-3d;\r\n    -webkit-animation: spin 45s infinite linear;\r\n    \r\n   }\r\n\r\n  .plane:hover {\r\n    background:rgba(0, 0, 0, 0.733);\r\n  }\r\n\r\n  .plane {\r\n    position:absolute;\r\n    width:300px;\r\n    height:310px;\r\n    background:rgba(0,0,0,0.6);\r\n    color:#fff;\r\n    font-size:9em;\r\n    text-align:center;\r\n  }\r\n\r\n  .plane p {\r\n    position: absolute;\r\n    margin: 280px 0px 0px -80px;\r\n    display:none;\r\n    color:#fff;\r\n    background:#333;\r\n    font-size:30px;\r\n    padding:15px;\r\n    \r\n    \r\n    \r\n  }\r\n\r\n  .plane:hover p {\r\n  display:inline;\r\n  }\r\n\r\n  .p1 {\r\n  -webkit-transform: translateZ(600px);\r\n    }\r\n\r\n  .p2 {\r\n  -webkit-transform: rotateY(45deg) translateZ(600px);\r\n  }\r\n\r\n  .p3 {\r\n  -webkit-transform: rotateY(90deg) translateZ(600px);\r\n  }\r\n\r\n  .p4 {\r\n  -webkit-transform: rotateY(135deg) translateZ(600px);\r\n  }\r\n\r\n  .p5 {\r\n  -webkit-transform: rotateY(180deg) translateZ(600px);\r\n  }\r\n\r\n  .p6 {\r\n  -webkit-transform: rotateY(225deg) translateZ(600px);\r\n  }\r\n\r\n  .p7 {\r\n  -webkit-transform: rotateY(270deg) translateZ(600px);\r\n  }\r\n\r\n  .p8 {\r\n  -webkit-transform: rotateY(315deg) translateZ(600px);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWplL3BlcnNvbmFqZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksTUFBTSw0QkFBNEIsRUFBRTtJQUNwQyxJQUFJLGtDQUFrQyxDQUFDO0VBQ3pDOztFQUVBO01BQ0ksYUFBYTtNQUNiLGlCQUFpQjtFQUNyQjs7RUFFQTtFQUNBLHlCQUF5Qjs7SUFFdkIsd0JBQXdCO0lBQ3hCLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUNwQywyQ0FBMkM7O0dBRTVDOztFQUVEO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLFVBQVU7SUFDVixhQUFhO0lBQ2IsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTs7OztFQUlkOztFQUVBO0VBQ0EsY0FBYztFQUNkOztFQUVBO0VBQ0Esb0NBQW9DO0lBQ2xDOztFQUVGO0VBQ0EsbURBQW1EO0VBQ25EOztFQUVBO0VBQ0EsbURBQW1EO0VBQ25EOztFQUVBO0VBQ0Esb0RBQW9EO0VBQ3BEOztFQUVBO0VBQ0Esb0RBQW9EO0VBQ3BEOztFQUVBO0VBQ0Esb0RBQW9EO0VBQ3BEOztFQUVBO0VBQ0Esb0RBQW9EO0VBQ3BEOztFQUVBO0VBQ0Esb0RBQW9EO0VBQ3BEIiwiZmlsZSI6InNyYy9hcHAvcGVyc29uYWplL3BlcnNvbmFqZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgZnJvbSB7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWSgwKTsgfVxyXG4gICAgdG8gey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVkoLTM2MGRlZyk7fVxyXG4gIH1cclxuXHJcbiAgLmdyaWR7XHJcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgIGdyaWQtcm93OiAxZnIgMWZyO1xyXG4gIH1cclxuICBcclxuICAud3JhcHBlciB7XHJcbiAgbWFyZ2luOiAtNTBweCBhdXRvIDAgYXV0bztcclxuICAgXHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOjIwMDA7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlLW9yaWdpbjo1MCUgNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNoYXBlIHtcclxuICAgIG1hcmdpbjoxMDBweCBhdXRvO1xyXG4gICAgaGVpZ2h0OjQwMHB4O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA0NXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgXHJcbiAgIH1cclxuICBcclxuICAucGxhbmU6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsIDAsIDAsIDAuNzMzKTtcclxuICB9XHJcbiAgXHJcbiAgLnBsYW5lIHtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBoZWlnaHQ6MzEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC42KTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LXNpemU6OWVtO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wbGFuZSBwIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbjogMjgwcHggMHB4IDBweCAtODBweDtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiMzMzM7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuICAgIHBhZGRpbmc6MTVweDtcclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLnBsYW5lOmhvdmVyIHAge1xyXG4gIGRpc3BsYXk6aW5saW5lO1xyXG4gIH1cclxuICBcclxuICAucDEge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwMHB4KTtcclxuICAgIH1cclxuICBcclxuICAucDIge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDQ1ZGVnKSB0cmFuc2xhdGVaKDYwMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgLnAzIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSg5MGRlZykgdHJhbnNsYXRlWig2MDBweCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wNCB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMTM1ZGVnKSB0cmFuc2xhdGVaKDYwMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgLnA1IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpIHRyYW5zbGF0ZVooNjAwcHgpO1xyXG4gIH1cclxuICBcclxuICAucDYge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDIyNWRlZykgdHJhbnNsYXRlWig2MDBweCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wNyB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMjcwZGVnKSB0cmFuc2xhdGVaKDYwMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgLnA4IHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgzMTVkZWcpIHRyYW5zbGF0ZVooNjAwcHgpO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/personaje/personaje.component.ts":
/*!**************************************************!*\
  !*** ./src/app/personaje/personaje.component.ts ***!
  \**************************************************/
/*! exports provided: PersonajeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonajeComponent", function() { return PersonajeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_personaje_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/personaje.service */ "./src/app/_services/personaje.service.ts");



let PersonajeComponent = class PersonajeComponent {
    constructor(personajeService) {
        this.personajeService = personajeService;
        this.avatar = "assets/Avatar";
    }
    ngOnInit() {
        this.getPer();
    }
    getPer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.personajeService.getPersonajes().subscribe((datos) => {
                this.personajeList = datos;
                this.personaje = datos;
                this.numPersonajes = Object.entries(this.personaje).length;
                for (var i = 0; i < this.numPersonajes; i++) {
                    let persona = this.personaje[i];
                    this.personajeList[i] = persona;
                }
                this.personajeList.sort((a, b) => b.disen.length - a.disen.length).slice(0, 3);
                this.imagen1 = this.avatar + this.personajeList[0].imagen;
                this.imagen2 = this.avatar + this.personajeList[1].imagen;
                this.imagen3 = this.avatar + this.personajeList[2].imagen;
                this.imagen4 = this.avatar + this.personajeList[3].imagen;
                this.imagen5 = this.avatar + this.personajeList[4].imagen;
                this.imagen6 = this.avatar + this.personajeList[5].imagen;
                this.imagen7 = this.avatar + this.personajeList[6].imagen;
                this.imagen8 = this.avatar + this.personajeList[7].imagen;
                console.log(this.personajeList);
            });
            /*return await this.personajeService.getPersonajes().subscribe(async(data:any) =>{
             console.log(data);
             this.personajes =  data;
             this.numPersonajes=Object.entries(this.personaje).length;
       
             for(var i=0;i<this.numPersonajes;i++){
               let personaje:any= this.personaje[i];
               this.personajeList.push(personaje);
             }
       
           });*/
        });
    }
};
PersonajeComponent.ctorParameters = () => [
    { type: _services_personaje_service__WEBPACK_IMPORTED_MODULE_2__["PersonajeService"] }
];
PersonajeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-personaje',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./personaje.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/personaje/personaje.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./personaje.component.css */ "./src/app/personaje/personaje.component.css")).default]
    })
], PersonajeComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".areaP{\r\n    display: grid; \r\n    grid-template-areas:    \"cab cab cab\"\r\n                            \"tit tit opt\"\r\n                            \"des des opt\";\r\n    grid-template-columns:  2fr 2fr 3fr;\r\n    grid-template-rows:  40px 2fr 150px;\r\n}\r\n\r\n.cab{\r\n    grid-area: cab;\r\n}\r\n\r\n.tit{\r\n    grid-area: tit;\r\n}\r\n\r\n.des{\r\n    grid-area: des;\r\n}\r\n\r\n.opt{\r\n    grid-area: opt;\r\n    margin-top: 11.7%;\r\n    background-color: rgb(253, 255, 139);\r\n    border-style: solid;\r\n    border-color: rgb(255, 145, 0);\r\n}\r\n\r\n.form-control{\r\n    width: 90%;\r\n    margin-left: 5%;\r\n    margin-top: 4%;\r\n    padding: 12px 20px;\r\n    display: inline-block;\r\n    border: 1px solid rgb(255, 136, 0);\r\n    box-sizing: border-box;\r\n  }\r\n\r\nbutton {\r\n    margin-left: 13%;\r\n    font-weight: bold;\r\n    background-color: rgb(87, 202, 255);\r\n    border-style: solid;\r\n    border-color: rgb(0, 0, 133);\r\n    color: rgb(78, 65, 255);\r\n    padding: 14px 20px;\r\n    cursor: pointer;\r\n    margin-right: 10px;\r\n    width: 30%;\r\n    border-radius: 15px;\r\n  }\r\n\r\n.button2 {\r\n    margin-left: 13%;\r\n    margin-top: 2%;\r\n    font-weight: bold;\r\n    background-color: rgb(87, 202, 255);\r\n    border-style: solid;\r\n    border-color: rgb(0, 0, 133);\r\n    color: rgb(78, 65, 255);\r\n    padding: 14px 20px;\r\n    cursor: pointer;\r\n    margin-right: 10px;\r\n    width: 30%;\r\n    border-radius: 15px;\r\n  }\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n  }\r\n\r\n.alert-danger{\r\n    color: rgb(5, 0, 92);\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  }\r\n\r\n.cancelbtn {\r\n    font-weight: bold;\r\n    padding: 14px 20px;\r\n    margin-left: 13.5%;\r\n    border-style: solid;\r\n    border-color: #ff6600;\r\n    cursor: pointer;\r\n    margin-right: 10px;\r\n    width: 30%;\r\n    border-radius: 15px;\r\n    background-color: #ffbb00;\r\n  }\r\n\r\n.block{\r\n    display:inline-block;\r\n    background-color: rgba(0, 0, 0, 0.377);\r\n    background-size: cover;\r\n    height: 200px;\r\n    padding: 10%;\r\n    margin: 3%;\r\n    border-style: solid;\r\n    border-color: rgb(255, 145, 0);\r\n}\r\n\r\n.block:hover{\r\n    background-color: rgba(0, 0, 0, 0.568);\r\n    border-style: solid;\r\n    border-color: black;\r\n}\r\n\r\n.lista{\r\n    display: grid;\r\n    grid-template-columns: repeat(2, minmax(80px, 5fr));\r\n \r\n}\r\n\r\n@media (min-width: 500px){\r\n.lista{\r\n    display: grid;\r\n    grid-template-columns: repeat(1, minmax(225px, 6fr));\r\n}\r\n}\r\n\r\n@media (min-width: 990px){\r\n    .lista{\r\n        display: grid;\r\n        grid-template-columns: repeat(2, minmax(80px, 5fr));\r\n    }\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2I7O3lDQUVxQztJQUNyQyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDLHNCQUFzQjtFQUN4Qjs7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7O0FBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7QUFDQTtJQUNFLFlBQVk7RUFDZDs7QUFFQTtJQUNFLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDREQUE0RDtFQUM5RDs7QUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjs7QUFFRjtJQUNJLG9CQUFvQjtJQUNwQixzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtREFBbUQ7O0FBRXZEOztBQUNBO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isb0RBQW9EO0FBQ3hEO0FBQ0E7O0FBQ0E7SUFDSTtRQUNJLGFBQWE7UUFDYixtREFBbUQ7SUFDdkQ7SUFDQSIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFyZWFQe1xyXG4gICAgZGlzcGxheTogZ3JpZDsgXHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgICBcImNhYiBjYWIgY2FiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGl0IHRpdCBvcHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkZXMgZGVzIG9wdFwiO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgMmZyIDJmciAzZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6ICA0MHB4IDJmciAxNTBweDtcclxufVxyXG5cclxuLmNhYntcclxuICAgIGdyaWQtYXJlYTogY2FiO1xyXG59XHJcbi50aXR7XHJcbiAgICBncmlkLWFyZWE6IHRpdDtcclxufVxyXG4uZGVze1xyXG4gICAgZ3JpZC1hcmVhOiBkZXM7XHJcbn1cclxuLm9wdHtcclxuICAgIGdyaWQtYXJlYTogb3B0O1xyXG4gICAgbWFyZ2luLXRvcDogMTEuNyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAyNTUsIDEzOSk7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAxNDUsIDApO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9se1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI1NSwgMTM2LCAwKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTMlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDIwMiwgMjU1KTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigwLCAwLCAxMzMpO1xyXG4gICAgY29sb3I6IHJnYig3OCwgNjUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiAgLmJ1dHRvbjIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzJTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDIwMiwgMjU1KTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYigwLCAwLCAxMzMpO1xyXG4gICAgY29sb3I6IHJnYig3OCwgNjUsIDI1NSk7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcblxyXG4gIC5hbGVydC1kYW5nZXJ7XHJcbiAgICBjb2xvcjogcmdiKDUsIDAsIDkyKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5jYW5jZWxidG4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTMuNSU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY2NjAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiYjAwO1xyXG4gIH1cclxuXHJcbi5ibG9ja3tcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM3Nyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxuICAgIG1hcmdpbjogMyU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAxNDUsIDApO1xyXG59XHJcblxyXG4uYmxvY2s6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTY4KTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubGlzdGF7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDgwcHgsIDVmcikpO1xyXG4gXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KXtcclxuLmxpc3Rhe1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgyMjVweCwgNmZyKSk7XHJcbn1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkwcHgpe1xyXG4gICAgLmxpc3Rhe1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDgwcHgsIDVmcikpO1xyXG4gICAgfVxyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/token-storage.service */ "./src/app/_services/token-storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_design_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/design.service */ "./src/app/_services/design.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/user.service */ "./src/app/_services/user.service.ts");






let ProfileComponent = class ProfileComponent {
    constructor(userService, tokenStorageService, router, designService) {
        this.userService = userService;
        this.tokenStorageService = tokenStorageService;
        this.router = router;
        this.designService = designService;
        this.isLoggedIn = false;
        this.lO = false;
        this.eE = false;
        this.eP = false;
        this.form = {};
        this.di = false;
        this.di2 = false;
    }
    ngOnInit() {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        this.username = this.tokenStorageService.getUser().username;
        this.getD(this.username);
    }
    onSubmit() {
        if (this.eE) {
            this.userService.changeEma(this.username, this.form.email).subscribe(data => {
                console.log(data);
                this.di = true;
            });
        }
        else if (this.eP) {
            this.userService.changePass(this.username, this.form.password).subscribe(data => {
                console.log(data);
                this.di2 = true;
            });
        }
    }
    capture(perso) {
        this.tokenStorageService.perTemp(perso);
        this.tokenStorageService.perTemp2(this.tokenStorageService.getUser());
    }
    enableEmail() {
        this.di = false;
        this.eP = false;
        this.eE = true;
    }
    disableEmail() {
        this.eE = false;
    }
    enablePassword() {
        this.di2 = false;
        this.eE = false;
        this.eP = true;
    }
    disablePassword() {
        this.eP = false;
    }
    getD(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.designService.getDesignsByUsername(name).subscribe((datos) => {
                //console.log(datos);
                this.list = datos;
                this.des = datos;
                this.numDes = Object.entries(this.des).length;
                for (var i = 0; i < this.numDes; i++) {
                    let d = this.des[i];
                    this.list[i] = d;
                }
                this.list.sort((a, b) => a.id - b.id).slice(0, 3);
            });
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__["TokenStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_design_service__WEBPACK_IMPORTED_MODULE_4__["DesignService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label{\r\n    font-size: x-large;\r\n    color: rgb(125, 118, 255);\r\n    text-align: center;\r\n    margin-top: 0px;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    padding-right: 10px;\r\n}\r\n\r\n\r\nform {\r\n  padding: 0% 35% 0% 35%;\r\n  text-align: center;\r\n  }\r\n\r\n\r\n/* Full-width inputs */\r\n\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 8px;\r\n    display: inline-block;\r\n    border: 1px solid rgb(255, 136, 0);\r\n    box-sizing: border-box;\r\n  }\r\n\r\n\r\n.form-control{\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 8px;\r\n    display: inline-block;\r\n    border: 1px solid rgb(255, 136, 0);\r\n    box-sizing: border-box;\r\n  }\r\n\r\n\r\n.alert-danger{\r\n    color: rgb(5, 0, 92);\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  }\r\n\r\n\r\n/* Set a style for all buttons */\r\n\r\n\r\nbutton {\r\n    align-self: center;\r\n    font-weight: bold;\r\n    background-color: rgb(87, 202, 255);\r\n    color: rgb(78, 65, 255);\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    margin-right: 10px;\r\n    width: 30%;\r\n    border-radius: 15px;\r\n  }\r\n\r\n\r\n/* Add a hover effect for buttons */\r\n\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n  }\r\n\r\n\r\n/* Extra style for the cancel button (red) */\r\n\r\n\r\n.cancelbtn {\r\n    align-self: center;\r\n    font-weight: bold;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    margin-right: 10px;\r\n    width: 30%;\r\n    border-radius: 15px;\r\n    background-color: #ffbb00;\r\n  }\r\n\r\n\r\n/* Center the avatar image inside this container */\r\n\r\n\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n    \r\n  }\r\n\r\n\r\n/* Avatar image */\r\n\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n  }\r\n\r\n\r\n/* Add padding to containers */\r\n\r\n\r\n.container {\r\n    padding: 16px;\r\n    \r\n  }\r\n\r\n\r\n/* The \"Forgot password\" text */\r\n\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n\r\n  }\r\n\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n      display: block;\r\n      float: none;\r\n      \r\n    }\r\n    .cancelbtn {\r\n      width: 100%;\r\n      \r\n      \r\n    }\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw0REFBNEQ7SUFDNUQsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEI7OztBQUVBLHNCQUFzQjs7O0FBQ3RCO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyxzQkFBc0I7RUFDeEI7OztBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQyxzQkFBc0I7RUFDeEI7OztBQUVBO0lBQ0Usb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNERBQTREO0VBQzlEOzs7QUFFQSxnQ0FBZ0M7OztBQUNoQztJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7OztBQUVBLG1DQUFtQzs7O0FBQ25DO0lBQ0UsWUFBWTtFQUNkOzs7QUFFQSw0Q0FBNEM7OztBQUM1QztJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHlCQUF5QjtFQUMzQjs7O0FBRUEsa0RBQWtEOzs7QUFDbEQ7SUFDRSxrQkFBa0I7SUFDbEIscUJBQXFCOztFQUV2Qjs7O0FBRUEsaUJBQWlCOzs7QUFDakI7SUFDRSxVQUFVO0VBQ1o7OztBQUVBLDhCQUE4Qjs7O0FBQzlCO0lBQ0UsYUFBYTs7RUFFZjs7O0FBRUEsK0JBQStCOzs7QUFDL0I7SUFDRSxZQUFZO0lBQ1osaUJBQWlCOztFQUVuQjs7O0FBRUEsb0VBQW9FOzs7QUFDcEU7SUFDRTtNQUNFLGNBQWM7TUFDZCxXQUFXOztJQUViO0lBQ0E7TUFDRSxXQUFXOzs7SUFHYjs7RUFFRiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIGNvbG9yOiByZ2IoMTI1LCAxMTgsIDI1NSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuZm9ybSB7XHJcbiAgcGFkZGluZzogMCUgMzUlIDAlIDM1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEZ1bGwtd2lkdGggaW5wdXRzICovXHJcbiAgaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCA4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAxMzYsIDApO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWNvbnRyb2x7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNTUsIDEzNiwgMCk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLmFsZXJ0LWRhbmdlcntcclxuICAgIGNvbG9yOiByZ2IoNSwgMCwgOTIpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbiAgYnV0dG9uIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCAyMDIsIDI1NSk7XHJcbiAgICBjb2xvcjogcmdiKDc4LCA2NSwgMjU1KTtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIGEgaG92ZXIgZWZmZWN0IGZvciBidXR0b25zICovXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbiAgXHJcbiAgLyogRXh0cmEgc3R5bGUgZm9yIHRoZSBjYW5jZWwgYnV0dG9uIChyZWQpICovXHJcbiAgLmNhbmNlbGJ0biB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJiMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENlbnRlciB0aGUgYXZhdGFyIGltYWdlIGluc2lkZSB0aGlzIGNvbnRhaW5lciAqL1xyXG4gIC5pbWdjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyNHB4IDAgMTJweCAwO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIEF2YXRhciBpbWFnZSAqL1xyXG4gIGltZy5hdmF0YXIge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIHBhZGRpbmcgdG8gY29udGFpbmVycyAqL1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAvKiBUaGUgXCJGb3Jnb3QgcGFzc3dvcmRcIiB0ZXh0ICovXHJcbiAgc3Bhbi5wc3cge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcblxyXG4gIH1cclxuICBcclxuICAvKiBDaGFuZ2Ugc3R5bGVzIGZvciBzcGFuIGFuZCBjYW5jZWwgYnV0dG9uIG9uIGV4dHJhIHNtYWxsIHNjcmVlbnMgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgc3Bhbi5wc3cge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgLmNhbmNlbGJ0biB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");



let RegisterComponent = class RegisterComponent {
    constructor(authService) {
        this.authService = authService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    ngOnInit() {
    }
    onSubmit() {
        this.authService.register(this.form).subscribe(data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
        }, err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Polter\Desktop\ApiAracria\aracAng\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map