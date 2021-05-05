(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\38090\OneDrive\桌面\SoftwareEngineeringProject\neededfiles\src\main.ts */"zUnb");


/***/ }),

/***/ "0Xa6":
/*!********************************************!*\
  !*** ./src/app/boards/boards.component.ts ***!
  \********************************************/
/*! exports provided: BoardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsComponent", function() { return BoardsComponent; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _output_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../output.service */ "W7FD");



class BoardsComponent {
    constructor(outputService) {
        this.outputService = outputService;
        this.links = [];
        this.average = 0;
        this.imagePath = '/assets/StartPhase.png';
    }
    ngOnInit() {
        /* 	  console.log('put');
            this.putLinks(); */
        this.getLinks();
    }
    getLinks() {
        this.outputService.getLinks(_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"].toSearch)
            .subscribe(links => {
            this.links = links;
            console.log(this.links);
            console.log(this.links.length);
            /*Here below we calculate the average rating (this wasnt done on a separate functtion because for some
             reason the links were not initiliased when using a separate function !) */
            this.average = 0;
            for (var i = 0; i < this.links.length; i++) {
                this.average = this.average + this.links[i].rating;
                console.log(this.links[i].rating);
            }
            this.average = this.average / this.links.length;
            console.log(this.average);
            if (this.average > 0 && this.average <= 2) {
                this.imagePath = '/assets/FirstPhase.png';
            }
            if (this.average > 2 && this.average <= 4.5) {
                this.imagePath = '/assets/SecondPhase.png';
            }
            if (this.average > 4.5 && this.average <= 6.5) {
                this.imagePath = '/assets/ThirdPhase.png';
            }
            if (this.average > 6.5 && this.average <= 8) {
                this.imagePath = '/assets/FourthPhase.png';
            }
            if (this.average > 8 && this.average <= 9) {
                this.imagePath = '/assets/FifthPhase.png';
            }
            if (this.average > 9 && this.average <= 10) {
                this.imagePath = '/assets/FinalPhase.png';
            }
        });
    }
}
BoardsComponent.ɵfac = function BoardsComponent_Factory(t) { return new (t || BoardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_output_service__WEBPACK_IMPORTED_MODULE_2__["OutputService"])); };
BoardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BoardsComponent, selectors: [["app-boards"]], decls: 6, vars: 1, consts: [[1, "example-card"], [1, "chessbod"], [2, "width", "500px", "height", "500px", 3, "src"]], template: function BoardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Geeks for Geeks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, styles: ["h2[_ngcontent-%COMP%]{\n    color: #5f4141;\n    text-align: center;\n    margin-top: 28px;\n    margin-bottom: 30px;\n    font-size: 35px;\n    letter-spacing: 3px;\n}\n\n.chessbod[_ngcontent-%COMP%]{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoiYm9hcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcbiAgICBjb2xvcjogIzVmNDE0MTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuXG4uY2hlc3Nib2R7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ "5Luu":
/*!******************************************!*\
  !*** ./src/app/links/links.component.ts ***!
  \******************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _input_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input.service */ "jOe+");
/* harmony import */ var _output_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../output.service */ "W7FD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






function LinksComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", link_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r1.name);
} }
/* const LinkData: Link[] =[
{name: 'BLM protest does this', imagePath:'/assets/sample.png'},
{name: 'BLM protest does that', imagePath:'/assets/sample.png'},
{name: 'BLM protest also does this other thing', imagePath:'/assets/sample.png'}
]; */
class LinksComponent {
    //  constructor(private linkService: LinkService) { }
    constructor(inputService, outputService) {
        this.inputService = inputService;
        this.outputService = outputService;
        this.links = [];
    }
    ngOnInit() {
        /* 	  console.log('put');
            this.putLinks(); */
        this.getLinks();
        console.log(_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"].toSearch);
    }
    onSelect(alink) {
        this.selectedLink = alink;
    }
    /* putLinks(): void {
        var j: number;
        for(j=0;j<LinkData.length;j++){
            this.inputService.input(LinkData[j]).subscribe();
        }
    } */
    //getLinks(): void {
    //  this.linkService.getLinks()
    //      .subscribe(links => this.links = links);
    //}
    getLinks() {
        this.outputService.getLinks(_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"].toSearch)
            .subscribe(links => {
            this.links = links;
            console.log(this.links);
        });
    }
}
LinksComponent.ɵfac = function LinksComponent_Factory(t) { return new (t || LinksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_input_service__WEBPACK_IMPORTED_MODULE_2__["InputService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_output_service__WEBPACK_IMPORTED_MODULE_3__["OutputService"])); };
LinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LinksComponent, selectors: [["app-links"]], decls: 4, vars: 1, consts: [[1, "links"], ["class", "title", 4, "ngFor", "ngForOf"], [1, "title"], [3, "routerLink"], [1, "badge"]], template: function LinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "All links");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LinksComponent_li_3_Template, 4, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["h1[_ngcontent-%COMP%]{\n    color: #5f4141;\n    text-align: center;\n    margin-top: 28px;\n    margin-bottom: 40px;\n    font-size: 35px;\n    letter-spacing: 3px;\n  }\n\n.links[_ngcontent-%COMP%]{\n    font-size: 20px;\n    margin-left: 30px;\n}\n\n.title[_ngcontent-%COMP%]{\n    margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmtzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7QUFFRjtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoibGlua3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICAgIGNvbG9yOiAjNWY0MTQxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIH1cblxuLmxpbmtze1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnRpdGxle1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"] });


/***/ }),

/***/ "7iZr":
/*!**********************************************!*\
  !*** ./src/app/ratings/ratings.component.ts ***!
  \**********************************************/
/*! exports provided: RatingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingsComponent", function() { return RatingsComponent; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _output_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../output.service */ "W7FD");
/* harmony import */ var _update_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../update.service */ "H4zW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function RatingsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](link_r2.rating);
} }
class RatingsComponent {
    constructor(outputService, updateService) {
        this.outputService = outputService;
        this.updateService = updateService;
        this.links = [];
        this.j = 0;
    }
    getLinks() {
        this.outputService.getLinks(_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"].toSearch)
            .subscribe(links => {
            this.links = links;
            console.log(this.links);
        });
    }
    ngOnInit() {
        this.getLinks();
    }
    add(value) {
        if (!value) {
            return;
        }
        if (this.j >= this.links.length) {
            return;
        }
        console.log(this.j);
        console.log(this.links.length);
        var toChange = {
            name: this.links[this.j].name,
            imagePath: this.links[this.j].imagePath,
            rating: value
        };
        console.log('tochange' + toChange.name);
        this.updateService.update(toChange)
            .subscribe();
        this.getLinks();
        this.j++;
    }
    convertToNumber(string) {
        var flag = false;
        if (string.length > 2) {
            return 0;
        }
        if (string.length == 2) {
            if (string.charCodeAt(0) != 49 || string.charCodeAt(1) != 48) {
                return 0;
            }
            return 10;
        }
        if (string.charCodeAt(0) < 49 || string.charCodeAt(0) > 57)
            return 0;
        return string.charCodeAt(0) - 48;
    }
}
RatingsComponent.ɵfac = function RatingsComponent_Factory(t) { return new (t || RatingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_output_service__WEBPACK_IMPORTED_MODULE_2__["OutputService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_update_service__WEBPACK_IMPORTED_MODULE_3__["UpdateService"])); };
RatingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RatingsComponent, selectors: [["app-ratings"]], decls: 11, vars: 1, consts: [[1, "rating"], ["type", "number", 1, "input"], ["rating", ""], [1, "add-button", 3, "click"], [1, "links"], ["class", "lr", 4, "ngFor", "ngForOf"], [1, "lr"], [1, "badge1"], [1, "badge2"]], template: function RatingsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "My Ratings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Please give every link a rating(score 1 to 10)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RatingsComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6); ctx.add(ctx.convertToNumber(_r0.value)); return _r0.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\nAdd rating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, RatingsComponent_div_10_Template, 6, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["input[_ngcontent-%COMP%] {\n  padding: .5rem;\n}\nh1[_ngcontent-%COMP%]{\n  color: #5f4141;\n  text-align: center;\n  margin-top: 28px;\n  margin-bottom: 10px;\n  font-size: 35px;\n  letter-spacing: 3px;\n}\nh2[_ngcontent-%COMP%]{\n  margin-left: 50px;\n  color: #363636;\n}\n.rating[_ngcontent-%COMP%]{\n  margin-bottom: 15px;\n  margin-top: 5px;\n}\n.input[_ngcontent-%COMP%]{\n  margin-left: 50px;\n}\n.add-button[_ngcontent-%COMP%]{\n  margin-left: 30px;\n  height: 22px;\n  color: rgb(238, 238, 238);\n  background-color: #3f525c;\n}\n.add-button[_ngcontent-%COMP%]:hover{\n  background: #253741;\n  cursor: pointer;\n}\n.add-button[_ngcontent-%COMP%]:focus{\n  outline: none;\n}\n.links[_ngcontent-%COMP%]{\n  text-align: center;\n  padding: 0;\n  margin: 0;\n}\n.lr[_ngcontent-%COMP%]{\n  text-align: center;\n  margin-bottom: 20px;\n  float: left;\n}\n.badge1[_ngcontent-%COMP%]{\n  background: rgba(117, 117, 117, 0.5);\n  height: 110px;\n  width: 110px;\n  padding: 20px;\n  margin-left: 50px;\n  margin-right: 30px;\n  text-align: center;\n  margin-top: 8px;\n}\n.badge2[_ngcontent-%COMP%]{\n  background-color: rgb(214, 214, 214);\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  font-size: 10px;\n  margin-left: 110px;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQ0FBMEM7QUFDMUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF3Q0U7QUFFRjtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7QUFDWDtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InJhdGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFJhdGluZ3NDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbi8qLnJhdGluZ3MgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgbWFyZ2luOiAuNWVtO1xuICBwYWRkaW5nOiAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5yYXRpbmdzIGxpOmhvdmVyIHtcbiAgY29sb3I6ICMyYzNhNDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIGxlZnQ6IC4xZW07XG59XG4ucmF0aW5ncyBsaS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG4ucmF0aW5ncyBsaS5zZWxlY3RlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5yYXRpbmdzIGxpLnNlbGVjdGVkOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG4ucmF0aW5ncyAuYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxO1xuICBsaW5lLWhlaWdodDogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC0xcHg7XG4gIHRvcDogLTRweDtcbiAgaGVpZ2h0OiAxLjhlbTtcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcbn0qL1xuXG5pbnB1dCB7XG4gIHBhZGRpbmc6IC41cmVtO1xufVxuXG5oMXtcbiAgY29sb3I6ICM1ZjQxNDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xufVxuXG5oMntcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGNvbG9yOiAjMzYzNjM2O1xufVxuXG4ucmF0aW5ne1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5pbnB1dHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5hZGQtYnV0dG9ue1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBjb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MjVjO1xufVxuXG4uYWRkLWJ1dHRvbjpob3ZlcntcbiAgYmFja2dyb3VuZDogIzI1Mzc0MTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLWJ1dHRvbjpmb2N1c3tcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmxpbmtze1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uYmFkZ2Uxe1xuICBiYWNrZ3JvdW5kOiByZ2JhKDExNywgMTE3LCAxMTcsIDAuNSk7XG4gIGhlaWdodDogMTEwcHg7XG4gIHdpZHRoOiAxMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5iYWRnZTJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTQsIDIxNCwgMjE0KTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ "AytR":
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

/***/ "DruN":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "OdHV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function MessagesComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r2, " ");
} }
function MessagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.messageService.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Clear messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessagesComponent_div_0_div_5_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.messageService.messages);
} }
class MessagesComponent {
    constructor(messageService) {
        this.messageService = messageService;
    }
    ngOnInit() {
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"])); };
MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "clear", 3, "click"], [4, "ngFor", "ngForOf"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 6, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["h2[_ngcontent-%COMP%] {\n  color: #A80000;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\n.clear[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: #eee;\n  margin-bottom: 12px;\n  padding: 1rem;\n  border-radius: 4px;\n  font-size: 1rem;\n}\n.clear[_ngcontent-%COMP%]:hover {\n  color: white;\n  background-color: #42545C;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDO0VBQ0UsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVzc2FnZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbmgyIHtcbiAgY29sb3I6ICNBODAwMDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxuLmNsZWFyIHtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmNsZWFyOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI1NDVDO1xufVxuIl19 */"] });


/***/ }),

/***/ "H4zW":
/*!***********************************!*\
  !*** ./src/app/update.service.ts ***!
  \***********************************/
/*! exports provided: UpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateService", function() { return UpdateService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "OdHV");




class UpdateService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.REST_API_SERVER = "http://localhost:9999/update";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    update(links) {
        console.log('update');
        return this.http.post(this.REST_API_SERVER, links, this.httpOptions);
    }
}
UpdateService.ɵfac = function UpdateService_Factory(t) { return new (t || UpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"])); };
UpdateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateService, factory: UpdateService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "OdHV":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/links"]; };
//import { Hero } from '../hero';
//import { HeroService } from '../hero.service';
//import { Link } from '../link';
//import { LinkService } from '../link.service';
class DashboardComponent {
    constructor() { }
    /* links: Link[] = [];
    
      constructor(private linkService: LinkService) { }
    
      ngOnInit() {
        this.getLinks();
      }
    
      getLinks(): void {
        this.linkService.getLinks()
          .subscribe(links => this.links = links.slice(1, 5));
      } */
    save(s) {
        DashboardComponent.toSearch = s;
    }
    ngOnInit() { }
}
DashboardComponent.toSearch = '?';
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 14, vars: 2, consts: [[1, "index"], [1, "title"], [1, "form-box"], ["type", "text", "placeholder", "Topic", 1, "search-field", "Topic"], ["toSearch", ""], ["routerLinkActive", "router-link-active", 3, "routerLink"], ["type", "button", 1, "search-btn", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Find News For You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Loads of news you want to know, give a visualiser for your news.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.save(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["body[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  color: #5f4141;\r\n  margin-bottom: 30px;\r\n  margin-top: 150px;\r\n  font-size: 50px;\r\n  letter-spacing: 3px;\r\n  text-align: center;\r\n  word-spacing: 8px;\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n  color: rgb(90, 90, 90);\r\n}\r\n\r\n.search-field[_ngcontent-%COMP%]{\r\n  width: 300px;\r\n  height: 30px;\r\n  padding: 15px;\r\n  border: none;\r\n  border-radius: 10px;\r\n  outline: none;\r\n  margin-left: 20px;\r\n  font-style: italic;\r\n}\r\n\r\n.Topic[_ngcontent-%COMP%]{\r\n  width: 550px;\r\n  font-size: 15px;\r\n}\r\n\r\n.search-btn[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  width: 150px;\r\n  border: none;\r\n  background-color: #3f525c;\r\n  border-radius: 25px; \r\n  margin-left: 70px;\r\n  color: rgb(238, 238, 238);\r\n  font-size: 15px;\r\n}\r\n\r\n.search-btn[_ngcontent-%COMP%]:hover{\r\n  background: #253741;\r\n  cursor: pointer;\r\n}\r\n\r\n.search-btn[_ngcontent-%COMP%]:focus{\r\n  outline: none;\r\n}\r\n\r\n.form-box[_ngcontent-%COMP%]{\r\n  background: rgba(117, 117, 117, 0.5);\r\n  padding: 20px;\r\n  margin-left: 100px;\r\n  margin-right: 100px;\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0Qzs7QUFFNUM7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5cclxuYm9keXtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaDF7XHJcbiAgY29sb3I6ICM1ZjQxNDE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBtYXJnaW4tdG9wOiAxNTBweDtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd29yZC1zcGFjaW5nOiA4cHg7XHJcbn1cclxuaDJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgY29sb3I6IHJnYig5MCwgOTAsIDkwKTtcclxufVxyXG4uc2VhcmNoLWZpZWxke1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG4uVG9waWN7XHJcbiAgd2lkdGg6IDU1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnNlYXJjaC1idG57XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTI1YztcclxuICBib3JkZXItcmFkaXVzOiAyNXB4OyBcclxuICBtYXJnaW4tbGVmdDogNzBweDtcclxuICBjb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4uc2VhcmNoLWJ0bjpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjMjUzNzQxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2VhcmNoLWJ0bjpmb2N1c3tcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uZm9ybS1ib3h7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxMTcsIDExNywgMTE3LCAwLjUpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _input_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.service */ "jOe+");
/* harmony import */ var _update_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update.service */ "H4zW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




const LinkData = [
    { name: 'USA: Law enforcement violated Black Lives Matter protesters’ human rights, documents acts of police violence and excessive Force', imagePath: '/assets/sample1.png', rating: 0 },
    { name: 'As protests continue over police killings, lawmakers try to add to the list of crimes protesters could face', imagePath: '/assets/sample2.png', rating: 0 },
    { name: 'Black Lives Matters activists outline policy goals', imagePath: '/assets/sample3.png', rating: 0 },
    { name: 'Protests In White And Black, And The Different Response Of Law Enforcement', imagePath: '/assets/sample4.png', rating: 0 },
    { name: 'Republicans Respond to Black Lives Matter with Anti-Protest Bills', imagePath: '/assets/sample5.png', rating: 0 },
    { name: 'The Double Standard for Policing Capitol Rioters and BLM Protesters', imagePath: '/assets/sample6.png', rating: 0 },
    { name: 'The United States has its best opportunity in 150 years to belatedly fulfill its promise as a multiracial democracy.', imagePath: '/assets/sample7.png', rating: 0 },
    { name: 'Republicans push ‘tsunami’ of harsh anti-protest laws after BLM rallies', imagePath: '/assets/sample8.png', rating: 0 },
    { name: 'The birth of a militia: how an armed group polices Black Lives Matter protests', imagePath: '/assets/sample9.png', rating: 0 },
    { name: 'Killings by Police Declined after Black Lives Matter Protests', imagePath: '/assets/sample10.png', rating: 0 },
    { name: 'From Civil Rights to Black Lives Matter', imagePath: '/assets/sample11.png', rating: 0 },
    { name: 'From the Black Panthers to Black Lives Matter, the ongoing fight to end police violence against black Americans', imagePath: '/assets/sample12.png', rating: 0 },
    { name: 'Black Lives Matter protests and the Capitol assault: Comparing the police response', imagePath: '/assets/sample13.png', rating: 0 },
    { name: 'What If The Capital Rioters Were Black? The Contrasting Police Response To Black Lives Matter Vs Trump Mob', imagePath: '/assets/sample14.png', rating: 0 },
    { name: 'Rioters breached US Capitol security on Wednesday. This was the police response when it was Black protesters on DC streets last year', imagePath: '/assets/sample15.png', rating: 0 },
    { name: 'False equivalency between Black Lives Matter and Capitol siege: Experts, advocates', imagePath: '/assets/sample16.png', rating: 0 },
    { name: 'BLACK LIVES MATTER PROTESTS: WHAT’S BEEN ACHIEVED SO FAR', imagePath: '/assets/sample17.png', rating: 0 },
    { name: 'People Are Contrasting Photos From The Attempted Capitol Coup With Those From Black Lives Matter Protests', imagePath: '/assets/sample18.png', rating: 0 },
    { name: 'BLACK LIVES MATTER: HOW SHOULD WE RESPOND?', imagePath: '/assets/sample19.png', rating: 0 },
    { name: 'In 2020, the Black Lives Matter movement shook the world', imagePath: '/assets/sample20.png', rating: 0 },
];
class AppComponent {
    constructor(inputService, updateService) {
        this.inputService = inputService;
        this.updateService = updateService;
        this.title = 'CauseVisualiser';
    }
    ngOnInit() {
        this.putLinks();
    }
    putLinks() {
        var j;
        for (j = 0; j < LinkData.length; j++) {
            this.inputService.input(LinkData[j]).subscribe();
            this.updateService.update(LinkData[j]).subscribe();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_input_service__WEBPACK_IMPORTED_MODULE_1__["InputService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_update_service__WEBPACK_IMPORTED_MODULE_2__["UpdateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 0, consts: [[1, "bkg"], ["src", "./assets/img/background.jpeg", "width", "100%", "alt", ""], [1, "header"], [1, "nav"], [1, "logo"], ["src", "./assets/img/logo.png", "alt", ""], [1, "navList"], ["routerLink", "/dashboard", 1, "navItem"], ["routerLink", "/links", 1, "navItem"], ["routerLink", "/ratings", 1, "navItem"], ["routerLink", "/boards", 1, "navItem"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ratings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".header[_ngcontent-%COMP%]{\r\n  min-width: 960px;\r\n  height: 60px;\r\n  background-color: rgba(131, 131, 131, 0.63);\r\n}\r\n.nav[_ngcontent-%COMP%]{\r\n  width: 960px;\r\n  margin: 0 30px;\r\n  display: flex;\r\n  height: 58px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n   height: 170px;\r\n   width: auto;\r\n   margin-top: 5px;\r\n}\r\n.navList[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n.navItem[_ngcontent-%COMP%]{\r\n  width: 170px;\r\n  height: 55px;\r\n  text-align: center;\r\n  line-height: 60px;\r\n  font-size: 18px;\r\n  color: rgb(46, 46, 46);\r\n}\r\n.navItem[_ngcontent-%COMP%]:hover{\r\n  background: rgba(48, 48, 48, 0.219);\r\n  text-decoration:none;\r\n}\r\n.navItem[_ngcontent-%COMP%]:focus{\r\n  outline: none;\r\n}\r\n.bkg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  text-align: center;\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n  z-index: -1;\r\n  background-size: 100% 100%;\r\n  background-attachment: fixed;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUFzQztBQUN0QztFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMkNBQTJDO0FBQzdDO0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGFBQWE7RUFDYixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjtBQUNBO0dBQ0csYUFBYTtHQUNiLFdBQVc7R0FDWCxlQUFlO0FBQ2xCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxtQ0FBbUM7RUFDbkMsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLDRCQUE0QjtBQUM5QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG4uaGVhZGVye1xyXG4gIG1pbi13aWR0aDogOTYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTMxLCAxMzEsIDEzMSwgMC42Myk7XHJcbn1cclxuXHJcbi5uYXZ7XHJcbiAgd2lkdGg6IDk2MHB4O1xyXG4gIG1hcmdpbjogMCAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiA1OHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sb2dvIGltZ3tcclxuICAgaGVpZ2h0OiAxNzBweDtcclxuICAgd2lkdGg6IGF1dG87XHJcbiAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLm5hdkxpc3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm5hdkl0ZW17XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiByZ2IoNDYsIDQ2LCA0Nik7XHJcbn1cclxuLm5hdkl0ZW06aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg0OCwgNDgsIDQ4LCAwLjIxOSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuLm5hdkl0ZW06Zm9jdXN7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJrZyBpbWd7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "W7FD":
/*!***********************************!*\
  !*** ./src/app/output.service.ts ***!
  \***********************************/
/*! exports provided: OutputService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputService", function() { return OutputService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "OdHV");






class OutputService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.REST_API_SERVER = "http://localhost:9999/getall";
    }
    getLinks(name) {
        return this.http.get(this.REST_API_SERVER + "/search?name=" + name, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(_ => this.log('fetched links')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getLinks', [])));
    }
    log(message) {
        this.messageService.add(`linkService: ${message}`);
    }
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(result);
        };
    }
}
OutputService.ɵfac = function OutputService_Factory(t) { return new (t || OutputService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"])); };
OutputService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: OutputService, factory: OutputService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _input_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input.service */ "jOe+");
/* harmony import */ var _output_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./output.service */ "W7FD");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages/messages.component */ "DruN");
/* harmony import */ var _boards_boards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./boards/boards.component */ "0Xa6");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ratings/ratings.component */ "7iZr");
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./links/links.component */ "5Luu");
/* harmony import */ var _link_detail_link_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./link-detail/link-detail.component */ "Zouw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");






//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';










//import { LinkSearchComponent } from './link-search/link-search.component';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        _input_service__WEBPACK_IMPORTED_MODULE_4__["InputService"],
        _output_service__WEBPACK_IMPORTED_MODULE_5__["OutputService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
            // and returns simulated server responses.
            // Remove it when a real server is ready to receive requests.
            /*     HttpClientInMemoryWebApiModule.forRoot(
                  InMemoryDataService, { dataEncapsulation: false }
                ), */
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        _messages_messages_component__WEBPACK_IMPORTED_MODULE_9__["MessagesComponent"],
        _boards_boards_component__WEBPACK_IMPORTED_MODULE_10__["BoardsComponent"],
        _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_12__["RatingsComponent"],
        _links_links_component__WEBPACK_IMPORTED_MODULE_13__["LinksComponent"],
        _link_detail_link_detail_component__WEBPACK_IMPORTED_MODULE_14__["LinkDetailComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        /*     HttpClientInMemoryWebApiModule.forRoot(
              InMemoryDataService, { dataEncapsulation: false }
            ), */
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "Zouw":
/*!******************************************************!*\
  !*** ./src/app/link-detail/link-detail.component.ts ***!
  \******************************************************/
/*! exports provided: LinkDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkDetailComponent", function() { return LinkDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _output_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../output.service */ "W7FD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");





function LinkDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Link name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r0.link.name), " Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.link.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.link.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
//import { LinkService } from '../link.service';
class LinkDetailComponent {
    constructor(route, outputService, location) {
        this.route = route;
        this.outputService = outputService;
        this.location = location;
    }
    ngOnInit() {
        this.getLink();
    }
    getLink() {
        var name = this.route.snapshot.paramMap.get('name');
        if (name == null) {
            name = "0";
        }
        this.outputService.getLinks(name)
            .subscribe(links => this.link = links[0]);
    }
    goBack() {
        this.location.back();
    }
}
LinkDetailComponent.ɵfac = function LinkDetailComponent_Factory(t) { return new (t || LinkDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_output_service__WEBPACK_IMPORTED_MODULE_2__["OutputService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
LinkDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkDetailComponent, selectors: [["app-link-detail"]], inputs: { link: "link" }, decls: 3, vars: 1, consts: [[4, "ngIf"], [3, "click"], ["for", "link-name"], [2, "max-width", "600px", "height", "auto", 3, "src"]], template: function LinkDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LinkDetailComponent_div_0_Template, 13, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LinkDetailComponent_Template_button_click_1_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.link);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5rLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "jOe+":
/*!**********************************!*\
  !*** ./src/app/input.service.ts ***!
  \**********************************/
/*! exports provided: InputService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputService", function() { return InputService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class InputService {
    constructor(http) {
        this.http = http;
        this.REST_API_SERVER = "http://localhost:9999/newlink";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    input(links) {
        console.log('input');
        return this.http.post(this.REST_API_SERVER, links, this.httpOptions);
    }
}
InputService.ɵfac = function InputService_Factory(t) { return new (t || InputService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
InputService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InputService, factory: InputService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _boards_boards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boards/boards.component */ "0Xa6");
/* harmony import */ var _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ratings/ratings.component */ "7iZr");
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./links/links.component */ "5Luu");
/* harmony import */ var _link_detail_link_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./link-detail/link-detail.component */ "Zouw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
    { path: 'detail/:name', component: _link_detail_link_detail_component__WEBPACK_IMPORTED_MODULE_5__["LinkDetailComponent"] },
    { path: 'links', component: _links_links_component__WEBPACK_IMPORTED_MODULE_4__["LinksComponent"] },
    { path: 'ratings', component: _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_3__["RatingsComponent"] },
    { path: 'boards', component: _boards_boards_component__WEBPACK_IMPORTED_MODULE_2__["BoardsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map