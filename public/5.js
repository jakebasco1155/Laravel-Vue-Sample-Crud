(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product_Create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product_Create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-editor */ "./node_modules/vue2-editor/dist/vue2-editor.esm.js");
/* harmony import */ var vue2_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue2-datepicker */ "./node_modules/vue2-datepicker/index.esm.js");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue2-datepicker/index.css */ "./node_modules/vue2-datepicker/index.css");
/* harmony import */ var vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue2_datepicker_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-loading-overlay/dist/vue-loading.css */ "./node_modules/vue-loading-overlay/dist/vue-loading.css");
/* harmony import */ var vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay_dist_vue_loading_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-loading-overlay */ "./node_modules/vue-loading-overlay/dist/vue-loading.min.js");
/* harmony import */ var vue_loading_overlay__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_7__);


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







Vue.use(vue_loading_overlay__WEBPACK_IMPORTED_MODULE_7___default.a);

components: {
  vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__["FormWizard"], vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__["TabContent"], vue2_editor__WEBPACK_IMPORTED_MODULE_3__["VueEditor"], vue2_datepicker__WEBPACK_IMPORTED_MODULE_4__["default"];
}

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    if (this.$route.params.data != undefined) {
      this.val = this.$route.params.data;
      this.date = this.val.date_time;
      this.val.edit = true;
    }
  },
  data: function data() {
    return {
      val: {},
      categories: [{
        id: 1,
        value: "Category1"
      }, {
        id: 2,
        value: "Category2"
      }, {
        id: 3,
        value: "Category3"
      }, {
        id: 4,
        value: "Category4"
      }, {
        id: 5,
        value: "Category5"
      }],
      photos: [],
      urls: [],
      edit: false,
      imageSelected: false,
      error: false,
      snackbar: false,
      message: "",
      date: null,
      requiredRule: [function (v) {
        return !!v || "This fied is required";
      }],
      nameRule: [function (v) {
        return !!v || "This fied is required";
      }, function (v) {
        return v && v.length <= 25 || "Name must be less than 25 characters";
      }]
    };
  },
  methods: {
    validateForm: function validateForm() {
      if (!this.$refs.form.validate() || this.val.description == '' || this.val.description == undefined) {
        this.message = "Please Fill out the form Correctly";
        this.error = true;
        this.snackbar = true;
      } else {
        return true;
      }
    },
    validateImages: function validateImages() {
      if (this.photos.length == 0) {
        this.message = "Please Select an Image/s";
        this.error = true;
        this.snackbar = true;
      } else return true;
    },
    validateDate: function validateDate() {
      if (this.date == null) {
        this.message = "Please Choose Date and Time";
        this.error = true;
        this.snackbar = true;
      } else {
        return true;
      }
    },
    choose: function choose() {
      document.getElementById("myFileInput").click();
    },
    remove: function remove(key) {
      console.log(key);

      if (key > -1) {
        this.photos.splice(key, 1);
      } // this.photos.splice(key,1);


      this.message = "Image Removed from selection";
      this.error = false;
      this.snackbar = true;
    },
    submit_product: function submit_product() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var loader, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                loader = _this.$loading.show({
                  loader: "spinner"
                });
                data = new FormData();
                Object.keys(_this.photos).forEach(function (key) {
                  return data.append('images[' + key + ']', _this.photos[key]);
                });
                data.append("val", JSON.stringify(_this.val));
                data.append("date_time", _this.date);
                _context.next = 7;
                return _this.axios.post("api/submit_product", data, {
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                }).then(function (response) {
                  if (response.data.error == false) {
                    _this.message = "Product Added Successfully";
                    _this.error = false;
                    _this.snackbar = true;

                    _this.$router.push('/product_list');
                  } else {
                    _this.message = "Product not Added";
                    _this.error = true;
                    _this.snackbar = true;
                  }
                });

              case 7:
                loader.hide();

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    selectFile: function selectFile(event) {
      var _this2 = this;

      if (this.photos.length + event.target.files.length > 10 || event.target.files.length > 10) {
        this.message = "Maximum 10 Images Only";
        this.error = true;
        this.snackbar = true;
        return false;
      }

      var tmpImg = event.target.files;

      for (var i = 0; i < tmpImg.length; i++) {
        this.photos.push(tmpImg[i]);
      }

      var _loop = function _loop(x) {
        var reader = new FileReader();
        reader.addEventListener("load", function () {
          this.$refs.image[x].src = reader.result;
        }.bind(_this2), false);
        reader.readAsDataURL(_this2.photos[x]);
      };

      for (var x = 0; x < this.photos.length; x++) {
        _loop(x);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product_Create.vue?vue&type=template&id=123d10d2&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Product_Create.vue?vue&type=template&id=123d10d2& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container", attrs: { "data-app": "" } },
    [
      _c(
        "form-wizard",
        {
          ref: "formWizard",
          attrs: {
            "no-title": "",
            title: "SAVE PRODUCT",
            subtitle: "",
            color: "#3d6b99",
            lazy: "true"
          },
          on: { "on-complete": _vm.submit_product }
        },
        [
          _c(
            "tab-content",
            {
              attrs: {
                "before-change": _vm.validateForm,
                icon: "mdi mdi-24px mdi-format-align-justify",
                title: "Product details"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [_vm._v("Product Form")]),
                  _vm._v(" "),
                  _c("v-card-subtitle", [_vm._v("Save your product here")]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-form",
                        { ref: "form", attrs: { "lazy-validation": "" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              label: "Name",
                              counter: 25,
                              type: "text",
                              rules: _vm.nameRule,
                              required: ""
                            },
                            model: {
                              value: _vm.val.name,
                              callback: function($$v) {
                                _vm.$set(_vm.val, "name", $$v)
                              },
                              expression: "val.name"
                            }
                          }),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              label: "Category",
                              rules: _vm.requiredRule,
                              items: _vm.categories,
                              "item-text": "value",
                              "item-value": "value",
                              required: ""
                            },
                            model: {
                              value: _vm.val.category,
                              callback: function($$v) {
                                _vm.$set(_vm.val, "category", $$v)
                              },
                              expression: "val.category"
                            }
                          }),
                          _vm._v("\n\n            Description:\n            "),
                          _c("vue-editor", {
                            attrs: {
                              label: "Description",
                              type: "text",
                              rules: _vm.requiredRule,
                              required: ""
                            },
                            model: {
                              value: _vm.val.description,
                              callback: function($$v) {
                                _vm.$set(_vm.val, "description", $$v)
                              },
                              expression: "val.description"
                            }
                          })
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
          ),
          _vm._v(" "),
          _c(
            "tab-content",
            {
              attrs: {
                title: "Product Images",
                "before-change": _vm.validateImages,
                icon: "mdi mdi-24px mdi-image-area"
              }
            },
            [
              _c("input", {
                attrs: {
                  type: "file",
                  id: "myFileInput",
                  accept: "image/jpeg",
                  hidden: "",
                  multiple: ""
                },
                on: { change: _vm.selectFile }
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "ma-4",
                  attrs: { align: "center", icon: "" },
                  on: {
                    click: function($event) {
                      return _vm.choose()
                    }
                  }
                },
                [
                  _c("v-icon", [_vm._v("mdi mdi-file-image ")]),
                  _vm._v("\n        UPLOAD IMAGES\n      ")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-row",
                _vm._l(_vm.photos, function(photo, key) {
                  return _c("div", { key: photo.name }, [
                    _c(
                      "div",
                      [
                        _c(
                          "v-btn",
                          {
                            staticClass: "btn btn-danger ma-4",
                            attrs: { icon: "" },
                            on: {
                              click: function($event) {
                                return _vm.remove(key)
                              }
                            }
                          },
                          [_c("v-icon", [_vm._v("mdi-window-close")])],
                          1
                        ),
                        _c("img", {
                          ref: "image",
                          refInFor: true,
                          staticClass: "preview",
                          attrs: { height: "150", width: "150" }
                        })
                      ],
                      1
                    )
                  ])
                }),
                0
              ),
              _vm._v(" "),
              _c("br")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "tab-content",
            {
              attrs: {
                title: "Date and Time",
                "before-change": _vm.validateDate,
                icon: "mdi mdi-24px mdi-calendar"
              }
            },
            [
              _c(
                "div",
                { staticClass: "container" },
                [
                  _vm._v("\n        Select Date and Time:\n        "),
                  _c("date-picker", {
                    attrs: {
                      type: "datetime",
                      valueType: "format",
                      rules: _vm.requiredRule
                    },
                    model: {
                      value: _vm.date,
                      callback: function($$v) {
                        _vm.date = $$v
                      },
                      expression: "date"
                    }
                  })
                ],
                1
              )
            ]
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
                    [_vm._v("\n        Close\n      ")]
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
        [_vm._v("\n    " + _vm._s(this.message) + "\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Product_Create.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/Product_Create.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_Create_vue_vue_type_template_id_123d10d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product_Create.vue?vue&type=template&id=123d10d2& */ "./resources/js/components/Product_Create.vue?vue&type=template&id=123d10d2&");
/* harmony import */ var _Product_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product_Create.vue?vue&type=script&lang=js& */ "./resources/js/components/Product_Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Product_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_Create_vue_vue_type_template_id_123d10d2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Product_Create_vue_vue_type_template_id_123d10d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Product_Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Product_Create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Product_Create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Product_Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product_Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Product_Create.vue?vue&type=template&id=123d10d2&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Product_Create.vue?vue&type=template&id=123d10d2& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_Create_vue_vue_type_template_id_123d10d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Product_Create.vue?vue&type=template&id=123d10d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Product_Create.vue?vue&type=template&id=123d10d2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_Create_vue_vue_type_template_id_123d10d2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_Create_vue_vue_type_template_id_123d10d2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);