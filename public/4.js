(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Video_Links.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Video_Links.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoPlayer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoPlayer.vue */ "./resources/js/components/VideoPlayer.vue");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "VideoExample",
  components: {
    VideoPlayer: _VideoPlayer_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    if (this.link == '') {
      this.link = "/videos/video_1.mp4";
    }
  },
  data: function data() {
    return {
      sources: [{
        name: "WildLife Sample",
        thumbnail: "/images/thumbnails/video_1.jpg",
        link: "/videos/video_1.mp4"
      }, {
        name: "Earth Sample",
        thumbnail: "/images/thumbnails/video_2.jpg",
        link: "/videos/video_2.mp4"
      }, {
        name: "Windows Acapella",
        thumbnail: "/images/thumbnails/video_3.jpg",
        link: "/videos/video_3.mp4"
      }, {
        name: "Colorful Ink",
        thumbnail: "/images/thumbnails/video_4.jpg",
        link: "/videos/video_4.mp4"
      }, {
        name: "Colorful Backgroud Yellow",
        thumbnail: "/images/thumbnails/video_5.jpg",
        link: "/videos/video_5.mp4"
      }],
      link: ''
    };
  },
  methods: {
    selectLink: function selectLink(link) {
      this.link = link;
      console.log(this.link);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Video_Links.vue?vue&type=template&id=7c11d73a&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Video_Links.vue?vue&type=template&id=7c11d73a& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    { staticClass: "container" },
    [
      _c(
        "v-row",
        [
          _c(
            "v-col",
            { attrs: { cols: "8" } },
            [_c("video-player", { attrs: { url: _vm.link } })],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "4" } },
            _vm._l(_vm.sources, function(source) {
              return _c(
                "div",
                { key: source.link },
                [
                  _c(
                    "v-card",
                    { staticClass: "mx-auto" },
                    [
                      _c("v-card-title", [_vm._v(_vm._s(source.name))]),
                      _vm._v(" "),
                      _c("v-card-text", [
                        _c("img", {
                          attrs: {
                            width: "300",
                            height: "150",
                            src: source.thumbnail
                          },
                          on: {
                            click: function($event) {
                              return _vm.selectLink(source.link)
                            }
                          }
                        })
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            }),
            0
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

/***/ "./resources/js/components/Video_Links.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Video_Links.vue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Video_Links_vue_vue_type_template_id_7c11d73a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Video_Links.vue?vue&type=template&id=7c11d73a& */ "./resources/js/components/Video_Links.vue?vue&type=template&id=7c11d73a&");
/* harmony import */ var _Video_Links_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Video_Links.vue?vue&type=script&lang=js& */ "./resources/js/components/Video_Links.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Video_Links_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Video_Links_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Video_Links_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Video_Links_vue_vue_type_template_id_7c11d73a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Video_Links_vue_vue_type_template_id_7c11d73a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Video_Links.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Video_Links.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Video_Links.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_Links_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Video_Links.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Video_Links.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_Links_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Video_Links.vue?vue&type=template&id=7c11d73a&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Video_Links.vue?vue&type=template&id=7c11d73a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_Links_vue_vue_type_template_id_7c11d73a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Video_Links.vue?vue&type=template&id=7c11d73a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Video_Links.vue?vue&type=template&id=7c11d73a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_Links_vue_vue_type_template_id_7c11d73a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_Links_vue_vue_type_template_id_7c11d73a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);