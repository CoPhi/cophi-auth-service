"use strict";
(self["webpackChunkcophi_ui"] = self["webpackChunkcophi_ui"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ 583);
/* harmony import */ var _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/test-page/test-page.component */ 2313);
/* harmony import */ var _pages_working_unit_working_unit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/working-unit/working-unit.component */ 1079);
/* harmony import */ var _pages_working_units_working_units_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/working-units/working-units.component */ 8765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    { path: 'login', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__.LoginPageComponent },
    { path: 'working-units', component: _pages_working_units_working_units_component__WEBPACK_IMPORTED_MODULE_3__.WorkingUnitsComponent },
    { path: 'working-unit/:id', component: _pages_working_unit_working_unit_component__WEBPACK_IMPORTED_MODULE_2__.WorkingUnitComponent },
    { path: 'test', component: _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_1__.TestPageComponent },
    { path: '**', component: _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_1__.TestPageComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8130);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_mock_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/mock-data.service */ 9016);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);





class AppComponent {
    constructor(mockDB) {
        this.mockDB = mockDB;
        this.title = 'cophi-ui';
        this.treeItems = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.mockDB.rootElements()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((x) => x.map(({ id, label, children }) => ({ id, label, children }))));
        this.treeProvider = {
            getItem: (id) => {
                const di = this.mockDB.item(id);
                if (di === undefined) {
                    return rxjs__WEBPACK_IMPORTED_MODULE_3__.NEVER;
                }
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({ label: di.label, children: di.children });
            }
        };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_mock_data_service__WEBPACK_IMPORTED_MODULE_0__.MockDataService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: block;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFvQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICogIENvcGhpRWRpdG9yIFVJOiBhIGNvbGxhYm9yYXRpdmUgRFNMLWJhc2VkIHdlYiBwbGF0Zm9ybSBmb3IgdGhlIGNyZWF0aW9uIG9mIHBhcHlyb2xvZ2ljYWwgY3JpdGljYWwgZWRpdGlvbnNcbiAqICBDb3B5cmlnaHQgKEMpIDIwMjEgU2ltb25lIFplbnphcm8sIElMQy1DTlJcbiAqICBcbiAqICBUaGlzIGxpYnJhcnkgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiAgbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpY1xuICogIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlclxuICogIHZlcnNpb24gMi4xIG9mIHRoZSBMaWNlbnNlLCBvciBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqICBcbiAqICBUaGlzIGxpYnJhcnkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiAgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqICBcbiAqICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljXG4gKiAgTGljZW5zZSBhbG9uZyB3aXRoIHRoaXMgbGlicmFyeTsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZVxuICogIEZvdW5kYXRpb24sIEluYy4sIDUxIEZyYW5rbGluIFN0cmVldCwgRmlmdGggRmxvb3IsIEJvc3RvbiwgTUEgIDAyMTEwLTEzMDFcbiAqICBVU0FcbiAqL1xuXG46aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _components_golden_layout_golden_layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/golden-layout/golden-layout.service */ 5256);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/editor/editor.component */ 1861);
/* harmony import */ var _components_osd_osd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/osd/osd.component */ 694);
/* harmony import */ var _components_golden_layout_golden_layout_host_golden_layout_host_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/golden-layout/golden-layout-host/golden-layout-host.component */ 2030);
/* harmony import */ var _components_monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/monaco-editor/monaco-editor.component */ 5761);
/* harmony import */ var _components_tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tree-view/tree-view.component */ 6035);
/* harmony import */ var _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/layout/layout.component */ 7703);
/* harmony import */ var _components_offcanvas_offcanvas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/offcanvas/offcanvas.component */ 5664);
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ 583);
/* harmony import */ var _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/test-page/test-page.component */ 2313);
/* harmony import */ var _pages_working_units_working_units_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/working-units/working-units.component */ 8765);
/* harmony import */ var _pages_working_unit_working_unit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/working-unit/working-unit.component */ 1079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [
        _components_golden_layout_golden_layout_service__WEBPACK_IMPORTED_MODULE_1__.GoldenLayoutService,
    ], imports: [[
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _components_editor_editor_component__WEBPACK_IMPORTED_MODULE_3__.EditorComponent,
        _components_golden_layout_golden_layout_host_golden_layout_host_component__WEBPACK_IMPORTED_MODULE_5__.GoldenLayoutHostComponent,
        _components_osd_osd_component__WEBPACK_IMPORTED_MODULE_4__.OsdComponent,
        _components_monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_6__.MonacoEditorComponent,
        _components_tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_7__.TreeViewComponent,
        _pages_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__.LayoutComponent,
        _components_offcanvas_offcanvas_component__WEBPACK_IMPORTED_MODULE_9__.OffcanvasComponent,
        _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_10__.LoginPageComponent,
        _pages_test_page_test_page_component__WEBPACK_IMPORTED_MODULE_11__.TestPageComponent,
        _pages_working_units_working_units_component__WEBPACK_IMPORTED_MODULE_12__.WorkingUnitsComponent,
        _pages_working_unit_working_unit_component__WEBPACK_IMPORTED_MODULE_13__.WorkingUnitComponent], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule] }); })();


/***/ }),

/***/ 1861:
/*!*******************************************************!*\
  !*** ./src/app/components/editor/editor.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorComponent": () => (/* binding */ EditorComponent)
/* harmony export */ });
/* harmony import */ var _golden_layout_base_component_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../golden-layout/base-component.directive */ 5700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../monaco-editor/monaco-editor.component */ 5761);




class EditorComponent extends _golden_layout_base_component_directive__WEBPACK_IMPORTED_MODULE_0__.BaseComponentDirective {
    constructor(container, elRef) {
        super(elRef.nativeElement);
        this.container = container;
        this.editorOptions = {
            theme: 'vs-dark',
            language: 'javascript',
            minimap: { enabled: false },
        }; // TODO: remove this example options with a default
        this.code = 'function x() {\nconsole.log("Hello world!");\n}'; // TODO: remove me
    }
    f(e) {
        this.editorHandle = e;
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_golden_layout_base_component_directive__WEBPACK_IMPORTED_MODULE_0__.BaseComponentDirective.GoldenLayoutContainerInjectionToken), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
EditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 0, template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-monaco-editor");
    } }, directives: [_monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_1__.MonacoEditorComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUEiLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXG4gKiAgQ29waGlFZGl0b3IgVUk6IGEgY29sbGFib3JhdGl2ZSBEU0wtYmFzZWQgd2ViIHBsYXRmb3JtIGZvciB0aGUgY3JlYXRpb24gb2YgcGFweXJvbG9naWNhbCBjcml0aWNhbCBlZGl0aW9uc1xuICogIENvcHlyaWdodCAoQykgMjAyMSBTaW1vbmUgWmVuemFybywgSUxDLUNOUlxuICogIFxuICogIFRoaXMgbGlicmFyeSBpcyBmcmVlIHNvZnR3YXJlOyB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3JcbiAqICBtb2RpZnkgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljXG4gKiAgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnkgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbjsgZWl0aGVyXG4gKiAgdmVyc2lvbiAyLjEgb2YgdGhlIExpY2Vuc2UsIG9yIGFueSBsYXRlciB2ZXJzaW9uLlxuICogIFxuICogIFRoaXMgbGlicmFyeSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiAgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZSBHTlVcbiAqICBMZXNzZXIgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICogIFxuICogIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWNcbiAqICBMaWNlbnNlIGFsb25nIHdpdGggdGhpcyBsaWJyYXJ5OyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlXG4gKiAgRm91bmRhdGlvbiwgSW5jLiwgNTEgRnJhbmtsaW4gU3RyZWV0LCBGaWZ0aCBGbG9vciwgQm9zdG9uLCBNQSAgMDIxMTAtMTMwMVxuICogIFVTQVxuICovXG5cbiJdfQ== */"] });


/***/ }),

/***/ 5700:
/*!**********************************************************************!*\
  !*** ./src/app/components/golden-layout/base-component.directive.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponentDirective": () => (/* binding */ BaseComponentDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/*
 *  CophiEditor UI: a collaborative DSL-based web platform for the creation of papyrological critical editions
 *  Copyright (C) 2021 Simone Zenzaro, ILC-CNR
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2.1 of the License, or any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301
 *  USA
 */


class BaseComponentDirective {
    constructor(rootHtmlElement) {
        this.rootHtmlElement = rootHtmlElement;
    }
    setPositionAndSize(left, top, width, height) {
        this.rootHtmlElement.style.left = this.numberToPixels(left);
        this.rootHtmlElement.style.top = this.numberToPixels(top);
        this.rootHtmlElement.style.width = this.numberToPixels(width);
        this.rootHtmlElement.style.height = this.numberToPixels(height);
    }
    setVisibility(visible) {
        if (visible) {
            this.rootHtmlElement.style.display = '';
        }
        else {
            this.rootHtmlElement.style.display = 'none';
        }
    }
    setZIndex(value) {
        this.rootHtmlElement.style.zIndex = value;
    }
    numberToPixels(value) {
        return value.toString(10) + 'px';
    }
}
BaseComponentDirective.ɵfac = function BaseComponentDirective_Factory(t) { return new (t || BaseComponentDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](HTMLElement)); };
BaseComponentDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BaseComponentDirective });
(function (BaseComponentDirective) {
    const GoldenLayoutContainerTokenName = 'GoldenLayoutContainer';
    BaseComponentDirective.GoldenLayoutContainerInjectionToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken(GoldenLayoutContainerTokenName);
})(BaseComponentDirective || (BaseComponentDirective = {}));


/***/ }),

/***/ 2030:
/*!*********************************************************************************************!*\
  !*** ./src/app/components/golden-layout/golden-layout-host/golden-layout-host.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoldenLayoutHostComponent": () => (/* binding */ GoldenLayoutHostComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! golden-layout */ 3869);
/* harmony import */ var golden_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! golden-layout */ 237);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../editor/editor.component */ 1861);
/* harmony import */ var _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../monaco-editor/monaco-editor.component */ 5761);
/* harmony import */ var _osd_osd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../osd/osd.component */ 694);
/* harmony import */ var _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../test-component/test-component.component */ 6319);
/* harmony import */ var _golden_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../golden-layout.service */ 5256);
/*
 *  CophiEditor UI: a collaborative DSL-based web platform for the creation of papyrological critical editions
 *  Copyright (C) 2021 Simone Zenzaro, ILC-CNR
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2.1 of the License, or any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301
 *  USA
 */










const _c0 = ["componentViewContainer"];
function GoldenLayoutHostComponent_ng_template_0_Template(rf, ctx) { }
class GoldenLayoutHostComponent {
    constructor(_appRef, _elRef, goldenLayoutComponentService) {
        this._appRef = _appRef;
        this._elRef = _elRef;
        this.goldenLayoutComponentService = goldenLayoutComponentService;
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this._componentRefMap = new Map();
        this._goldenLayoutBoundingClientRect = new DOMRect();
        this._goldenLayoutBindComponentEventListener = (container, itemConfig) => this.handleBindComponentEvent(container, itemConfig);
        this._goldenLayoutUnbindComponentEventListener = (container) => this.handleUnbindComponentEvent(container);
        this._windowResizeListener = () => this.handleWindowResizeEvent();
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.saveLayout$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.loadLayout$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.addComponent$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject(); // component name, params
        this.saveLayoutCmd = this.saveLayout$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.saveLayout()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy));
        this.loadLayoutCmd = this.loadLayout$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.loadLayout()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy));
        this.addComponentCmd = this.addComponent$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((x) => console.log(x)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(([name, params]) => this.add(name, params)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy));
        this._goldenLayoutElement = this._elRef.nativeElement;
        this.goldenLayoutComponentService.registerComponentType(_osd_osd_component__WEBPACK_IMPORTED_MODULE_2__.OsdComponent.name, _osd_osd_component__WEBPACK_IMPORTED_MODULE_2__.OsdComponent);
        this.goldenLayoutComponentService.registerComponentType(_test_component_test_component_component__WEBPACK_IMPORTED_MODULE_3__.TestComponentComponent.name, _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_3__.TestComponentComponent);
        this.goldenLayoutComponentService.registerComponentType(_monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_1__.MonacoEditorComponent.name, _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_1__.MonacoEditorComponent);
        this.goldenLayoutComponentService.registerComponentType(_editor_editor_component__WEBPACK_IMPORTED_MODULE_0__.EditorComponent.name, _editor_editor_component__WEBPACK_IMPORTED_MODULE_0__.EditorComponent);
        this.saveLayoutCmd.subscribe();
        this.loadLayoutCmd.subscribe();
        this.addComponentCmd.subscribe((x) => console.log('add', x));
    }
    get goldenLayout() { return this._goldenLayout; }
    get isGoldenLayoutSubWindow() { return this._goldenLayout.isSubWindow; }
    ngAfterViewInit() {
        setTimeout(() => {
            this.initialise();
            globalThis.addEventListener('resize', this._windowResizeListener);
            this.add(_monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_1__.MonacoEditorComponent.name, { lang: 'gs-lit', title: 'GSLIT', code: 'LIT' });
            this.add(_monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_1__.MonacoEditorComponent.name, { lang: 'CustomLang', title: 'My Title 1', code: 'Custom 1' });
            this.add(_monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_1__.MonacoEditorComponent.name, { lang: 'ppp', title: 'My Title 2', code: 'PPP 1' });
            // this.add(MonacoEditorComponent.name, { lang: 'CustomLang', title: 'My Title 3', code: 'Custom 2' });
            // this.add(MonacoEditorComponent.name, { lang: 'CustomLang', title: 'My Title 4', code: 'Custom 3' });
            setTimeout(() => this.resizeGoldenLayout(), 3000);
            this._goldenLayout.emit('resize');
            this.ready.next(this);
        }, 0);
    }
    saveLayout() {
        const rlc = this._goldenLayout.saveLayout();
        const lc = golden_layout__WEBPACK_IMPORTED_MODULE_9__.LayoutConfig.fromResolved(rlc);
        localStorage.setItem('glc', JSON.stringify(lc));
    }
    loadLayout() {
        const lc = JSON.parse(localStorage.getItem('glc') || '');
        this._goldenLayout.loadLayout(lc);
    }
    ngOnDestroy() {
        globalThis.removeEventListener('resize', this._windowResizeListener);
        this._goldenLayout.destroy();
    }
    handleWindowResizeEvent() { this.resizeGoldenLayout(); }
    resizeGoldenLayout() {
        var _a;
        const { offsetWidth, offsetHeight } = (_a = this._elRef.nativeElement.parentElement) !== null && _a !== void 0 ? _a : { offsetHeight: 0, offsetWidth: 0 };
        this.setSize(offsetWidth, offsetHeight);
    }
    clear() {
        this._goldenLayout.clear();
    }
    add(componentName, params) {
        const goldenLayoutComponent = this._goldenLayout.newComponent(componentName, undefined, params.title); // do not set state here
        const componentRef = this.getComponentRef(goldenLayoutComponent.container);
        if (componentRef === undefined) {
            throw new Error('Unexpected error getting ComponentRef');
        }
        if (componentName === _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_1__.MonacoEditorComponent.name) { // TODO refactor this list of ifs
            const c = componentRef.instance;
            c.lang = params.lang;
            c.title = params.title;
            c.code = params.code;
        }
        if (componentName === _osd_osd_component__WEBPACK_IMPORTED_MODULE_2__.OsdComponent.name) {
            const c = componentRef.instance;
            c.manifestURL = params.manifestURL; //'https://www.e-codices.unifr.ch/metadata/iiif/ubb-M-I-0018/manifest.json';
        }
        this.resizeGoldenLayout();
        return componentRef;
    }
    initialise() {
        this._goldenLayout = new golden_layout__WEBPACK_IMPORTED_MODULE_10__.GoldenLayout(this._goldenLayoutElement, this._goldenLayoutBindComponentEventListener, this._goldenLayoutUnbindComponentEventListener);
        this._goldenLayout.beforeVirtualRectingEvent = (count) => this.handleBeforeVirtualRectingEvent(count);
        if (this._goldenLayout.isSubWindow) {
            this._goldenLayout.checkAddDefaultPopinButton();
        }
    }
    setSize(width, height) {
        this._goldenLayout.setSize(width, height);
    }
    getComponentRef(container) {
        return this._componentRefMap.get(container);
    }
    handleBindComponentEvent(container, itemConfig) {
        const componentType = itemConfig.componentType;
        const componentRef = this.goldenLayoutComponentService.createComponent(componentType, container);
        const component = componentRef.instance;
        // TODO: manage state recovery after moving component
        // const c = componentRef.instance as OsdComponent;
        // c.manifestURL = 'https://www.e-codices.unifr.ch/metadata/iiif/bge-gr0044/manifest.json'
        this._componentRefMap.set(container, componentRef);
        container.virtualRectingRequiredEvent = (container, width, height) => this.handleContainerVirtualRectingRequiredEvent(container, width, height);
        container.virtualVisibilityChangeRequiredEvent = (container, visible) => this.handleContainerVisibilityChangeRequiredEvent(container, visible);
        container.virtualZIndexChangeRequiredEvent = (container, logicalZIndex, defaultZIndex) => this.handleContainerVirtualZIndexChangeRequiredEvent(container, logicalZIndex, defaultZIndex);
        this._appRef.attachView(componentRef.hostView);
        const componentRootElement = component.rootHtmlElement;
        this._goldenLayoutElement.appendChild(componentRootElement);
        return {
            component,
            virtual: true,
        };
    }
    handleUnbindComponentEvent(container) {
        const componentRef = this._componentRefMap.get(container);
        if (componentRef === undefined) {
            throw new Error('Could not unbind component. Container not found');
        }
        this._componentRefMap.delete(container);
        const hostView = componentRef.hostView;
        const component = componentRef.instance;
        const componentRootElement = component.rootHtmlElement;
        this._goldenLayoutElement.removeChild(componentRootElement);
        this._appRef.detachView(hostView);
        componentRef.destroy();
    }
    handleBeforeVirtualRectingEvent(count) {
        this._goldenLayoutBoundingClientRect = this._goldenLayoutElement.getBoundingClientRect();
    }
    handleContainerVirtualRectingRequiredEvent(container, width, height) {
        const containerBoundingClientRect = container.element.getBoundingClientRect();
        const left = containerBoundingClientRect.left - this._goldenLayoutBoundingClientRect.left;
        const top = containerBoundingClientRect.top - this._goldenLayoutBoundingClientRect.top;
        const componentRef = this._componentRefMap.get(container);
        if (componentRef === undefined) {
            throw new Error('handleContainerVirtualRectingRequiredEvent: ComponentRef not found');
        }
        const component = componentRef.instance;
        component.setPositionAndSize(left, top, width, height);
    }
    handleContainerVisibilityChangeRequiredEvent(container, visible) {
        const componentRef = this._componentRefMap.get(container);
        if (componentRef === undefined) {
            throw new Error('handleContainerVisibilityChangeRequiredEvent: ComponentRef not found');
        }
        const component = componentRef.instance;
        component.setVisibility(visible);
    }
    handleContainerVirtualZIndexChangeRequiredEvent(container, logicalZIndex, defaultZIndex) {
        const componentRef = this._componentRefMap.get(container);
        if (componentRef === undefined) {
            throw new Error('handleContainerVirtualZIndexChangeRequiredEvent: ComponentRef not found');
        }
        const component = componentRef.instance;
        component.setZIndex(defaultZIndex);
    }
}
GoldenLayoutHostComponent.ɵfac = function GoldenLayoutHostComponent_Factory(t) { return new (t || GoldenLayoutHostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_golden_layout_service__WEBPACK_IMPORTED_MODULE_4__.GoldenLayoutService)); };
GoldenLayoutHostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: GoldenLayoutHostComponent, selectors: [["app-golden-layout-host"]], viewQuery: function GoldenLayoutHostComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._componentViewContainerRef = _t.first);
    } }, outputs: { ready: "ready" }, decls: 2, vars: 0, consts: [["componentViewContainer", ""]], template: function GoldenLayoutHostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, GoldenLayoutHostComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } }, styles: ["[_nghost-%COMP%] {\n  padding: 0;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvbGRlbi1sYXlvdXQtaG9zdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFvQkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFBRiIsImZpbGUiOiJnb2xkZW4tbGF5b3V0LWhvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAqICBDb3BoaUVkaXRvciBVSTogYSBjb2xsYWJvcmF0aXZlIERTTC1iYXNlZCB3ZWIgcGxhdGZvcm0gZm9yIHRoZSBjcmVhdGlvbiBvZiBwYXB5cm9sb2dpY2FsIGNyaXRpY2FsIGVkaXRpb25zXG4gKiAgQ29weXJpZ2h0IChDKSAyMDIxIFNpbW9uZSBaZW56YXJvLCBJTEMtQ05SXG4gKiAgXG4gKiAgVGhpcyBsaWJyYXJ5IGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWNcbiAqICBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXJcbiAqICB2ZXJzaW9uIDIuMSBvZiB0aGUgTGljZW5zZSwgb3IgYW55IGxhdGVyIHZlcnNpb24uXG4gKiAgXG4gKiAgVGhpcyBsaWJyYXJ5IGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiAgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqICBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKiAgXG4gKiAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpY1xuICogIExpY2Vuc2UgYWxvbmcgd2l0aCB0aGlzIGxpYnJhcnk7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmVcbiAqICBGb3VuZGF0aW9uLCBJbmMuLCA1MSBGcmFua2xpbiBTdHJlZXQsIEZpZnRoIEZsb29yLCBCb3N0b24sIE1BICAwMjExMC0xMzAxXG4gKiAgVVNBXG4gKi9cblxuOmhvc3Qge1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 5256:
/*!*******************************************************************!*\
  !*** ./src/app/components/golden-layout/golden-layout.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoldenLayoutService": () => (/* binding */ GoldenLayoutService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor/editor.component */ 1861);
/* harmony import */ var _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../monaco-editor/monaco-editor.component */ 5761);
/* harmony import */ var _osd_osd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../osd/osd.component */ 694);
/* harmony import */ var _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test-component/test-component.component */ 6319);
/* harmony import */ var _base_component_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-component.directive */ 5700);
/*
 *  CophiEditor UI: a collaborative DSL-based web platform for the creation of papyrological critical editions
 *  Copyright (C) 2021 Simone Zenzaro, ILC-CNR
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2.1 of the License, or any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301
 *  USA
 */







class GoldenLayoutService {
    constructor(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this._componentTypeMap = new Map();
        this.availableComponents = [
            _osd_osd_component__WEBPACK_IMPORTED_MODULE_2__.OsdComponent,
            _test_component_test_component_component__WEBPACK_IMPORTED_MODULE_3__.TestComponentComponent,
            _monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_1__.MonacoEditorComponent,
            _editor_editor_component__WEBPACK_IMPORTED_MODULE_0__.EditorComponent,
        ];
        this.availableComponents.forEach((c) => this.registerComponentType(c.name, c));
    }
    registerComponentType(name, componentType) {
        this._componentTypeMap.set(name, componentType);
    }
    getRegisteredComponentTypeNames() {
        const count = this._componentTypeMap.size;
        const result = new Array(count);
        let idx = 0;
        for (let [key, value] of this._componentTypeMap) {
            result[idx++] = key;
        }
        return result;
    }
    createComponent(componentTypeJsonValue, container) {
        const componentType = this._componentTypeMap.get(componentTypeJsonValue);
        if (componentType === undefined) {
            throw new Error('Unknown component type');
        }
        else {
            const provider = { provide: _base_component_directive__WEBPACK_IMPORTED_MODULE_4__.BaseComponentDirective.GoldenLayoutContainerInjectionToken, useValue: container };
            const injector = _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector.create({
                providers: [provider]
            });
            const componentFactoryRef = this.componentFactoryResolver.resolveComponentFactory(componentType);
            return componentFactoryRef.create(injector);
        }
    }
}
GoldenLayoutService.ɵfac = function GoldenLayoutService_Factory(t) { return new (t || GoldenLayoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ComponentFactoryResolver)); };
GoldenLayoutService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: GoldenLayoutService, factory: GoldenLayoutService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6440:
/*!*******************************************************************!*\
  !*** ./src/app/components/monaco-editor/editor-config.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditorConfigService": () => (/* binding */ EditorConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/// <reference path="../../../../node_modules/monaco-editor/monaco.d.ts" />

class EditorConfigService {
    constructor() { }
    // get monaco.languages.ILanguageExtensionPoint Object for 'CustomLang' Lanaguage
    getCustomLangExtensionPoint() {
        const newLanguage = {
            id: 'CustomLang'
        };
        return newLanguage;
    }
    // get IMonarchTokenProvider object for 'CustomLang' Language
    // This object defines the rules for syntax highlighting
    getCustomLangTokenProviders() {
        return {
            // Set defaultToken to invalid to see what you do not tokenize yet
            // defaultToken: 'invalid',
            keywords: [
                'abstract', 'continue', 'for', 'new', 'switch', 'assert', 'goto', 'do',
                'if', 'private', 'this', 'break', 'protected', 'throw', 'else', 'public',
                'enum', 'return', 'catch', 'try', 'interface', 'static', 'class',
                'finally', 'const', 'super', 'while', 'true', 'false'
            ],
            typeKeywords: [
                'boolean', 'double', 'byte', 'int', 'short', 'char', 'void', 'long', 'float'
            ],
            operators: [
                '=', '>', '<', '!', '~', '?', ':', '==', '<=', '>=', '!=',
                '&&', '||', '++', '--', '+', '-', '*', '/', '&', '|', '^', '%',
                '<<', '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=', '^=',
                '%=', '<<=', '>>=', '>>>='
            ],
            // we include these common regular expressions
            symbols: /[=><!~?:&|+\-*\/\^%]+/,
            // C# style strings
            escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
            // The main tokenizer for our languages
            tokenizer: {
                root: [
                    // identifiers and keywords
                    [/[a-z_$][\w$]*/, {
                            cases: {
                                '@typeKeywords': 'keyword',
                                '@keywords': 'keyword',
                                '@default': 'identifier'
                            }
                        }],
                    [/[A-Z][\w\$]*/, 'type.identifier'],
                    // whitespace
                    { include: '@whitespace' },
                    // delimiters and operators
                    [/[{}()\[\]]/, '@brackets'],
                    [/[<>](?!@symbols)/, '@brackets'],
                    [/@symbols/, {
                            cases: {
                                '@operators': 'operator',
                                '@default': ''
                            }
                        }],
                    // @ annotations.
                    // As an example, we emit a debugging log message on these tokens.
                    // Note: message are supressed during the first load -- change some lines to see them.
                    [/@\s*[a-zA-Z_\$][\w\$]*/, { token: 'annotation', log: 'annotation token: $0' }],
                    // numbers
                    [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
                    [/0[xX][0-9a-fA-F]+/, 'number.hex'],
                    [/\d+/, 'number'],
                    // delimiter: after number because of .\d floats
                    [/[;,.]/, 'delimiter'],
                    // strings
                    [/"([^"\\]|\\.)*$/, 'string.invalid'],
                    [/"/, { token: 'string.quote', bracket: '@open', next: '@string' }],
                    // characters
                    [/'[^\\']'/, 'string'],
                    [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
                    [/'/, 'string.invalid']
                ],
                comment: [
                    [/[^\/*]+/, 'comment'],
                    [/\/\*/, 'comment', '@push'],
                    ['\\*/', 'comment', '@pop'],
                    [/[\/*]/, 'comment']
                ],
                string: [
                    [/[^\\"]+/, 'string'],
                    [/@escapes/, 'string.escape'],
                    [/\\./, 'string.escape.invalid'],
                    [/"/, { token: 'string.quote', bracket: '@close', next: '@pop' }]
                ],
                whitespace: [
                    [/[ \t\r\n]+/, 'white'],
                    [/\/\*/, 'comment', '@comment'],
                    [/\/\/.*$/, 'comment'],
                ],
            },
        };
    }
    // get the Color coding theme object for CustomLang language
    getCustomLangTheme() {
        return {
            base: 'vs',
            inherit: false,
            rules: [
                { token: 'comment', foreground: '3f7f5f' },
                { token: 'string', foreground: '2A00FF' },
                { token: 'keyword', foreground: '7F0055' },
                { token: 'STATEMENTS', foreground: '7F0055' },
                { token: 'CONSTANTS', foreground: '7F0055' },
                { token: 'TYPES', foreground: 'cd3a3a' },
                { token: 'operator', foreground: '000000' },
                { token: 'identifier', foreground: '000000' },
                { token: '@brackets', foreground: '000000' },
                { token: 'annotation', foreground: 'B22222' },
            ],
            colors: {}
        };
    }
}
EditorConfigService.ɵfac = function EditorConfigService_Factory(t) { return new (t || EditorConfigService)(); };
EditorConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EditorConfigService, factory: EditorConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5761:
/*!*********************************************************************!*\
  !*** ./src/app/components/monaco-editor/monaco-editor.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonacoEditorComponent": () => (/* binding */ MonacoEditorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var src_app_services_languages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/languages.service */ 3340);
/* harmony import */ var _golden_layout_base_component_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../golden-layout/base-component.directive */ 5700);
/* harmony import */ var _editor_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor-config.service */ 6440);
/// <reference path="../../../../node_modules/monaco-editor/monaco.d.ts" />
/*
 *  CophiEditor UI: a collaborative DSL-based web platform for the creation of papyrological critical editions
 *  Copyright (C) 2021 Simone Zenzaro, ILC-CNR
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2.1 of the License, or any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301
 *  USA
 */
/// <reference path="../../../../node_modules/monaco-editor/monaco.d.ts" />









const _c0 = ["editorContainer"];
let loadedMonaco = false;
let loadPromise;
class MonacoEditorComponent extends _golden_layout_base_component_directive__WEBPACK_IMPORTED_MODULE_1__.BaseComponentDirective {
    constructor(el, langService) {
        super(el.nativeElement);
        this.el = el;
        this.langService = langService;
        this.title = 'Monaco Editor';
        this.options = {};
        this.codeChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('');
        this.lang = 'gs-lit';
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.ERROR_CHECK_DELAY = 1000; // the delay to wait after editor text has changed befoare updating errors
        this.editorModelChange = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.errors = this.editorModelChange.pipe(// TODO simplify
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(this.ERROR_CHECK_DELAY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(({ model, lang }) => lang.errorProvider(model).then((errors) => ({ model, lang, errors }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy));
        this.checkChoerence = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.warningsInput = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
        this.warnings = this.warningsInput.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((x) => x.map(({ message, range: { start, end } }) => ({
            code: 'test',
            startLineNumber: start.line,
            startColumn: start.column,
            endLineNumber: end.line,
            endColumn: end.column,
            message,
            severity: monaco.MarkerSeverity.Warning,
        }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)([]), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy)); // TODO
        this.errorsInfo = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.combineLatest)([this.warnings, this.errors]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(([warns, { errors, lang, model }]) => ({ lang, model, errors: [...errors, ...warns] })));
        this.editorModelChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy)).subscribe((m) => this.code = m.model.getValue());
        this.errorsInfo.subscribe(({ errors }) => {
            var _a;
            const model = (_a = this.editor) === null || _a === void 0 ? void 0 : _a.getModel();
            if (!!model) {
                monaco.editor.setModelMarkers(model, this.lang, errors);
            }
        });
        this.warnings.subscribe((warns) => {
            var _a;
            const model = (_a = this.editor) === null || _a === void 0 ? void 0 : _a.getModel();
            if (!!model) {
                monaco.editor.setModelMarkers(model, this.lang, warns);
            }
        }); //TODO: remove me
    }
    set code(v) { this.codeChange.next(v); }
    get code() { return this.codeChange.value; }
    ngOnChanges() {
        if (this.editor) {
            this.editor.setValue(this.code);
        }
    }
    ngAfterViewInit() {
        if (loadedMonaco) {
            // Wait until monaco editor is available
            loadPromise.then(() => {
                this.initMonaco();
            });
        }
        else {
            loadedMonaco = true;
            loadPromise = new Promise((resolve) => {
                if (typeof (window.monaco) === 'object') {
                    resolve();
                    return;
                }
                const onAmdLoader = () => {
                    // Load monaco
                    window.require.config({ paths: { 'vs': 'assets/monaco/min/vs' } });
                    window.require(['vs/editor/editor.main'], () => {
                        this.initMonaco();
                        resolve();
                    });
                };
                // Load AMD loader if necessary
                if (!window.require) {
                    const loaderScript = document.createElement('script');
                    loaderScript.type = 'text/javascript';
                    loaderScript.src = 'assets/monaco/min/vs/loader.js';
                    loaderScript.addEventListener('load', onAmdLoader);
                    document.body.appendChild(loaderScript);
                }
                else {
                    onAmdLoader();
                }
            });
        }
    }
    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
        // if (this.editor !== undefined) {
        //   this.editor.dispose();
        // }
    }
    initMonaco(options = {}) {
        console.log("LANG", this.lang, "LL", src_app_services_languages_service__WEBPACK_IMPORTED_MODULE_0__.langData[this.lang]);
        this.langService.registerLanguage(src_app_services_languages_service__WEBPACK_IMPORTED_MODULE_0__.langData[this.lang], this.editorModelChange);
        this.editor = monaco.editor.create(this.el.nativeElement, {
            value: this.code,
            language: this.lang,
            theme: 'vs-dark',
            automaticLayout: true,
            fontFamily: 'IFAOGrec',
            lineNumbers: 'off',
            minimap: { enabled: false },
        });
    }
}
MonacoEditorComponent.ɵfac = function MonacoEditorComponent_Factory(t) { return new (t || MonacoEditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_languages_service__WEBPACK_IMPORTED_MODULE_0__.LanguagesService)); };
MonacoEditorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: MonacoEditorComponent, selectors: [["app-monaco-editor"]], viewQuery: function MonacoEditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.editorContainer = _t.first);
    } }, inputs: { title: "title", code: "code", lang: "lang" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.forwardRef)(() => _editor_config_service__WEBPACK_IMPORTED_MODULE_2__.EditorConfigService),
                multi: true,
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵNgOnChangesFeature"]], decls: 0, vars: 0, template: function MonacoEditorComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 1px solid grey;\n  position: absolute;\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbmFjby1lZGl0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBO0FBb0JBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSxjQUFBO0FBQ1IiLCJmaWxlIjoibW9uYWNvLWVkaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICogIENvcGhpRWRpdG9yIFVJOiBhIGNvbGxhYm9yYXRpdmUgRFNMLWJhc2VkIHdlYiBwbGF0Zm9ybSBmb3IgdGhlIGNyZWF0aW9uIG9mIHBhcHlyb2xvZ2ljYWwgY3JpdGljYWwgZWRpdGlvbnNcbiAqICBDb3B5cmlnaHQgKEMpIDIwMjEgU2ltb25lIFplbnphcm8sIElMQy1DTlJcbiAqICBcbiAqICBUaGlzIGxpYnJhcnkgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiAgbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpY1xuICogIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlclxuICogIHZlcnNpb24gMi4xIG9mIHRoZSBMaWNlbnNlLCBvciBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqICBcbiAqICBUaGlzIGxpYnJhcnkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiAgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqICBcbiAqICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljXG4gKiAgTGljZW5zZSBhbG9uZyB3aXRoIHRoaXMgbGlicmFyeTsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZVxuICogIEZvdW5kYXRpb24sIEluYy4sIDUxIEZyYW5rbGluIFN0cmVldCwgRmlmdGggRmxvb3IsIEJvc3RvbiwgTUEgIDAyMTEwLTEzMDFcbiAqICBVU0FcbiAqL1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICoge1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 5664:
/*!*************************************************************!*\
  !*** ./src/app/components/offcanvas/offcanvas.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OffcanvasComponent": () => (/* binding */ OffcanvasComponent)
/* harmony export */ });
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ 2782);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8130);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);





const _c0 = ["offcanvas"];
function OffcanvasComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.header);
} }
const _c1 = ["*"];
class OffcanvasComponent {
    constructor() {
        this.position = 'start';
        this._openEvents = rxjs__WEBPACK_IMPORTED_MODULE_2__.NEVER;
        this.s = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
    }
    set openEvents(v) {
        this._openEvents = v;
        console.log("new open events!", v);
        this.s.unsubscribe();
        this.s = this._openEvents.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this.offcanvas.toggle()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => console.log("HERE "))).subscribe();
    }
    get openEvents() { return this._openEvents; }
    ngAfterViewInit() {
        this.offcanvas = new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Offcanvas(this.offcanvasElement.nativeElement);
    }
}
OffcanvasComponent.ɵfac = function OffcanvasComponent_Factory(t) { return new (t || OffcanvasComponent)(); };
OffcanvasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OffcanvasComponent, selectors: [["app-offcanvas"]], viewQuery: function OffcanvasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.offcanvasElement = _t.first);
    } }, inputs: { header: "header", position: "position", openEvents: "openEvents" }, ngContentSelectors: _c1, decls: 5, vars: 9, consts: [["tabindex", "-1", "id", "offcanvas", "aria-labelledby", "offcanvasLabel", 1, "offcanvas"], ["offcanvas", ""], ["class", "offcanvas-header", 4, "ngIf"], [1, "offcanvas-body"], [1, "offcanvas-header"], ["id", "offcanvasLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close", "text-reset"]], template: function OffcanvasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, OffcanvasComponent_div_2_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("offcanvas-start", ctx.position == "start")("offcanvas-end", ctx.position == "end")("offcanvas-top", ctx.position == "top")("offcanvas-bottom", ctx.position == "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.header !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZjYW52YXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 694:
/*!*************************************************!*\
  !*** ./src/app/components/osd/osd.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OsdComponent": () => (/* binding */ OsdComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _golden_layout_base_component_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../golden-layout/base-component.directive */ 5700);
/* harmony import */ var openseadragon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openseadragon */ 3504);
/* harmony import */ var openseadragon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(openseadragon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8784);
/*
 *  CophiEditor UI: a collaborative DSL-based web platform for the creation of papyrological critical editions
 *  Copyright (C) 2021 Simone Zenzaro, ILC-CNR
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2.1 of the License, or any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301
 *  USA
 */




// import * as OpenSeadragon from 'openseadragon';





const _c0 = ["osd"];
/*
From:
{
  "@id": "https://www.e-codices.unifr.ch:443/loris/bge/bge-gr0044/bge-gr0044_e001.jp2/full/full/0/default.jpg",
  "@type": "dctypes:Image",
  "format": "image/jpeg",
  "height": 7304,
  "width": 5472,
  "service": {
    "@context": "http://iiif.io/api/image/2/context.json",
    "@id": "https://www.e-codices.unifr.ch/loris/bge/bge-gr0044/bge-gr0044_e001.jp2",
    "profile": "http://iiif.io/api/image/2/level2.json"
  }
}

To:
{
  '@context': 'http://iiif.io/api/image/2/context.json',
  '@id': 'https://www.e-codices.unifr.ch/loris/bge/bge-gr0044/bge-gr0044_e001.jp2',
  'profile': ['http://iiif.io/api/image/2/level2.json'],
  'protocol': 'http://iiif.io/api/image',
  'height': 7304,
  'width': 5472,
}
*/
function manifestResourcetoTileSource(manifestResource) {
    return {
        '@context': manifestResource.service['@context'],
        '@id': manifestResource.service['@id'],
        profile: [manifestResource.service['@profile']],
        protocol: 'http://iiif.io/api/image',
        height: manifestResource.height,
        width: manifestResource.width,
    };
}
class OsdComponent extends _golden_layout_base_component_directive__WEBPACK_IMPORTED_MODULE_0__.BaseComponentDirective {
    constructor(http, ngZone, container, elRef) {
        super(elRef.nativeElement);
        this.http = http;
        this.ngZone = ngZone;
        this.container = container;
        this.optionsChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.manifestURLChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(undefined);
        // tslint:disable-next-line: variable-name
        this._page = 0; // TODO: check if 0 is a good initial value
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.text = '';
        this.tileSources = this.manifestURLChange
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((url) => !!url), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((url) => this.http.get(url)), // TODO: check  if there is an already defined type for manifest
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((manifest) => manifest // get the resource fields in the manifest json structure
            .sequences.map((seq) => seq.canvases.map((canv) => canv.images).reduce((x, y) => x.concat(y), [])) // TODO: check if seq can be undefined
            .reduce((x, y) => x.concat(y), []).map((res) => res.resource) // TODO: check if there is an already defined type for res
            .map(manifestResourcetoTileSource)));
        this.subscriptions = [];
        this.viewerId = (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])();
        this.subscriptions.push(this.pageChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)()).subscribe((x) => {
            if (!!this.viewer) {
                this.viewer.goToPage(x - 1);
            }
        }));
    }
    set options(v) {
        if (v !== this._options) {
            this._options = v;
            this.optionsChange.next(this._options);
        }
    }
    get options() { return this._options; }
    set manifestURL(v) {
        if (v !== this._manifestURL) {
            this._manifestURL = v;
            this.manifestURLChange.next(this._manifestURL);
        }
    }
    get manifestURL() { return this._manifestURL; }
    set page(v) {
        if (v !== this._page) {
            this._page = v;
            this.pageChange.next(this._page);
        }
    }
    get page() { return this._page; }
    ngAfterViewInit() {
        const commonOptions = {
            visibilityRatio: 0.1,
            minZoomLevel: 0.5,
            defaultZoomLevel: 1,
            sequenceMode: true,
            showRotationControl: true,
            prefixUrl: 'assets/osd/images/',
            element: this.div.nativeElement,
            navigatorBackground: '#606060',
            showNavigator: false,
            gestureSettingsMouse: {
                clickToZoom: false,
                dblClickToZoom: true,
            },
        };
        ;
        this.subscriptions.push((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([this.optionsChange, this.tileSources])
            .subscribe(([options, tileSources]) => {
            this.viewer = this.ngZone.runOutsideAngular(() => openseadragon__WEBPACK_IMPORTED_MODULE_1__(Object.assign(Object.assign(Object.assign({}, commonOptions), { showFullPageControl: false }), (!!tileSources ? { tileSources } : options))));
            // this.viewer.addHandler('open', () => {
            //   let printButton = new Button({
            //     tooltip: 'Print',
            //     srcRest: `/assets/osd/colors_invert_icon.png`,
            //     srcGroup: `/assets/osd/colors_invert_icon.png`,
            //     srcHover: `/assets/osd/colors_invert_icon.png`,
            //     srcDown: `/assets/osd/colors_invert_icon.png`,
            //     onClick: () => alert('hello'),
            //   });
            //   this.viewer.addControl(printButton.element, { anchor: ControlAnchor.TOP_LEFT });
            // });
            this.viewer.element.addEventListener('scroll', (e) => console.log('asdasasd', e));
            this.viewer.addHandler('page', ({ page }) => this.pageChange.next(page + 1)); // TODO: check undefined
            ['focus', 'click', 'enter'].forEach((e) => this.viewer.addHandler(e, (evt) => console.log(e, evt)));
        }));
    }
    ngOnDestroy() {
        this.subscriptions.forEach((s) => s.unsubscribe());
    }
}
OsdComponent.ɵfac = function OsdComponent_Factory(t) { return new (t || OsdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_golden_layout_base_component_directive__WEBPACK_IMPORTED_MODULE_0__.BaseComponentDirective.GoldenLayoutContainerInjectionToken), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef)); };
OsdComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: OsdComponent, selectors: [["app-osd"]], viewQuery: function OsdComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.div = _t.first);
    } }, inputs: { options: "options", manifestURL: "manifestURL", page: "page", text: "text" }, outputs: { pageChange: "pageChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, consts: [[1, "full-height"], ["osd", ""]], template: function OsdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0, 1);
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  overflow: hidden;\n}\n.full-height[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9zZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFvQkE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7QUFHQTtFQUNJLGFBQUE7QUFBSiIsImZpbGUiOiJvc2QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcbiAqICBDb3BoaUVkaXRvciBVSTogYSBjb2xsYWJvcmF0aXZlIERTTC1iYXNlZCB3ZWIgcGxhdGZvcm0gZm9yIHRoZSBjcmVhdGlvbiBvZiBwYXB5cm9sb2dpY2FsIGNyaXRpY2FsIGVkaXRpb25zXG4gKiAgQ29weXJpZ2h0IChDKSAyMDIxIFNpbW9uZSBaZW56YXJvLCBJTEMtQ05SXG4gKiAgXG4gKiAgVGhpcyBsaWJyYXJ5IGlzIGZyZWUgc29mdHdhcmU7IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vclxuICogIG1vZGlmeSBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBMZXNzZXIgR2VuZXJhbCBQdWJsaWNcbiAqICBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uOyBlaXRoZXJcbiAqICB2ZXJzaW9uIDIuMSBvZiB0aGUgTGljZW5zZSwgb3IgYW55IGxhdGVyIHZlcnNpb24uXG4gKiAgXG4gKiAgVGhpcyBsaWJyYXJ5IGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiAgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqICBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVVxuICogIExlc3NlciBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKiAgXG4gKiAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpY1xuICogIExpY2Vuc2UgYWxvbmcgd2l0aCB0aGlzIGxpYnJhcnk7IGlmIG5vdCwgd3JpdGUgdG8gdGhlIEZyZWUgU29mdHdhcmVcbiAqICBGb3VuZGF0aW9uLCBJbmMuLCA1MSBGcmFua2xpbiBTdHJlZXQsIEZpZnRoIEZsb29yLCBCb3N0b24sIE1BICAwMjExMC0xMzAxXG4gKiAgVVNBXG4gKi9cblxuOmhvc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZnVsbC1oZWlnaHQge1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 6319:
/*!***********************************************************************!*\
  !*** ./src/app/components/test-component/test-component.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestComponentComponent": () => (/* binding */ TestComponentComponent)
/* harmony export */ });
/* harmony import */ var _golden_layout_base_component_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../golden-layout/base-component.directive */ 5700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class TestComponentComponent extends _golden_layout_base_component_directive__WEBPACK_IMPORTED_MODULE_0__.BaseComponentDirective {
    constructor(container, elRef) {
        super(elRef.nativeElement);
        this.container = container;
    }
}
TestComponentComponent.ɵfac = function TestComponentComponent_Factory(t) { return new (t || TestComponentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_golden_layout_base_component_directive__WEBPACK_IMPORTED_MODULE_0__.BaseComponentDirective.GoldenLayoutContainerInjectionToken), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
TestComponentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TestComponentComponent, selectors: [["app-test-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 2, vars: 0, template: function TestComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "test-component works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFBQTtBQW9CQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBSiIsImZpbGUiOiJ0ZXN0LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICogIENvcGhpRWRpdG9yIFVJOiBhIGNvbGxhYm9yYXRpdmUgRFNMLWJhc2VkIHdlYiBwbGF0Zm9ybSBmb3IgdGhlIGNyZWF0aW9uIG9mIHBhcHlyb2xvZ2ljYWwgY3JpdGljYWwgZWRpdGlvbnNcbiAqICBDb3B5cmlnaHQgKEMpIDIwMjEgU2ltb25lIFplbnphcm8sIElMQy1DTlJcbiAqICBcbiAqICBUaGlzIGxpYnJhcnkgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiAgbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpY1xuICogIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlclxuICogIHZlcnNpb24gMi4xIG9mIHRoZSBMaWNlbnNlLCBvciBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqICBcbiAqICBUaGlzIGxpYnJhcnkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiAgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqICBcbiAqICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljXG4gKiAgTGljZW5zZSBhbG9uZyB3aXRoIHRoaXMgbGlicmFyeTsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZVxuICogIEZvdW5kYXRpb24sIEluYy4sIDUxIEZyYW5rbGluIFN0cmVldCwgRmlmdGggRmxvb3IsIEJvc3RvbiwgTUEgIDAyMTEwLTEzMDFcbiAqICBVU0FcbiAqL1xuXG46aG9zdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH0iXX0= */"] });


/***/ }),

/***/ 6035:
/*!*************************************************************!*\
  !*** ./src/app/components/tree-view/tree-view.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeViewComponent": () => (/* binding */ TreeViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ 2782);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8130);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4350);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/*
 *  CophiEditor UI: a collaborative DSL-based web platform for the creation of papyrological critical editions
 *  Copyright (C) 2021 Simone Zenzaro, ILC-CNR
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2.1 of the License, or any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301
 *  USA
 */







const _c0 = ["childrenContainer"];

function TreeViewComponent_i_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TreeViewComponent_i_1_Template_i_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r7.toggle();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("opened", ctx_r0.opened);
  }
}

function TreeViewComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r1.model.link);
  }
}

function TreeViewComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 12);
  }
}

function TreeViewComponent_app_tree_view_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-tree-view", 13);
  }

  if (rf & 2) {
    const i_r9 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("model", i_r9)("dataProvider", ctx_r4.dataProvider);
  }
}

function TreeViewComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Loading\u2026");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}

const EMPTY_TREE_VIEW_ITEM = {
  id: '',
  label: '',
  children: []
};
class TreeViewComponent {
  constructor() {
    this.opened = false;
    this.itemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this._model = EMPTY_TREE_VIEW_ITEM;
    this.modelChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this._model);
    this._dataProvider = {
      getItem: _ => rxjs__WEBPACK_IMPORTED_MODULE_3__.NEVER
    };
    this.dataProviderChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this._dataProvider);
    this.childrenLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    this.children = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this.dataProviderChange, this.modelChange]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([{
      getItem
    }, {
      children
    }]) => children.map(getItem)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(x => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)(x)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(() => this.childrenLoaded.next(true)));
  }

  set model(v) {
    this._model = v;
    this.modelChange.next(this._model);
  }

  get model() {
    return this._model;
  }

  set dataProvider(v) {
    this._dataProvider = v;
    this.dataProviderChange.next(this._dataProvider);
  }

  get dataProvider() {
    return this._dataProvider;
  }

  ngAfterViewInit() {
    this.childrenCollapsible = new bootstrap__WEBPACK_IMPORTED_MODULE_0__.Collapse(this.editorContainer.nativeElement, {
      toggle: false
    });
    this.childrenCollapsible.hide();
  }

  toggle() {
    if (!!this.model && this.model.children.length > 0) {
      this.childrenCollapsible.toggle();
      this.opened = !this.opened;
    }
  }

}

TreeViewComponent.ɵfac = function TreeViewComponent_Factory(t) {
  return new (t || TreeViewComponent)();
};

TreeViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TreeViewComponent,
  selectors: [["app-tree-view"]],
  viewQuery: function TreeViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.editorContainer = _t.first);
    }
  },
  inputs: {
    model: "model",
    dataProvider: "dataProvider"
  },
  outputs: {
    itemClicked: "itemClicked"
  },
  decls: 13,
  vars: 9,
  consts: [[1, "pointer"], ["class", "bi bi-chevron-right arrow-right", 3, "opened", "click", 4, "ngIf"], ["class", "pointer ml-3", 3, "routerLink", 4, "ngIf"], [3, "click"], ["class", "spinner-border", "role", "status", 4, "ngIf"], [1, "tree-childeren-container", "collapse"], ["childrenContainer", ""], [3, "model", "dataProvider", 4, "ngFor", "ngForOf"], ["loading", ""], [1, "bi", "bi-chevron-right", "arrow-right", 3, "click"], [1, "pointer", "ml-3", 3, "routerLink"], [1, "bi", "bi-pencil"], ["role", "status", 1, "spinner-border"], [3, "model", "dataProvider"]],
  template: function TreeViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TreeViewComponent_i_1_Template, 1, 2, "i", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TreeViewComponent_a_2_Template, 2, 1, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TreeViewComponent_Template_span_click_3_listener() {
        ctx.itemClicked.next(ctx.model.id);
        return ctx.toggle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TreeViewComponent_span_5_Template, 1, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TreeViewComponent_app_tree_view_9_Template, 1, 2, "app-tree-view", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TreeViewComponent_ng_template_11_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.model.children.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.model.link !== undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.model.label, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.opened && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, ctx.childrenLoaded));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, ctx.children));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, TreeViewComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.arrow-right[_ngcontent-%COMP%] {\n  display: inline-block;\n  transform: rotate(0deg);\n  transition: transform 0.1s linear;\n}\n.arrow-right.opened[_ngcontent-%COMP%] {\n  display: inline-block;\n  transform: rotate(90deg);\n  transition: transform 0.1s linear;\n}\n.tree-childeren-container[_ngcontent-%COMP%] {\n  padding-left: 30px;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.spinner-border[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWUtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7QUFvQkE7RUFDSSxjQUFBO0FBQUo7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQ0FBQTtBQUNKO0FBQ0E7RUFDSSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7QUFFSjtBQUNBO0VBQ0ksa0JBQUE7QUFFSjtBQUNBO0VBQ0ksZUFBQTtBQUVKO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVKIiwiZmlsZSI6InRyZWUtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxuICogIENvcGhpRWRpdG9yIFVJOiBhIGNvbGxhYm9yYXRpdmUgRFNMLWJhc2VkIHdlYiBwbGF0Zm9ybSBmb3IgdGhlIGNyZWF0aW9uIG9mIHBhcHlyb2xvZ2ljYWwgY3JpdGljYWwgZWRpdGlvbnNcbiAqICBDb3B5cmlnaHQgKEMpIDIwMjEgU2ltb25lIFplbnphcm8sIElMQy1DTlJcbiAqICBcbiAqICBUaGlzIGxpYnJhcnkgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yXG4gKiAgbW9kaWZ5IGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIExlc3NlciBHZW5lcmFsIFB1YmxpY1xuICogIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5IHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb247IGVpdGhlclxuICogIHZlcnNpb24gMi4xIG9mIHRoZSBMaWNlbnNlLCBvciBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqICBcbiAqICBUaGlzIGxpYnJhcnkgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGUgR05VXG4gKiAgTGVzc2VyIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqICBcbiAqICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgTGVzc2VyIEdlbmVyYWwgUHVibGljXG4gKiAgTGljZW5zZSBhbG9uZyB3aXRoIHRoaXMgbGlicmFyeTsgaWYgbm90LCB3cml0ZSB0byB0aGUgRnJlZSBTb2Z0d2FyZVxuICogIEZvdW5kYXRpb24sIEluYy4sIDUxIEZyYW5rbGluIFN0cmVldCwgRmlmdGggRmxvb3IsIEJvc3RvbiwgTUEgIDAyMTEwLTEzMDFcbiAqICBVU0FcbiAqL1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4uYXJyb3ctcmlnaHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBsaW5lYXI7XG59XG4uYXJyb3ctcmlnaHQub3BlbmVkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGxpbmVhcjtcbn1cblxuLnRyZWUtY2hpbGRlcmVuLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4ucG9pbnRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc3Bpbm5lci1ib3JkZXIge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 7703:
/*!**************************************************!*\
  !*** ./src/app/pages/layout/layout.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_offcanvas_offcanvas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/offcanvas/offcanvas.component */ 5664);
/* harmony import */ var _components_tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/tree-view/tree-view.component */ 6035);







function LayoutComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LayoutComponent_div_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r4.openTextTree$.next();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function LayoutComponent_nav_5_li_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", b_r7.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](b_r7.label);
  }
}

function LayoutComponent_nav_5_li_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const b_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](b_r7.label);
  }
}

function LayoutComponent_nav_5_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LayoutComponent_nav_5_li_2_a_1_Template, 2, 2, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LayoutComponent_nav_5_li_2_ng_container_2_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const last_r8 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", last_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !last_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", last_r8);
  }
}

function LayoutComponent_nav_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ol", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LayoutComponent_nav_5_li_2_Template, 3, 4, "li", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.breadCrumbs);
  }
}

function LayoutComponent_app_tree_view_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-tree-view", 18);
  }

  if (rf & 2) {
    const i_r13 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("model", i_r13)("dataProvider", ctx_r3.treeProvider);
  }
}

const _c0 = ["*"];
class LayoutComponent {
  constructor() {
    this.showNavbar = true;
    this.breadCrumbs = [];
    this.openTextTree$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.treeItems = rxjs__WEBPACK_IMPORTED_MODULE_4__.NEVER;
    this.treeProvider = {
      getItem: _ => rxjs__WEBPACK_IMPORTED_MODULE_4__.NEVER
    };
  }

  login(url) {}

}

LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
  return new (t || LayoutComponent)();
};

LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LayoutComponent,
  selectors: [["app-layout"]],
  inputs: {
    showNavbar: "showNavbar",
    breadCrumbs: "breadCrumbs",
    treeItems: "treeItems",
    treeProvider: "treeProvider"
  },
  ngContentSelectors: _c0,
  decls: 14,
  vars: 7,
  consts: [[1, "navbar", "navbar-dark", "bg-dark"], [1, "container-fluid"], [1, "navbar-brand", "mb-0", "h1"], [4, "ngIf"], ["aria-label", "breadcrumb", 4, "ngIf"], ["position", "end", 3, "header", "openEvents"], ["offcanvas", ""], [3, "model", "dataProvider", 4, "ngFor", "ngForOf"], [1, "bg-light", "text-center", "text-lg-start"], [1, "text-center", "p-2"], [1, "btn", "btn-light", "btn-sm", "rounded-circle", "m-1", "rotate-180", 3, "click"], [1, "bi", "bi-layout-sidebar"], ["aria-label", "breadcrumb"], [1, "breadcrumb", "m-0", "p-2"], ["class", "breadcrumb-item", 3, "active", 4, "ngFor", "ngForOf"], [1, "breadcrumb-item"], [3, "routerLink", 4, "ngIf"], [3, "routerLink"], [3, "model", "dataProvider"]],
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "CophiEditor");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LayoutComponent_div_4_Template, 3, 0, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, LayoutComponent_nav_5_Template, 3, 1, "nav", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "app-offcanvas", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, LayoutComponent_app_tree_view_9_Template, 1, 2, "app-tree-view", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "footer", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " \u00A9 2021 Copyright: CophiLab ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showNavbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.breadCrumbs.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("header", "Working Unit")("openEvents", ctx.openTextTree$);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 5, ctx.treeItems));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _components_offcanvas_offcanvas_component__WEBPACK_IMPORTED_MODULE_0__.OffcanvasComponent, _components_tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_1__.TreeViewComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".fill-content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  overflow: auto;\n}\n\n.rotate-180[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFFQSxjQUFBO0FBQUo7O0FBR0E7RUFDSSx5QkFBQTtBQUFKIiwiZmlsZSI6ImxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLWNvbnRlbnQge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIC8vIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucm90YXRlLTE4MCB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 583:
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageComponent": () => (/* binding */ LoginPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/layout.component */ 7703);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





const _c0 = function (a1) { return ["bi", a1]; };
function LoginPageComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_button_5_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const s_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.router.navigateByUrl(s_r1.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const s_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", s_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, s_r1.icon));
} }
class LoginPageComponent {
    constructor(router) {
        this.router = router;
        this.loginServices = [
            { label: 'Shibbolet', link: '/working-units', icon: "bi-door-open" },
            { label: 'Google', link: '/working-units', icon: "bi-google" },
        ];
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
LoginPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 31, vars: 2, consts: [[3, "showNavbar"], [1, "container", "w-25", "mt-4", "mb-4"], [1, "d-flex", "flex-row", "align-items-center", "justify-content-center", "justify-content-lg-start"], [1, "lead", "fw-normal", "mb-0", "me-3"], ["type", "button", "class", "btn btn-primary btn-floating mx-1", 3, "click", 4, "ngFor", "ngForOf"], [1, "divider", "d-flex", "align-items-center", "my-4"], [1, "text-center", "fw-bold", "mx-3", "mb-0"], [1, "form-outline", "mb-4"], ["type", "email", "id", "form3Example3", "placeholder", "Enter a valid email address", 1, "form-control", "form-control-lg"], ["for", "form3Example3", 1, "form-label"], [1, "form-outline", "mb-3"], ["type", "password", "id", "form3Example4", "placeholder", "Enter password", 1, "form-control", "form-control-lg"], ["for", "form3Example4", 1, "form-label"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "form-check", "mb-0"], ["type", "checkbox", "value", "", "id", "form2Example3", 1, "form-check-input", "me-2"], ["for", "form2Example3", 1, "form-check-label"], ["href", "#!", 1, "text-body"], [1, "text-center", "text-lg-start", "mt-4", "pt-2"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 2, "padding-left", "2.5rem", "padding-right", "2.5rem", 3, "click"], [1, "small", "fw-bold", "mt-2", "pt-1", "mb-0"], ["href", "#!", 1, "link-danger"], ["type", "button", 1, "btn", "btn-primary", "btn-floating", "mx-1", 3, "click"], [3, "ngClass"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Sign in with");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LoginPageComponent_button_5_Template, 3, 4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Or");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginPageComponent_Template_button_click_25_listener() { return ctx.router.navigateByUrl("/working-units"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Don't have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavbar", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.loginServices);
    } }, directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], styles: [".divider[_ngcontent-%COMP%]:after, .divider[_ngcontent-%COMP%]:before {\n  content: \"\";\n  flex: 1;\n  height: 1px;\n  background: #eee;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsV0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdmlkZXI6YWZ0ZXIsXG4uZGl2aWRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn0iXX0= */"] });


/***/ }),

/***/ 2313:
/*!********************************************************!*\
  !*** ./src/app/pages/test-page/test-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPageComponent": () => (/* binding */ TestPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8130);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_app_components_golden_layout_golden_layout_host_golden_layout_host_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/golden-layout/golden-layout-host/golden-layout-host.component */ 2030);
/* harmony import */ var src_app_components_osd_osd_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/osd/osd.component */ 694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/mock-data.service */ 9016);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/layout.component */ 7703);








class TestPageComponent {
    constructor(mockDB) {
        this.mockDB = mockDB;
        this.treeItems = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.mockDB.rootElements()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((x) => x.map(({ id, label, children }) => ({ id, label, children }))));
        this.treeProvider = {
            getItem: (id) => {
                const di = this.mockDB.item(id);
                if (di === undefined) {
                    return rxjs__WEBPACK_IMPORTED_MODULE_6__.NEVER;
                }
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({ label: di.label, children: di.children });
            }
        };
    }
    addOSD() {
        this.lc.addComponent$.next([src_app_components_osd_osd_component__WEBPACK_IMPORTED_MODULE_1__.OsdComponent.name, { title: "OSD" }]);
    }
}
TestPageComponent.ɵfac = function TestPageComponent_Factory(t) { return new (t || TestPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_mock_data_service__WEBPACK_IMPORTED_MODULE_2__.MockDataService)); };
TestPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TestPageComponent, selectors: [["app-test-page"]], viewQuery: function TestPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_components_golden_layout_golden_layout_host_golden_layout_host_component__WEBPACK_IMPORTED_MODULE_0__.GoldenLayoutHostComponent, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.lc = _t.first);
    } }, decls: 9, vars: 2, consts: [[3, "treeItems", "treeProvider"], [3, "click"], [1, "w-100", "p-0", "m-0", "h-75"]], template: function TestPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestPageComponent_Template_button_click_1_listener() { return ctx.lc.saveLayout$.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Save Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestPageComponent_Template_button_click_3_listener() { return ctx.lc.loadLayout$.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Load Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TestPageComponent_Template_button_click_5_listener() { return ctx.addOSD(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "OSD");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-golden-layout-host");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("treeItems", ctx.treeItems)("treeProvider", ctx.treeProvider);
    } }, directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__.LayoutComponent, src_app_components_golden_layout_golden_layout_host_golden_layout_host_component__WEBPACK_IMPORTED_MODULE_0__.GoldenLayoutHostComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1079:
/*!**************************************************************!*\
  !*** ./src/app/pages/working-unit/working-unit.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkingUnitComponent": () => (/* binding */ WorkingUnitComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 9193);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 8130);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 1745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var src_app_components_monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/monaco-editor/monaco-editor.component */ 5761);
/* harmony import */ var src_app_components_osd_osd_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/osd/osd.component */ 694);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_languages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/languages.service */ 3340);
/* harmony import */ var src_app_services_mock_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/mock-data.service */ 9016);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/layout.component */ 7703);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_golden_layout_golden_layout_host_golden_layout_host_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/golden-layout/golden-layout-host/golden-layout-host.component */ 2030);













function WorkingUnitComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WorkingUnitComponent_ng_container_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r3.addOSD();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WorkingUnitComponent_ng_container_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);

      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](8);

      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r5.fullScreen(_r2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function WorkingUnitComponent_ng_container_2_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r6.check.next();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "app-golden-layout-host", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ready", function WorkingUnitComponent_ng_container_2_Template_app_golden_layout_host_ready_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      ctx_r7.lc = $event;
      return ctx_r7.viewInit.next();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}

const _c0 = function () {
  return [];
};

function checkerCodes(cs, cmps) {
  const tt = checkerTuples(cs.languages, cmps.filter(x => cs.languages.includes(x.lang)));
  const w = tt.map(components => {
    const code = JSON.stringify(components.map(({
      lang,
      code
    }) => ({
      lang,
      code
    })));
    return {
      code,
      components
    };
  });
  return w;
} // TODO: test function


function checkerTuples(langs, cmps) {
  if (langs.length === 0) {
    return [];
  }

  const [l, ...tail] = langs;
  const choice = cmps.find(x => x.lang === l);

  if (choice === undefined) {
    return [];
  }

  const rest = cmps.filter(x => x !== choice && tail.includes(x.lang));

  if (rest.length === 0) {
    return [[choice]];
  }

  const x = checkerTuples(tail, rest);
  const b = x.map(k => [choice, ...k]);
  return checkerTuples(tail, rest).map(k => [choice, ...k]);
}

class WorkingUnitComponent {
  constructor(route, langService, db) {
    this.route = route;
    this.langService = langService;
    this.db = db;
    this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.viewInit = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.breadCrumbs = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(m => m.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(id => this.db.path(id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(p => p.map(({
      id,
      label
    }) => ({
      link: `/working-unit/${id}`,
      label
    }))));
    this.components = this.route.paramMap.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(m => m.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(id => this.db.components(id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy));
    this.componentsCmd = this.viewInit.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.switchMap)(() => this.components), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(({
      components
    }) => {
      this.lc.clear();
      const editors = components.map(c => this.lc.add(c.componentName, Object.assign({}, c)).instance).filter(c => c instanceof src_app_components_monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_0__.MonacoEditorComponent).map(c => c);
      return editors;
    }));
    this.editors = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.checkers = this.components.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(({
      components
    }) => {
      const langs = components.filter(({
        lang
      }) => lang !== undefined).map(({
        lang
      }) => lang);
      return this.langService.checkers(langs);
    }));
    this.check = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    this.codes = this.componentsCmd.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(cs => cs.map(c => c.codeChange)));
    this.a = this.check.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.withLatestFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.checkers])));
    this.checkCmd = this.check.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.withLatestFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.combineLatest)([this.checkers, this.componentsCmd, this.a])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.tap)(([_, [cs, cmps]]) => cs.forEach(c => checkerCodes(c, cmps).forEach(({
      code,
      components
    }) => c.warnings(code).then(warns => components.forEach(k => k.warningsInput.next(warns)))))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy));
    this.treeItems = (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)(this.db.rootElements()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(x => x.map(({
      id,
      label,
      children
    }) => ({
      id,
      label,
      children,
      link: `/working-unit/${id}`
    }))));
    this.treeProvider = {
      getItem: id => {
        const di = this.db.item(id);

        if (di === undefined) {
          return rxjs__WEBPACK_IMPORTED_MODULE_16__.NEVER;
        }

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.of)({
          label: di.label,
          children: di.children,
          link: `/working-unit/${di.id}`
        });
      }
    };
    this.componentsCmd.subscribe();
    this.checkCmd.subscribe();
    this.a.subscribe();

    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
      console.log("INPROD!");
    } else {
      console.log("NOT");
    }
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  addOSD() {
    this.lc.addComponent$.next([src_app_components_osd_osd_component__WEBPACK_IMPORTED_MODULE_1__.OsdComponent.name, {
      manifestURL: 'https://www.e-codices.unifr.ch/metadata/iiif/ubb-M-I-0018/manifest.json'
    }]);
  }

  fullScreen(container) {
    if (!document.fullscreenElement) {
      container.requestFullscreen();
    }
  }

}

WorkingUnitComponent.ɵfac = function WorkingUnitComponent_Factory(t) {
  return new (t || WorkingUnitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_languages_service__WEBPACK_IMPORTED_MODULE_3__.LanguagesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_mock_data_service__WEBPACK_IMPORTED_MODULE_4__.MockDataService));
};

WorkingUnitComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: WorkingUnitComponent,
  selectors: [["app-working-unit"]],
  decls: 4,
  vars: 9,
  consts: [[3, "breadCrumbs", "treeItems", "treeProvider"], [4, "ngIf"], [1, "btn", "btn-sm", "btn-secondary", "m-2", "rounded-circle", 3, "click"], [1, "bi", "bi-image"], [1, "bi", "bi-arrows-fullscreen"], [1, "bi", "bi-eyeglasses"], [1, "w-100", "p-0", "m-0", "h-75"], ["container", ""], [3, "ready"]],
  template: function WorkingUnitComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "app-layout", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, WorkingUnitComponent_ng_container_2_Template, 10, 0, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("breadCrumbs", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 4, ctx.breadCrumbs) || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c0))("treeItems", ctx.treeItems)("treeProvider", ctx.treeProvider);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 6, ctx.components));
    }
  },
  directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__.LayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _components_golden_layout_golden_layout_host_golden_layout_host_component__WEBPACK_IMPORTED_MODULE_6__.GoldenLayoutHostComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JraW5nLXVuaXQuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 8765:
/*!****************************************************************!*\
  !*** ./src/app/pages/working-units/working-units.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkingUnitsComponent": () => (/* binding */ WorkingUnitsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8130);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_mock_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/mock-data.service */ 9016);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/layout.component */ 7703);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/tree-view/tree-view.component */ 6035);








function WorkingUnitsComponent_app_tree_view_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-tree-view", 2);
  }

  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", i_r1)("dataProvider", ctx_r0.treeProvider);
  }
}

class WorkingUnitsComponent {
  constructor(db) {
    this.db = db;
    this.units = [{
      label: 'Col64',
      id: '64'
    }, {
      label: 'Col65',
      id: '65'
    }, {
      label: 'Col66',
      id: '66'
    }, {
      label: 'Col67',
      id: '67'
    }, {
      label: 'Col68',
      id: '68'
    }, {
      label: 'Col69',
      id: '69'
    }];
    /*
        localhost/working-unit/:id
               nella view
               path: (id: string) => []string
               components: (id:string) => []{ componentName: string, state: any, layout: GoldenLayoutConfiguration }
               
    */

    this.treeItems = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.db.rootElements()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(x => x.map(({
      id,
      label,
      children
    }) => ({
      id,
      label,
      children,
      link: `/working-unit/${id}`
    }))));
    this.treeProvider = {
      getItem: id => {
        const di = this.db.item(id);

        if (di === undefined) {
          return rxjs__WEBPACK_IMPORTED_MODULE_6__.NEVER;
        }

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)({
          label: di.label,
          children: di.children,
          link: `/working-unit/${di.id}`
        });
      }
    };
  }

  ngOnInit() {}

}

WorkingUnitsComponent.ɵfac = function WorkingUnitsComponent_Factory(t) {
  return new (t || WorkingUnitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_mock_data_service__WEBPACK_IMPORTED_MODULE_0__.MockDataService));
};

WorkingUnitsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: WorkingUnitsComponent,
  selectors: [["app-working-units"]],
  decls: 4,
  vars: 3,
  consts: [[1, "container", "p-4"], [3, "model", "dataProvider", 4, "ngFor", "ngForOf"], [3, "model", "dataProvider"]],
  template: function WorkingUnitsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-layout");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, WorkingUnitsComponent_app_tree_view_2_Template, 1, 2, "app-tree-view", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 1, ctx.treeItems));
    }
  },
  directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _components_tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_2__.TreeViewComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JraW5nLXVuaXRzLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 3340:
/*!***********************************************!*\
  !*** ./src/app/services/languages.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguagesService": () => (/* binding */ LanguagesService),
/* harmony export */   "langData": () => (/* binding */ langData),
/* harmony export */   "coherenceChecks": () => (/* binding */ coherenceChecks)
/* harmony export */ });
/* harmony import */ var gs_lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gs-lit */ 4924);
/* harmony import */ var gs_lit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gs_lit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gs_lit_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gs-lit-app */ 4238);
/* harmony import */ var gs_lit_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gs_lit_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/// <reference path="../../../node_modules/monaco-editor/monaco.d.ts" />



function toLanguageDefinition(l, id) {
    return {
        id,
        syntaxHighlighter: l.highlighter,
        completionProvider: (model, position) => {
            var word = model.getWordUntilPosition(position);
            var range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn
            };
            return {
                suggestions: [{
                        label: 'Sudhaus',
                        kind: monaco.languages.CompletionItemKind.Function,
                        documentation: 'The editor Sudhaus',
                        insertText: 'Sudhaus',
                        range: range
                    },
                    {
                        label: 'Cirillo',
                        kind: monaco.languages.CompletionItemKind.Text,
                        documentation: 'The editor Cirillo',
                        insertText: 'Cirillo',
                        range: range
                    },
                ],
            };
        },
        errorProvider: (model) => {
            return l.errors(model.getValue())
                .then((errs) => errs.map(({ message, range }) => ({
                code: model.uri.toString(),
                startLineNumber: range.start.line,
                startColumn: range.start.column,
                endLineNumber: range.end.line,
                endColumn: range.end.column,
                message: message,
                severity: monaco.MarkerSeverity.Error
            })));
        }
    };
}
class LanguagesService {
    constructor() {
        this.cks = Object.values(coherenceChecks);
    }
    checkers(langs) {
        return this.cks.filter((c) => c.languages.every((l) => langs.includes(l)));
    }
    registerLanguage(lang, editorModelChange) {
        if (monaco.languages.getLanguages().some((x) => x.id === lang.id)) {
            return [];
        }
        monaco.languages.register({ id: lang.id });
        return [
            // TODO: test custom tokenizer using ANTLR
            // monaco.languages.setTokensProvider(lang.id, {
            //   getInitialState() {
            //     return new State('');
            //   },
            //   tokenize(line, startState) {
            //     const { tokens, state } = tokenizer.getLineTokens(line, startState.state);
            //     let offset = 0;
            //     const monacoTokens = tokens.map((token) => {
            //       const tok = {
            //         startIndex: offset,
            //         scopes: token.type,
            //       };
            //       offset += token.value.length;
            //       return tok;
            //     });
            //     return {
            //       endState: new State(state),
            //       tokens: monacoTokens,
            //     };
            //   }
            // }),
            monaco.languages.setMonarchTokensProvider(lang.id, lang.syntaxHighlighter),
            monaco.languages.registerCompletionItemProvider(lang.id, { provideCompletionItems: lang.completionProvider }),
            monaco.languages.onLanguage(lang.id, () => {
                monaco.editor.onDidCreateModel((model) => {
                    if (model.getLanguageId() === lang.id) {
                        model.onDidChangeContent(() => editorModelChange.next({ model, lang }));
                    }
                });
            }),
        ];
    }
}
LanguagesService.ɵfac = function LanguagesService_Factory(t) { return new (t || LanguagesService)(); };
LanguagesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LanguagesService, factory: LanguagesService.ɵfac, providedIn: 'root' });
const langData = {
    'gs-lit': toLanguageDefinition(new gs_lit__WEBPACK_IMPORTED_MODULE_0__.GsLiterary("https://6000.greekschools.eu", "443"), 'gs-lit'),
    'gs-lit-app': toLanguageDefinition(new gs_lit_app__WEBPACK_IMPORTED_MODULE_1__.GsLiteraryApp("https://6001.greekschools.eu", "443"), 'gs-lit-app'),
    'gs-diplomatic': toLanguageDefinition(new gs_lit__WEBPACK_IMPORTED_MODULE_0__.GsLiterary("https://6000.greekschools.eu", "443"), 'gs-diplomatic'),
    'gs-translation': toLanguageDefinition(new gs_lit__WEBPACK_IMPORTED_MODULE_0__.GsLiterary("https://6000.greekschools.eu", "443"), 'gs-translation'),
    'gs-paleographic-app': toLanguageDefinition(new gs_lit__WEBPACK_IMPORTED_MODULE_0__.GsLiterary("https://6000.greekschools.eu", "443"), 'gs-paleographic-app'),
};
const coherenceChecks = {
    'equal-number-of-lines': {
        id: 'equal-number-of-lines',
        warnings: (code) => {
            const codeObj = JSON.parse(code);
            const same = codeObj
                .map((x) => x.code.split("\n").length)
                .every((val, i, arr) => val === arr[0]);
            return new Promise((resolve) => {
                if (same) {
                    resolve([]);
                    return;
                }
                resolve([
                    {
                        message: 'Diplomatic and literary transcription must have the same number of lines',
                        range: {
                            start: { line: 1, column: 1 },
                            end: { line: Infinity, column: 1 },
                        }
                    },
                ]);
            });
        },
        languages: ['gs-lit', 'gs-diplomatic'],
    },
};


/***/ }),

/***/ 9016:
/*!***********************************************!*\
  !*** ./src/app/services/mock-data.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentInfo": () => (/* binding */ ComponentInfo),
/* harmony export */   "DSLInfo": () => (/* binding */ DSLInfo),
/* harmony export */   "MockDataService": () => (/* binding */ MockDataService)
/* harmony export */ });
/* harmony import */ var _components_monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/monaco-editor/monaco-editor.component */ 5761);
/* harmony import */ var _components_osd_osd_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/osd/osd.component */ 694);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class ComponentInfo {
    constructor(componentName, title) {
        this.componentName = componentName;
        this.title = title;
    }
}
class DSLInfo extends ComponentInfo {
    constructor(dslId, content, title) {
        super(_components_monaco_editor_monaco_editor_component__WEBPACK_IMPORTED_MODULE_0__.MonacoEditorComponent.name, title);
        this.lang = dslId;
        this.code = content;
    }
}
class OSDInfo extends ComponentInfo {
    constructor(manifestURL, title, page) {
        super(_components_osd_osd_component__WEBPACK_IMPORTED_MODULE_1__.OsdComponent.name, title);
        this.manifestURL = manifestURL;
        this.page = page || 0;
    }
}
function mapToArray(m) { return Object.values(m); }
;
class MockDataService {
    constructor() {
        this.db = {
            'pherc-1004': {
                id: 'pherc-1004',
                label: 'PHerc. 1004',
                children: ['1', '2', '3'],
            },
            '1': {
                id: '1',
                label: 'Col. 64',
                parent: 'pherc-1004',
                children: ['dip-64', 'lit-64', 'translation-64'],
            },
            '2': {
                id: '2',
                parent: 'PHERC',
                label: 'Col. 65',
                children: [],
            },
            '3': {
                id: '3',
                parent: 'PHERC',
                label: 'Col. 66',
                children: [],
            },
            'translation-64': {
                id: 'translation-64',
                label: 'Translation',
                parent: '1',
                component: new DSLInfo('gs-translation', `(c. 20 linee e 2-3 parole mancanti) alle
cose secondo opinione vera sembra esse-
re opportuno paragonare ciò che è se-
condo vana opinione, ossia ciò che non
ha relazione con le evidenze, e (sembra)
che i retori non padroneggino assoluta-
mente nemmeno queste cose. Cionondi-
meno, nel trattare la materia, invano
sembra addurre [analogie prese in presti-
to] dall’arte musicale; le cose, infatti,
non sarebbero state più chiare lasciando
così come sono (?) quelle intorno alle
quali faceva i [suoi] ragionamenti; ma,
[da una parte], queste cose [sono per na-
tura] facilmente comprensibili a tutti,
[dall’altra, rispetto] alla vita (c. 1-2 pa-
role e 1 linea mancanti)`, 'Translation'),
                children: [],
            },
            'paleographic-app-64': {
                id: 'paleographic-app-64',
                label: 'Paleographic Apparatus',
                parent: 'dip-64',
                component: new DSLInfo('gs-paleographic-app', 
                //         `Col. 64 PHerc. 1004, cr. 5, pz. 1, col. 6 = O Cb (2, 
                // 446) = N col. 6 = VH2 III 117 = col. 6 Sudhaus
                // 1 ][ subter lineam vert. apicata sicut ρ, φ, ψ 2 
                // ]η̣[]ι inf. desc., inf. vest. ⌈τατ⌉ N: [ vert. P: ⌈ατ⌉
                // O (τ, γ) 3 ]ξ dext. arcus ⌈α⌉ N:  (α, λ) P 4 
                // ⌈ν⌉ N: [P] 5 ⌈ sup. vest., (ε, θ, ο, ϲ) ⌈ιναι⌉ N: 
                // ] inf. arcus, (α, λ, δ, ν), sup. vert. ⌈ν⌉ O: [PN] 
                // οα̣ (ξ, ζ, π, τ), inf. vest. 6 υποκωφον̣ηνου[]η
                // punctis suprascriptis del. librarius ⌈τ⌉ ON:  (τ, φ) P 
                // 7 αε (τ, γ) 8 ⌈α⌉ Npc:  (α, λ) P: µ̣ Nac ⟦⟧ (ε, θ, 
                // ο, ϲ) ⌈ι⌉ N:  sup. vest. P 9 ϲ (α, λ, δ) ⌈α̣⌉ N: 
                // desc. P ⌉[ vest. 11 pars sinistra diples 
                // obelismenes dispicitur α̣ε subter lin. vert., inf. 
                // vest. 13 ⌈ρο⌉ N:  sup. arcus sicut ρ, β, (ο, θ, ϲ, ε) 
                // P ][ (µ, ω) 14 ⌈εν⌉ N:  (ε, θ, ο, ϲ), (ν, λι, αι, 
                // δι) ιε (κ, χ) 15 π (α, λ, δ) ⌈ε⌉ N:  sup. et 
                // med. vest. P 16 φ̣[ sin. asc. sicut α, λ, χ, inf. 
                // vert. 17 ω̣(ρ, γ, τ) ⌈κ⌉ N:  (κ, χ) τ⌈ (α, λ, δ) 
                // ⌈λε⌉ O: [ (λ, α, χ, κ, ιϲ) P: [N] 18 ω (π, τ) ι[
                // (ε, θ), inf. vert. 19 λο⌈ (ο, ε), (γ, τ), sup. vest. 
                // ⌈ϲα⌉ N:  (ϲ, ε, θ, ο), (α, λ) P ⌈αυτα⌉ O: [ (α, λ), 
                // inf. vest. P: α[ N ⌉ sin. sup. desc., sup. horiz., 
                // desc. υτα 
                // -1
                //  20 ο̣θ inf. vest. η 
                // -1
                //  21 [
                // sup. horiz., sup. vest., sup. arcus vel horiz. ⌈⌉ sin. 
                // arcus: [PN] 22 ][ sup. vest., desc. ] sup. 
                // vest., (α, λ, δ), sup. vest. 23 ][ sup. vert., (ε, ϲ), 
                // sup. vert.`
                `Col. 64 PHerc. 1004, cr. 5, pz. 1, col. 6 = O Cb (2, 446) = N col. 6 = VH2 III 117 = col. 6 Sudhaus

1 ][ subter lineam vert. apicata sicut ρ, φ, ψ 
2 ]η̣[]ι inf. desc., inf. vest. ⌈τατ⌉ N: [ vert. P: ⌈ατ⌉ O (τ, γ) 
3 ]ξ dext. arcus ⌈α⌉ N:  (α, λ) P 
4 ⌈ν⌉ N: [P] 
5 ⌈ sup. vest., (ε, θ, ο, ϲ) ⌈ιναι⌉ N: ] inf. arcus, (α, λ, δ, ν), sup. vert. ⌈ν⌉ O: [PN] οα̣ (ξ, ζ, π, τ), inf. vest. 
6 υποκωφον̣ηνου[]η punctis suprascriptis del. librarius ⌈τ⌉ ON:  (τ, φ) P 
7 αε (τ, γ) 
8 ⌈α⌉ Npc:  (α, λ) P: µ̣ Nac ⟦⟧ (ε, θ, ο, ϲ) ⌈ι⌉ N:  sup. vest. P 
9 ϲ (α, λ, δ) ⌈α̣⌉ N:  desc. P ⌉[ vest. 
11 pars sinistra diples obelismenes dispicitur α̣ε subter lin. vert., inf. vest. 
13 ⌈ρο⌉ N:  sup. arcus sicut ρ, β, (ο, θ, ϲ, ε) P ][ (µ, ω) 
14 ⌈εν⌉ N:  (ε, θ, ο, ϲ), (ν, λι, αι, δι) ιε (κ, χ) 
15 π (α, λ, δ) ⌈ε⌉ N:  sup. et med. vest. P 
16 φ̣[ sin. asc. sicut α, λ, χ, inf. vert. 
17 ω̣(ρ, γ, τ) ⌈κ⌉ N:  (κ, χ) τ⌈ (α, λ, δ) ⌈λε⌉ O: [ (λ, α, χ, κ, ιϲ) P: [N] 
18 ω (π, τ) ι[(ε, θ), inf. vert. 
19 λο⌈ (ο, ε), (γ, τ), sup. vest. ⌈ϲα⌉ N:  (ϲ, ε, θ, ο), (α, λ) P ⌈αυτα⌉ O: [ (α, λ), inf. vest. P: α[ N ⌉ sin. sup. desc., sup. horiz., desc. υτα -1
20 ο̣θ inf. vest. η -1
21 [sup. horiz., sup. vest., sup. arcus vel horiz. ⌈⌉ sin. arcus: [PN] 
22 ][ sup. vest., desc. ] sup. vest., (α, λ, δ), sup. vest. 
23 ][ sup. vert., (ε, ϲ), sup. vert.`, 'Paleographic Apparatus'),
                children: [],
            },
            'dip-64': {
                id: 'dip-64',
                label: 'Diplomatic Transcription',
                parent: '1',
                component: new DSLInfo('gs-diplomatic', `   Col. 64
    desunt versus fere 19
    ()][()
    ]η̣[]ι⌈τατ⌉ω̣νκ̣ατα̣
    ]ξαν̣αλη̣θηφ⌈α⌉ινε̣
    τειναιπροςηκονα⌈ν⌉τ̣ι
5 ⌈ιναι⌉τακατα⸌ματα̣ια⌈ν⌉⸍δοα̣
    ⟦υποκωφον̣ηνου⌈τ⌉η⟧
    ταεμητηναν̣αφ[
    ρ̣⌈α⌉νεπιταςεν⟦⟧⸌α⸍⌈ι⌉[()
    ςλαμβ̣ανον̣τακ̣⌈α̣⌉[()
10 δ̣ετουτωντελεωςε[
    κ̣α̣ειντουςρητο̣ρα̣[ 
    α̣λλαμηνεντωικατ̣[
    ς̣κευαζειντοπ̣⌈ρο⌉κ[()][
    νονπρος̣ουθ⌈εν⌉ε̣οιεν̣
15 ποτηςμουςικης⌈ε⌉
    παγεινουγ̣αρηνφ̣[
    ω̣τερατα⌈κ⌉αταυτ⌈λε⌉[]
    ωνυπερωνεπ̣οι
    ]υςλο⌈ςα⌉λλατ⌈αυτα⌉
20 ()]νευπ̣αρα̣κολο̣θη̣
    []ςινοντ̣απε⌈⌉[
    ][]β̣ιονεκε[][
23 ]ε̣[][()`, 'Diplomatic Transcription'),
                children: ['paleographic-app-64'],
            },
            'literary-app-64': {
                id: 'literary-app-64',
                label: 'Literary Apparatus',
                parent: 'lit-64',
                component: new DSLInfo('gs-lit-app', `Col. 64
3-8 Sudhaus 
6 ⟦ὑπόκωφον ἦν οὐτ’ η⟧ del. librarius 
7 τά γ̣ε Fiorillo: τά τ̣ε Armstrong 
9-10 [µη]|δέ Sudhaus: [οὐ]|δέ Blank 
10-11 ἐ[πι]|κ{α}ρ̣‹α›τ̣εῖν *: ἐ[ᾶι] | κάπ̣τ̣ειν Henry: ἐ[ᾶι] | κρ̣α̣τ̣εῖν Blank, cetera Cirillo 
12-16 Cirillo 
17-18 λε[ί]|π̣ων *: λέ|[γ]ων Sudhaus 
18 ἐποίε̣ι̣ *: ἐποιε[ῖ]τ’ Sudhaus) 
19 CirilloCpc 
20 Sudhaus 
21 πέφ[υκε Sudhaus: πέφ[ηνε Janko, cetera Sudhaus 
23 πρὸ]ϲ̣ δ̣[έ] *, cetera Sudhaus        
        `, 'Literary Apparatus'),
                children: [],
            },
            'lit-64': {
                id: 'lit-64',
                label: 'Literary Transcription',
                parent: '1',
                component: new DSLInfo('gs-lit', `    Col. 64
    desunt versus fere 19
    ․․․․․․․․․․․₍․₎]․[․․․․₍․₎ 
    ․․]․ η[․]․ ιτα τῶν κατὰ
    δ]ό̣ξαν ἀληθῆ φαίνε-
    τ’ εἶναι προςῆκον ἀντι-
5  θ̣ε̣ῖναι τὰ κατὰ ματαίαν δόξ̣αν̣,
7  τά γ̣ε μὴ τὴν ἀναφ[ο-
    ρὰν ἐπὶ τὰς ἐναρ͙[γεί-
    α̣ς λαμβάνοντα, καὶ̣[μη-
10 δὲ τούτων τελέως ἐ[πι-
    κ{α}ρ̣‹α›τ̣εῖν τοὺς ῥήτορα[ς.

    ἀλλὰ μὴν ἐν τῶι κατ[α-
    ϲκευάζειν τὸ προκ[εί]μ[ε-
    νον πρὸς οὐθὲν ἔοικ̣εν
15 ἀ̣πὸ τῆς μουϲικῆς ἐ-
    πάγειν· οὐ γὰρ ἦν φα̣ν̣[ε-
    ρ̣ώτερα τὰ κατ’ αὐτὰ̣ λε[ί-
    π̣ων, ὑπὲρ ὧν ἐποίε̣ι̣
    το]ὺς λό̣γ̣ου̣ς· ἀλλὰ ταῦτα
20 μὲ]ν εὐπαρακολού̣θη-
    τ̣α̣ π̣[ᾶ]ϲιν ὄντα πέφ[υκε,
    πρὸ]ς δ[ὲ] βίον εκε[]․․․[․
23 ․․․․․․]ε[․․]․․․[․․․․․₍․₎`, 'Literary Transcription'),
                children: ['literary-app-64'],
            },
        };
    }
    rootElements() {
        return mapToArray(this.db)
            .filter((x) => x.parent === undefined);
    }
    path(id) {
        if (!id) {
            return [];
        }
        const { label, parent } = this.db[id] || {};
        if (parent === undefined) {
            return [{ id, label }];
        }
        return [...this.path(parent), { id, label }];
    }
    components(id) {
        if (!id) {
            return { components: [] };
        }
        const d = this.db[id];
        if (d === undefined) {
            return { components: [] };
        }
        const childrenComponents = d.children.map((c) => this.components(c))
            .map(({ components }) => components)
            .reduce((x, y) => [...x, ...y], []);
        const component = d.component !== undefined ? [d.component] : [];
        return { components: [...component, ...childrenComponents] };
    }
    item(id) {
        return this.db[id];
    }
}
MockDataService.ɵfac = function MockDataService_Factory(t) { return new (t || MockDataService)(); };
MockDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MockDataService, factory: MockDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
/*
 *  CophiEditor UI: a collaborative DSL-based web platform for the creation of papyrological critical editions
 *  Copyright (C) 2021 Simone Zenzaro, ILC-CNR
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2.1 of the License, or any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301
 *  USA
 */
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);
/*
 *  CophiEditor UI: a collaborative DSL-based web platform for the creation of papyrological critical editions
 *  Copyright (C) 2021 Simone Zenzaro, ILC-CNR
 *
 *  This library is free software; you can redistribute it and/or
 *  modify it under the terms of the GNU Lesser General Public
 *  License as published by the Free Software Foundation; either
 *  version 2.1 of the License, or any later version.
 *
 *  This library is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 *  Lesser General Public License for more details.
 *
 *  You should have received a copy of the GNU Lesser General Public
 *  License along with this library; if not, write to the Free Software
 *  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301
 *  USA
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map