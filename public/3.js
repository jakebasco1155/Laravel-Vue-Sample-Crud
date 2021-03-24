(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product_List.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product_List.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


Vue.use(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_2___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Product Component mounted.');
  },
  data: function data() {
    return {
      products: [],
      page: 1,
      total: 0,
      search: "",
      awaitingSearch: false,
      show: false,
      error: false,
      snackbar: false,
      message: "",
      val: {},
      images: [],
      length: 0,
      edit_product: false,
      category: "",
      categories: [{
        id: 1,
        value: 'Category1'
      }, {
        id: 2,
        value: 'Category2'
      }, {
        id: 3,
        value: 'Category3'
      }, {
        id: 4,
        value: 'Category4'
      }, {
        id: 5,
        value: 'Category5'
      }]
    };
  },
  created: function created() {
    this.getData();
  },
  watch: {
    category: function category(val) {
      var _this = this;

      if (val == '') return true;
      this.axios.get("/api/search_category?category=" + val).then(function (response) {
        _this.products = response.data.data;
        _this.page = response.data.current_page;
        _this.total = response.data.last_page;
      });
    },
    page: function page() {
      var _this2 = this;

      if (typeof this.page === "undefined") {
        this.page = 1;
      } // Using vue-resource as an example


      this.axios.get("/api/get_products?page=" + this.page).then(function (response) {
        _this2.products = response.data.data;
      });
    },
    search: function search(val) {
      var _this3 = this;

      if (val == '') return true;

      if (!this.awaitingSearch) {
        setTimeout(function () {
          if (typeof _this3.page === "undefined") {
            _this3.page = 1;
          }

          _this3.axios.get("/api/search_product?search=" + _this3.search).then(function (response) {
            _this3.products = response.data.data;
            _this3.page = response.data.current_page;
            _this3.total = response.data.last_page;
          });

          _this3.awaitingSearch = false;
        }, 1000); // 1 sec delay
      }

      this.awaitingSearch = true;
    }
  },
  methods: {
    clear: function clear() {
      this.search = '';
      this.category = '';
      this.getData();
    },
    edit: function edit(product) {
      this.$router.push({
        name: 'CreateProduct',
        params: {
          data: product
        }
      });
    },
    view: function view(productID) {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var loader;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                loader = _this4.$loading.show({
                  loader: "spinner"
                });
                _context.next = 3;
                return _this4.axios.get("/api/get_images/" + productID).then(function (response) {
                  if (response.data.error == false) {
                    _this4.images = response.data.images;
                    _this4.show = true;
                    _this4.length = _this4.images.length;
                  } else {
                    _this4.message = "No Image Found";
                    _this4.error = true;
                    _this4.snackbar = true;
                  }
                });

              case 3:
                loader.hide();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    deleteProduct: function deleteProduct(productID) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var loader;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                loader = _this5.$loading.show({
                  loader: "spinner"
                });
                _context2.next = 3;
                return _this5.axios.post("/api/delete_product", {
                  params: {
                    id: productID
                  }
                }).then(function (response) {
                  if (response.data.error == false) {
                    _this5.message = "Product Deleted Successfully";
                    _this5.error = false;
                    _this5.snackbar = true;

                    _this5.getData();
                  } else {
                    _this5.message = "Product Deletion UnSuccessful";
                    _this5.error = true;
                    _this5.snackbar = true;
                  }
                });

              case 3:
                loader.hide();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    getData: function getData() {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this6.axios.get("/api/get_products").then(function (response) {
                  _this6.products = response.data.data;
                  _this6.page = response.data.current_page;
                  _this6.total = response.data.last_page;
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product_List.vue?vue&type=template&id=5c088af9&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product_List.vue?vue&type=template&id=5c088af9& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { "data-app": "" } },
    [
      _c(
        "v-card",
        { staticClass: "white--text", attrs: { color: "#3d6b99" } },
        [
          _c(
            "v-card-title",
            { staticClass: "headline" },
            [
              _c("v-col", { attrs: { cols: "6" } }, [
                _c("h2", [_vm._v("PRODUCTS")])
              ]),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "2" } },
                [
                  _c(
                    "v-btn",
                    { attrs: { color: "primary" }, on: { click: _vm.clear } },
                    [_vm._v("Clear Filter")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "2" } },
                [
                  _c("v-select", {
                    attrs: {
                      label: "Category",
                      items: _vm.categories,
                      "item-text": "value",
                      "item-value": "value",
                      required: ""
                    },
                    model: {
                      value: _vm.category,
                      callback: function($$v) {
                        _vm.category = $$v
                      },
                      expression: "category"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "2" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      color: "white",
                      filled: "",
                      "prepend-inner-icon": "mdi-account-search",
                      label: "Filter"
                    },
                    model: {
                      value: _vm.search,
                      callback: function($$v) {
                        _vm.search = $$v
                      },
                      expression: "search"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c("v-simple-table", { staticClass: "table-striped" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Category")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Description")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Date and Time")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Action")])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.products, function(product) {
                    return _c("tr", { key: product.id }, [
                      _c("td", [_vm._v(_vm._s(product.name))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(product.category))]),
                      _vm._v(" "),
                      _c("td", {
                        domProps: { innerHTML: _vm._s(product.description) }
                      }),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(product.date_time))]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "success" },
                              on: {
                                click: function($event) {
                                  return _vm.view(product.id)
                                }
                              }
                            },
                            [_vm._v("VIEW")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "primary" },
                              on: {
                                click: function($event) {
                                  return _vm.edit(product)
                                }
                              }
                            },
                            [_vm._v("EDIT")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: { color: "red" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteProduct(product.id)
                                }
                              }
                            },
                            [_vm._v("DELETE")]
                          )
                        ],
                        1
                      )
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("v-pagination", {
                attrs: {
                  length: _vm.total,
                  "prev-icon": "mdi-menu-left",
                  "next-icon": "mdi-menu-right"
                },
                model: {
                  value: _vm.page,
                  callback: function($$v) {
                    _vm.page = $$v
                  },
                  expression: "page"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: {
            bottom: "",
            rounded: "pill",
            color: _vm.error ? "red" : "success",
            outlined: ""
          },
          scopedSlots: _vm._u([
            {
              key: "action",
              fn: function(ref) {
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._b(
                      {
                        attrs: { color: "red", text: "" },
                        on: {
                          click: function($event) {
                            _vm.snackbar = false
                          }
                        }
                      },
                      "v-btn",
                      attrs,
                      false
                    ),
                    [_vm._v("\n         Close\n       ")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [_vm._v("\n     " + _vm._s(this.message) + "\n     ")]
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "" },
          model: {
            value: _vm.show,
            callback: function($$v) {
              _vm.show = $$v
            },
            expression: "show"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("Images")]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _vm.length == 0
                    ? _c("div", [_vm._v("\n       No Image Found\n       ")])
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    _vm._l(_vm.images, function(photo, key) {
                      return _c(
                        "div",
                        { key: photo.name },
                        [
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "ma-4",
                            attrs: {
                              height: "200",
                              width: "200",
                              src: photo.image_url
                            }
                          })
                        ],
                        1
                      )
                    }),
                    0
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "red" },
                      on: {
                        click: function($event) {
                          _vm.show = false
                        }
                      }
                    },
                    [_vm._v("\n         Close\n       ")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Product_List.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/Product_List.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_List_vue_vue_type_template_id_5c088af9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product_List.vue?vue&type=template&id=5c088af9& */ "./resources/js/components/Product_List.vue?vue&type=template&id=5c088af9&");
/* harmony import */ var _Product_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product_List.vue?vue&type=script&lang=js& */ "./resources/js/components/Product_List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_List_vue_vue_type_template_id_5c088af9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_List_vue_vue_type_template_id_5c088af9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Product_List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Product_List.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Product_List.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Product_List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product_List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Product_List.vue?vue&type=template&id=5c088af9&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/Product_List.vue?vue&type=template&id=5c088af9& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_List_vue_vue_type_template_id_5c088af9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Product_List.vue?vue&type=template&id=5c088af9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product_List.vue?vue&type=template&id=5c088af9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_List_vue_vue_type_template_id_5c088af9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_List_vue_vue_type_template_id_5c088af9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);