(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    activeNav: function activeNav() {
      $('.navbar__list').css({
        width: '70%'
      });
    },
    closeNav: function closeNav() {
      $('.navbar__list').css({
        width: 0
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/DetailData.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/DetailData.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Navbar.vue */ "./resources/js/components/Navbar.vue");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dataWilayah: {
        nama: null,
        penduduk: null,
        luas: null,
        letak: null,
        ket: null,
        tgl: null,
        die: null,
        odp: null
      } // dataWilayah: null

    };
  },
  components: {
    Navbar: _components_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    var _this = this;

    axios.get("/api/data/".concat(this.$route.params.id)).then(function (response) {
      console.log(response.data);
      _this.dataWilayah.nama = response.data.wilayah.nama_wilayah;
      _this.dataWilayah.penduduk = response.data.wilayah.jumlah_penduduk;
      _this.dataWilayah.luas = response.data.wilayah.luas_wilayah;
      _this.dataWilayah.letak = response.data.wilayah.letak_wilayah;
      _this.dataWilayah.ket = response.data.wilayah.keterangan;
      _this.dataWilayah.tgl = response.data.tgl;
      _this.dataWilayah.die = response.data.jumlah_meninggal;
      _this.dataWilayah.odp = response.data.jumlah_odp;
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b& ***!
  \*********************************************************************************************************************************************************************************************************/
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
  return _c("nav", { staticClass: "navbar" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "navbar__logo" }, [
        _vm._v("\n            Creatify\n        ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "navbar__menu" }, [
        _c(
          "a",
          {
            staticClass: "navbar__menu--active",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.activeNav()
              }
            }
          },
          [_c("i", { staticClass: "fas fa-align-right" })]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "navbar__list" }, [
        _c(
          "a",
          {
            staticClass: "navbar__list--close",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.closeNav()
              }
            }
          },
          [_c("i", { staticClass: "fas fa-times" })]
        ),
        _vm._v(" "),
        _c("ul", { staticClass: "nav" }, [
          _vm.$route.path === "/"
            ? _c(
                "li",
                [
                  _c(
                    "router-link",
                    { staticClass: "navbar__list__link", attrs: { to: "/" } },
                    [_vm._v("Home")]
                  )
                ],
                1
              )
            : _c(
                "li",
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "navbar__list__link",
                      attrs: { to: { name: "Home" } }
                    },
                    [_vm._v("Home")]
                  )
                ],
                1
              ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass: "navbar__list__link",
                  attrs: { to: { name: "Data" } }
                },
                [_vm._v("Data")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass: "navbar__list__link",
                  attrs: { to: { name: "Berita" } }
                },
                [_vm._v("Berita")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "router-link",
                {
                  staticClass: "navbar__list__link",
                  attrs: { to: { name: "FAQ" } }
                },
                [_vm._v("FAQ")]
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/DetailData.vue?vue&type=template&id=ddd70f38&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/DetailData.vue?vue&type=template&id=ddd70f38& ***!
  \********************************************************************************************************************************************************************************************************/
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
    "section",
    [
      _c("Navbar"),
      _vm._v(" "),
      _c("div", { staticClass: "container mt-4" }, [
        _c("h3", [_vm._v("Detail Wilayah")]),
        _vm._v(" "),
        _c("div", { staticClass: "card mt-4" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("h1", { staticClass: "text-success" }, [
              _vm._v(_vm._s(_vm.dataWilayah.nama))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 col-md-6" }, [
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: { src: "../img/wilayah.png" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 col-md-6" }, [
                _c("div", { staticClass: "col row mb-2" }, [
                  _c("h6", { staticClass: "col-12 col-md-5" }, [
                    _vm._v(
                      "\n                  Jumlah Penduduk:\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md text-secondary" }, [
                    _vm._v(
                      "\n                 " +
                        _vm._s(_vm.dataWilayah.penduduk) +
                        " orang\n                "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col row mb-2" }, [
                  _c("h6", { staticClass: "col-12 col-md-5" }, [
                    _vm._v(
                      "\n                  Luas Wilayah:\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md text-secondary" }, [
                    _vm._v(
                      "\n                 " +
                        _vm._s(_vm.dataWilayah.luas) +
                        "\n                "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col row mb-2" }, [
                  _c("h6", { staticClass: "col-12 col-md-5" }, [
                    _vm._v(
                      "\n                  Letak Wilayah:\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md text-secondary" }, [
                    _vm._v(
                      "\n                 " +
                        _vm._s(_vm.dataWilayah.letak) +
                        "\n                "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col row mb-2" }, [
                  _c("h6", { staticClass: "col-12 col-md-5" }, [
                    _vm._v("\n                  Keterangan:\n                ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md text-secondary" }, [
                    _vm._v(
                      "\n                 " +
                        _vm._s(_vm.dataWilayah.ket) +
                        "\n                "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col row mb-2" }, [
                  _c("h6", { staticClass: "col-12 col-md-5" }, [
                    _vm._v("\n                  Tanggal:\n                ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md text-secondary" }, [
                    _vm._v(
                      "\n                 " +
                        _vm._s(_vm.dataWilayah.tgl) +
                        "\n                "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col row mb-2" }, [
                  _c("h6", { staticClass: "col-12 col-md-5" }, [
                    _vm._v(
                      "\n                  Jumlah Meninggal:\n                "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md text-secondary" }, [
                    _vm._v(
                      "\n                 " +
                        _vm._s(_vm.dataWilayah.die) +
                        " Orang\n                "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col row mb-2" }, [
                  _c("h6", { staticClass: "col-12 col-md-5" }, [
                    _vm._v("\n                  Jumlah ODP:\n                ")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-12 col-md text-secondary" }, [
                    _vm._v(
                      "\n                 " +
                        _vm._s(_vm.dataWilayah.odp) +
                        " Orang\n                "
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/Navbar.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Navbar.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=6dde423b& */ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=6dde423b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Navbar.vue?vue&type=template&id=6dde423b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_6dde423b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/DetailData.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/DetailData.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailData_vue_vue_type_template_id_ddd70f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailData.vue?vue&type=template&id=ddd70f38& */ "./resources/js/pages/DetailData.vue?vue&type=template&id=ddd70f38&");
/* harmony import */ var _DetailData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailData.vue?vue&type=script&lang=js& */ "./resources/js/pages/DetailData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetailData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailData_vue_vue_type_template_id_ddd70f38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailData_vue_vue_type_template_id_ddd70f38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/DetailData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/DetailData.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/DetailData.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/DetailData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/DetailData.vue?vue&type=template&id=ddd70f38&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/DetailData.vue?vue&type=template&id=ddd70f38& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailData_vue_vue_type_template_id_ddd70f38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./DetailData.vue?vue&type=template&id=ddd70f38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/DetailData.vue?vue&type=template&id=ddd70f38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailData_vue_vue_type_template_id_ddd70f38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailData_vue_vue_type_template_id_ddd70f38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);