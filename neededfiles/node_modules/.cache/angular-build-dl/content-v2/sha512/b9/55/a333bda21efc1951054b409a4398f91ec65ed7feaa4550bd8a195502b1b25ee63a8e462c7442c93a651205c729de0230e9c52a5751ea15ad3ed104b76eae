(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\38090\OneDrive\文档\GitHub\SoftwareEngineeringProject\neededfiles\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0Xa6":
    /*!********************************************!*\
      !*** ./src/app/boards/boards.component.ts ***!
      \********************************************/

    /*! exports provided: BoardsComponent */

    /***/
    function Xa6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BoardsComponent", function () {
        return BoardsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../in-memory-data.service */
      "FUlj");
      /* harmony import */


      var _rating_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../rating.service */
      "wn0j");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");

      var BoardsComponent = /*#__PURE__*/function () {
        function BoardsComponent(inmemorydataService, ratingService) {
          var _this = this;

          _classCallCheck(this, BoardsComponent);

          //image location
          this.myRatings = [];
          ratingService.getRatings().subscribe(function (rating) {
            return _this.myRatings = rating;
          });
          this.ImagePath = '/assets/sample.png';
        }

        _createClass(BoardsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BoardsComponent;
      }();

      BoardsComponent.ɵfac = function BoardsComponent_Factory(t) {
        return new (t || BoardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_in_memory_data_service__WEBPACK_IMPORTED_MODULE_1__["InMemoryDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rating_service__WEBPACK_IMPORTED_MODULE_2__["RatingService"]));
      };

      BoardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BoardsComponent,
        selectors: [["app-boards"]],
        decls: 7,
        vars: 1,
        consts: [[1, "example-card"], [1, "example-header", 2, "padding-left", "40%"], [2, "width", "600px", "height", "400px", 3, "src"]],
        template: function BoardsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "GeeksforGeeks");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.ImagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2FyZHMuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "7iZr":
    /*!**********************************************!*\
      !*** ./src/app/ratings/ratings.component.ts ***!
      \**********************************************/

    /*! exports provided: RatingsComponent */

    /***/
    function iZr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatingsComponent", function () {
        return RatingsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _rating_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../rating.service */
      "wn0j");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RatingsComponent_li_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var rating_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rating_r2.value);
        }
      }

      var RatingsComponent = /*#__PURE__*/function () {
        function RatingsComponent(ratingService) {
          _classCallCheck(this, RatingsComponent);

          this.ratingService = ratingService;
          this.ratings = [];
        }

        _createClass(RatingsComponent, [{
          key: "getRatings",
          value: function getRatings() {
            var _this2 = this;

            this.ratingService.getRatings().subscribe(function (ratings) {
              return _this2.ratings = ratings;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getRatings();
          }
        }, {
          key: "add",
          value: function add(value) {
            var _this3 = this;

            if (!value) {
              return;
            }

            this.ratingService.addRating({
              value: value
            }).subscribe(function (rating) {
              _this3.ratings.push(rating);
            });
          }
        }, {
          key: "convertToNumber",
          value: function convertToNumber(string) {
            var flag = false;

            for (var i = 0; i < string.length; i++) {
              if (string.charCodeAt(i) < 48 || string.charCodeAt(i) > 57) {
                flag = true;
              }
            }

            if (flag == false) {
              return parseInt(string);
            } else {
              return 0;
            }
          }
        }]);

        return RatingsComponent;
      }();

      RatingsComponent.ɵfac = function RatingsComponent_Factory(t) {
        return new (t || RatingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_rating_service__WEBPACK_IMPORTED_MODULE_1__["RatingService"]));
      };

      RatingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RatingsComponent,
        selectors: [["app-ratings"]],
        decls: 9,
        vars: 1,
        consts: [[1, "ratings"], [4, "ngFor", "ngForOf"], ["type", "number"], ["rating", ""], [1, "add-button", 3, "click"], [1, "badge"]],
        template: function RatingsComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Ratings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RatingsComponent_li_3_Template, 3, 1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RatingsComponent_Template_button_click_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

              ctx.add(ctx.convertToNumber(_r1.value));
              return _r1.value = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\nAdd rating ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ratings);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: [".ratings[_ngcontent-%COMP%] {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.ratings[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.ratings[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  color: #2c3a41;\r\n  background-color: #e6e6e6;\r\n  left: .1em;\r\n}\r\n.ratings[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n.ratings[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\r\n  background-color: #505050;\r\n  color: white;\r\n}\r\n.ratings[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:active {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n.ratings[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color:#405061;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  padding: .5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhdGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQ0FBMEM7QUFDMUM7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsVUFBVTtBQUNaO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJyYXRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSYXRpbmdzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbi5yYXRpbmdzIHtcclxuICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTVlbTtcclxufVxyXG4ucmF0aW5ncyBsaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgbWFyZ2luOiAuNWVtO1xyXG4gIHBhZGRpbmc6IC4zZW0gMDtcclxuICBoZWlnaHQ6IDEuNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ucmF0aW5ncyBsaTpob3ZlciB7XHJcbiAgY29sb3I6ICMyYzNhNDE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcclxuICBsZWZ0OiAuMWVtO1xyXG59XHJcbi5yYXRpbmdzIGxpLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnJhdGluZ3MgbGkuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MDUwNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yYXRpbmdzIGxpLnNlbGVjdGVkOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5yYXRpbmdzIC5iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0xcHg7XHJcbiAgdG9wOiAtNHB4O1xyXG4gIGhlaWdodDogMS44ZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "AQgH":
    /*!******************************************************!*\
      !*** ./src/app/hero-search/hero-search.component.ts ***!
      \******************************************************/

    /*! exports provided: HeroSearchComponent */

    /***/
    function AQgH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeroSearchComponent", function () {
        return HeroSearchComponent;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _hero_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../hero.service */
      "alFv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function HeroSearchComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hero_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r2.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", hero_r2.name, " ");
        }
      }

      var HeroSearchComponent = /*#__PURE__*/function () {
        function HeroSearchComponent(heroService) {
          _classCallCheck(this, HeroSearchComponent);

          this.heroService = heroService;
          this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        } // Push a search term into the observable stream.


        _createClass(HeroSearchComponent, [{
          key: "search",
          value: function search(term) {
            this.searchTerms.next(term);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.heroes$ = this.searchTerms.pipe( // wait 300ms after each keystroke before considering the term
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(300), // ignore new term if same as previous term
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(), // switch to new search observable each time the term changes
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (term) {
              return _this4.heroService.searchHeroes(term);
            }));
          }
        }]);

        return HeroSearchComponent;
      }();

      HeroSearchComponent.ɵfac = function HeroSearchComponent_Factory(t) {
        return new (t || HeroSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_3__["HeroService"]));
      };

      HeroSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: HeroSearchComponent,
        selectors: [["app-hero-search"]],
        decls: 8,
        vars: 3,
        consts: [["id", "search-component"], ["for", "search-box"], ["id", "search-box", 3, "input"], ["searchBox", ""], [1, "search-result"], [4, "ngFor", "ngForOf"], [3, "routerLink"]],
        template: function HeroSearchComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Hero Search");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function HeroSearchComponent_Template_input_input_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);

              return ctx.search(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HeroSearchComponent_li_6_Template, 3, 2, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 1, ctx.heroes$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: ["label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-weight: bold;\r\n  font-size: 1.2rem;\r\n  margin-top: 1rem;\r\n  margin-bottom: .5rem;\r\n\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  padding: .5rem;\r\n  width: 100%;\r\n  max-width: 600px;\r\n  box-sizing: border-box;\r\n  display: block;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\r\n  outline: #336699 auto 1px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\n\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid gray;\r\n  border-left: 1px solid gray;\r\n  border-right: 1px solid gray;\r\n  display: inline-block;\r\n  width: 100%;\r\n  max-width: 600px;\r\n  padding: .5rem;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n  color: black;\r\n}\r\n\r\n.search-result[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #435A60;\r\n  color: white;\r\n}\r\n\r\nul.search-result[_ngcontent-%COMP%] {\r\n  margin-top: 0;\r\n  padding-left: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEJBQThCOztBQUU5QjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7O0FBRXRCOztBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakIiLCJmaWxlIjoiaGVyby1zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9TZWFyY2ggcHJpdmF0ZSBzdHlsZXMgKi9cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG5cclxufVxyXG5pbnB1dCB7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogIzMzNjY5OSBhdXRvIDFweDtcclxufVxyXG5cclxubGkge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4uc2VhcmNoLXJlc3VsdCBsaSBhIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA2MDBweDtcclxuICBwYWRkaW5nOiAuNXJlbTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0IGxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzVBNjA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG51bC5zZWFyY2gtcmVzdWx0IHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "DruN":
    /*!************************************************!*\
      !*** ./src/app/messages/messages.component.ts ***!
      \************************************************/

    /*! exports provided: MessagesComponent */

    /***/
    function DruN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
        return MessagesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../message.service */
      "OdHV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function MessagesComponent_div_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", message_r2, " ");
        }
      }

      function MessagesComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MessagesComponent_div_0_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.messageService.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Clear messages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessagesComponent_div_0_div_5_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.messageService.messages);
        }
      }

      var MessagesComponent = /*#__PURE__*/function () {
        function MessagesComponent(messageService) {
          _classCallCheck(this, MessagesComponent);

          this.messageService = messageService;
        }

        _createClass(MessagesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MessagesComponent;
      }();

      MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
        return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]));
      };

      MessagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MessagesComponent,
        selectors: [["app-messages"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "clear", 3, "click"], [4, "ngFor", "ngForOf"]],
        template: function MessagesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessagesComponent_div_0_Template, 6, 1, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageService.messages.length);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["h2[_ngcontent-%COMP%] {\r\n  color: #A80000;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\n.clear[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  background-color: #eee;\r\n  margin-bottom: 12px;\r\n  padding: 1rem;\r\n  border-radius: 4px;\r\n  font-size: 1rem;\r\n}\r\n.clear[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n  background-color: #42545C;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBQzNDO0VBQ0UsY0FBYztFQUNkLHlDQUF5QztFQUN6QyxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWVzc2FnZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuaDIge1xyXG4gIGNvbG9yOiAjQTgwMDAwO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcblxyXG4uY2xlYXIge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuLmNsZWFyOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNTQ1QztcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "FUlj":
    /*!*******************************************!*\
      !*** ./src/app/in-memory-data.service.ts ***!
      \*******************************************/

    /*! exports provided: InMemoryDataService */

    /***/
    function FUlj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function () {
        return InMemoryDataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var InMemoryDataService = /*#__PURE__*/function () {
        function InMemoryDataService() {
          _classCallCheck(this, InMemoryDataService);
        }

        _createClass(InMemoryDataService, [{
          key: "createDb",
          value: function createDb() {
            var heroes = [{
              id: 11,
              name: 'Dr Nice'
            }, {
              id: 12,
              name: 'Narco'
            }, {
              id: 13,
              name: 'Bombasto'
            }, {
              id: 14,
              name: 'Celeritas'
            }, {
              id: 15,
              name: 'Magneta'
            }, {
              id: 16,
              name: 'RubberMan'
            }, {
              id: 17,
              name: 'Dynama'
            }, {
              id: 18,
              name: 'Dr IQ'
            }, {
              id: 19,
              name: 'Magma'
            }, {
              id: 20,
              name: 'Tornado'
            }];
            var ratings = [{
              value: 1
            }, {
              value: 2
            }, {
              value: 3
            }];
            return {
              heroes: heroes,
              ratings: ratings
            };
          } // Overrides the genId method to ensure that a hero always has an id.
          // If the heroes array is empty,
          // the method below returns the initial number (11).
          // if the heroes array is not empty, the method below returns the highest
          // hero id + 1.

        }, {
          key: "genId",
          value: function genId(heroes) {
            return heroes.length > 0 ? Math.max.apply(Math, _toConsumableArray(heroes.map(function (hero) {
              return hero.id;
            }))) + 1 : 11;
          }
        }, {
          key: "genValue",
          value: function genValue(ratings) {
            return ratings.length > 0 ? Math.max.apply(Math, _toConsumableArray(ratings.map(function (rating) {
              return rating.value;
            }))) + 1 : 11;
          }
        }]);

        return InMemoryDataService;
      }();

      InMemoryDataService.ɵfac = function InMemoryDataService_Factory(t) {
        return new (t || InMemoryDataService)();
      };

      InMemoryDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InMemoryDataService,
        factory: InMemoryDataService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "OdHV":
    /*!************************************!*\
      !*** ./src/app/message.service.ts ***!
      \************************************/

    /*! exports provided: MessageService */

    /***/
    function OdHV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MessageService", function () {
        return MessageService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MessageService = /*#__PURE__*/function () {
        function MessageService() {
          _classCallCheck(this, MessageService);

          this.messages = [];
        }

        _createClass(MessageService, [{
          key: "add",
          value: function add(message) {
            this.messages.push(message);
          }
        }, {
          key: "clear",
          value: function clear() {
            this.messages = [];
          }
        }]);

        return MessageService;
      }();

      MessageService.ɵfac = function MessageService_Factory(t) {
        return new (t || MessageService)();
      };

      MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MessageService,
        factory: MessageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "QX6l":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function QX6l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../hero.service */
      "alFv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../hero-search/hero-search.component */
      "AQgH");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function DashboardComponent_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hero_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hero_r1.name, " ");
        }
      }

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(heroService) {
          _classCallCheck(this, DashboardComponent);

          this.heroService = heroService;
          this.heroes = [];
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getHeroes();
          }
        }, {
          key: "getHeroes",
          value: function getHeroes() {
            var _this5 = this;

            this.heroService.getHeroes().subscribe(function (heroes) {
              return _this5.heroes = heroes.slice(1, 5);
            });
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]));
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 5,
        vars: 1,
        consts: [[1, "heroes-menu"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Top Heroes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_a_3_Template, 2, 2, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-hero-search");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heroes);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_3__["HeroSearchComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
        styles: ["h2[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.heroes-menu[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: auto;\r\n  max-width: 1000px;\r\n\r\n  \r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: space-around;\r\n  align-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  background-color: #3f525c;\r\n  border-radius: 2px;\r\n  padding: 1rem;\r\n  font-size: 1.2rem;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  color: #fff;\r\n  text-align: center;\r\n  width: 100%;\r\n  min-width: 70px;\r\n  margin: .5rem auto;\r\n  box-sizing: border-box;\r\n\r\n  \r\n  order: 0;\r\n  flex: 0 1 auto;\r\n  align-self: auto;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n  a[_ngcontent-%COMP%] {\r\n    width: 18%;\r\n    box-sizing: content-box;\r\n  }\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  background-color: #000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0Qzs7QUFFNUM7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjs7RUFFakIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQkFBc0I7O0VBRXRCLFlBQVk7RUFDWixRQUFRO0VBQ1IsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHVCQUF1QjtFQUN6QjtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGFzaGJvYXJkQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcblxyXG5oMiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVyb2VzLW1lbnUge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG5cclxuICAvKiBmbGV4Ym94ICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG5hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MjVjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogNzBweDtcclxuICBtYXJnaW46IC41cmVtIGF1dG87XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgLyogZmxleGJveCAqL1xyXG4gIG9yZGVyOiAwO1xyXG4gIGZsZXg6IDAgMSBhdXRvO1xyXG4gIGFsaWduLXNlbGY6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIGEge1xyXG4gICAgd2lkdGg6IDE4JTtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIH1cclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "R1V9":
    /*!********************************************!*\
      !*** ./src/app/heroes/heroes.component.ts ***!
      \********************************************/

    /*! exports provided: HeroesComponent */

    /***/
    function R1V9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeroesComponent", function () {
        return HeroesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../hero.service */
      "alFv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function HeroesComponent_li_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroesComponent_li_10_Template_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var hero_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3["delete"](hero_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var hero_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", hero_r2.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r2.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hero_r2.name, " ");
        }
      }

      var HeroesComponent = /*#__PURE__*/function () {
        function HeroesComponent(heroService) {
          _classCallCheck(this, HeroesComponent);

          this.heroService = heroService;
        }

        _createClass(HeroesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getHeroes();
          }
        }, {
          key: "getHeroes",
          value: function getHeroes() {
            var _this6 = this;

            this.heroService.getHeroes().subscribe(function (heroes) {
              return _this6.heroes = heroes;
            });
          }
        }, {
          key: "add",
          value: function add(name) {
            var _this7 = this;

            name = name.trim();

            if (!name) {
              return;
            }

            this.heroService.addHero({
              name: name
            }).subscribe(function (hero) {
              _this7.heroes.push(hero);
            });
          }
        }, {
          key: "delete",
          value: function _delete(hero) {
            this.heroes = this.heroes.filter(function (h) {
              return h !== hero;
            });
            this.heroService.deleteHero(hero.id).subscribe();
          }
        }]);

        return HeroesComponent;
      }();

      HeroesComponent.ɵfac = function HeroesComponent_Factory(t) {
        return new (t || HeroesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]));
      };

      HeroesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeroesComponent,
        selectors: [["app-heroes"]],
        decls: 11,
        vars: 1,
        consts: [["id", "new-hero"], ["for", "new-hero"], ["heroName", ""], [1, "add-button", 3, "click"], [1, "heroes"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "badge"], ["title", "delete hero", 1, "delete", 3, "click"]],
        template: function HeroesComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "My Heroes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hero name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroesComponent_Template_button_click_7_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

              ctx.add(_r0.value);
              return _r0.value = "";
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Add hero ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeroesComponent_li_10_Template, 7, 3, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heroes);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        styles: [".heroes[_ngcontent-%COMP%] {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n  padding: .5rem;\r\n  margin: 1rem 0;\r\n  box-sizing: border-box;\r\n}\r\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n.heroes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  left: .1em;\r\n}\r\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  text-decoration: none;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #2c3a41;\r\n  background-color: #e6e6e6;\r\n}\r\n.heroes[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active {\r\n  background-color: #525252;\r\n  color: #fafafa;\r\n}\r\n.heroes[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color:#405061;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\n.add-button[_ngcontent-%COMP%] {\r\n padding: .5rem 1.5rem;\r\n font-size: 1rem;\r\n margin-bottom: 2rem;\r\n}\r\n.add-button[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n  background-color: #42545C;\r\n}\r\nbutton.delete[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 210px;\r\n  top: 5px;\r\n  background-color: white;\r\n  color:  #525252;\r\n  font-size: 1.1rem;\r\n  padding: 1px 10px 3px 10px;\r\n}\r\nbutton.delete[_ngcontent-%COMP%]:hover {\r\n  background-color: #525252;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlDQUF5QztBQUN6QztFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxjQUFjO0VBQ2QsY0FBYztFQUNkLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCO0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLG1CQUFtQjtBQUNwQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6Imhlcm9lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbi5oZXJvZXMge1xyXG4gIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxNWVtO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmhlcm9lcyBsaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmhlcm9lcyBsaTpob3ZlciB7XHJcbiAgbGVmdDogLjFlbTtcclxufVxyXG5cclxuLmhlcm9lcyBhIHtcclxuICBjb2xvcjogIzMzMztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICBtYXJnaW46IC41ZW07XHJcbiAgcGFkZGluZzogLjNlbSAwO1xyXG4gIGhlaWdodDogMS42ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaGVyb2VzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMmMzYTQxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbn1cclxuXHJcbi5oZXJvZXMgYTphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjUyNTI7XHJcbiAgY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuXHJcbi5oZXJvZXMgLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM0MDUwNjE7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTFweDtcclxuICB0b3A6IC00cHg7XHJcbiAgaGVpZ2h0OiAxLjhlbTtcclxuICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbiB7XHJcbiBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XHJcbiBmb250LXNpemU6IDFyZW07XHJcbiBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbjpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjU0NUM7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWxldGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyMTBweDtcclxuICB0b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogICM1MjUyNTI7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgcGFkZGluZzogMXB4IDEwcHggM3B4IDEwcHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWxldGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MjUyNTI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./messages/messages.component */
      "DruN");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Tour of Heroes';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 13,
        vars: 1,
        consts: [["routerLink", "/dashboard"], ["routerLink", "/heroes"], ["routerLink", "/ratings"], ["routerLink", "/boards"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Heroes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ratings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Board");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-messages");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"]],
        styles: ["h1[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #e8e8e8;\r\n  color: #3d3d3d;\r\n  border-radius: 4px;\r\n}\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n  background-color: #42545C;\r\n}\r\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNDQUFzQztBQUN0QztFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBcHBDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuaDEge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxubmF2IGEge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XHJcbiAgY29sb3I6ICMzZDNkM2Q7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG5uYXYgYTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjU0NUM7XHJcbn1cclxubmF2IGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-in-memory-web-api */
      "koPj");
      /* harmony import */


      var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./in-memory-data.service */
      "FUlj");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./hero-detail/hero-detail.component */
      "ajd2");
      /* harmony import */


      var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./heroes/heroes.component */
      "R1V9");
      /* harmony import */


      var _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./hero-search/hero-search.component */
      "AQgH");
      /* harmony import */


      var _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./messages/messages.component */
      "DruN");
      /* harmony import */


      var _boards_boards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./boards/boards.component */
      "0Xa6");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./ratings/ratings.component */
      "7iZr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
        // and returns simulated server responses.
        // Remove it when a real server is ready to receive requests.
        angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryDataService"], {
          dataEncapsulation: false
        }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_10__["HeroesComponent"], _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_9__["HeroDetailComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_12__["MessagesComponent"], _hero_search_hero_search_component__WEBPACK_IMPORTED_MODULE_11__["HeroSearchComponent"], _boards_boards_component__WEBPACK_IMPORTED_MODULE_13__["BoardsComponent"], _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_15__["RatingsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"]]
        });
      })();
      /***/

    },

    /***/
    "ajd2":
    /*!******************************************************!*\
      !*** ./src/app/hero-detail/hero-detail.component.ts ***!
      \******************************************************/

    /*! exports provided: HeroDetailComponent */

    /***/
    function ajd2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function () {
        return HeroDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../hero.service */
      "alFv");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function HeroDetailComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "id: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hero name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeroDetailComponent_div_0_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.hero.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.goBack();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "go back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, ctx_r0.hero.name), " Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.hero.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.hero.name);
        }
      }

      var HeroDetailComponent = /*#__PURE__*/function () {
        function HeroDetailComponent(route, heroService, location) {
          _classCallCheck(this, HeroDetailComponent);

          this.route = route;
          this.heroService = heroService;
          this.location = location;
        }

        _createClass(HeroDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getHero();
          }
        }, {
          key: "getHero",
          value: function getHero() {
            var _this8 = this;

            var id = Number(this.route.snapshot.paramMap.get('id'));
            this.heroService.getHero(id).subscribe(function (hero) {
              return _this8.hero = hero;
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "save",
          value: function save() {
            var _this9 = this;

            this.heroService.updateHero(this.hero).subscribe(function () {
              return _this9.goBack();
            });
          }
        }]);

        return HeroDetailComponent;
      }();

      HeroDetailComponent.ɵfac = function HeroDetailComponent_Factory(t) {
        return new (t || HeroDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
      };

      HeroDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeroDetailComponent,
        selectors: [["app-hero-detail"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["for", "hero-name"], ["id", "hero-name", "placeholder", "Hero name", 3, "ngModel", "ngModelChange"], [3, "click"]],
        template: function HeroDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeroDetailComponent_div_0_Template, 16, 5, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hero);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"]],
        styles: ["label[_ngcontent-%COMP%] {\r\n  color: #435960;\r\n  font-weight: bold;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  font-size: 1em;\r\n  padding: .5rem;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  background-color: #eee;\r\n  padding: 1rem;\r\n  border-radius: 4px;\r\n  font-size: 1rem;\r\n}\r\nbutton[_ngcontent-%COMP%]:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton[_ngcontent-%COMP%]:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6Imhlcm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvRGV0YWlsQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbmxhYmVsIHtcclxuICBjb2xvcjogIzQzNTk2MDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgcGFkZGluZzogLjVyZW07XHJcbn1cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxufVxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgY3Vyc29yOiBhdXRvO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "alFv":
    /*!*********************************!*\
      !*** ./src/app/hero.service.ts ***!
      \*********************************/

    /*! exports provided: HeroService */

    /***/
    function alFv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeroService", function () {
        return HeroService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./message.service */
      "OdHV");

      var HeroService = /*#__PURE__*/function () {
        function HeroService(http, messageService) {
          _classCallCheck(this, HeroService);

          this.http = http;
          this.messageService = messageService;
          this.heroesUrl = 'api/heroes'; // URL to web api

          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }
        /** GET heroes from the server */


        _createClass(HeroService, [{
          key: "getHeroes",
          value: function getHeroes() {
            var _this10 = this;

            return this.http.get(this.heroesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
              return _this10.log('fetched heroes');
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('getHeroes', [])));
          }
          /** GET hero by id. Return `undefined` when id not found */

        }, {
          key: "getHeroNo404",
          value: function getHeroNo404(id) {
            var _this11 = this;

            var url = "".concat(this.heroesUrl, "/?id=").concat(id);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (heroes) {
              return heroes[0];
            }), // returns a {0|1} element array
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (h) {
              var outcome = h ? "fetched" : "did not find";

              _this11.log("".concat(outcome, " hero id=").concat(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getHero id=".concat(id))));
          }
          /** GET hero by id. Will 404 if id not found */

        }, {
          key: "getHero",
          value: function getHero(id) {
            var _this12 = this;

            var url = "".concat(this.heroesUrl, "/").concat(id);
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
              return _this12.log("fetched hero id=".concat(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getHero id=".concat(id))));
          }
          /* GET heroes whose name contains search term */

        }, {
          key: "searchHeroes",
          value: function searchHeroes(term) {
            var _this13 = this;

            if (!term.trim()) {
              // if not search term, return empty hero array.
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
            }

            return this.http.get("".concat(this.heroesUrl, "/?name=").concat(term)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (x) {
              return x.length ? _this13.log("found heroes matching \"".concat(term, "\"")) : _this13.log("no heroes matching \"".concat(term, "\""));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('searchHeroes', [])));
          } //////// Save methods //////////

          /** POST: add a new hero to the server */

        }, {
          key: "addHero",
          value: function addHero(hero) {
            var _this14 = this;

            return this.http.post(this.heroesUrl, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (newHero) {
              return _this14.log("added hero w/ id=".concat(newHero.id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('addHero')));
          }
          /** DELETE: delete the hero from the server */

        }, {
          key: "deleteHero",
          value: function deleteHero(id) {
            var _this15 = this;

            var url = "".concat(this.heroesUrl, "/").concat(id);
            return this.http["delete"](url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
              return _this15.log("deleted hero id=".concat(id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('deleteHero')));
          }
          /** PUT: update the hero on the server */

        }, {
          key: "updateHero",
          value: function updateHero(hero) {
            var _this16 = this;

            return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_) {
              return _this16.log("updated hero id=".concat(hero.id));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError('updateHero')));
          }
          /**
           * Handle Http operation that failed.
           * Let the app continue.
           * @param operation - name of the operation that failed
           * @param result - optional value to return as the observable result
           */

        }, {
          key: "handleError",
          value: function handleError() {
            var _this17 = this;

            var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
            var result = arguments.length > 1 ? arguments[1] : undefined;
            return function (error) {
              // TODO: send the error to remote logging infrastructure
              console.error(error); // log to console instead
              // TODO: better job of transforming error for user consumption

              _this17.log("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
            };
          }
          /** Log a HeroService message with the MessageService */

        }, {
          key: "log",
          value: function log(message) {
            this.messageService.add("HeroService: ".concat(message));
          }
        }]);

        return HeroService;
      }();

      HeroService.ɵfac = function HeroService_Factory(t) {
        return new (t || HeroService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]));
      };

      HeroService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: HeroService,
        factory: HeroService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      "QX6l");
      /* harmony import */


      var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./heroes/heroes.component */
      "R1V9");
      /* harmony import */


      var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./hero-detail/hero-detail.component */
      "ajd2");
      /* harmony import */


      var _boards_boards_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./boards/boards.component */
      "0Xa6");
      /* harmony import */


      var _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ratings/ratings.component */
      "7iZr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]
      }, {
        path: 'detail/:id',
        component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_3__["HeroDetailComponent"]
      }, {
        path: 'heroes',
        component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_2__["HeroesComponent"]
      }, {
        path: 'ratings',
        component: _ratings_ratings_component__WEBPACK_IMPORTED_MODULE_5__["RatingsComponent"]
      }, {
        path: 'boards',
        component: _boards_boards_component__WEBPACK_IMPORTED_MODULE_4__["BoardsComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "wn0j":
    /*!***********************************!*\
      !*** ./src/app/rating.service.ts ***!
      \***********************************/

    /*! exports provided: RatingService */

    /***/
    function wn0j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RatingService", function () {
        return RatingService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RatingService = /*#__PURE__*/function () {
        function RatingService(http) {
          _classCallCheck(this, RatingService);

          this.http = http;
          this.ratingsUrl = 'api/ratings'; // URL to web api

          this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
        }

        _createClass(RatingService, [{
          key: "getRatings",
          value: function getRatings() {
            return this.http.get(this.ratingsUrl);
          }
          /** POST: add a new hero to the server */

        }, {
          key: "addRating",
          value: function addRating(rating) {
            return this.http.post(this.ratingsUrl, rating, this.httpOptions);
          }
        }]);

        return RatingService;
      }();

      RatingService.ɵfac = function RatingService_Factory(t) {
        return new (t || RatingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      RatingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: RatingService,
        factory: RatingService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map