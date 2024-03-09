(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/hotel_orders/view"],{

/***/ 485:
/*!******************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/nodejs-country/client_home/main.js?{"page":"pages%2Fhotel_orders%2Fview"} ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _view = _interopRequireDefault(__webpack_require__(/*! ./pages/hotel_orders/view.vue */ 486));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_view.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 486:
/*!***********************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/nodejs-country/client_home/pages/hotel_orders/view.vue ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_vue_vue_type_template_id_5e64b74a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.vue?vue&type=template&id=5e64b74a&scoped=true& */ 487);
/* harmony import */ var _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.vue?vue&type=script&lang=js& */ 489);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _view_vue_vue_type_style_index_0_id_5e64b74a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.vue?vue&type=style&index=0&id=5e64b74a&scoped=true&lang=css& */ 491);
/* harmony import */ var _Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 33);

var renderjs





/* normalize component */

var component = Object(_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _view_vue_vue_type_template_id_5e64b74a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _view_vue_vue_type_template_id_5e64b74a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e64b74a",
  null,
  false,
  _view_vue_vue_type_template_id_5e64b74a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/hotel_orders/view.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 487:
/*!******************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/nodejs-country/client_home/pages/hotel_orders/view.vue?vue&type=template&id=5e64b74a&scoped=true& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_template_id_5e64b74a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./view.vue?vue&type=template&id=5e64b74a&scoped=true& */ 488);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_template_id_5e64b74a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_template_id_5e64b74a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_template_id_5e64b74a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_template_id_5e64b74a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 488:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/nodejs-country/client_home/pages/hotel_orders/view.vue?vue&type=template&id=5e64b74a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniForms: function () {
      return Promise.all(/*! import() | components/uni-forms/uni-forms */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-forms/uni-forms")]).then(__webpack_require__.bind(null, /*! @/components/uni-forms/uni-forms.vue */ 645))
    },
    uniFormsItem: function () {
      return __webpack_require__.e(/*! import() | components/uni-forms-item/uni-forms-item */ "components/uni-forms-item/uni-forms-item").then(__webpack_require__.bind(null, /*! @/components/uni-forms-item/uni-forms-item.vue */ 657))
    },
    uniDataSelect: function () {
      return Promise.all(/*! import() | components/uni-data-select/uni-data-select */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-data-select/uni-data-select")]).then(__webpack_require__.bind(null, /*! @/components/uni-data-select/uni-data-select.vue */ 686))
    },
    uniEasyinput: function () {
      return Promise.all(/*! import() | components/uni-easyinput/uni-easyinput */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-easyinput/uni-easyinput")]).then(__webpack_require__.bind(null, /*! @/components/uni-easyinput/uni-easyinput.vue */ 630))
    },
    uniDatetimePicker: function () {
      return Promise.all(/*! import() | components/uni-datetime-picker/uni-datetime-picker */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uni-datetime-picker/uni-datetime-picker")]).then(__webpack_require__.bind(null, /*! @/components/uni-datetime-picker/uni-datetime-picker.vue */ 803))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var m0 = _vm.is_view()
  var m1 = m0
    ? _vm.$check_field("get", "regular_users") ||
      _vm.$check_field("add", "regular_users") ||
      _vm.$check_field("set", "regular_users")
    : null
  var m2 =
    m0 && m1
      ? _vm.user_group === "管理员" ||
        (_vm.form["hotel_orders_id"] &&
          _vm.$check_field("set", "regular_users")) ||
        (!_vm.form["hotel_orders_id"] &&
          _vm.$check_field("add", "regular_users"))
      : null
  var m3 = m0 && m1 && !m2 ? _vm.$check_field("get", "regular_users") : null
  var m4 = m0
    ? _vm.$check_field("get", "user_name") ||
      _vm.$check_field("add", "user_name") ||
      _vm.$check_field("set", "user_name")
    : null
  var m5 =
    m0 && m4
      ? _vm.user_group === "管理员" ||
        (_vm.form["hotel_orders_id"] && _vm.$check_field("set", "user_name")) ||
        (!_vm.form["hotel_orders_id"] && _vm.$check_field("add", "user_name"))
      : null
  var m6 = m0 && m4 && !m5 ? _vm.$check_field("get", "user_name") : null
  var m7 = m0
    ? _vm.$check_field("get", "mobile_phone_number") ||
      _vm.$check_field("add", "mobile_phone_number") ||
      _vm.$check_field("set", "mobile_phone_number")
    : null
  var m8 =
    m0 && m7
      ? _vm.user_group === "管理员" ||
        (_vm.form["hotel_orders_id"] &&
          _vm.$check_field("set", "mobile_phone_number")) ||
        (!_vm.form["hotel_orders_id"] &&
          _vm.$check_field("add", "mobile_phone_number"))
      : null
  var m9 =
    m0 && m7 && !m8 ? _vm.$check_field("get", "mobile_phone_number") : null
  var m10 = m0
    ? _vm.$check_field("get", "merchant_users") ||
      _vm.$check_field("add", "merchant_users") ||
      _vm.$check_field("set", "merchant_users")
    : null
  var m11 =
    m0 && m10
      ? _vm.user_group === "管理员" ||
        (_vm.form["hotel_orders_id"] &&
          _vm.$check_field("set", "merchant_users")) ||
        (!_vm.form["hotel_orders_id"] &&
          _vm.$check_field("add", "merchant_users"))
      : null
  var m12 = m0 && m10 && !m11 ? _vm.$check_field("get", "merchant_users") : null
  var m13 = m0
    ? _vm.$check_field("get", "merchant_name") ||
      _vm.$check_field("add", "merchant_name") ||
      _vm.$check_field("set", "merchant_name")
    : null
  var m14 =
    m0 && m13
      ? _vm.user_group === "管理员" ||
        (_vm.form["hotel_orders_id"] &&
          _vm.$check_field("set", "merchant_name")) ||
        (!_vm.form["hotel_orders_id"] &&
          _vm.$check_field("add", "merchant_name"))
      : null
  var m15 = m0 && m13 && !m14 ? _vm.$check_field("get", "merchant_name") : null
  var m16 = m0
    ? _vm.$check_field("get", "hotel_name") ||
      _vm.$check_field("add", "hotel_name") ||
      _vm.$check_field("set", "hotel_name")
    : null
  var m17 =
    m0 && m16
      ? _vm.user_group === "管理员" ||
        (_vm.form["hotel_orders_id"] &&
          _vm.$check_field("set", "hotel_name")) ||
        (!_vm.form["hotel_orders_id"] && _vm.$check_field("add", "hotel_name"))
      : null
  var m18 = m0 && m16 && !m17 ? _vm.$check_field("get", "hotel_name") : null
  var m19 = m0
    ? _vm.$check_field("get", "room_type") ||
      _vm.$check_field("add", "room_type") ||
      _vm.$check_field("set", "room_type")
    : null
  var m20 =
    m0 && m19
      ? _vm.user_group === "管理员" ||
        (_vm.form["hotel_orders_id"] && _vm.$check_field("set", "room_type")) ||
        (!_vm.form["hotel_orders_id"] && _vm.$check_field("add", "room_type"))
      : null
  var m21 = m0 && m19 && !m20 ? _vm.$check_field("get", "room_type") : null
  var m22 = m0
    ? _vm.$check_field("get", "one_night_amount") ||
      _vm.$check_field("add", "one_night_amount") ||
      _vm.$check_field("set", "one_night_amount")
    : null
  var m23 =
    m0 && m22
      ? _vm.user_group === "管理员" ||
        (_vm.form["hotel_orders_id"] &&
          _vm.$check_field("set", "one_night_amount")) ||
        (!_vm.form["hotel_orders_id"] &&
          _vm.$check_field("add", "one_night_amount"))
      : null
  var m24 =
    m0 && m22 && !m23 ? _vm.$check_field("get", "one_night_amount") : null
  var m25 = m0
    ? _vm.$check_field("get", "days_of_stay") ||
      _vm.$check_field("add", "days_of_stay") ||
      _vm.$check_field("set", "days_of_stay")
    : null
  var m26 =
    m0 && m25
      ? _vm.user_group === "管理员" ||
        (_vm.form["hotel_orders_id"] &&
          _vm.$check_field("set", "days_of_stay")) ||
        (!_vm.form["hotel_orders_id"] &&
          _vm.$check_field("add", "days_of_stay"))
      : null
  var m27 = m0 && m25 && !m26 ? _vm.$check_field("get", "days_of_stay") : null
  var m28 = m0
    ? _vm.$check_field("get", "total_hotel_stay") ||
      _vm.$check_field("add", "total_hotel_stay") ||
      _vm.$check_field("set", "total_hotel_stay")
    : null
  var m29 =
    m0 && m28
      ? _vm.user_group === "管理员" ||
        (_vm.form["hotel_orders_id"] &&
          _vm.$check_field("set", "total_hotel_stay")) ||
        (!_vm.form["hotel_orders_id"] &&
          _vm.$check_field("add", "total_hotel_stay"))
      : null
  var m30 =
    m0 && m28 && !m29 ? _vm.$check_field("get", "total_hotel_stay") : null
  var m31 = m0
    ? _vm.$check_field("get", "booking_amount") ||
      _vm.$check_field("add", "booking_amount") ||
      _vm.$check_field("set", "booking_amount")
    : null
  var m32 =
    m0 && m31
      ? _vm.user_group === "管理员" ||
        (_vm.form["hotel_orders_id"] &&
          _vm.$check_field("set", "booking_amount")) ||
        (!_vm.form["hotel_orders_id"] &&
          _vm.$check_field("add", "booking_amount"))
      : null
  var m33 = m0 && m31 && !m32 ? _vm.$check_field("get", "booking_amount") : null
  var m34 = m0
    ? _vm.$check_field("get", "final_payment_for_hotel_stay") ||
      _vm.$check_field("add", "final_payment_for_hotel_stay") ||
      _vm.$check_field("set", "final_payment_for_hotel_stay")
    : null
  var m35 =
    m0 && m34
      ? _vm.user_group === "管理员" ||
        (_vm.form["hotel_orders_id"] &&
          _vm.$check_field("set", "final_payment_for_hotel_stay")) ||
        (!_vm.form["hotel_orders_id"] &&
          _vm.$check_field("add", "final_payment_for_hotel_stay"))
      : null
  var m36 =
    m0 && m34 && !m35
      ? _vm.$check_field("get", "final_payment_for_hotel_stay")
      : null
  var m37 = m0
    ? _vm.$check_field("get", "time_of_stay") ||
      _vm.$check_field("add", "time_of_stay") ||
      _vm.$check_field("set", "time_of_stay")
    : null
  var m38 =
    m0 && m37
      ? _vm.user_group === "管理员" ||
        (_vm.form["hotel_orders_id"] &&
          _vm.$check_field("set", "time_of_stay")) ||
        (!_vm.form["hotel_orders_id"] &&
          _vm.$check_field("add", "time_of_stay"))
      : null
  var m39 = m0 && m37 && !m38 ? _vm.$check_field("get", "time_of_stay") : null
  var m40 = m0
    ? _vm.$check_field("get", "hotel_remarks") ||
      _vm.$check_field("add", "hotel_remarks") ||
      _vm.$check_field("set", "hotel_remarks")
    : null
  var m41 =
    m0 && m40
      ? _vm.user_group === "管理员" ||
        (_vm.form["hotel_orders_id"] &&
          _vm.$check_field("set", "hotel_remarks")) ||
        (!_vm.form["hotel_orders_id"] &&
          _vm.$check_field("add", "hotel_remarks"))
      : null
  var m42 = m0 && m40 && !m41 ? _vm.$check_field("get", "hotel_remarks") : null
  var m43 =
    _vm.$check_action("/hotel_orders/view", "set") ||
    _vm.$check_action("/hotel_orders/view", "add") ||
    _vm.$check_option("/hotel_orders/table", "examine")
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        m0: m0,
        m1: m1,
        m2: m2,
        m3: m3,
        m4: m4,
        m5: m5,
        m6: m6,
        m7: m7,
        m8: m8,
        m9: m9,
        m10: m10,
        m11: m11,
        m12: m12,
        m13: m13,
        m14: m14,
        m15: m15,
        m16: m16,
        m17: m17,
        m18: m18,
        m19: m19,
        m20: m20,
        m21: m21,
        m22: m22,
        m23: m23,
        m24: m24,
        m25: m25,
        m26: m26,
        m27: m27,
        m28: m28,
        m29: m29,
        m30: m30,
        m31: m31,
        m32: m32,
        m33: m33,
        m34: m34,
        m35: m35,
        m36: m36,
        m37: m37,
        m38: m38,
        m39: m39,
        m40: m40,
        m41: m41,
        m42: m42,
        m43: m43,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 489:
/*!************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/nodejs-country/client_home/pages/hotel_orders/view.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./view.vue?vue&type=script&lang=js& */ 490);
/* harmony import */ var _Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 490:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/nodejs-country/client_home/pages/hotel_orders/view.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 42));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 44));
var _page = _interopRequireDefault(__webpack_require__(/*! @/libs/mixins/page.js */ 51));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  mixins: [_page.default],
  data: function data() {
    return {
      field: 'hotel_orders_id',
      url_add: '~/api/hotel_orders/add?',
      url_set: '~/api/hotel_orders/set?',
      url_get_obj: '~/api/hotel_orders/get_obj?',
      url_upload: '~/api/hotel_orders/upload?',
      regular_users: null,
      user_name: null,
      mobile_phone_number: null,
      merchant_users: null,
      merchant_name: null,
      hotel_name: null,
      room_type: null,
      one_night_amount: null,
      days_of_stay: null,
      total_hotel_stay: null,
      booking_amount: null,
      final_payment_for_hotel_stay: null,
      time_of_stay: null,
      hotel_remarks: null,
      query: {
        hotel_orders_id: 0
      },
      form: {
        regular_users: 0,
        // 普通用户
        user_name: '',
        // 用户姓名
        mobile_phone_number: '',
        // 手机号码
        merchant_users: 0,
        // 商家用户
        merchant_name: '',
        // 商家名称
        hotel_name: '',
        // 酒店名称
        room_type: '',
        // 房间类型
        one_night_amount: 0,
        // 一晚金额
        days_of_stay: 0,
        // 住店天数
        total_hotel_stay: '',
        // 住店总额
        booking_amount: 0,
        // 预定金额
        final_payment_for_hotel_stay: '',
        // 住店尾款
        time_of_stay: this.$toTime(new Date().getTime(), 'yyyy-MM-dd'),
        hotel_remarks: '',
        // 住店备注
        hotel_orders_id: 0 // ID
      },

      disabledObj: {
        regular_users_isDisabled: false,
        user_name_isDisabled: false,
        mobile_phone_number_isDisabled: false,
        merchant_users_isDisabled: false,
        merchant_name_isDisabled: false,
        hotel_name_isDisabled: false,
        room_type_isDisabled: false,
        total_hotel_stay_isDisabled: false,
        final_payment_for_hotel_stay_isDisabled: false,
        time_of_stay_isDisabled: false,
        hotel_remarks_isDisabled: false
      },
      // 用户列表
      list_user_regular_users: [],
      // 用户组
      group_user_regular_users: '',
      // 用户列表
      list_user_merchant_users: []
    };
  },
  created: function created() {
    this.get_list_user_regular_users();
    this.get_group_user_regular_users();
    this.get_list_user_merchant_users();
  },
  methods: {
    /**
     * 提交前验证事件
     * @param {Object}
    请求参数
     * @return {String} 验证成功返回null, 失败返回错误提示
     */
    submit_check: function submit_check(param) {
      if (!param.time_of_stay) {
        return '住店时间不能为空';
      }
      return null;
    },
    changeLog: function changeLog(v, value) {
      this.form[value] = v;
    },
    uploadFile_: function uploadFile_(type) {
      var _this2 = this;
      if (uni.getSystemInfoSync().uniPlatform != 'mp-weixin' || uni.getSystemInfoSync().platform == 'devtools') {
        uni.chooseImage({
          count: 1,
          success: function success(chooseImageRes) {
            var tempFilePaths = chooseImageRes.tempFilePaths;
            _this2.successChoose(tempFilePaths[0], type);
          }
        });
      } else {
        wx.chooseMessageFile({
          count: 1,
          success: function success(chooseImageRes) {
            var tempFilePaths = chooseImageRes.tempFiles;
            _this2.successChoose(tempFilePaths[0].path, type);
          }
        });
      }
    },
    successChoose: function successChoose(filePath, type) {
      var _this3 = this;
      uni.uploadFile({
        url: getApp().globalData.host + '/api/hotel_orders/upload',
        //仅为示例，非真实的接口地址
        filePath: filePath,
        name: 'file',
        success: function success(uploadFileRes) {
          if (uploadFileRes.data.error) {
            uni.showToast({
              title: uploadFileRes.data.error.message,
              icon: 'none'
            });
          } else {
            _this3[type] = JSON.parse(uploadFileRes.data).result.url;
          }
        }
      });
    },
    close_: function close_(type) {
      if (type == 'regular_users') this['regular_users'] = this.form['regular_users'] = '';
      if (type == 'user_name') this['user_name'] = this.form['user_name'] = '';
      if (type == 'mobile_phone_number') this['mobile_phone_number'] = this.form['mobile_phone_number'] = '';
      if (type == 'merchant_users') this['merchant_users'] = this.form['merchant_users'] = '';
      if (type == 'merchant_name') this['merchant_name'] = this.form['merchant_name'] = '';
      if (type == 'hotel_name') this['hotel_name'] = this.form['hotel_name'] = '';
      if (type == 'room_type') this['room_type'] = this.form['room_type'] = '';
      if (type == 'one_night_amount') this['one_night_amount'] = this.form['one_night_amount'] = '';
      if (type == 'days_of_stay') this['days_of_stay'] = this.form['days_of_stay'] = '';
      if (type == 'total_hotel_stay') this['total_hotel_stay'] = this.form['total_hotel_stay'] = '';
      if (type == 'booking_amount') this['booking_amount'] = this.form['booking_amount'] = '';
      if (type == 'final_payment_for_hotel_stay') this['final_payment_for_hotel_stay'] = this.form['final_payment_for_hotel_stay'] = '';
      if (type == 'time_of_stay') this['time_of_stay'] = this.form['time_of_stay'] = '';
      if (type == 'hotel_remarks') this['hotel_remarks'] = this.form['hotel_remarks'] = '';
    },
    submit_: function submit_() {
      if (this['regular_users'] !== null) this.form['regular_users'] = this['regular_users'];
      if (this['user_name'] !== null) this.form['user_name'] = this['user_name'];
      if (this['mobile_phone_number'] !== null) this.form['mobile_phone_number'] = this['mobile_phone_number'];
      if (this['merchant_users'] !== null) this.form['merchant_users'] = this['merchant_users'];
      if (this['merchant_name'] !== null) this.form['merchant_name'] = this['merchant_name'];
      if (this['hotel_name'] !== null) this.form['hotel_name'] = this['hotel_name'];
      if (this['room_type'] !== null) this.form['room_type'] = this['room_type'];
      if (this['one_night_amount'] !== null) this.form['one_night_amount'] = this['one_night_amount'];
      if (this['days_of_stay'] !== null) this.form['days_of_stay'] = this['days_of_stay'];
      if (this['total_hotel_stay'] !== null) this.form['total_hotel_stay'] = this['total_hotel_stay'];
      if (this['booking_amount'] !== null) this.form['booking_amount'] = this['booking_amount'];
      if (this['final_payment_for_hotel_stay'] !== null) this.form['final_payment_for_hotel_stay'] = this['final_payment_for_hotel_stay'];
      if (this['time_of_stay'] !== null) this.form['time_of_stay'] = this['time_of_stay'];
      if (this['hotel_remarks'] !== null) this.form['hotel_remarks'] = this['hotel_remarks'];
      this.submit();
    },
    /**
     * 上传文件
     * @param {Object} param文件参数
     */
    change_file: function change_file(key_name) {
      var _self = this;
      // 选择图像方法
      uni.chooseFile({
        count: 1,
        sizeType: ['original', 'compressed'],
        //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'],
        //从相册选择
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;
          var uploadTask = uni.uploadFile({
            url: _self.$fullUrl('/api/hotel_orders/upload?'),
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              i_want_to_customize: 'test'
            },
            header: {
              'x-auth-token': _self.$store.state.user.token
            },
            success: function success(uploadFileRes) {
              var filename = JSON.parse(uploadFileRes.data).result.url;
              _self.form[key_name] = filename;
            }
          });
          uploadTask.onProgressUpdate(function (res) {
            _self.percent = res.progress;
            console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
          });
        },
        error: function error(e) {}
      });
    },
    /**
     * 上传图片
     * @param {Object} param文件参数
     */
    change_img: function change_img(key_name) {
      var _self = this;
      _self.upload_img_flag = false;
      // 选择图像方法
      uni.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'],
        //从相册选择
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;
          var uploadTask = uni.uploadFile({
            url: _self.$fullUrl('/api/hotel_orders/upload?'),
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              i_want_to_customize: 'test'
            },
            header: {
              'x-auth-token': _self.$store.state.user.token
            },
            success: function success(uploadFileRes) {
              var filename = JSON.parse(uploadFileRes.data).result.url;
              _self.form[key_name] = filename;
            }
          });
          uploadTask.onProgressUpdate(function (res) {
            _self.percent = res.progress;
            console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
          });
        },
        error: function error(e) {}
      });
    },
    /**
     * 获取对象后获取缓存表单
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_before: function get_obj_before(param) {
      var form = uni.db.get('form');
      if (form) {
        delete form.examine_state;
        delete form.examine_reply;
        this.obj = uni.push(this.obj, form);
        this.form = uni.push(this.form, form);
      }
      var arr = [];
      for (var key in form) {
        arr.push(key);
      }
      for (var i = 0; i < arr.length; i++) {
        this.disabledObj[arr[i] + '_isDisabled'] = true;
      }
      if (this.form['time_of_stay'] && JSON.stringify(this.form['time_of_stay']).indexOf('-') === -1) {
        this.form['time_of_stay'] = this.$toTime(parseInt(this.form['time_of_stay']), 'yyyy-MM-dd');
      }
      uni.db.del('form');
      return param;
    },
    /**
     * 获取普通用户用户列表
     */
    get_list_user_regular_users: function get_list_user_regular_users() {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var json;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this4.$get('~/api/user/get_list?user_group=普通用户');
              case 2:
                json = _context.sent;
                if (json.result && json.result.list) {
                  json.result.list.map(function (o) {
                    return _this4.list_user_regular_users.push({
                      value: o.user_id,
                      text: o.nickname + '-' + o.username
                    });
                  });
                } else if (json.error) {
                  console.error(json.error);
                }
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    /**
     * 获取普通用户用户组
     */
    get_group_user_regular_users: function get_group_user_regular_users() {
      var _this5 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var json;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this5.form['regular_users'] = _this5.user.user_id;
                _context2.next = 3;
                return _this5.$get('~/api/user_group/get_obj?name=普通用户');
              case 3:
                json = _context2.sent;
                if (json.result && json.result.obj) {
                  _this5.group_user_regular_users = json.result.obj;
                  _this5.get_user_session_regular_users(_this5.form['regular_users']);
                } else if (json.error) {
                  console.error(json.error);
                }
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    get_user_session_regular_users: function get_user_session_regular_users(id) {
      var _this = this;
      var user_id = {
        user_id: id
      };
      var url = '~/api/' + _this.group_user_regular_users.source_table + '/get_obj?';
      this.$get(url, user_id, function (res) {
        if (res.result && res.result.obj) {
          var arr = [];
          for (var key in res.result.obj) {
            arr.push(key);
          }
          var arrForm = [];
          for (var _key in _this.form) {
            arrForm.push(_key);
          }
          _this.form['regular_users'] = id;
          _this.disabledObj['regular_users' + '_isDisabled'] = true;
          for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== 'examine_state' && arr[i] !== 'examine_reply') {
              for (var j = 0; j < arrForm.length; j++) {
                if (arr[i] === arrForm[j]) {
                  if (arr[i] !== 'regular_users') {
                    _this.form[arrForm[j]] = res.result.obj[arr[i]];
                    _this.disabledObj[arrForm[j] + '_isDisabled'] = true;
                    break;
                  } else {
                    _this.disabledObj[arrForm[j] + '_isDisabled'] = true;
                  }
                }
              }
            }
          }
        }
      });
    },
    /**
     * 获取商家用户用户列表
     */
    get_list_user_merchant_users: function get_list_user_merchant_users() {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var json;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _this6.$get('~/api/user/get_list?user_group=商家用户');
              case 2:
                json = _context3.sent;
                if (json.result && json.result.list) {
                  json.result.list.map(function (o) {
                    return _this6.list_user_merchant_users.push({
                      value: o.user_id,
                      text: o.nickname + '-' + o.username
                    });
                  });
                } else if (json.error) {
                  console.error(json.error);
                }
              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    set_total_hotel_stay: function set_total_hotel_stay() {
      this.form.total_hotel_stay = parseFloat(this.form.one_night_amount) * parseFloat(this.form.days_of_stay);
      var r = /^\+?[1-9][0-9]*$/; // 正整数
      if (!r.test(this.form.total_hotel_stay)) {
        this.form.total_hotel_stay = this.form.total_hotel_stay.toFixed(2);
      }
    },
    set_final_payment_for_hotel_stay: function set_final_payment_for_hotel_stay() {
      this.form.final_payment_for_hotel_stay = parseFloat(this.form.one_night_amount) * parseFloat(this.form.days_of_stay) - parseFloat(this.form.booking_amount);
      var r = /^\+?[1-9][0-9]*$/; // 正整数
      if (!r.test(this.form.final_payment_for_hotel_stay)) {
        this.form.final_payment_for_hotel_stay = this.form.final_payment_for_hotel_stay.toFixed(2);
      }
    },
    /**
     * 获取对象之后
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_after: function get_obj_after(json, func) {
      if (this.form['time_of_stay'] && JSON.stringify(this.form['time_of_stay']).indexOf('-') === -1) {
        this.form['time_of_stay'] = this.$toTime(parseInt(this.form['time_of_stay']), 'yyyy-MM-dd');
      }
    },
    is_view: function is_view() {
      var bl = this.user_group == '管理员';
      if (!bl) {
        bl = this.$check_action('/hotel_orders/table', 'add');
        console.log(bl ? '你有表格添加权限视作有添加权限' : '你没有表格添加权限');
      }
      if (!bl) {
        bl = this.$check_action('/hotel_orders/table', 'set');
        console.log(bl ? '你有表格添加权限视作有修改权限' : '你没有表格修改权限');
      }
      if (!bl) {
        bl = this.$check_action('/hotel_orders/view', 'add');
        console.log(bl ? '你有视图添加权限视作有添加权限' : '你没有视图添加权限');
      }
      if (!bl) {
        bl = this.$check_action('/hotel_orders/view', 'set');
        console.log(bl ? '你有视图修改权限视作有修改权限' : '你没有视图修改权限');
      }
      if (!bl) {
        bl = this.$check_action('/hotel_orders/view', 'get');
        console.log(bl ? '你有视图查询权限视作有查询权限' : '你没有视图查询权限');
      }
      console.log(bl ? '具有当前页面的查看权，请注意这不代表你有字段的查看权' : '无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行');
      return bl;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 491:
/*!********************************************************************************************************************************************************!*\
  !*** C:/Users/Administrator/Documents/nodejs-country/client_home/pages/hotel_orders/view.vue?vue&type=style&index=0&id=5e64b74a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_style_index_0_id_5e64b74a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../Downloads/HBuilderX.3.98.2023112510/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./view.vue?vue&type=style&index=0&id=5e64b74a&scoped=true&lang=css& */ 492);
/* harmony import */ var _Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_style_index_0_id_5e64b74a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_style_index_0_id_5e64b74a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_style_index_0_id_5e64b74a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_style_index_0_id_5e64b74a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Downloads_HBuilderX_3_98_2023112510_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_view_vue_vue_type_style_index_0_id_5e64b74a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 492:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/Administrator/Documents/nodejs-country/client_home/pages/hotel_orders/view.vue?vue&type=style&index=0&id=5e64b74a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[485,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/hotel_orders/view.js.map