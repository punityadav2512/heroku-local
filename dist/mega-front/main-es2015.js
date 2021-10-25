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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/thankyou/thankyou.component */ "./src/app/components/thankyou/thankyou.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");













const routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: 'product',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _components_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"]
    },
    {
        path: 'cart',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"]
    },
    {
        path: 'checkout',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"]
    },
    {
        path: 'thankyou',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_8__["ThankyouComponent"]
    },
    {
        path: 'footer',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        component: _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = "mega-front";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["mg-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mg-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mg-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */", "body[_ngcontent-%COMP%] {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  color: #333;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  color: #2b2d42;\n  font-weight: 700;\n  margin: 0 0 10px;\n}\n\na[_ngcontent-%COMP%] {\n  color: #2b2d42;\n  font-weight: 500;\n  transition: 0.2s color;\n}\n\na[_ngcontent-%COMP%]:hover, a[_ngcontent-%COMP%]:focus {\n  color: #d10024;\n  text-decoration: none;\n  outline: none;\n}\n\nul[_ngcontent-%COMP%], ol[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n\n\n.primary-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 12px 30px;\n  background-color: #d10024;\n  border: none;\n  border-radius: 40px;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-align: center;\n  transition: 0.2s all;\n}\n\n.primary-btn[_ngcontent-%COMP%]:hover, .primary-btn[_ngcontent-%COMP%]:focus {\n  opacity: 0.9;\n  color: #fff;\n}\n\n\n\n\n\n.input[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0px 15px;\n  border: 1px solid #e4e7ed;\n  background-color: #fff;\n  width: 100%;\n}\n\ntextarea.input[_ngcontent-%COMP%] {\n  padding: 15px;\n  min-height: 90px;\n}\n\n\n\n.input-number[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.input-number[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, .input-number[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.input-number[_ngcontent-%COMP%]   input[type=\"number\"][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n  height: 40px;\n  width: 100%;\n  border: 1px solid #e4e7ed;\n  background-color: #fff;\n  padding: 0px 35px 0px 15px;\n}\n\n.input-number[_ngcontent-%COMP%]   .qty-up[_ngcontent-%COMP%], .input-number[_ngcontent-%COMP%]   .qty-down[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #e4e7ed;\n  background-color: #fff;\n  text-align: center;\n  font-weight: 700;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.input-number[_ngcontent-%COMP%]   .qty-up[_ngcontent-%COMP%] {\n  right: 0;\n  top: 0;\n  border-bottom: 0px;\n}\n\n.input-number[_ngcontent-%COMP%]   .qty-down[_ngcontent-%COMP%] {\n  right: 0;\n  bottom: 0;\n}\n\n.input-number[_ngcontent-%COMP%]   .qty-up[_ngcontent-%COMP%]:hover, .input-number[_ngcontent-%COMP%]   .qty-down[_ngcontent-%COMP%]:hover {\n  background-color: #e4e7ed;\n  color: #d10024;\n}\n\n\n\n.input-select[_ngcontent-%COMP%] {\n  padding: 0px 15px;\n  background: #fff;\n  border: 1px solid #e4e7ed;\n  height: 40px;\n}\n\n\n\n.input-radio[_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n\n.input-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:not(:checked), .input-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked, .input-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:not(:checked), .input-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked {\n  position: absolute;\n  margin-left: -9999px;\n  visibility: hidden;\n}\n\n.input-radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 5px;\n  cursor: pointer;\n}\n\n.input-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 4px;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #e4e7ed;\n  background: #fff;\n}\n\n.input-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n\n.input-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  background-color: #fff;\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  opacity: 0;\n  transition: all 0.2s;\n}\n\n.input-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: \"\u2714\";\n  position: absolute;\n  top: -2px;\n  left: 1px;\n  font-size: 10px;\n  color: #fff;\n  opacity: 0;\n  transform: scale(0);\n  transition: all 0.2s;\n}\n\n.input-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background-color: #d10024;\n  border-color: #d10024;\n}\n\n.input-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  transform: translate(-50%, -50%) scale(1);\n}\n\n.input-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  transform: scale(1);\n}\n\n.input-radio[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%]   .caption[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  max-height: 0;\n  overflow: hidden;\n  transition: 0.3s max-height;\n}\n\n.input-radio[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%]:checked    ~ .caption[_ngcontent-%COMP%], .input-checkbox[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    ~ .caption[_ngcontent-%COMP%] {\n  max-height: 800px;\n}\n\n\n\n.container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 70px;\n  padding-top: 5px;\n}\n\n.section[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 30px;\n  margin-top: 15px;\n}\n\n.section-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-transform: uppercase;\n  margin: 0px;\n}\n\n.section-title[_ngcontent-%COMP%]   .section-nav[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.section-title[_ngcontent-%COMP%]   .section-nav[_ngcontent-%COMP%]   .section-tab-nav[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.section-tab-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 15px;\n}\n\n.section-tab-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n\n.section-tab-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #8d99ae;\n}\n\n.section-tab-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 0%;\n  height: 2px;\n  background-color: #d10024;\n  transition: 0.2s all;\n}\n\n.section-tab-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d10024;\n}\n\n.section-tab-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after, .section-tab-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus:after, .section-tab-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  width: 100%;\n}\n\n.section-title[_ngcontent-%COMP%]   .section-nav[_ngcontent-%COMP%]   .products-slick-nav[_ngcontent-%COMP%] {\n  top: 0px;\n  right: 0px;\n}\n\n\n\n#breadcrumb[_ngcontent-%COMP%] {\n  padding: 30px 0px;\n  background: #fbfbfc;\n  border-bottom: 1px solid #e4e7ed;\n  margin-bottom: 30px;\n}\n\n#breadcrumb[_ngcontent-%COMP%]   .breadcrumb-header[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-right: 15px;\n  text-transform: uppercase;\n}\n\n#breadcrumb[_ngcontent-%COMP%]   .breadcrumb-tree[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n#breadcrumb[_ngcontent-%COMP%]   .breadcrumb-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n#breadcrumb[_ngcontent-%COMP%]   .breadcrumb-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n#breadcrumb[_ngcontent-%COMP%]   .breadcrumb-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%]:before {\n  content: \"/\";\n  display: inline-block;\n  color: #8d99ae;\n  margin-right: 10px;\n}\n\n#breadcrumb[_ngcontent-%COMP%]   .breadcrumb-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #8d99ae;\n}\n\n#breadcrumb[_ngcontent-%COMP%]   .breadcrumb-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d10024;\n}\n\n\n\n\n\n#top-header[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: #1e1f29;\n}\n\n.header-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 15px;\n  font-size: 12px;\n}\n\n.header-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n\n.header-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.header-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d10024;\n}\n\n.header-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #d10024;\n  margin-right: 5px;\n}\n\n\n\n#header[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  background-color: #15161d;\n}\n\n.header-logo[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.header-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.header-search[_ngcontent-%COMP%] {\n  padding: 15px 0px;\n}\n\n.header-search[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.header-search[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-select[_ngcontent-%COMP%] {\n  margin-right: -4px;\n  border-radius: 40px 0px 0px 40px;\n}\n\n.header-search[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  width: calc(100% - 260px);\n  margin-right: -4px;\n}\n\n.header-search[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 100px;\n  background: #d10024;\n  color: #fff;\n  font-weight: 700;\n  border: none;\n  border-radius: 0px 40px 40px 0px;\n}\n\n\n\n.header-ctn[_ngcontent-%COMP%] {\n  float: right;\n  padding: 15px 0px;\n}\n\n.header-ctn[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.header-ctn[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.header-ctn[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  width: 90px;\n  text-align: center;\n  color: #fff;\n}\n\n.header-ctn[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n}\n\n.header-ctn[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.header-ctn[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > .qty[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: -10px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n  font-size: 10px;\n  color: #fff;\n  background-color: #d10024;\n}\n\n.header-ctn[_ngcontent-%COMP%]   .menu-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cart-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 300px;\n  background: #fff;\n  padding: 15px;\n  box-shadow: 0px 0px 0px 2px #e4e7ed;\n  z-index: 99;\n  right: 0;\n  opacity: 0;\n  visibility: hidden;\n}\n\n.dropdown.open[_ngcontent-%COMP%]    > .cart-dropdown[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n\n.cart-dropdown[_ngcontent-%COMP%]   .cart-list[_ngcontent-%COMP%] {\n  max-height: 180px;\n  overflow-y: scroll;\n  margin-bottom: 15px;\n}\n\n.cart-dropdown[_ngcontent-%COMP%]   .cart-list[_ngcontent-%COMP%]   .product-widget[_ngcontent-%COMP%] {\n  padding: 0px;\n  box-shadow: none;\n}\n\n.cart-dropdown[_ngcontent-%COMP%]   .cart-list[_ngcontent-%COMP%]   .product-widget[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0px;\n}\n\n.cart-dropdown[_ngcontent-%COMP%]   .cart-list[_ngcontent-%COMP%]   .product-widget[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  left: 0px;\n  top: 0px;\n}\n\n.cart-dropdown[_ngcontent-%COMP%]   .cart-list[_ngcontent-%COMP%]   .product-widget[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  color: #2b2d42;\n}\n\n.cart-dropdown[_ngcontent-%COMP%]   .cart-btns[_ngcontent-%COMP%] {\n  margin: 0px -17px -17px;\n}\n\n.cart-dropdown[_ngcontent-%COMP%]   .cart-btns[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: calc(50% - 0px);\n  padding: 12px;\n  background-color: #d10024;\n  color: #fff;\n  text-align: center;\n  font-weight: 700;\n  transition: 0.2s all;\n}\n\n.cart-dropdown[_ngcontent-%COMP%]   .cart-btns[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child {\n  margin-right: -4px;\n  background-color: #1e1f29;\n}\n\n.cart-dropdown[_ngcontent-%COMP%]   .cart-btns[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.cart-dropdown[_ngcontent-%COMP%]   .cart-summary[_ngcontent-%COMP%] {\n  border-top: 1px solid #e4e7ed;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n\n\n#navigation[_ngcontent-%COMP%] {\n  background: #fff;\n  border-bottom: 2px solid #e4e7ed;\n  border-top: 3px solid #d10024;\n}\n\n\n\n.main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-left: 30px;\n}\n\n.main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n}\n\n.main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .main-nav[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #d10024;\n  background-color: transparent;\n}\n\n.main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 0%;\n  height: 2px;\n  background-color: #d10024;\n  transition: 0.2s all;\n}\n\n.main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover:after, .main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus:after, .main-nav[_ngcontent-%COMP%]    > li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:after {\n  width: 100%;\n}\n\n.header-ctn[_ngcontent-%COMP%]   li.nav-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n@media only screen and (max-width: 991px) {\n  .header-ctn[_ngcontent-%COMP%]   .menu-toggle[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  #responsive-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    background: #15161d;\n    height: 100vh;\n    max-width: 250px;\n    width: 0%;\n    overflow: hidden;\n    z-index: 22;\n    padding-top: 60px;\n    transform: translateX(-100%);\n    transition: 0.2s all;\n  }\n  #responsive-nav.active[_ngcontent-%COMP%] {\n    transform: translateX(0%);\n    width: 100%;\n  }\n  .main-nav[_ngcontent-%COMP%] {\n    margin: 0px;\n    display: flex;\n    flex: content;\n  }\n  .main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    display: block;\n    float: none;\n  }\n  .main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n    margin-left: 0px;\n  }\n  .main-nav[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    padding: 15px;\n    color: #fff;\n  }\n}\n\n\n\n.reslog[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 6fr 1fr 1fr;\n}\n\n.reslog[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .reslog[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30px;\n  padding: 3px;\n}\n\n\n\n.shop[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin: 15px 0px;\n  height: 15rem;\n}\n\n.shop[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0px;\n  width: 60%;\n  background: #d10024;\n  opacity: 0.9;\n  transform: skewX(-45deg);\n}\n\n.shop[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 1px;\n  width: 100%;\n  background: #d10024;\n  opacity: 0.9;\n  transform: skewX(-45deg) translateX(-100%);\n}\n\n.shop[_ngcontent-%COMP%]   .shop-img[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #e4e7ed;\n  height: 14rem;\n  z-index: -1;\n  overflow: hidden;\n}\n\n.grid-shop[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: auto auto auto;\n}\n\n.shop[_ngcontent-%COMP%]   .shop-img[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  transition: 0.2s all;\n}\n\n.shop[_ngcontent-%COMP%]:hover   .shop-img[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n\n.shop[_ngcontent-%COMP%]   .shop-body[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 75%;\n  padding: 30px;\n  z-index: 10;\n}\n\n.shop[_ngcontent-%COMP%]   .shop-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.shop[_ngcontent-%COMP%]   .shop-body[_ngcontent-%COMP%]   .cta-btn[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n}\n\n\n\n#hot-deal.section[_ngcontent-%COMP%] {\n  padding: 60px 0px;\n  margin: 30px 0px;\n  background-color: #e4e7ed;\n  \n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.hot-deal[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.hot-deal[_ngcontent-%COMP%]   .hot-deal-countdown[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.hot-deal[_ngcontent-%COMP%]   .hot-deal-countdown[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  background: #d10024e6;\n  text-align: center;\n  border-radius: 50%;\n  margin: 0px 5px;\n}\n\n.hot-deal[_ngcontent-%COMP%]   .hot-deal-countdown[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.hot-deal[_ngcontent-%COMP%]   .hot-deal-countdown[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 0px;\n}\n\n.hot-deal[_ngcontent-%COMP%]   .hot-deal-countdown[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  text-transform: uppercase;\n  color: #fff;\n}\n\n.hot-deal[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 24px;\n}\n\n.hot-deal[_ngcontent-%COMP%]   .cta-btn[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n\n\n\n\n.product[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 5rem;\n  box-shadow: 0px 0px 0px 0px #e4e7ed, 0px 0px 0px 1px #e4e7ed;\n  transition: 0.2s all;\n  height: 350px;\n}\n\n.product[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 6px 0px #e4e7ed, 0px 0px 0px 2px #d10024;\n}\n\n.product[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.product[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.product[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   .product-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n}\n\n.product[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   .product-label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  border: 2px solid;\n  padding: 2px 10px;\n  font-size: 12px;\n}\n\n.product[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   .product-label[_ngcontent-%COMP%]    > span.sale[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #d10024;\n  color: #d10024;\n}\n\n.product[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   .product-label[_ngcontent-%COMP%]    > span.new[_ngcontent-%COMP%] {\n  background-color: #d10024;\n  border-color: #d10024;\n  color: #fff;\n}\n\n.product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 15px;\n  background-color: #fff;\n  text-align: center;\n  z-index: 20;\n}\n\n.product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 12px;\n  color: #8d99ae;\n}\n\n.product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 14px;\n}\n\n.product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  color: #d10024;\n}\n\n.product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  color: #d10024;\n  font-size: 18px;\n}\n\n.product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .product-old-price[_ngcontent-%COMP%] {\n  font-size: 70%;\n  font-weight: 400;\n  color: #8d99ae;\n}\n\n.product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-rating[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 15px 0px 10px;\n  height: 20px;\n}\n\n.product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-rating[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  position: relative;\n  width: 14px;\n  margin-right: -4px;\n  background: #fff;\n  color: #e4e7ed;\n  z-index: 10;\n}\n\n.product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-rating[_ngcontent-%COMP%]    > i.fa-star[_ngcontent-%COMP%] {\n  color: #ef233c;\n}\n\n.product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-rating[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n  height: 1px;\n  background-color: #e4e7ed;\n}\n\n.product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-btns[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  background: transparent;\n  border: none;\n  transition: 0.2s all;\n}\n\n.product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-btns[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  background-color: #e4e7ed;\n  color: #d10024;\n  border-radius: 50%;\n}\n\n.product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-btns[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]   .tooltipp[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  transform: translate(-50%, -15px);\n  width: 150px;\n  padding: 10px;\n  font-size: 12px;\n  line-height: 10px;\n  background: #1e1f29;\n  color: #fff;\n  text-transform: uppercase;\n  z-index: 10;\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.2s all;\n}\n\n.product[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-btns[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover   .tooltipp[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  transform: translate(-50%, -5px);\n}\n\n.product[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  padding: 15px;\n  background: #1e1f29;\n  text-align: center;\n  transform: translateY(0%);\n  transition: 0.2s all;\n  z-index: 2;\n}\n\n.product[_ngcontent-%COMP%]:hover   .add-to-cart[_ngcontent-%COMP%] {\n  transform: translateY(100%);\n}\n\n.product[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n  position: relative;\n  border: 2px solid transparent;\n  height: 40px;\n  padding: 0 30px;\n  background-color: #ef233c;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 700;\n  border-radius: 40px;\n  transition: 0.2s all;\n}\n\n.product[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 40px;\n  height: 40px;\n  line-height: 38px;\n  color: #d10024;\n  opacity: 0;\n  visibility: hidden;\n}\n\n.product[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #d10024;\n  border-color: #d10024;\n  padding: 0px 30px 0px 50px;\n}\n\n.product[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover    > i[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n\n\n\n.product-widget[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.product-widget[_ngcontent-%COMP%]    + .product-widget[_ngcontent-%COMP%] {\n  margin: 30px 0px;\n}\n\n.product-widget[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 60px;\n}\n\n.product-widget[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.product-widget[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%] {\n  padding-left: 75px;\n  min-height: 60px;\n}\n\n.product-widget[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-category[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 10px;\n  color: #8d99ae;\n}\n\n.product-widget[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\n.product-widget[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.product-widget[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .product-widget[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  color: #d10024;\n}\n\n.product-widget[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #d10024;\n}\n\n.product-widget[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .product-old-price[_ngcontent-%COMP%] {\n  font-size: 70%;\n  font-weight: 400;\n  color: #8d99ae;\n}\n\n.product-widget[_ngcontent-%COMP%]   .product-body[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .qty[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin-right: 10px;\n}\n\n.product-widget[_ngcontent-%COMP%]   .delete[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 14px;\n  width: 14px;\n  text-align: center;\n  font-size: 10px;\n  padding: 0;\n  background: #1e1f29;\n  border: none;\n  color: #fff;\n}\n\n\n\n.products-slick[_ngcontent-%COMP%]   .slick-list[_ngcontent-%COMP%] {\n  padding-bottom: 60px;\n  margin-bottom: -60px;\n  z-index: 2;\n}\n\n.products-slick[_ngcontent-%COMP%]   .product.slick-slide[_ngcontent-%COMP%] {\n  margin: 15px;\n}\n\n.products-tabs[_ngcontent-%COMP%]    > .tab-pane[_ngcontent-%COMP%] {\n  display: block;\n  height: 0;\n  opacity: 0;\n  visibility: hidden;\n  overflow-y: hidden;\n  padding-bottom: 60px;\n  margin-bottom: -60px;\n}\n\n.products-tabs[_ngcontent-%COMP%]    > .tab-pane.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  height: auto;\n}\n\n.products-slick-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  z-index: 10;\n}\n\n.products-slick-nav[_ngcontent-%COMP%]   .slick-prev[_ngcontent-%COMP%], .products-slick-nav[_ngcontent-%COMP%]   .slick-next[_ngcontent-%COMP%] {\n  position: static;\n  transform: none;\n  width: 20px;\n  height: 20px;\n  display: inline-block !important;\n  margin: 0px 2px;\n}\n\n.products-slick-nav[_ngcontent-%COMP%]   .slick-prev[_ngcontent-%COMP%]:before, .products-slick-nav[_ngcontent-%COMP%]   .slick-next[_ngcontent-%COMP%]:before {\n  font-size: 14px;\n}\n\n\n\n\n\n.aside[_ngcontent-%COMP%]    + .aside[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n\n.aside[_ngcontent-%COMP%]    > .aside-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 18px;\n  margin: 15px 0px 30px;\n}\n\n\n\n.checkbox-filter[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n\n.checkbox-filter[_ngcontent-%COMP%]   .input-radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .checkbox-filter[_ngcontent-%COMP%]   .input-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.checkbox-filter[_ngcontent-%COMP%]   .input-radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], .checkbox-filter[_ngcontent-%COMP%]   .input-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #8d99ae;\n}\n\n\n\n#price-slider[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.noUi-target[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: none;\n  border: 1px solid #e4e7ed;\n  border-radius: 0px;\n}\n\n.noUi-connect[_ngcontent-%COMP%] {\n  background-color: #d10024;\n}\n\n.noUi-horizontal[_ngcontent-%COMP%] {\n  height: 6px;\n}\n\n.noUi-horizontal[_ngcontent-%COMP%]   .noUi-handle[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  left: -6px;\n  top: -4px;\n  border: none;\n  background: #d10024;\n  box-shadow: none;\n  border-radius: 50%;\n}\n\n.noUi-handle[_ngcontent-%COMP%]:before, .noUi-handle[_ngcontent-%COMP%]:after {\n  display: none;\n}\n\n.price-filter[_ngcontent-%COMP%]   .input-number[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: calc(50% - 7px);\n}\n\n\n\n.store-filter[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  margin-top: 15px;\n}\n\n\n\n.store-sort[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.store-sort[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  text-transform: uppercase;\n  margin-right: 15px;\n}\n\n\n\n.store-grid[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.store-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  background-color: #fff;\n  border: 1px solid #e4e7ed;\n  text-align: center;\n  transition: 0.2s all;\n}\n\n.store-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.store-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #e4e7ed;\n  color: #d10024;\n}\n\n.store-grid[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background-color: #d10024;\n  border-color: #d10024;\n  color: #fff;\n  cursor: default;\n}\n\n.store-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.store-pagination[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.store-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  background-color: #fff;\n  border: 1px solid #e4e7ed;\n  transition: 0.2s all;\n}\n\n.store-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.store-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #e4e7ed;\n  color: #d10024;\n}\n\n.store-pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background-color: #d10024;\n  border-color: #d10024;\n  color: #fff;\n  font-weight: 500;\n  cursor: default;\n}\n\n.store-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.store-qty[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  font-weight: 500;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\n\n\n\n\n#product-main-img[_ngcontent-%COMP%]   .slick-prev[_ngcontent-%COMP%] {\n  transform: translateX(-15px);\n  left: 15px;\n}\n\n#product-main-img[_ngcontent-%COMP%]   .slick-next[_ngcontent-%COMP%] {\n  transform: translateX(15px);\n  right: 15px;\n}\n\n#product-main-img[_ngcontent-%COMP%]   .slick-prev[_ngcontent-%COMP%], #product-main-img[_ngcontent-%COMP%]   .slick-next[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n  transition: 0.2s all;\n}\n\n#product-main-img[_ngcontent-%COMP%]:hover   .slick-prev[_ngcontent-%COMP%], #product-main-img[_ngcontent-%COMP%]:hover   .slick-next[_ngcontent-%COMP%] {\n  transform: translateX(0%);\n  opacity: 1;\n  visibility: visible;\n}\n\n#product-main-img[_ngcontent-%COMP%]   .zoomImg[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n#product-imgs[_ngcontent-%COMP%]   .product-preview[_ngcontent-%COMP%] {\n  margin: 0px 5px;\n  border: 1px solid #e4e7ed;\n}\n\n#product-imgs[_ngcontent-%COMP%]   .product-preview.slick-current[_ngcontent-%COMP%] {\n  border-color: #d10024;\n}\n\n#product-imgs[_ngcontent-%COMP%]   .slick-prev[_ngcontent-%COMP%] {\n  top: -20px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n#product-imgs[_ngcontent-%COMP%]   .slick-next[_ngcontent-%COMP%] {\n  top: calc(100% - 20px);\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n#product-imgs[_ngcontent-%COMP%]   .slick-prev[_ngcontent-%COMP%]:before {\n  content: \"\\f106\";\n}\n\n#product-imgs[_ngcontent-%COMP%]   .slick-next[_ngcontent-%COMP%]:before {\n  content: \"\\f107\";\n}\n\n.product-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n\n.product-details[_ngcontent-%COMP%]   .product-name[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 18px;\n}\n\n.product-details[_ngcontent-%COMP%]   .product-rating[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 15px;\n}\n\n.product-details[_ngcontent-%COMP%]   .product-rating[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #e4e7ed;\n}\n\n.product-details[_ngcontent-%COMP%]   .product-rating[_ngcontent-%COMP%]    > i.fa-star[_ngcontent-%COMP%] {\n  color: #d10024;\n}\n\n.product-details[_ngcontent-%COMP%]   .review-link[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.product-details[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 24px;\n  margin-top: 10px;\n  margin-bottom: 15px;\n  color: #d10024;\n}\n\n.product-details[_ngcontent-%COMP%]   .product-price[_ngcontent-%COMP%]   .product-old-price[_ngcontent-%COMP%] {\n  font-size: 70%;\n  font-weight: 400;\n  color: #8d99ae;\n}\n\n.product-details[_ngcontent-%COMP%]   .product-available[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: 700;\n  margin-left: 30px;\n  color: #d10024;\n}\n\n.product-details[_ngcontent-%COMP%]   .product-options[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\n.product-details[_ngcontent-%COMP%]   .product-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  text-transform: uppercase;\n  margin-right: 15px;\n  margin-bottom: 0px;\n}\n\n.product-details[_ngcontent-%COMP%]   .product-options[_ngcontent-%COMP%]   .input-select[_ngcontent-%COMP%] {\n  width: 90px;\n}\n\n.product-details[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.product-details[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%] {\n  position: relative;\n  border: 2px solid transparent;\n  height: 40px;\n  padding: 0 30px;\n  background-color: #ef233c;\n  color: #fff;\n  text-transform: uppercase;\n  font-weight: 700;\n  border-radius: 40px;\n  transition: 0.2s all;\n}\n\n.product-details[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 40px;\n  height: 40px;\n  line-height: 38px;\n  color: #d10024;\n  opacity: 0;\n  visibility: hidden;\n}\n\n.product-details[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #d10024;\n  border-color: #d10024;\n  padding: 0px 30px 0px 50px;\n}\n\n.product-details[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .add-to-cart-btn[_ngcontent-%COMP%]:hover    > i[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n\n.product-details[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .qty-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 500;\n  font-size: 12px;\n  text-transform: uppercase;\n  margin-right: 15px;\n  margin-bottom: 0px;\n}\n\n.product-details[_ngcontent-%COMP%]   .add-to-cart[_ngcontent-%COMP%]   .qty-label[_ngcontent-%COMP%]   .input-number[_ngcontent-%COMP%] {\n  width: 90px;\n  display: inline-block;\n}\n\n.product-details[_ngcontent-%COMP%]   .product-btns[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\n.product-details[_ngcontent-%COMP%]   .product-btns[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.product-details[_ngcontent-%COMP%]   .product-links[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.product-details[_ngcontent-%COMP%]   .product-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\n.product-details[_ngcontent-%COMP%]   .product-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n\n\n#product-tab[_ngcontent-%COMP%] {\n  margin-top: 60px;\n}\n\n#product-tab[_ngcontent-%COMP%]   .tab-nav[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  padding: 15px 0px;\n  margin-bottom: 30px;\n}\n\n#product-tab[_ngcontent-%COMP%]   .tab-nav[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  height: 1px;\n  background-color: #e4e7ed;\n  z-index: -1;\n}\n\n#product-tab[_ngcontent-%COMP%]   .tab-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #fff;\n  padding: 0px 15px;\n}\n\n#product-tab[_ngcontent-%COMP%]   .tab-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n#product-tab[_ngcontent-%COMP%]   .tab-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  color: #8d99ae;\n}\n\n#product-tab[_ngcontent-%COMP%]   .tab-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d10024;\n}\n\n#product-tab[_ngcontent-%COMP%]   .tab-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  width: 0%;\n  height: 2px;\n  background-color: #d10024;\n  transition: 0.2s all;\n}\n\n#product-tab[_ngcontent-%COMP%]   .tab-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after, #product-tab[_ngcontent-%COMP%]   .tab-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus:after, #product-tab[_ngcontent-%COMP%]   .tab-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  width: 100%;\n}\n\n\n\n.rating-avg[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 15px;\n}\n\n.rating-avg[_ngcontent-%COMP%]   .rating-stars[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.rating-avg[_ngcontent-%COMP%]   .rating-stars[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%]   .rating-stars[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.rating-avg[_ngcontent-%COMP%]   .rating-stars[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%]   .rating-stars[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #e4e7ed;\n}\n\n.rating-avg[_ngcontent-%COMP%]   .rating-stars[_ngcontent-%COMP%]    > i.fa-star[_ngcontent-%COMP%], .rating[_ngcontent-%COMP%]   .rating-stars[_ngcontent-%COMP%]    > i.fa-star[_ngcontent-%COMP%] {\n  color: #d10024;\n}\n\n.rating[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\n\n.rating[_ngcontent-%COMP%]   .rating-progress[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  height: 9px;\n  background-color: #e4e7ed;\n  width: 120px;\n  margin: 0px 10px;\n  border-radius: 5px;\n}\n\n.rating[_ngcontent-%COMP%]   .rating-progress[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #d10024;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  border-radius: 5px;\n}\n\n.rating[_ngcontent-%COMP%]   .sum[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 12px;\n  color: #8d99ae;\n}\n\n\n\n.reviews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 145px;\n  margin-bottom: 30px;\n}\n\n.reviews[_ngcontent-%COMP%]   .review-heading[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 130px;\n  left: 0;\n  top: 0;\n  height: 70px;\n}\n\n.reviews[_ngcontent-%COMP%]   .review-body[_ngcontent-%COMP%] {\n  min-height: 70px;\n}\n\n.reviews[_ngcontent-%COMP%]   .review-heading[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  margin-top: 0px;\n}\n\n.reviews[_ngcontent-%COMP%]   .review-heading[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  color: #8d99ae;\n  font-size: 10px;\n  margin: 0;\n}\n\n.reviews[_ngcontent-%COMP%]   .review-heading[_ngcontent-%COMP%]   .review-rating[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.reviews[_ngcontent-%COMP%]   .review-heading[_ngcontent-%COMP%]   .review-rating[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #e4e7ed;\n}\n\n.reviews[_ngcontent-%COMP%]   .review-heading[_ngcontent-%COMP%]   .review-rating[_ngcontent-%COMP%]    > i.fa-star[_ngcontent-%COMP%] {\n  color: #d10024;\n}\n\n.reviews-pagination[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.reviews-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 35px;\n  height: 35px;\n  line-height: 35px;\n  text-align: center;\n  background-color: #fff;\n  border: 1px solid #e4e7ed;\n  transition: 0.2s all;\n}\n\n.reviews-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  background-color: #e4e7ed;\n  color: #d10024;\n}\n\n.reviews-pagination[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\n  background-color: #d10024;\n  border-color: #d10024;\n  color: #fff;\n  cursor: default;\n}\n\n.reviews-pagination[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\n.review-form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.review-form[_ngcontent-%COMP%]   .input-rating[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.review-form[_ngcontent-%COMP%]   .input-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.review-form[_ngcontent-%COMP%]   .input-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   input[type=\"radio\"][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.review-form[_ngcontent-%COMP%]   .input-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n  float: right;\n  cursor: pointer;\n  padding: 0px 3px;\n  margin: 0px;\n}\n\n.review-form[_ngcontent-%COMP%]   .input-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:before {\n  content: \"\\f006\";\n  font-family: FontAwesome;\n  color: #e4e7ed;\n  transition: 0.2s all;\n}\n\n.review-form[_ngcontent-%COMP%]   .input-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover:before, .review-form[_ngcontent-%COMP%]   .input-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%]:before {\n  color: #d10024;\n}\n\n.review-form[_ngcontent-%COMP%]   .input-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked   label[_ngcontent-%COMP%]:before, .review-form[_ngcontent-%COMP%]   .input-rating[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:before {\n  content: \"\\f005\";\n  color: #d10024;\n}\n\n\n\n.billing-details[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.shiping-details[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.order-details[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0px 30px 30px;\n  border-right: 1px solid #e4e7ed;\n  border-left: 1px solid #e4e7ed;\n  border-bottom: 1px solid #e4e7ed;\n}\n\n.order-details[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: -1px;\n  right: -1px;\n  top: -15px;\n  height: 30px;\n  border-top: 1px solid #e4e7ed;\n  border-left: 1px solid #e4e7ed;\n  border-right: 1px solid #e4e7ed;\n}\n\n.order-summary[_ngcontent-%COMP%] {\n  margin: 15px 0px;\n}\n\n.order-summary[_ngcontent-%COMP%]   .order-col[_ngcontent-%COMP%] {\n  display: table;\n  width: 100%;\n}\n\n.order-summary[_ngcontent-%COMP%]   .order-col[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n\n.order-summary[_ngcontent-%COMP%]   .order-col[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 10px 0px;\n}\n\n.order-summary[_ngcontent-%COMP%]   .order-col[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  width: calc(100% - 150px);\n}\n\n.order-summary[_ngcontent-%COMP%]   .order-col[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  width: 150px;\n  text-align: right;\n}\n\n.order-summary[_ngcontent-%COMP%]   .order-col[_ngcontent-%COMP%]   .order-total[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #d10024;\n}\n\n.order-details[_ngcontent-%COMP%]   .payment-method[_ngcontent-%COMP%] {\n  margin: 30px 0px;\n}\n\n.order-details[_ngcontent-%COMP%]   .order-submit[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 30px;\n}\n\n\n\n#newsletter.section[_ngcontent-%COMP%] {\n  border-top: 2px solid #e4e7ed;\n  border-bottom: 3px solid #d10024;\n  margin-top: 30px;\n}\n\n.newsletter[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.newsletter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 520px;\n  margin: 30px auto;\n}\n\n.newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]:after {\n  content: \"\\f003\";\n  font-family: FontAwesome;\n  position: absolute;\n  font-size: 160px;\n  color: #e4e7ed;\n  top: 15px;\n  transform: translateY(-50%) rotate(15deg);\n  z-index: -1;\n  left: -90px;\n}\n\n.newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  width: calc(100% - 160px);\n  margin-right: -4px;\n  border-radius: 40px 0px 0px 40px;\n}\n\n.newsletter[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .newsletter-btn[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 40px;\n  font-weight: 700;\n  background: #d10024;\n  color: #fff;\n  border: none;\n  border-radius: 0px 40px 40px 0px;\n}\n\n.newsletter[_ngcontent-%COMP%]   .newsletter-follow[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.newsletter[_ngcontent-%COMP%]   .newsletter-follow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.newsletter[_ngcontent-%COMP%]   .newsletter-follow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0px;\n}\n\n.newsletter[_ngcontent-%COMP%]   .newsletter-follow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  line-height: 40px;\n  border: 1px solid #e4e7ed;\n  background-color: #fff;\n  transition: 0.2s all;\n}\n\n.newsletter[_ngcontent-%COMP%]   .newsletter-follow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .newsletter[_ngcontent-%COMP%]   .newsletter-follow[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  background-color: #e4e7ed;\n  color: #d10024;\n}\n\n\n\n#footer[_ngcontent-%COMP%] {\n  background: #15161d;\n  color: #b9babc;\n}\n\n#bottom-footer[_ngcontent-%COMP%] {\n  background: #1e1f29;\n}\n\n.footer[_ngcontent-%COMP%] {\n  margin: 30px 0px;\n}\n\n.footer[_ngcontent-%COMP%]   .footer-title[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 18px;\n  margin: 0px 0px 30px;\n}\n\n.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #b9babc;\n}\n\n.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  color: #d10024;\n  width: 14px;\n  text-align: center;\n}\n\n.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #d10024;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  display: block;\n  font-size: 12px;\n}\n\n.footer-payments[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 5px;\n}\n\n.footer-payments[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #15161d;\n  font-size: 36px;\n  display: block;\n}\n\n\n\n\n\n.slick-prev[_ngcontent-%COMP%], .slick-next[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e4e7ed;\n  background-color: #fff;\n  border-radius: 50%;\n  z-index: 22;\n  transition: 0.2s all;\n}\n\n.slick-prev[_ngcontent-%COMP%]:hover, .slick-prev[_ngcontent-%COMP%]:focus, .slick-next[_ngcontent-%COMP%]:hover, .slick-next[_ngcontent-%COMP%]:focus {\n  background-color: #d10024;\n  border-color: #d10024;\n}\n\n.slick-prev[_ngcontent-%COMP%]:before, .slick-next[_ngcontent-%COMP%]:before {\n  font-family: FontAwesome;\n  color: #2b2d42;\n}\n\n.slick-prev[_ngcontent-%COMP%]:before {\n  content: \"\\f104\";\n}\n\n.slick-next[_ngcontent-%COMP%]:before {\n  content: \"\\f105\";\n}\n\n.slick-prev[_ngcontent-%COMP%]:hover:before, .slick-prev[_ngcontent-%COMP%]:focus:before, .slick-next[_ngcontent-%COMP%]:hover:before, .slick-next[_ngcontent-%COMP%]:focus:before {\n  color: #fff;\n}\n\n.slick-prev[_ngcontent-%COMP%] {\n  left: -20px;\n}\n\n.slick-next[_ngcontent-%COMP%] {\n  right: -20px;\n}\n\n\n\n.slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before {\n  width: 10px;\n  height: 10px;\n}\n\n.slick-dots[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before {\n  content: \"\";\n  opacity: 1;\n  background: #e4e7ed;\n  border-radius: 50%;\n}\n\n.slick-dots[_ngcontent-%COMP%]   li.slick-active[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before {\n  background-color: #d10024;\n}\n\n.custom-dots[_ngcontent-%COMP%]   .slick-dots[_ngcontent-%COMP%] {\n  position: static;\n  margin: 15px 0px;\n}\n\n\n\n@media only screen and (max-width: 1201px) {\n}\n\n@media only screen and (max-width: 991px) {\n  #top-header[_ngcontent-%COMP%]   .header-links.pull-left[_ngcontent-%COMP%] {\n    float: none !important;\n  }\n  #top-header[_ngcontent-%COMP%]   .header-links.pull-right[_ngcontent-%COMP%] {\n    float: none !important;\n    margin-top: 5px;\n  }\n  .header-logo[_ngcontent-%COMP%] {\n    float: none;\n    text-align: center;\n  }\n  .header-logo[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n  #product-imgs[_ngcontent-%COMP%] {\n    margin-bottom: 60px;\n    margin-top: 15px;\n  }\n  #rating[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  #reviews[_ngcontent-%COMP%] {\n    margin-top: 30px;\n    margin-bottom: 30px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  .section-title[_ngcontent-%COMP%]   .section-nav[_ngcontent-%COMP%] {\n    float: none;\n    margin-top: 10px;\n  }\n  .section-tab-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  [class*=\"col-xs\"][_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .store-grid[_ngcontent-%COMP%] {\n    float: none;\n    margin-top: 10px;\n  }\n  .store-pagination[_ngcontent-%COMP%] {\n    float: none;\n    margin-top: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldC9jc3Mvc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0ErQ3FDOztBQUVyQzs7NERBRTREOztBQUU1RDs7K0JBRStCOztBQUUvQjtFQUNFLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBOzs7Ozs7RUFNRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFFaEIsc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBOztFQUVFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBOzsrQkFFK0I7O0FBRS9CO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFFbEIsb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7OytCQUUrQjs7QUFFL0IsbUJBQW1COztBQUVuQjtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBLHFCQUFxQjs7QUFFckI7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixjQUFj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O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXNzZXQvY3NzL3N0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5UZW1wbGF0ZSBOYW1lOiBFbGVjdHJvIC0gSFRNTCBFY29tbWVyY2UgVGVtcGxhdGVcbkF1dGhvcjogeWFtaW5uY2NvXG5cbkNvbG9yczpcblx0Qm9keSBcdFx0OiAjMzMzXG5cdEhlYWRlcnMgXHQ6ICMyQjJENDJcblx0UHJpbWFyeSBcdDogI0QxMDAyNFxuXHREYXJrIFx0XHQ6ICMxNTE2MUQgIyMxRTFGMjlcblx0R3JleSBcdFx0OiAjRTRFN0VEICNGQkZCRkMgIzhEOTlBRSAjQjlCQUJDXG5cbkZvbnRzOiBNb250c2VycmF0XG5cblRhYmxlIE9GIENvbnRlbnRzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjEgPiBHRU5FUkFMXG4tLS0tLS0gVHlwb2dyYXBoeVxuLS0tLS0tIEJ1dHRvbnNcbi0tLS0tLSBJbnB1dHNcbi0tLS0tLSBTZWN0aW9uc1xuLS0tLS0tIEJyZWFkY3J1bWJcbjIgPiBIRUFERVJcbi0tLS0tLSBUb3AgaGVhZGVyXG4tLS0tLS0gTG9nb1xuLS0tLS0tIFNlYXJjaFxuLS0tLS0tIENhcnRcbjMgPiBOQVZJR0FUSU9OXG4tLS0tLS0gTWFpbiBuYXZcbi0tLS0tLSBSZXNwb25zaXZlIE5hdlxuNCA+IENBVEVHT1JZIFNIT1BcbjUgPiBIT1QgREVBTFxuNiA+IFBST0RVQ1Rcbi0tLS0tLSBQcm9kdWN0XG4tLS0tLS0gV2lkZ2V0IHByb2R1Y3Rcbi0tLS0tLSBQcm9kdWN0IHNsaWNrXG43ID4gU1RPUkUgUEFHRVxuLS0tLS0tIEFzaWRlXG4tLS0tLS0gU3RvcmVcbjggPiBQUk9EVUNUIERFVEFJTFMgUEFHRVxuLS0tLS0tIFByb2R1Y3Qgdmlld1xuLS0tLS0tIFByb2R1Y3QgZGV0YWlsc1xuLS0tLS0tIFByb2R1Y3QgdGFiXG45ID4gQ0hFQ0tPVVQgUEFHRVxuMTAgPiBORVdTTEVUVEVSXG4xMSA+IEZPT1RFUlxuMTEgPiBTTElDSyBTVFlMRVxuMTIgPiBSRVNQT05TSVZFXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQwMSAtPiBHRU5FUkFMXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRUeXBvZ3JhcGh5XG5cXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGNvbG9yOiAjMmIyZDQyO1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDAgMCAxMHB4O1xufVxuXG5hIHtcbiAgY29sb3I6ICMyYjJkNDI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBjb2xvcjtcbiAgdHJhbnNpdGlvbjogMC4ycyBjb2xvcjtcbn1cblxuYTpob3ZlcixcbmE6Zm9jdXMge1xuICBjb2xvcjogI2QxMDAyNDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG51bCxcbm9sIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcblx0QnV0dG9uc1xuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5wcmltYXJ5LWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTJweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEwMDI0O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xufVxuXG4ucHJpbWFyeS1idG46aG92ZXIsXG4ucHJpbWFyeS1idG46Zm9jdXMge1xuICBvcGFjaXR5OiAwLjk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcblx0SW5wdXRzXG5cXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLyotLSBUZXh0IGlucHV0IC0tKi9cblxuLmlucHV0IHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTdlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRleHRhcmVhLmlucHV0IHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWluLWhlaWdodDogOTBweDtcbn1cblxuLyotLSBOdW1iZXIgaW5wdXQgLS0qL1xuXG4uaW5wdXQtbnVtYmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW5wdXQtbnVtYmVyIGlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG4uaW5wdXQtbnVtYmVyIGlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmlucHV0LW51bWJlciBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU3ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDBweCAzNXB4IDBweCAxNXB4O1xufVxuXG4uaW5wdXQtbnVtYmVyIC5xdHktdXAsXG4uaW5wdXQtbnVtYmVyIC5xdHktZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU3ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uaW5wdXQtbnVtYmVyIC5xdHktdXAge1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3JkZXItYm90dG9tOiAwcHg7XG59XG5cbi5pbnB1dC1udW1iZXIgLnF0eS1kb3duIHtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmlucHV0LW51bWJlciAucXR5LXVwOmhvdmVyLFxuLmlucHV0LW51bWJlciAucXR5LWRvd246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2VkO1xuICBjb2xvcjogI2QxMDAyNDtcbn1cblxuLyotLSBTZWxlY3QgaW5wdXQgLS0qL1xuXG4uaW5wdXQtc2VsZWN0IHtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU3ZWQ7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLyotLSBjaGVja2JveCAmIHJhZGlvIGlucHV0IC0tKi9cblxuLmlucHV0LXJhZGlvLFxuLmlucHV0LWNoZWNrYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmlucHV0LXJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpub3QoOmNoZWNrZWQpLFxuLmlucHV0LXJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkLFxuLmlucHV0LWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpLFxuLmlucHV0LWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogLTk5OTlweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uaW5wdXQtcmFkaW8gbGFiZWwsXG4uaW5wdXQtY2hlY2tib3ggbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW5wdXQtcmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwgc3Bhbixcbi5pbnB1dC1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogNHB4O1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTRlN2VkO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uaW5wdXQtcmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwgc3BhbiB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmlucHV0LXJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXSArIGxhYmVsIHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uaW5wdXQtY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdICsgbGFiZWwgc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pyUXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMnB4O1xuICBsZWZ0OiAxcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uaW5wdXQtcmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbCBzcGFuLFxuLmlucHV0LWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTAwMjQ7XG4gIGJvcmRlci1jb2xvcjogI2QxMDAyNDtcbn1cblxuLmlucHV0LXJhZGlvIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWwgc3BhbjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG59XG5cbi5pbnB1dC1jaGVja2JveCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsIHNwYW46YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uaW5wdXQtcmFkaW8gLmNhcHRpb24sXG4uaW5wdXQtY2hlY2tib3ggLmNhcHRpb24ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBtYXgtaGVpZ2h0O1xuICB0cmFuc2l0aW9uOiAwLjNzIG1heC1oZWlnaHQ7XG59XG5cbi5pbnB1dC1yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IC5jYXB0aW9uLFxuLmlucHV0LWNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIH4gLmNhcHRpb24ge1xuICBtYXgtaGVpZ2h0OiA4MDBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdFNlY3Rpb25cblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmNvbnRhaW5lciAubG9nbyBpbWcge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG4uc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlIC50aXRsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlIC5zZWN0aW9uLW5hdiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnNlY3Rpb24tdGl0bGUgLnNlY3Rpb24tbmF2IC5zZWN0aW9uLXRhYi1uYXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zZWN0aW9uLXRhYi1uYXYgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnNlY3Rpb24tdGFiLW5hdiBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5zZWN0aW9uLXRhYi1uYXYgbGkgYSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjOGQ5OWFlO1xufVxuXG4uc2VjdGlvbi10YWItbmF2IGxpIGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxMDAyNDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG59XG5cbi5zZWN0aW9uLXRhYi1uYXYgbGkuYWN0aXZlIGEge1xuICBjb2xvcjogI2QxMDAyNDtcbn1cblxuLnNlY3Rpb24tdGFiLW5hdiBsaSBhOmhvdmVyOmFmdGVyLFxuLnNlY3Rpb24tdGFiLW5hdiBsaSBhOmZvY3VzOmFmdGVyLFxuLnNlY3Rpb24tdGFiLW5hdiBsaS5hY3RpdmUgYTphZnRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2VjdGlvbi10aXRsZSAuc2VjdGlvbi1uYXYgLnByb2R1Y3RzLXNsaWNrLW5hdiB7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcblx0QnJlYWRjcnVtYlxuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiNicmVhZGNydW1iIHtcbiAgcGFkZGluZzogMzBweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlN2VkO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4jYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi1oZWFkZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbiNicmVhZGNydW1iIC5icmVhZGNydW1iLXRyZWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbiNicmVhZGNydW1iIC5icmVhZGNydW1iLXRyZWUgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuI2JyZWFkY3J1bWIgLmJyZWFkY3J1bWItdHJlZSBsaSArIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbiNicmVhZGNydW1iIC5icmVhZGNydW1iLXRyZWUgbGkgKyBsaTpiZWZvcmUge1xuICBjb250ZW50OiBcIi9cIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzhkOTlhZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4jYnJlYWRjcnVtYiAuYnJlYWRjcnVtYi10cmVlIGxpIGEge1xuICBjb2xvcjogIzhkOTlhZTtcbn1cblxuI2JyZWFkY3J1bWIgLmJyZWFkY3J1bWItdHJlZSBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNkMTAwMjQ7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdDAyIC0+IEhFQURFUlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcblx0VG9wIGhlYWRlclxuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiN0b3AtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZjI5O1xufVxuXG4uaGVhZGVyLWxpbmtzIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmhlYWRlci1saW5rcyBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5oZWFkZXItbGlua3MgbGkgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaGVhZGVyLWxpbmtzIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2QxMDAyNDtcbn1cblxuLmhlYWRlci1saW5rcyBsaSBpIHtcbiAgY29sb3I6ICNkMTAwMjQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcblx0TG9nb1xuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiNoZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTE2MWQ7XG59XG5cbi5oZWFkZXItbG9nbyB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uaGVhZGVyLWxvZ28gLmxvZ28gaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRTZWFyY2hcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaGVhZGVyLXNlYXJjaCB7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xufVxuXG4uaGVhZGVyLXNlYXJjaCBmb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaGVhZGVyLXNlYXJjaCBmb3JtIC5pbnB1dC1zZWxlY3Qge1xuICBtYXJnaW4tcmlnaHQ6IC00cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHggMHB4IDBweCA0MHB4O1xufVxuXG4uaGVhZGVyLXNlYXJjaCBmb3JtIC5pbnB1dCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNjBweCk7XG4gIG1hcmdpbi1yaWdodDogLTRweDtcbn1cblxuLmhlYWRlci1zZWFyY2ggZm9ybSAuc2VhcmNoLWJ0biB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDEwMDI0O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHggNDBweCA0MHB4IDBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdENhcnRcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uaGVhZGVyLWN0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMTVweCAwcHg7XG59XG5cbi5oZWFkZXItY3RuID4gZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uaGVhZGVyLWN0biA+IGRpdiArIGRpdiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uaGVhZGVyLWN0biA+IGRpdiA+IGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogOTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmhlYWRlci1jdG4gPiBkaXYgPiBhID4gaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5oZWFkZXItY3RuID4gZGl2ID4gYSA+IHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5oZWFkZXItY3RuID4gZGl2ID4gYSA+IC5xdHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IC0xMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTAwMjQ7XG59XG5cbi5oZWFkZXItY3RuIC5tZW51LXRvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jYXJ0LWRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAwcHggMnB4ICNlNGU3ZWQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDJweCAjZTRlN2VkO1xuICB6LWluZGV4OiA5OTtcbiAgcmlnaHQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmRyb3Bkb3duLm9wZW4gPiAuY2FydC1kcm9wZG93biB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5jYXJ0LWRyb3Bkb3duIC5jYXJ0LWxpc3Qge1xuICBtYXgtaGVpZ2h0OiAxODBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uY2FydC1kcm9wZG93biAuY2FydC1saXN0IC5wcm9kdWN0LXdpZGdldCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2FydC1kcm9wZG93biAuY2FydC1saXN0IC5wcm9kdWN0LXdpZGdldDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2FydC1kcm9wZG93biAuY2FydC1saXN0IC5wcm9kdWN0LXdpZGdldCAucHJvZHVjdC1pbWcge1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMHB4O1xufVxuXG4uY2FydC1kcm9wZG93biAuY2FydC1saXN0IC5wcm9kdWN0LXdpZGdldCAucHJvZHVjdC1ib2R5IC5wcm9kdWN0LXByaWNlIHtcbiAgY29sb3I6ICMyYjJkNDI7XG59XG5cbi5jYXJ0LWRyb3Bkb3duIC5jYXJ0LWJ0bnMge1xuICBtYXJnaW46IDBweCAtMTdweCAtMTdweDtcbn1cblxuLmNhcnQtZHJvcGRvd24gLmNhcnQtYnRucyA+IGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDBweCk7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTAwMjQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xufVxuXG4uY2FydC1kcm9wZG93biAuY2FydC1idG5zID4gYTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogLTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWYyOTtcbn1cblxuLmNhcnQtZHJvcGRvd24gLmNhcnQtYnRucyA+IGE6aG92ZXIge1xuICBvcGFjaXR5OiAwLjk7XG59XG5cbi5jYXJ0LWRyb3Bkb3duIC5jYXJ0LXN1bW1hcnkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U0ZTdlZDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQwMyAtPiBOYXZpZ2F0aW9uXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiNuYXZpZ2F0aW9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlNGU3ZWQ7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZDEwMDI0O1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcblx0TWFpbiBuYXZcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4ubWFpbi1uYXYgPiBsaSArIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi5tYWluLW5hdiA+IGxpID4gYSB7XG4gIHBhZGRpbmc6IDIwcHggMHB4O1xufVxuXG4ubWFpbi1uYXYgPiBsaSA+IGE6aG92ZXIsXG4ubWFpbi1uYXYgPiBsaSA+IGE6Zm9jdXMsXG4ubWFpbi1uYXYgPiBsaS5hY3RpdmUgPiBhIHtcbiAgY29sb3I6ICNkMTAwMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubWFpbi1uYXYgPiBsaSA+IGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxMDAyNDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG59XG5cbi5tYWluLW5hdiA+IGxpID4gYTpob3ZlcjphZnRlcixcbi5tYWluLW5hdiA+IGxpID4gYTpmb2N1czphZnRlcixcbi5tYWluLW5hdiA+IGxpLmFjdGl2ZSA+IGE6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlci1jdG4gbGkubmF2LXRvZ2dsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRyZXNwb25zaXZlIG5hdlxuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmhlYWRlci1jdG4gLm1lbnUtdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgI3Jlc3BvbnNpdmUtbmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYmFja2dyb3VuZDogIzE1MTYxZDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgd2lkdGg6IDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgei1pbmRleDogMjI7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgfVxuICAjcmVzcG9uc2l2ZS1uYXYuYWN0aXZlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubWFpbi1uYXYge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogY29udGVudDtcbiAgfVxuICAubWFpbi1uYXYgPiBsaSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmU7XG4gIH1cbiAgLm1haW4tbmF2ID4gbGkgKyBsaSB7XG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgfVxuICAubWFpbi1uYXYgPiBsaSA+IGEge1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cbi8qICsrKysrKysrKysrUmVnaXN0ZXIgbG9naW4rKysrKysrKysrICovXG4ucmVzbG9nIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2ZnIgMWZyIDFmcjtcbn1cbi5yZXNsb2cgLnNpZ251cCBpbWcsXG4ucmVzbG9nIC5sb2dpbiBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmc6IDNweDtcbn1cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdDA0IC0+IENBVEVHT1JZIFNIT1Bcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuLnNob3Age1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMTVweCAwcHg7XG4gIGhlaWdodDogMTVyZW07XG59XG5cbi5zaG9wOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDBweDtcbiAgd2lkdGg6IDYwJTtcbiAgYmFja2dyb3VuZDogI2QxMDAyNDtcbiAgb3BhY2l0eTogMC45O1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTQ1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogc2tld1goLTQ1ZGVnKTtcbiAgdHJhbnNmb3JtOiBza2V3WCgtNDVkZWcpO1xufVxuXG4uc2hvcDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNkMTAwMjQ7XG4gIG9wYWNpdHk6IDAuOTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC00NWRlZykgdHJhbnNsYXRlWCgtMTAwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHNrZXdYKC00NWRlZykgdHJhbnNsYXRlWCgtMTAwJSk7XG4gIHRyYW5zZm9ybTogc2tld1goLTQ1ZGVnKSB0cmFuc2xhdGVYKC0xMDAlKTtcbn1cblxuLnNob3AgLnNob3AtaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2VkO1xuICBoZWlnaHQ6IDE0cmVtO1xuICB6LWluZGV4OiAtMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ncmlkLXNob3Age1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xufVxuLnNob3AgLnNob3AtaW1nID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xufVxuXG4uc2hvcDpob3ZlciAuc2hvcC1pbWcgPiBpbWcge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uc2hvcCAuc2hvcC1ib2R5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA3NSU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uc2hvcCAuc2hvcC1ib2R5IGgzIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zaG9wIC5zaG9wLWJvZHkgLmN0YS1idG4ge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0MDUgLT4gSE9UIERFQUxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuI2hvdC1kZWFsLnNlY3Rpb24ge1xuICBwYWRkaW5nOiA2MHB4IDBweDtcbiAgbWFyZ2luOiAzMHB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTdlZDtcbiAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vaW1nL2hvdGRlYWwucG5nXCIpOyAqL1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5ob3QtZGVhbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhvdC1kZWFsIC5ob3QtZGVhbC1jb3VudGRvd24ge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uaG90LWRlYWwgLmhvdC1kZWFsLWNvdW50ZG93biA+IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogI2QxMDAyNGU2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiAwcHggNXB4O1xufVxuXG4uaG90LWRlYWwgLmhvdC1kZWFsLWNvdW50ZG93biA+IGxpID4gZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbi5ob3QtZGVhbCAuaG90LWRlYWwtY291bnRkb3duID4gbGkgPiBkaXYgaDMge1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uaG90LWRlYWwgLmhvdC1kZWFsLWNvdW50ZG93biA+IGxpID4gZGl2IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmhvdC1kZWFsIHAge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5ob3QtZGVhbCAuY3RhLWJ0biB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdDA2IC0+IFBST0RVQ1Rcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdHByb2R1Y3RcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4ucHJvZHVjdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggI2U0ZTdlZCwgMHB4IDBweCAwcHggMXB4ICNlNGU3ZWQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCAjZTRlN2VkLCAwcHggMHB4IDBweCAxcHggI2U0ZTdlZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gIGhlaWdodDogMzUwcHg7XG59XG5cbi5wcm9kdWN0OmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDZweCAwcHggI2U0ZTdlZCwgMHB4IDBweCAwcHggMnB4ICNkMTAwMjQ7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDBweCAjZTRlN2VkLCAwcHggMHB4IDBweCAycHggI2QxMDAyNDtcbn1cblxuLnByb2R1Y3QgLnByb2R1Y3QtaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZHVjdCAucHJvZHVjdC1pbWcgPiBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2R1Y3QgLnByb2R1Y3QtaW1nIC5wcm9kdWN0LWxhYmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1cHg7XG4gIHJpZ2h0OiAxNXB4O1xufVxuXG4ucHJvZHVjdCAucHJvZHVjdC1pbWcgLnByb2R1Y3QtbGFiZWwgPiBzcGFuIHtcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wcm9kdWN0IC5wcm9kdWN0LWltZyAucHJvZHVjdC1sYWJlbCA+IHNwYW4uc2FsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2QxMDAyNDtcbiAgY29sb3I6ICNkMTAwMjQ7XG59XG5cbi5wcm9kdWN0IC5wcm9kdWN0LWltZyAucHJvZHVjdC1sYWJlbCA+IHNwYW4ubmV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxMDAyNDtcbiAgYm9yZGVyLWNvbG9yOiAjZDEwMDI0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnByb2R1Y3QgLnByb2R1Y3QtYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiAyMDtcbn1cblxuLnByb2R1Y3QgLnByb2R1Y3QtYm9keSAucHJvZHVjdC1jYXRlZ29yeSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4ZDk5YWU7XG59XG5cbi5wcm9kdWN0IC5wcm9kdWN0LWJvZHkgLnByb2R1Y3QtbmFtZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnByb2R1Y3QgLnByb2R1Y3QtYm9keSAucHJvZHVjdC1uYW1lID4gYSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5wcm9kdWN0IC5wcm9kdWN0LWJvZHkgLnByb2R1Y3QtbmFtZSA+IGE6aG92ZXIsXG4ucHJvZHVjdCAucHJvZHVjdC1ib2R5IC5wcm9kdWN0LW5hbWUgPiBhOmZvY3VzIHtcbiAgY29sb3I6ICNkMTAwMjQ7XG59XG5cbi5wcm9kdWN0IC5wcm9kdWN0LWJvZHkgLnByb2R1Y3QtcHJpY2Uge1xuICBjb2xvcjogI2QxMDAyNDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucHJvZHVjdCAucHJvZHVjdC1ib2R5IC5wcm9kdWN0LXByaWNlIC5wcm9kdWN0LW9sZC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogNzAlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzhkOTlhZTtcbn1cblxuLnByb2R1Y3QgLnByb2R1Y3QtYm9keSAucHJvZHVjdC1yYXRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMTVweCAwcHggMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4ucHJvZHVjdCAucHJvZHVjdC1ib2R5IC5wcm9kdWN0LXJhdGluZyA+IGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IC00cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjZTRlN2VkO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLnByb2R1Y3QgLnByb2R1Y3QtYm9keSAucHJvZHVjdC1yYXRpbmcgPiBpLmZhLXN0YXIge1xuICBjb2xvcjogI2VmMjMzYztcbn1cblxuLnByb2R1Y3QgLnByb2R1Y3QtYm9keSAucHJvZHVjdC1yYXRpbmc6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZWQ7XG59XG5cbi5wcm9kdWN0IC5wcm9kdWN0LWJvZHkgLnByb2R1Y3QtYnRucyA+IGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xufVxuXG4ucHJvZHVjdCAucHJvZHVjdC1ib2R5IC5wcm9kdWN0LWJ0bnMgPiBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2VkO1xuICBjb2xvcjogI2QxMDAyNDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucHJvZHVjdCAucHJvZHVjdC1ib2R5IC5wcm9kdWN0LWJ0bnMgPiBidXR0b24gLnRvb2x0aXBwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTVweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xNXB4KTtcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMWUxZjI5O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgei1pbmRleDogMTA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG59XG5cbi5wcm9kdWN0IC5wcm9kdWN0LWJvZHkgLnByb2R1Y3QtYnRucyA+IGJ1dHRvbjpob3ZlciAudG9vbHRpcHAge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01cHgpO1xufVxuXG4ucHJvZHVjdCAuYWRkLXRvLWNhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDFweDtcbiAgcmlnaHQ6IDFweDtcbiAgYm90dG9tOiAxcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICMxZTFmMjk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5wcm9kdWN0OmhvdmVyIC5hZGQtdG8tY2FydCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7XG59XG5cbi5wcm9kdWN0IC5hZGQtdG8tY2FydCAuYWRkLXRvLWNhcnQtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjIzM2M7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cblxuLnByb2R1Y3QgLmFkZC10by1jYXJ0IC5hZGQtdG8tY2FydC1idG4gPiBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICBjb2xvcjogI2QxMDAyNDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ucHJvZHVjdCAuYWRkLXRvLWNhcnQgLmFkZC10by1jYXJ0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjZDEwMDI0O1xuICBib3JkZXItY29sb3I6ICNkMTAwMjQ7XG4gIHBhZGRpbmc6IDBweCAzMHB4IDBweCA1MHB4O1xufVxuXG4ucHJvZHVjdCAuYWRkLXRvLWNhcnQgLmFkZC10by1jYXJ0LWJ0bjpob3ZlciA+IGkge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcblx0V2lkZ2V0IHByb2R1Y3RcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4ucHJvZHVjdC13aWRnZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9kdWN0LXdpZGdldCArIC5wcm9kdWN0LXdpZGdldCB7XG4gIG1hcmdpbjogMzBweCAwcHg7XG59XG5cbi5wcm9kdWN0LXdpZGdldCAucHJvZHVjdC1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiA2MHB4O1xufVxuXG4ucHJvZHVjdC13aWRnZXQgLnByb2R1Y3QtaW1nID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9kdWN0LXdpZGdldCAucHJvZHVjdC1ib2R5IHtcbiAgcGFkZGluZy1sZWZ0OiA3NXB4O1xuICBtaW4taGVpZ2h0OiA2MHB4O1xufVxuXG4ucHJvZHVjdC13aWRnZXQgLnByb2R1Y3QtYm9keSAucHJvZHVjdC1jYXRlZ29yeSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM4ZDk5YWU7XG59XG5cbi5wcm9kdWN0LXdpZGdldCAucHJvZHVjdC1ib2R5IC5wcm9kdWN0LW5hbWUge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5wcm9kdWN0LXdpZGdldCAucHJvZHVjdC1ib2R5IC5wcm9kdWN0LW5hbWUgPiBhIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnByb2R1Y3Qtd2lkZ2V0IC5wcm9kdWN0LWJvZHkgLnByb2R1Y3QtbmFtZSA+IGE6aG92ZXIsXG4ucHJvZHVjdC13aWRnZXQgLnByb2R1Y3QtYm9keSAucHJvZHVjdC1uYW1lID4gYTpmb2N1cyB7XG4gIGNvbG9yOiAjZDEwMDI0O1xufVxuXG4ucHJvZHVjdC13aWRnZXQgLnByb2R1Y3QtYm9keSAucHJvZHVjdC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNkMTAwMjQ7XG59XG5cbi5wcm9kdWN0LXdpZGdldCAucHJvZHVjdC1ib2R5IC5wcm9kdWN0LXByaWNlIC5wcm9kdWN0LW9sZC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogNzAlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzhkOTlhZTtcbn1cblxuLnByb2R1Y3Qtd2lkZ2V0IC5wcm9kdWN0LWJvZHkgLnByb2R1Y3QtcHJpY2UgLnF0eSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnByb2R1Y3Qtd2lkZ2V0IC5kZWxldGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxNHB4O1xuICB3aWR0aDogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQ6ICMxZTFmMjk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRQcm9kdWN0cyBzbGlja1xuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5wcm9kdWN0cy1zbGljayAuc2xpY2stbGlzdCB7XG4gIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICBtYXJnaW4tYm90dG9tOiAtNjBweDtcbiAgei1pbmRleDogMjtcbn1cblxuLnByb2R1Y3RzLXNsaWNrIC5wcm9kdWN0LnNsaWNrLXNsaWRlIHtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4ucHJvZHVjdHMtdGFicyA+IC50YWItcGFuZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTYwcHg7XG59XG5cbi5wcm9kdWN0cy10YWJzID4gLnRhYi1wYW5lLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnByb2R1Y3RzLXNsaWNrLW5hdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4ucHJvZHVjdHMtc2xpY2stbmF2IC5zbGljay1wcmV2LFxuLnByb2R1Y3RzLXNsaWNrLW5hdiAuc2xpY2stbmV4dCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xuICAtbXMtdHJhbnNmb3JtOiBub25lO1xuICB0cmFuc2Zvcm06IG5vbmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAycHg7XG59XG5cbi5wcm9kdWN0cy1zbGljay1uYXYgLnNsaWNrLXByZXY6YmVmb3JlLFxuLnByb2R1Y3RzLXNsaWNrLW5hdiAuc2xpY2stbmV4dDpiZWZvcmUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdDA3IC0+IFBST0RVQ1RTIFBBR0Vcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdEFzaWRlXG5cXCotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLmFzaWRlICsgLmFzaWRlIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmFzaWRlID4gLmFzaWRlLXRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDE1cHggMHB4IDMwcHg7XG59XG5cbi8qLS0gY2hlY2tib3ggRmlsdGVyIC0tKi9cblxuLmNoZWNrYm94LWZpbHRlciA+IGRpdiArIGRpdiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jaGVja2JveC1maWx0ZXIgLmlucHV0LXJhZGlvIGxhYmVsLFxuLmNoZWNrYm94LWZpbHRlciAuaW5wdXQtY2hlY2tib3ggbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jaGVja2JveC1maWx0ZXIgLmlucHV0LXJhZGlvIGxhYmVsIHNtYWxsLFxuLmNoZWNrYm94LWZpbHRlciAuaW5wdXQtY2hlY2tib3ggbGFiZWwgc21hbGwge1xuICBjb2xvcjogIzhkOTlhZTtcbn1cblxuLyotLSBQcmljZSBGaWx0ZXIgLS0qL1xuXG4jcHJpY2Utc2xpZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm5vVWktdGFyZ2V0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlN2VkO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5ub1VpLWNvbm5lY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEwMDI0O1xufVxuXG4ubm9VaS1ob3Jpem9udGFsIHtcbiAgaGVpZ2h0OiA2cHg7XG59XG5cbi5ub1VpLWhvcml6b250YWwgLm5vVWktaGFuZGxlIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgbGVmdDogLTZweDtcbiAgdG9wOiAtNHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNkMTAwMjQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ubm9VaS1oYW5kbGU6YmVmb3JlLFxuLm5vVWktaGFuZGxlOmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByaWNlLWZpbHRlciAuaW5wdXQtbnVtYmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogY2FsYyg1MCUgLSA3cHgpO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qXFxcblx0U3RvcmVcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uc3RvcmUtZmlsdGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLyotLSBTdG9yZSBTb3J0IC0tKi9cblxuLnN0b3JlLXNvcnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zdG9yZS1zb3J0IGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi8qLS0gU3RvcmUgR3JpZCAtLSovXG5cbi5zdG9yZS1ncmlkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc3RvcmUtZ3JpZCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU3ZWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG59XG5cbi5zdG9yZS1ncmlkIGxpICsgbGkge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uc3RvcmUtZ3JpZCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZWQ7XG4gIGNvbG9yOiAjZDEwMDI0O1xufVxuXG4uc3RvcmUtZ3JpZCBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEwMDI0O1xuICBib3JkZXItY29sb3I6ICNkMTAwMjQ7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5zdG9yZS1ncmlkIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyotLSBTdG9yZSBQYWdpbmF0aW9uIC0tKi9cblxuLnN0b3JlLXBhZ2luYXRpb24ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zdG9yZS1wYWdpbmF0aW9uIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlN2VkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cblxuLnN0b3JlLXBhZ2luYXRpb24gbGkgKyBsaSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5zdG9yZS1wYWdpbmF0aW9uIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTdlZDtcbiAgY29sb3I6ICNkMTAwMjQ7XG59XG5cbi5zdG9yZS1wYWdpbmF0aW9uIGxpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTAwMjQ7XG4gIGJvcmRlci1jb2xvcjogI2QxMDAyNDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnN0b3JlLXBhZ2luYXRpb24gbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3RvcmUtcXR5IHtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdDA4IC0+IFBST0RVQ1QgREVUQUlMUyBQQUdFXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHRQcm9kdWN0IHZpZXdcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4jcHJvZHVjdC1tYWluLWltZyAuc2xpY2stcHJldiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCk7XG4gIGxlZnQ6IDE1cHg7XG59XG5cbiNwcm9kdWN0LW1haW4taW1nIC5zbGljay1uZXh0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcbiAgcmlnaHQ6IDE1cHg7XG59XG5cbiNwcm9kdWN0LW1haW4taW1nIC5zbGljay1wcmV2LFxuI3Byb2R1Y3QtbWFpbi1pbWcgLnNsaWNrLW5leHQge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBhbGw7XG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xufVxuXG4jcHJvZHVjdC1tYWluLWltZzpob3ZlciAuc2xpY2stcHJldixcbiNwcm9kdWN0LW1haW4taW1nOmhvdmVyIC5zbGljay1uZXh0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuI3Byb2R1Y3QtbWFpbi1pbWcgLnpvb21JbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4jcHJvZHVjdC1pbWdzIC5wcm9kdWN0LXByZXZpZXcge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGU3ZWQ7XG59XG5cbiNwcm9kdWN0LWltZ3MgLnByb2R1Y3QtcHJldmlldy5zbGljay1jdXJyZW50IHtcbiAgYm9yZGVyLWNvbG9yOiAjZDEwMDI0O1xufVxuXG4jcHJvZHVjdC1pbWdzIC5zbGljay1wcmV2IHtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4jcHJvZHVjdC1pbWdzIC5zbGljay1uZXh0IHtcbiAgdG9wOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG4jcHJvZHVjdC1pbWdzIC5zbGljay1wcmV2OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTA2XCI7XG59XG5cbiNwcm9kdWN0LWltZ3MgLnNsaWNrLW5leHQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxMDdcIjtcbn1cblxuLnByb2R1Y3QtcHJldmlldyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdFByb2R1Y3QgZGV0YWlsc1xuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5wcm9kdWN0LWRldGFpbHMgLnByb2R1Y3QtbmFtZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyAucHJvZHVjdC1yYXRpbmcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyAucHJvZHVjdC1yYXRpbmcgPiBpIHtcbiAgY29sb3I6ICNlNGU3ZWQ7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMgLnByb2R1Y3QtcmF0aW5nID4gaS5mYS1zdGFyIHtcbiAgY29sb3I6ICNkMTAwMjQ7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMgLnJldmlldy1saW5rIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzIC5wcm9kdWN0LXByaWNlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGNvbG9yOiAjZDEwMDI0O1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzIC5wcm9kdWN0LXByaWNlIC5wcm9kdWN0LW9sZC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogNzAlO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzhkOTlhZTtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyAucHJvZHVjdC1hdmFpbGFibGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBjb2xvcjogI2QxMDAyNDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyAucHJvZHVjdC1vcHRpb25zIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyAucHJvZHVjdC1vcHRpb25zIGxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyAucHJvZHVjdC1vcHRpb25zIC5pbnB1dC1zZWxlY3Qge1xuICB3aWR0aDogOTBweDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyAuYWRkLXRvLWNhcnQge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzIC5hZGQtdG8tY2FydCAuYWRkLXRvLWNhcnQtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwIDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZjIzM2M7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyAuYWRkLXRvLWNhcnQgLmFkZC10by1jYXJ0LWJ0biA+IGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gIGNvbG9yOiAjZDEwMDI0O1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5wcm9kdWN0LWRldGFpbHMgLmFkZC10by1jYXJ0IC5hZGQtdG8tY2FydC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogI2QxMDAyNDtcbiAgYm9yZGVyLWNvbG9yOiAjZDEwMDI0O1xuICBwYWRkaW5nOiAwcHggMzBweCAwcHggNTBweDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyAuYWRkLXRvLWNhcnQgLmFkZC10by1jYXJ0LWJ0bjpob3ZlciA+IGkge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzIC5hZGQtdG8tY2FydCAucXR5LWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzIC5hZGQtdG8tY2FydCAucXR5LWxhYmVsIC5pbnB1dC1udW1iZXIge1xuICB3aWR0aDogOTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucHJvZHVjdC1kZXRhaWxzIC5wcm9kdWN0LWJ0bnMgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyAucHJvZHVjdC1idG5zIGxpICsgbGkge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyAucHJvZHVjdC1saW5rcyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMgLnByb2R1Y3QtbGlua3MgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnByb2R1Y3QtZGV0YWlscyAucHJvZHVjdC1saW5rcyBsaSArIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSpcXFxuXHQgUHJvZHVjdCB0YWJcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4jcHJvZHVjdC10YWIge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4jcHJvZHVjdC10YWIgLnRhYi1uYXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweCAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbiNwcm9kdWN0LXRhYiAudGFiLW5hdjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTdlZDtcbiAgei1pbmRleDogLTE7XG59XG5cbiNwcm9kdWN0LXRhYiAudGFiLW5hdiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMHB4IDE1cHg7XG59XG5cbiNwcm9kdWN0LXRhYiAudGFiLW5hdiBsaSArIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbiNwcm9kdWN0LXRhYiAudGFiLW5hdiBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjOGQ5OWFlO1xufVxuXG4jcHJvZHVjdC10YWIgLnRhYi1uYXYgbGkuYWN0aXZlIGEge1xuICBjb2xvcjogI2QxMDAyNDtcbn1cblxuI3Byb2R1Y3QtdGFiIC50YWItbmF2IGxpIGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxMDAyNDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG59XG5cbiNwcm9kdWN0LXRhYiAudGFiLW5hdiBsaSBhOmhvdmVyOmFmdGVyLFxuI3Byb2R1Y3QtdGFiIC50YWItbmF2IGxpIGE6Zm9jdXM6YWZ0ZXIsXG4jcHJvZHVjdC10YWIgLnRhYi1uYXYgbGkuYWN0aXZlIGE6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyotLSBSYXRpbmcgLS0qL1xuXG4ucmF0aW5nLWF2ZyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnJhdGluZy1hdmcgLnJhdGluZy1zdGFycyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ucmF0aW5nLWF2ZyAucmF0aW5nLXN0YXJzLFxuLnJhdGluZyAucmF0aW5nLXN0YXJzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucmF0aW5nLWF2ZyAucmF0aW5nLXN0YXJzID4gaSxcbi5yYXRpbmcgLnJhdGluZy1zdGFycyA+IGkge1xuICBjb2xvcjogI2U0ZTdlZDtcbn1cblxuLnJhdGluZy1hdmcgLnJhdGluZy1zdGFycyA+IGkuZmEtc3Rhcixcbi5yYXRpbmcgLnJhdGluZy1zdGFycyA+IGkuZmEtc3RhciB7XG4gIGNvbG9yOiAjZDEwMDI0O1xufVxuXG4ucmF0aW5nIGxpIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuXG4ucmF0aW5nIC5yYXRpbmctcHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiA5cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZWQ7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucmF0aW5nIC5yYXRpbmctcHJvZ3Jlc3MgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEwMDI0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5yYXRpbmcgLnN1bSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzhkOTlhZTtcbn1cblxuLyotLSBSZXZpZXdzIC0tKi9cblxuLnJldmlld3MgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctbGVmdDogMTQ1cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5yZXZpZXdzIC5yZXZpZXctaGVhZGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEzMHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLnJldmlld3MgLnJldmlldy1ib2R5IHtcbiAgbWluLWhlaWdodDogNzBweDtcbn1cblxuLnJldmlld3MgLnJldmlldy1oZWFkaW5nIC5uYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5yZXZpZXdzIC5yZXZpZXctaGVhZGluZyAuZGF0ZSB7XG4gIGNvbG9yOiAjOGQ5OWFlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnJldmlld3MgLnJldmlldy1oZWFkaW5nIC5yZXZpZXctcmF0aW5nIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucmV2aWV3cyAucmV2aWV3LWhlYWRpbmcgLnJldmlldy1yYXRpbmcgPiBpIHtcbiAgY29sb3I6ICNlNGU3ZWQ7XG59XG5cbi5yZXZpZXdzIC5yZXZpZXctaGVhZGluZyAucmV2aWV3LXJhdGluZyA+IGkuZmEtc3RhciB7XG4gIGNvbG9yOiAjZDEwMDI0O1xufVxuXG4ucmV2aWV3cy1wYWdpbmF0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucmV2aWV3cy1wYWdpbmF0aW9uIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlN2VkO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cblxuLnJldmlld3MtcGFnaW5hdGlvbiBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZWQ7XG4gIGNvbG9yOiAjZDEwMDI0O1xufVxuXG4ucmV2aWV3cy1wYWdpbmF0aW9uIGxpLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTAwMjQ7XG4gIGJvcmRlci1jb2xvcjogI2QxMDAyNDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnJldmlld3MtcGFnaW5hdGlvbiBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qLS0gUmV2aWV3IEZvcm0gLS0qL1xuXG4ucmV2aWV3LWZvcm0gLmlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnJldmlldy1mb3JtIC5pbnB1dC1yYXRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ucmV2aWV3LWZvcm0gLmlucHV0LXJhdGluZyAuc3RhcnMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5yZXZpZXctZm9ybSAuaW5wdXQtcmF0aW5nIC5zdGFycyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmV2aWV3LWZvcm0gLmlucHV0LXJhdGluZyAuc3RhcnMgPiBsYWJlbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwcHggM3B4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLnJldmlldy1mb3JtIC5pbnB1dC1yYXRpbmcgLnN0YXJzID4gbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYwMDZcIjtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBjb2xvcjogI2U0ZTdlZDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG59XG5cbi5yZXZpZXctZm9ybSAuaW5wdXQtcmF0aW5nIC5zdGFycyA+IGxhYmVsOmhvdmVyOmJlZm9yZSxcbi5yZXZpZXctZm9ybSAuaW5wdXQtcmF0aW5nIC5zdGFycyA+IGxhYmVsOmhvdmVyIH4gbGFiZWw6YmVmb3JlIHtcbiAgY29sb3I6ICNkMTAwMjQ7XG59XG5cbi5yZXZpZXctZm9ybSAuaW5wdXQtcmF0aW5nIC5zdGFycyA+IGlucHV0OmNoZWNrZWQgbGFiZWw6YmVmb3JlLFxuLnJldmlldy1mb3JtIC5pbnB1dC1yYXRpbmcgLnN0YXJzID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMDA1XCI7XG4gIGNvbG9yOiAjZDEwMDI0O1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHQwOSAtPiBDSEVDS09VVCBQQUdFXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi5iaWxsaW5nLWRldGFpbHMge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uc2hpcGluZy1kZXRhaWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLm9yZGVyLWRldGFpbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDBweCAzMHB4IDMwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNGU3ZWQ7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U0ZTdlZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGU3ZWQ7XG59XG5cbi5vcmRlci1kZXRhaWxzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTFweDtcbiAgcmlnaHQ6IC0xcHg7XG4gIHRvcDogLTE1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNGU3ZWQ7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U0ZTdlZDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U0ZTdlZDtcbn1cblxuLm9yZGVyLXN1bW1hcnkge1xuICBtYXJnaW46IDE1cHggMHB4O1xufVxuXG4ub3JkZXItc3VtbWFyeSAub3JkZXItY29sIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub3JkZXItc3VtbWFyeSAub3JkZXItY29sOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4ub3JkZXItc3VtbWFyeSAub3JkZXItY29sID4gZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5vcmRlci1zdW1tYXJ5IC5vcmRlci1jb2wgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTUwcHgpO1xufVxuXG4ub3JkZXItc3VtbWFyeSAub3JkZXItY29sID4gZGl2Omxhc3QtY2hpbGQge1xuICB3aWR0aDogMTUwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ub3JkZXItc3VtbWFyeSAub3JkZXItY29sIC5vcmRlci10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNkMTAwMjQ7XG59XG5cbi5vcmRlci1kZXRhaWxzIC5wYXltZW50LW1ldGhvZCB7XG4gIG1hcmdpbjogMzBweCAwcHg7XG59XG5cbi5vcmRlci1kZXRhaWxzIC5vcmRlci1zdWJtaXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0MTAgLT4gTkVXU0xFVFRFUlxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4jbmV3c2xldHRlci5zZWN0aW9uIHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlNGU3ZWQ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZDEwMDI0O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubmV3c2xldHRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ld3NsZXR0ZXIgcCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLm5ld3NsZXR0ZXIgZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA1MjBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG59XG5cbi5uZXdzbGV0dGVyIGZvcm06YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcZjAwM1wiO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxNjBweDtcbiAgY29sb3I6ICNlNGU3ZWQ7XG4gIHRvcDogMTVweDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE1ZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTVkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDE1ZGVnKTtcbiAgei1pbmRleDogLTE7XG4gIGxlZnQ6IC05MHB4O1xufVxuXG4ubmV3c2xldHRlciBmb3JtIC5pbnB1dCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNjBweCk7XG4gIG1hcmdpbi1yaWdodDogLTRweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweCAwcHggMHB4IDQwcHg7XG59XG5cbi5uZXdzbGV0dGVyIGZvcm0gLm5ld3NsZXR0ZXItYnRuIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQ6ICNkMTAwMjQ7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweCA0MHB4IDQwcHggMHB4O1xufVxuXG4ubmV3c2xldHRlciAubmV3c2xldHRlci1mb2xsb3cge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZXdzbGV0dGVyIC5uZXdzbGV0dGVyLWZvbGxvdyBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5uZXdzbGV0dGVyIC5uZXdzbGV0dGVyLWZvbGxvdyBsaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5uZXdzbGV0dGVyIC5uZXdzbGV0dGVyLWZvbGxvdyBsaSBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTdlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGFsbDtcbiAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XG59XG5cbi5uZXdzbGV0dGVyIC5uZXdzbGV0dGVyLWZvbGxvdyBsaSBhOmhvdmVyLFxuLm5ld3NsZXR0ZXIgLm5ld3NsZXR0ZXItZm9sbG93IGxpIGE6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2VkO1xuICBjb2xvcjogI2QxMDAyNDtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0MTEgLT4gRk9PVEVSXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiNmb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTUxNjFkO1xuICBjb2xvcjogI2I5YmFiYztcbn1cblxuI2JvdHRvbS1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMWUxZjI5O1xufVxuXG4uZm9vdGVyIHtcbiAgbWFyZ2luOiAzMHB4IDBweDtcbn1cblxuLmZvb3RlciAuZm9vdGVyLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwcHggMHB4IDMwcHg7XG59XG5cbi5mb290ZXItbGlua3MgbGkgKyBsaSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5mb290ZXItbGlua3MgbGkgYSB7XG4gIGNvbG9yOiAjYjliYWJjO1xufVxuXG4uZm9vdGVyLWxpbmtzIGxpIGkge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjZDEwMDI0O1xuICB3aWR0aDogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9vdGVyLWxpbmtzIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2QxMDAyNDtcbn1cblxuLmNvcHlyaWdodCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb290ZXItcGF5bWVudHMgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uZm9vdGVyLXBheW1lbnRzIGxpIGEge1xuICBjb2xvcjogIzE1MTYxZDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0MTIgLT4gU0xJQ0sgU1RZTEVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdEFycm93c1xuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi5zbGljay1wcmV2LFxuLnNsaWNrLW5leHQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlN2VkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDIyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgYWxsO1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbDtcbn1cblxuLnNsaWNrLXByZXY6aG92ZXIsXG4uc2xpY2stcHJldjpmb2N1cyxcbi5zbGljay1uZXh0OmhvdmVyLFxuLnNsaWNrLW5leHQ6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDEwMDI0O1xuICBib3JkZXItY29sb3I6ICNkMTAwMjQ7XG59XG5cbi5zbGljay1wcmV2OmJlZm9yZSxcbi5zbGljay1uZXh0OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgY29sb3I6ICMyYjJkNDI7XG59XG5cbi5zbGljay1wcmV2OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTA0XCI7XG59XG5cbi5zbGljay1uZXh0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxmMTA1XCI7XG59XG5cbi5zbGljay1wcmV2OmhvdmVyOmJlZm9yZSxcbi5zbGljay1wcmV2OmZvY3VzOmJlZm9yZSxcbi5zbGljay1uZXh0OmhvdmVyOmJlZm9yZSxcbi5zbGljay1uZXh0OmZvY3VzOmJlZm9yZSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2xpY2stcHJldiB7XG4gIGxlZnQ6IC0yMHB4O1xufVxuXG4uc2xpY2stbmV4dCB7XG4gIHJpZ2h0OiAtMjBweDtcbn1cblxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXG5cdERvdHNcblxcKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4uc2xpY2stZG90cyBsaSxcbi5zbGljay1kb3RzIGxpIGJ1dHRvbixcbi5zbGljay1kb3RzIGxpIGJ1dHRvbjpiZWZvcmUge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuXG4uc2xpY2stZG90cyBsaSBidXR0b246YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZDogI2U0ZTdlZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4uc2xpY2stZG90cyBsaS5zbGljay1hY3RpdmUgYnV0dG9uOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMTAwMjQ7XG59XG5cbi5jdXN0b20tZG90cyAuc2xpY2stZG90cyB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIG1hcmdpbjogMTVweCAwcHg7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cdDEzIC0+IFJFU1BPTlNJVkVcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAxcHgpIHtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAjdG9wLWhlYWRlciAuaGVhZGVyLWxpbmtzLnB1bGwtbGVmdCB7XG4gICAgZmxvYXQ6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICAjdG9wLWhlYWRlciAuaGVhZGVyLWxpbmtzLnB1bGwtcmlnaHQge1xuICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICB9XG4gIC5oZWFkZXItbG9nbyB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5oZWFkZXItbG9nbyAubG9nbyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gICNwcm9kdWN0LWltZ3Mge1xuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgfVxuICAjcmF0aW5nIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgI3Jldmlld3Mge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zZWN0aW9uLXRpdGxlIC5zZWN0aW9uLW5hdiB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuc2VjdGlvbi10YWItbmF2IGxpIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgW2NsYXNzKj1cImNvbC14c1wiXSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnN0b3JlLWdyaWQge1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbiAgLnN0b3JlLXBhZ2luYXRpb24ge1xuICAgIGZsb2F0OiBub25lO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mg-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.scss", "../asset/css/style.css"],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/checkout/checkout.component */ "./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/product/product.component */ "./src/app/components/product/product.component.ts");
/* harmony import */ var _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/thankyou/thankyou.component */ "./src/app/components/thankyou/thankyou.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["NoopAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
        _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"],
        _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"],
        _components_product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"],
        _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_13__["ThankyouComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["NoopAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _components_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                    _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"],
                    _components_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"],
                    _components_product_product_component__WEBPACK_IMPORTED_MODULE_12__["ProductComponent"],
                    _components_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_13__["ThankyouComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["NoopAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function CartComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Cart Is Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " GO TO SHOP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_ng_container_2_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_container_2_tr_17_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.cartService.DeleteProductFromCart(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_container_2_tr_17_Template_div_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.ChangeQuantity(i_r9, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_ng_container_2_tr_17_Template_div_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.ChangeQuantity(i_r9, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", c_r8.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", c_r8.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r8.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 7, c_r8.product.price, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", c_r8.numInCart)("max", c_r8.product.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 10, ctx_r7.cartService.CalculateSubTotal(i_r9), "USD"));
} }
function CartComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CartComponent_ng_container_2_tr_17_Template, 23, 13, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Continue Shopping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.cartData.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](26, 2, ctx_r6.cartTotal, "USD"));
} }
class CartComponent {
    constructor(cartService) {
        this.cartService = cartService;
    }
    ngOnInit() {
        this.cartService.cartDataObs$.subscribe((data) => (this.cartData = data));
        this.cartService.cartTotal$.subscribe((total) => (this.cartTotal = total));
    }
    ChangeQuantity(id, increaseQuantity) {
        this.cartService.UpdateCartData(id, increaseQuantity);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["mg-cart"]], decls: 3, vars: 2, consts: [[1, "container"], ["class", "text-center my-5", 4, "ngIf"], [4, "ngIf"], [1, "text-center", "my-5"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-lg", "mt-3"], [1, "row"], [1, "col", "my-4"], [1, "table"], [1, "table-dark"], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "border-0"], [2, "border", "none"], [1, "col-md-12", "d-flex", "mb-5"], [1, "d-flex", "w-100", "justify-content-between", "flex-sm-column", "flex-md-row"], ["routerLink", "/checkout", 1, "btn", "btn-danger", "btn-sm", "order-1"], ["routerLink", "/", 1, "btn", "btn-success", "btn-sm", "order-0"], [1, "d-flex", "align-items-center", "justify-content-around"], ["height", "60", 1, "order-1", 3, "src", "alt"], [1, "text-danger", 2, "cursor", "pointer"], [1, "fa", "fa-trash", 3, "click"], ["id", "decrease", 1, "value-button", 3, "click"], [1, "fa", "fa-minus"], ["type", "number", "id", "number", "readonly", "", 3, "value", "max"], ["id", "increase", 1, "value-button", 3, "click"], [1, "fa", "fa-plus"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_div_1_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartComponent_ng_container_2_Template, 33, 5, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.data[0].numInCart === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.data[0].numInCart !== 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".increase_quantity[_ngcontent-%COMP%], .decrease_quantity[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.value-button[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid #ddd;\n  margin: 0px;\n  width: 40px;\n  height: 40px;\n  vertical-align: middle;\n  padding: 10px 0 12px;\n  text-align: center;\n  background: #eee;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.value-button[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nform[_ngcontent-%COMP%]   #decrease[_ngcontent-%COMP%] {\n  margin-right: -4px;\n  border-radius: 8px 0 0 8px;\n  background: red;\n  color: white;\n}\n\nform[_ngcontent-%COMP%]   #increase[_ngcontent-%COMP%] {\n  margin-left: -4px;\n  border-radius: 0 8px 8px 0;\n  background: green;\n  color: white;\n}\n\n\n\ninput#number[_ngcontent-%COMP%] {\n  text-align: center;\n  border: none;\n  border-top: 1px solid #ddd;\n  border-bottom: 1px solid #ddd;\n  margin: 0px;\n  width: 40px;\n  height: 40px;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-of-type)   td[_ngcontent-%COMP%] {\n  border-right: 1px solid #dee2e6;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:last-of-type)   td[_ngcontent-%COMP%]:first-of-type {\n  border-left: 1px solid #dee2e6;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-of-type   td[_ngcontent-%COMP%]:first-child {\n  border-top: 1px solid #dee2e6 !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-of-type   td[_ngcontent-%COMP%]:nth-child(4), tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-of-type   td[_ngcontent-%COMP%]:nth-child(5) {\n  border-left: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n  font-weight: bold;\n  font-size: 1.3rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L0Y6XFxQUk9HUkFNXFxBTkdVTEFSIDEwXFxMZWFybmluZy13ZWIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNhcnRcXGNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBOzs7R0FBQTs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUNBRjs7QURNTTtFQUNFLCtCQUFBO0FDSFI7O0FES1E7RUFDRSw4QkFBQTtBQ0hWOztBRFVRO0VBQ0Usd0NBQUE7QUNSVjs7QURXUTtFQUVFLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1ZWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5jcmVhc2VfcXVhbnRpdHksXG4uZGVjcmVhc2VfcXVhbnRpdHkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52YWx1ZS1idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBwYWRkaW5nOiAxMHB4IDAgMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnZhbHVlLWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZm9ybSAjZGVjcmVhc2Uge1xuICBtYXJnaW4tcmlnaHQ6IC00cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuZm9ybSAjaW5jcmVhc2Uge1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgYm9yZGVyLXJhZGl1czogMCA4cHggOHB4IDA7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIGZvcm0gI2lucHV0LXdyYXAge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufSAqL1xuXG5pbnB1dCNudW1iZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxudGJvZHkge1xuICB0ciB7XG4gICAgJjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgdGQge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgdGQge1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNiAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpudGgtY2hpbGQoNCksXG4gICAgICAgICY6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5pbmNyZWFzZV9xdWFudGl0eSxcbi5kZWNyZWFzZV9xdWFudGl0eSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnZhbHVlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgbWFyZ2luOiAwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBhZGRpbmc6IDEwcHggMCAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4udmFsdWUtYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5mb3JtICNkZWNyZWFzZSB7XG4gIG1hcmdpbi1yaWdodDogLTRweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5mb3JtICNpbmNyZWFzZSB7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDhweCA4cHggMDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogZm9ybSAjaW5wdXQtd3JhcCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59ICovXG5pbnB1dCNudW1iZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBtYXJnaW46IDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbnRib2R5IHRyOm5vdCg6bGFzdC1vZi10eXBlKSB0ZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG59XG50Ym9keSB0cjpub3QoOmxhc3Qtb2YtdHlwZSkgdGQ6Zmlyc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNjtcbn1cbnRib2R5IHRyOmxhc3Qtb2YtdHlwZSB0ZDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2ICFpbXBvcnRhbnQ7XG59XG50Ym9keSB0cjpsYXN0LW9mLXR5cGUgdGQ6bnRoLWNoaWxkKDQpLCB0Ym9keSB0cjpsYXN0LW9mLXR5cGUgdGQ6bnRoLWNoaWxkKDUpIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mg-cart",
                templateUrl: "./cart.component.html",
                styleUrls: ["./cart.component.scss"],
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/checkout/checkout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/checkout/checkout.component.ts ***!
  \***********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function CheckoutComponent_div_3_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", c_r17.numInCart, "x ", c_r17.product.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, c_r17.product.price * c_r17.numInCart, "USD"));
} }
function CheckoutComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Billing address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Create Account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Shiping address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Ship to a diffrent address? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "textarea", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Your Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "PRODUCT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "SubTotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, CheckoutComponent_div_3_div_75_Template, 6, 6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "FREE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "TOTAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "strong", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Direct Bank Transfer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Cheque Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Paypal System ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " I've read and accept the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "terms & conditions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_3_Template_button_click_122_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onCheckout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Place order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r14.cartData.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](89, 3, ctx_r14.cartTotal, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r14.cartTotal <= 0);
} }
function CheckoutComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Cart Is Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "GO TO SHOP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CheckoutComponent {
    constructor(cartService, orderService, router, spinner, fb) {
        this.cartService = cartService;
        this.orderService = orderService;
        this.router = router;
        this.spinner = spinner;
        this.fb = fb;
        this.checkoutForm = this.fb.group({
            firstname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            lastname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            phone: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    ngOnInit() {
        this.cartService.cartDataObs$.subscribe((data) => (this.cartData = data));
        this.cartService.cartTotal$.subscribe((total) => (this.cartTotal = total));
    }
    onCheckout() {
        this.spinner.show().then((p) => {
            this.cartService.CheckoutFromCart(1);
        });
        //console.log(this.checkoutForm.value);
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["mg-checkout"]], decls: 5, vars: 2, consts: [["bdColor", "rgba(151,149,149,0.4)", "size", "large", "color", "orange", "type", "ball-clip-rotate-pulse", "fullScreen", "true"], [2, "font-size", "20px", "color", "black"], ["class", "section", 4, "ngIf"], ["class", "text-center my-5", 4, "ngIf"], [1, "section"], [1, "container"], [1, "row"], [1, "col-md-7"], [1, "billing-details"], [1, "section-title"], [1, "title"], [1, "form-group"], ["type", "text", "name", "first-name", "placeholder", "First Name", 1, "input"], ["type", "text", "name", "last-name", "placeholder", "Last Name", 1, "input"], ["type", "email", "name", "email", "placeholder", "Email", 1, "input"], ["type", "text", "name", "address", "placeholder", "Address", 1, "input"], ["type", "text", "name", "city", "placeholder", "City", 1, "input"], ["type", "text", "name", "country", "placeholder", "Country", 1, "input"], ["type", "text", "name", "zip-code", "placeholder", "ZIP Code", 1, "input"], ["type", "tel", "name", "tel", "placeholder", "Telephone", 1, "input"], [1, "input-checkbox"], ["type", "checkbox", "id", "create-account"], ["for", "create-account"], [1, "caption"], ["type", "password", "name", "password", "placeholder", "Enter Your Password", 1, "input"], [1, "shiping-details"], ["type", "checkbox", "id", "shiping-address"], ["for", "shiping-address"], [1, "order-notes"], ["placeholder", "Order Notes", 1, "input"], [1, "col-md-5", "order-details"], [1, "section-title", "text-center"], [1, "order-summary"], [1, "order-col"], [1, "order-products"], ["class", "order-col", 4, "ngFor", "ngForOf"], [1, "order-col", "dropdown-divider"], [1, "order-total"], [1, "payment-method"], [1, "input-radio"], ["type", "radio", "name", "payment", "id", "payment-1"], ["for", "payment-1"], ["type", "radio", "name", "payment", "id", "payment-2"], ["for", "payment-2"], ["type", "radio", "name", "payment", "id", "payment-3"], ["for", "payment-3"], ["type", "checkbox", "id", "terms"], ["for", "terms"], ["href", "#"], ["type", "submit", 1, "btn-outline-danger", "btn-sm", "my-2", "btn-block", 3, "disabled", "click"], [1, "text-center", "my-5"], ["routerLink", "/", 1, "btn", "btn-primary", "btn-lg", "mt-3"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Booking Order...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CheckoutComponent_div_3_Template, 124, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CheckoutComponent_div_4_Template, 5, 0, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.total > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.total <= 0);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mg-checkout",
                templateUrl: "./checkout.component.html",
                styleUrls: ["./checkout.component.scss"],
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }, { type: _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() {
    }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["mg-footer"]], decls: 110, vars: 0, consts: [["id", "footer"], [1, "section"], [1, "container"], [1, "row"], [1, "col-md-6", "col-xs-6"], [1, "footer"], [1, "footer-title"], [1, "footer-links"], ["href", "#"], [1, "fa", "fa-map-marker"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope-o"], [1, "clearfix", "visible-xs"], [1, "col-md-3", "col-xs-6"], ["id", "bottom-footer", 1, "section"], [1, "col-md-12", "text-center"], [1, "footer-payments"], [1, "fa", "fa-cc-visa"], [1, "fa", "fa-credit-card"], [1, "fa", "fa-cc-paypal"], [1, "fa", "fa-cc-mastercard"], [1, "fa", "fa-cc-discover"], [1, "fa", "fa-cc-amex"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "1734 Stonecoal Road");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "+021-95-51-84");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "email@email.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Subjects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mock Tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Books");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Previous years papers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Paid Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "View Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "View resourses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Copyright \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " All rights reserved 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mg-footer",
                templateUrl: "./footer.component.html",
                styleUrls: ["./footer.component.scss"],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function HeaderComponent_div_45_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_45_div_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const i_r28 = ctx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.cartService.DeleteProductFromCart(i_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", c_r27.product == null ? null : c_r27.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r27.product == null ? null : c_r27.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", c_r27.numInCart, " x ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 4, c_r27.product == null ? null : c_r27.product.price, "USD"), " ");
} }
function HeaderComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_45_div_1_Template, 14, 7, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.cartData.data);
} }
function HeaderComponent_a_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " New User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_a_83_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_a_83_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.authService.logoutUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(cartService, authService) {
        this.cartService = cartService;
        this.authService = authService;
    }
    ngOnInit() {
        this.cartService.cartTotal$.subscribe((total) => {
            this.cartTotal = total;
        });
        this.cartService.cartDataObs$.subscribe((data) => (this.cartData = data));
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["mg-header"]], decls: 84, vars: 10, consts: [["id", "top-header"], [1, "container"], [1, "header-links", "pull-left"], ["href", "#"], [1, "fa", "fa-phone"], [1, "fa", "fa-envelope-o"], [1, "fa", "fa-map-marker"], [1, "header-links", "pull-right"], [1, "fa", "fa-user-o"], ["id", "header"], [1, "row"], [1, "col-md-6"], [1, "header-logo"], ["routerLink", "/", 1, "logo"], ["src", "../../../assets/images/undraw_professor_8lrt.svg", "alt", ""], [1, "col-md-6", "clearfix"], [1, "header-ctn"], [1, "fa", "fa-heart-o"], [1, "qty"], [1, "dropdown"], ["data-toggle", "dropdown", "aria-expanded", "true", 1, "dropdown-toggle", 2, "cursor", "pointer"], [1, "fa", "fa-shopping-cart"], [1, "cart-dropdown"], ["class", "cart-list", 4, "ngIf"], [1, "cart-summary"], [1, "cart-btns"], ["routerLink", "/cart"], ["routerLink", "/checkout"], [1, "fa", "fa-arrow-circle-right"], [1, "menu-toggle"], [1, "fa", "fa-bars"], ["id", "navigation"], ["id", "responsive-nav"], [1, "main-nav", "nav", "py-3"], ["routerLink", "/home", "routerLinkActive", "active", "routerLinkActiveOptions", "{exact:true}"], ["routerLink", "/product", "routerLinkActive", "active"], ["routerLink", "/footer"], [1, "reslog"], [1, "signup", "float-right", "row-md-2", "pull-right"], ["routerLink", "/register", "routerLinkActive", "active", 4, "ngIf"], [1, "login", "two", "float-right", "row-md-2"], ["routerLink", "/login", "routerLinkActive", "active", 4, "ngIf"], ["routerLink", "/home", 3, "click", 4, "ngIf"], [1, "cart-list"], ["class", "product-widget", 4, "ngFor", "ngForOf"], [1, "product-widget"], [1, "product-img"], ["alt", "", "width", "20px", 3, "src"], [1, "product-body"], [1, "product-name"], [1, "product-price"], [1, "delete", 3, "click"], [1, "fa", "fa-close"], ["routerLink", "/register", "routerLinkActive", "active"], ["src", "https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png"], ["routerLink", "/login", "routerLinkActive", "active"], ["src", "https://img.icons8.com/color/48/000000/login-rounded-right.png"], ["routerLink", "/home", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " +021-95-51-84");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " email@email.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 1734 Stonecoal Road");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Your Wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Your Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, HeaderComponent_div_45_Template, 2, 1, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "View Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Checkout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "nav", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, HeaderComponent_a_79_Template, 4, 0, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, HeaderComponent_a_81_Template, 4, 0, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, HeaderComponent_a_83_Template, 4, 0, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.cartData.data[0].numInCart !== 0 ? ctx.cartData.data.length : 0, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartData.data[0].numInCart !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.cartData.data[0].numInCart !== 0 ? ctx.cartData.data.length : 0, " Item(s) selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("TOTAL : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](51, 7, ctx.cartTotal, "USD"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loggedIn());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mg-header",
                templateUrl: "./header.component.html",
                styleUrls: ["./header.component.scss"],
            }]
    }], function () { return [{ type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function HomeComponent_div_105_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_105_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const p_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectProduct(p_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_105_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const p_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.AddProduct(p_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", p_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, p_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", p_r1.description.substr(0, 40), " ....");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 13, p_r1.price, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", p_r1.quantity < 1)("btn-outline-danger", p_r1.quantity < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", p_r1.quantity < 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r1.quantity < 1 ? "NO STOCK" : "Add To Cart", " ");
} }
class HomeComponent {
    constructor(productService, cartService, router) {
        this.productService = productService;
        this.cartService = cartService;
        this.router = router;
        this.products = [];
    }
    ngOnInit() {
        this.productService.getAllProducts(8).subscribe((prods) => {
            this.products = prods.products;
            console.log(this.products);
        });
    }
    AddProduct(id) {
        this.cartService.AddProductToCart(id);
    }
    selectProduct(id) {
        this.router.navigate(["/product", id]).then();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["mg-home"]], decls: 133, vars: 1, consts: [[1, "grid-shop"], [1, "section"], [1, "container"], [1, "row"], [1, "col-md-4", "col-xs-6"], [1, "shop"], [1, "shop-img"], ["src", "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "alt", ""], [1, "shop-body"], ["href", "#", 1, "cta-btn"], [1, "fa", "fa-arrow-circle-right"], ["src", "https://images.pexels.com/photos/6207365/pexels-photo-6207365.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "alt", ""], ["src", "https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "alt", ""], ["src", "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", "alt", ""], ["src", "https://images.pexels.com/photos/5088018/pexels-photo-5088018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "alt", ""], ["src", "https://images.pexels.com/photos/45708/pexels-photo-45708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "alt", ""], ["src", "https://images.pexels.com/photos/2859169/pexels-photo-2859169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "alt", ""], ["src", "https://www.investopedia.com/thmb/5_l_gNEBaEfz10PhdqexDMklsAo=/1333x1000/smart/filters:no_upscale()/GettyImages-658647254-5468427ab5c94e9b82f9132e60aad7a0.jpg", "alt", ""], ["src", "https://images.pexels.com/photos/2293558/pexels-photo-2293558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "alt", ""], [1, "col-md-12"], ["class", "col-md-4 col-sm-6", 4, "ngFor", "ngForOf"], ["id", "newsletter", 1, "section"], [1, "newsletter"], ["type", "email", "placeholder", "Enter Your Email", 1, "input"], [1, "newsletter-btn"], [1, "fa", "fa-envelope"], [1, "newsletter-follow"], ["href", "#"], [1, "fa", "fa-facebook"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "fa", "fa-pinterest"], [1, "col-md-4", "col-sm-6"], [1, "card", "my-2"], ["width", "200px", 1, "card-img-top", 2, "cursor", "pointer", 3, "src", "alt", "click"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "lead"], [1, "row", "d-flex", "justify-content-center", "border-primary", "my-3"], [1, "col-md-6"], [1, "btn", "btn-outline-primary", "btn-sm", "btn-block", 3, "disabled", "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Biology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Explore\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Explore\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Physics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Explore\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Chemistry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Explore\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Mathematics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Explore\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Economics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Explore\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Geography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Explore\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Explore\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Explore\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, HomeComponent_div_105_Template, 18, 16, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Sign Up for the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "NEWSLETTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Subscribe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0Y6XFxQUk9HUkFNXFxBTkdVTEFSIDEwXFxMZWFybmluZy13ZWIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2FibGVkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi8vIGVtcHR5IGZpbGVcbiIsIi5kaXNhYmxlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mg-home",
                templateUrl: "./home.component.html",
                styleUrls: ["./home.component.scss"],
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.loginUserData = {
            email: "",
            password: ""
        };
    }
    ngOnInit() {
    }
    loginUser() {
        this.authService.loginUser(this.loginUserData).subscribe(res => {
            console.log(res);
            localStorage.setItem('token', res.token);
            this.router.navigate(['/home']);
        }, err => console.log(err));
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 2, consts: [[1, "container"], [1, "row", "pt-5", "pb-5"], [1, "col-md-6", "mx-auto"], [1, "card"], [1, "card-header"], [1, "card-body", "mx-4"], [1, "form"], [1, "form-group", "mt-4"], ["for", ""], ["name", "email", "type", "text", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "password", "type", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-success", "mt-4", "mb-3", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_12_listener($event) { return ctx.loginUserData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_16_listener($event) { return ctx.loginUserData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.loginUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.loginUserData.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/product/product.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");






const _c0 = ["quantity"];
class ProductComponent {
    constructor(route, productService, cartService) {
        this.route = route;
        this.productService = productService;
        this.cartService = cartService;
        this.thumbimages = [];
    }
    ngOnInit() {
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((param) => {
            // @ts-ignore
            return param.params.id;
        }))
            .subscribe((prodId) => {
            this.id = prodId;
            this.productService.getSingleProduct(this.id).subscribe((prod) => {
                this.product = prod;
                if (prod.images !== null) {
                    this.thumbimages = prod.images.split(";");
                }
            });
        });
    }
    ngAfterViewInit() {
        // Product Main img Slick
        $("#product-main-img").slick({
            infinite: true,
            speed: 300,
            dots: false,
            arrows: true,
            fade: true,
            asNavFor: "#product-imgs",
        });
        // Product imgs Slick
        $("#product-imgs").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: 0,
            vertical: true,
            asNavFor: "#product-main-img",
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        vertical: false,
                        arrows: false,
                        dots: true,
                    },
                },
            ],
        });
        // Product img zoom
        var zoomMainProduct = document.getElementById("product-main-img");
        if (zoomMainProduct) {
            $("#product-main-img .product-preview").zoom();
        }
    }
    addToCart(id) {
        this.cartService.AddProductToCart(id, this.quantityInput.nativeElement.value);
    }
    Increase() {
        let value = parseInt(this.quantityInput.nativeElement.value);
        if (this.product.quantity >= 1) {
            value++;
            if (value > this.product.quantity) {
                // @ts-ignore
                value = this.product.quantity;
            }
        }
        else {
            return;
        }
        this.quantityInput.nativeElement.value = value.toString();
    }
    Decrease() {
        let value = parseInt(this.quantityInput.nativeElement.value);
        if (this.product.quantity > 0) {
            value--;
            if (value <= 0) {
                // @ts-ignore
                value = 0;
            }
        }
        else {
            return;
        }
        this.quantityInput.nativeElement.value = value.toString();
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"])); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["mg-product"]], viewQuery: function ProductComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.quantityInput = _t.first);
    } }, decls: 448, vars: 0, consts: [[1, "col-md-12"], [1, "section-title", "text-center"], [1, "title"], [1, "section"], [1, "container"], [1, "row"], [1, "col-md-6", "col-xs-4"], [1, "product"], [1, "product-img"], ["alt", "", "src", "https://img-c.udemycdn.com/course/480x270/4188320_d3e3_3.jpg"], [1, "product-label"], [1, "sale"], [1, "product-body"], [1, "product-category"], [1, "product-name"], ["href", "#"], [1, "product-price"], [1, "product-old-price"], [1, "product-rating"], [1, "product-btns"], [1, "add-to-wishlist"], [1, "fa", "fa-heart-o"], [1, "tooltipp"], [1, "add-to-compare"], [1, "fa", "fa-exchange"], [1, "quick-view"], [1, "fa", "fa-eye"], [1, "add-to-cart"], [1, "add-to-cart-btn"], [1, "fa", "fa-shopping-cart"], ["alt", "", "src", "https://img-c.udemycdn.com/course/480x270/914296_3670_8.jpg"], [1, "new"], [1, "fa", "fa-star"], [1, "clearfix", "visible-sm", "visible-xs"], ["alt", "", "src", "https://img-c.udemycdn.com/course/480x270/2630614_1a6d.jpg"], [1, "fa", "fa-star-o"], ["alt", "", "src", "https://img-c.udemycdn.com/course/480x270/933482_68e1_3.jpg"], ["alt", "", "src", "https://img-c.udemycdn.com/course/480x270/1753904_e01f_2.jpg"], ["alt", "", "src", "https://img-c.udemycdn.com/course/480x270/3227583_5e75_6.jpg"], ["alt", "", "src", "https://img-c.udemycdn.com/course/480x270/903744_8eb2.jpg"], [1, "col-md-6", "col-xs-3"], ["alt", "", "src", "https://img-c.udemycdn.com/course/480x270/629302_8a2d_2.jpg"], ["alt", "", "src", "https://img-c.udemycdn.com/course/480x270/2302354_4ddd_8.jpg"], ["alt", "", "src", "https://img-c.udemycdn.com/course/480x270/1576854_9aeb_2.jpg"], ["alt", "", "src", "https://img-c.udemycdn.com/course/480x270/573984_ce2a_3.jpg"], ["alt", "", "src", "https://img-c.udemycdn.com/course/480x270/2121018_9de5_5.jpg"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Paid Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "-30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Computer Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Git & GitHub - The Practical Guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " $380.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "del", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "$400.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "add to wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "add to compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "quick view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " add to cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Network Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " $700.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "del", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "$990.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "add to wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "add to compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "quick view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " add to cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Hotel Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " $100.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "del", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "$150.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "add to wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "add to compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "quick view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " add to cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Event Organiser");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " $980.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "del", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "$990.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "add to wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "add to compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "quick view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " add to cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "-30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Trading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Crypto Trading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " $380.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "del", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "$500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "add to wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "add to compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "quick view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " add to cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Computer Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "UI/UX Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " $90.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "del", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "$100.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "add to wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "add to compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "quick view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, " add to cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](234, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Computer Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Data Science Fundamentals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, " $980.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "del", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "$990.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](253, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "add to wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "add to compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "quick view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](267, " add to cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Computer Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Python Fundamentals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " $500.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "del", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "$690.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](282, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "add to wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "add to compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "quick view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, " add to cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "-30%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Computer Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "The Blender 2.8 Encyclopedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, " $590.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "del", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "$790.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "add to wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "add to compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "quick view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " add to cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](344, "NEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Computer Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "C++ Programming :Beginners to Advanced");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, " $980.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "del", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "$990.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](358, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](359, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](365, "add to wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, "add to compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](373, "quick view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](376, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](377, " add to cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](382, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](384, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](385, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Google Advertisement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, " $480.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "del", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "$800.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](394, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](395, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](396, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](398, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "add to wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](407, "add to compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](409, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](411, "quick view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, " add to cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](419, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "Computer Science");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "h3", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Mastering Data Structures & Algorithms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "h4", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, " $880.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "del", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "$1990.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](430, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](433, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "add to wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](437, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "add to compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "quick view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](446, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, " add to cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mg-product",
                templateUrl: "./product.component.html",
                styleUrls: ["./product.component.scss"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }]; }, { quantityInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["quantity"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class RegisterComponent {
    // email: String;
    // password: String;
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.registerUserData = {
            name: "",
            contact: "",
            email: "",
            password: ""
        };
    }
    ngOnInit() {
    }
    registerUser() {
        this.authService.registerUser(this.registerUserData).subscribe(res => {
            console.log(res);
            localStorage.setItem('token', res.token);
            this.router.navigate(['/login']);
        }, err => console.log(err));
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 24, vars: 3, consts: [[1, "container"], [1, "row", "pt-5", "pb-5"], [1, "col-md-6", "mx-auto"], [1, "card"], [1, "card-header"], [1, "card-body", "mx-4"], [1, "form"], [1, "form-group", "mt-4"], ["for", ""], ["name", "name", "type", "text", "name", "name", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "email", "type", "email", "name", "email", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["name", "password", "type", "password", "name", "password", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "mt-4", "mb-3", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_12_listener($event) { return ctx.registerUserData.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_16_listener($event) { return ctx.registerUserData.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_20_listener($event) { return ctx.registerUserData.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_22_listener() { return ctx.registerUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registerUserData.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registerUserData.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.registerUserData.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/thankyou/thankyou.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/thankyou/thankyou.component.ts ***!
  \***********************************************************/
/*! exports provided: ThankyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouComponent", function() { return ThankyouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ThankyouComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const p_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", p_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r21.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, p_r21.price, "USD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r21.quantityOrdered);
} }
class ThankyouComponent {
    constructor(router, orderService) {
        this.router = router;
        this.orderService = orderService;
        const navigation = this.router.getCurrentNavigation();
        const state = navigation.extras.state;
        this.message = state.message;
        this.orderId = state.orderId;
        this.products = state.products;
        this.cartTotal = state.total;
        console.log(this.products);
    }
    ngOnInit() { }
}
ThankyouComponent.ɵfac = function ThankyouComponent_Factory(t) { return new (t || ThankyouComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"])); };
ThankyouComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThankyouComponent, selectors: [["mg-thankyou"]], decls: 37, vars: 6, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], [1, "jumbotron", "text-center"], [1, "display-3"], [1, "lead"], [1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "border-0"], [2, "border", "none"], ["width", "100px", 1, "img-thumbnail", 3, "src", "alt"]], template: function ThankyouComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Thank You!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please check your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " for order confirmation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Order Id : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ThankyouComponent_tr_28_Template, 10, 8, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.orderId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](36, 3, ctx.cartTotal, "USD"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGhhbmt5b3UvdGhhbmt5b3UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThankyouComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "mg-thankyou",
                templateUrl: "./thankyou.component.html",
                styleUrls: ["./thankyou.component.scss"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    // canActivate(
    //   route: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
    // }
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthService {
    constructor(http, rotuer) {
        this.http = http;
        this.rotuer = rotuer;
        this.registerUrl = "http://localhost:3000/users/register";
        this.loginUrl = "http://localhost:3000/users/login";
        this.token = localStorage.getItem('token');
        this.roleUser = this.getUser();
    }
    registerUser(user) {
        return this.http.post(this.registerUrl, user);
    }
    loginUser(user) {
        this.roleUser = this.getUser();
        return this.http.post(this.loginUrl, user);
    }
    logoutUser() {
        localStorage.removeItem('token');
        return this.rotuer.navigate(['/login']);
    }
    loggedIn() {
        return !!localStorage.getItem('token');
    }
    getToken() {
        return localStorage.getItem('token');
    }
    getUser() {
        let token = localStorage.getItem('token');
        if (token) {
            return JSON.parse(atob(token.split('.')[1]));
        }
        return null;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");










class CartService {
    constructor(productService, orderService, httpClient, router, spinner, toast) {
        this.productService = productService;
        this.orderService = orderService;
        this.httpClient = httpClient;
        this.router = router;
        this.spinner = spinner;
        this.toast = toast;
        this.ServerURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL;
        this.cartDataClient = { prodData: [{ incart: 0, id: 0 }], total: 0 }; // This will be sent to the backend Server as post data
        // Cart Data variable to store the cart information on the server
        this.cartDataServer = {
            data: [{
                    product: undefined,
                    numInCart: 0
                }],
            total: 0
        };
        this.cartTotal$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        // Data variable to store the cart information on the client's local storage
        this.cartDataObs$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.cartDataServer);
        this.cartTotal$.next(this.cartDataServer.total);
        this.cartDataObs$.next(this.cartDataServer);
        let info = JSON.parse(localStorage.getItem('cart'));
        if (info !== null && info !== undefined && info.prodData[0].incart !== 0) {
            // assign the value to our data variable which corresponds to the LocalStorage data format
            this.cartDataClient = info;
            // Loop through each entry and put it in the cartDataServer object
            this.cartDataClient.prodData.forEach(p => {
                this.productService.getSingleProduct(p.id).subscribe((actualProdInfo) => {
                    if (this.cartDataServer.data[0].numInCart === 0) {
                        this.cartDataServer.data[0].numInCart = p.incart;
                        this.cartDataServer.data[0].product = actualProdInfo;
                        this.CalculateTotal();
                        this.cartDataClient.total = this.cartDataServer.total;
                        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
                    }
                    else {
                        this.cartDataServer.data.push({
                            numInCart: p.incart,
                            product: actualProdInfo
                        });
                        this.CalculateTotal();
                        this.cartDataClient.total = this.cartDataServer.total;
                        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
                    }
                    this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
                });
            });
        }
    }
    CalculateSubTotal(index) {
        let subTotal = 0;
        let p = this.cartDataServer.data[index];
        // @ts-ignore
        subTotal = p.product.price * p.numInCart;
        return subTotal;
    }
    AddProductToCart(id, quantity) {
        this.productService.getSingleProduct(id).subscribe(prod => {
            // If the cart is empty
            if (this.cartDataServer.data[0].product === undefined) {
                this.cartDataServer.data[0].product = prod;
                this.cartDataServer.data[0].numInCart = quantity !== undefined ? quantity : 1;
                this.CalculateTotal();
                this.cartDataClient.prodData[0].incart = this.cartDataServer.data[0].numInCart;
                this.cartDataClient.prodData[0].id = prod.id;
                this.cartDataClient.total = this.cartDataServer.total;
                localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
                this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
                this.toast.success(`${prod.name} added to the cart.`, "Product Added", {
                    timeOut: 1500,
                    progressBar: true,
                    progressAnimation: 'increasing',
                    positionClass: 'toast-top-right'
                });
            } // END of IF
            // Cart is not empty
            else {
                let index = this.cartDataServer.data.findIndex(p => p.product.id === prod.id);
                // 1. If chosen product is already in cart array
                if (index !== -1) {
                    if (quantity !== undefined && quantity <= prod.quantity) {
                        // @ts-ignore
                        this.cartDataServer.data[index].numInCart = this.cartDataServer.data[index].numInCart < prod.quantity ? quantity : prod.quantity;
                    }
                    else {
                        // @ts-ignore
                        this.cartDataServer.data[index].numInCart < prod.quantity ? this.cartDataServer.data[index].numInCart++ : prod.quantity;
                    }
                    this.cartDataClient.prodData[index].incart = this.cartDataServer.data[index].numInCart;
                    this.toast.info(`${prod.name} quantity updated in the cart.`, "Product Updated", {
                        timeOut: 1500,
                        progressBar: true,
                        progressAnimation: 'increasing',
                        positionClass: 'toast-top-right'
                    });
                }
                // 2. If chosen product is not in cart array
                else {
                    this.cartDataServer.data.push({
                        product: prod,
                        numInCart: 1
                    });
                    this.cartDataClient.prodData.push({
                        incart: 1,
                        id: prod.id
                    });
                    this.toast.success(`${prod.name} added to the cart.`, "Product Added", {
                        timeOut: 1500,
                        progressBar: true,
                        progressAnimation: 'increasing',
                        positionClass: 'toast-top-right'
                    });
                }
                this.CalculateTotal();
                this.cartDataClient.total = this.cartDataServer.total;
                localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
                this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
            } // END of ELSE
        });
    }
    UpdateCartData(index, increase) {
        let data = this.cartDataServer.data[index];
        if (increase) {
            // @ts-ignore
            data.numInCart < data.product.quantity ? data.numInCart++ : data.product.quantity;
            this.cartDataClient.prodData[index].incart = data.numInCart;
            this.CalculateTotal();
            this.cartDataClient.total = this.cartDataServer.total;
            this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
            localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
        }
        else {
            // @ts-ignore
            data.numInCart--;
            // @ts-ignore
            if (data.numInCart < 1) {
                this.DeleteProductFromCart(index);
                this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
            }
            else {
                // @ts-ignore
                this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
                this.cartDataClient.prodData[index].incart = data.numInCart;
                this.CalculateTotal();
                this.cartDataClient.total = this.cartDataServer.total;
                localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
            }
        }
    }
    DeleteProductFromCart(index) {
        /*    console.log(this.cartDataClient.prodData[index].prodId);
            console.log(this.cartDataServer.data[index].product.id);*/
        if (window.confirm('Are you sure you want to delete the item?')) {
            this.cartDataServer.data.splice(index, 1);
            this.cartDataClient.prodData.splice(index, 1);
            this.CalculateTotal();
            this.cartDataClient.total = this.cartDataServer.total;
            if (this.cartDataClient.total === 0) {
                this.cartDataClient = { prodData: [{ incart: 0, id: 0 }], total: 0 };
                localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
            }
            else {
                localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
            }
            if (this.cartDataServer.total === 0) {
                this.cartDataServer = {
                    data: [{
                            product: undefined,
                            numInCart: 0
                        }],
                    total: 0
                };
                this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
            }
            else {
                this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
            }
        }
        // If the user doesn't want to delete the product, hits the CANCEL button
        else {
            return;
        }
    }
    CheckoutFromCart(userId) {
        this.httpClient.post(`${this.ServerURL}orders/payment`, null).subscribe((res) => {
            console.clear();
            if (res.success) {
                this.resetServerData();
                this.httpClient.post(`${this.ServerURL}orders/new`, {
                    userId: userId,
                    products: this.cartDataClient.prodData
                }).subscribe((data) => {
                    this.orderService.getSingleOrder(data.order_id).then(prods => {
                        if (data.success) {
                            const navigationExtras = {
                                state: {
                                    message: data.message,
                                    products: prods,
                                    orderId: data.order_id,
                                    total: this.cartDataClient.total
                                }
                            };
                            this.spinner.hide().then();
                            this.router.navigate(['/thankyou'], navigationExtras).then(p => {
                                this.cartDataClient = { prodData: [{ incart: 0, id: 0 }], total: 0 };
                                this.cartTotal$.next(0);
                                localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
                            });
                        }
                    });
                });
            }
            else {
                this.spinner.hide().then();
                this.router.navigateByUrl('/checkout').then();
                this.toast.error(`Sorry, failed to book the order`, "Order Status", {
                    timeOut: 1500,
                    progressBar: true,
                    progressAnimation: 'increasing',
                    positionClass: 'toast-top-right'
                });
            }
        });
    }
    CalculateTotal() {
        let Total = 0;
        this.cartDataServer.data.forEach(p => {
            const { numInCart } = p;
            const { price } = p.product;
            // @ts-ignore
            Total += numInCart * price;
        });
        this.cartDataServer.total = Total;
        this.cartTotal$.next(this.cartDataServer.total);
    }
    resetServerData() {
        this.cartDataServer = {
            data: [{
                    product: undefined,
                    numInCart: 0
                }],
            total: 0
        };
        this.cartDataObs$.next(Object.assign({}, this.cartDataServer));
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class OrderService {
    constructor(http) {
        this.http = http;
        this.products = [];
        this.ServerURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
    }
    getSingleOrder(orderId) {
        return this.http
            .get(`${this.ServerURL}orders/${orderId}`)
            .toPromise();
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ProductService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
    }
    getAllProducts(limitOfResults = 10) {
        return this.http.get(this.url + "products", {
            params: {
                limit: limitOfResults.toString(),
            },
        });
    }
    getSingleProduct(id) {
        return this.http.get(this.url + "products/" + id);
    }
    getProductsFromCategory(catName) {
        return this.http.get(this.url + "products/category/" + catName);
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    serverURL: "http://localhost:3636/api/",
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\PROGRAM\ANGULAR 10\Learning-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map