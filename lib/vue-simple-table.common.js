module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1c2f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_simple_table_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f13");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_simple_table_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_simple_table_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_simple_table_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5f4b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7da8":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7f13":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8e6c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_check_box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8e87");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_check_box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_check_box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_check_box_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8e87":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b09d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_drag_box_vue_vue_type_style_index_0_id_256e6131_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5f4b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_drag_box_vue_vue_type_style_index_0_id_256e6131_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_drag_box_vue_vue_type_style_index_0_id_256e6131_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_drag_box_vue_vue_type_style_index_0_id_256e6131_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45c986a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-simple-table/src/vue-simple-table.vue?vue&type=template&id=c47895b0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vs-table-box clearfix"},[_c('div',{staticClass:"vs-table-left"},[_c('table',{staticClass:"vs-head"},_vm._l((_vm.fixed_columns),function(vh,vh_ind){return _c('tr',{key:'vh' + vh_ind},_vm._l((vh),function(v){return _c('td',{key:v.title,style:({ width:((v.width) + "px"), height: (_vm.headHeight + "px"), textAlign: v.titleAlign })},[(v.selection)?_c('vs-checkbox',{attrs:{"state":_vm.getClass(_vm.getAllData())},on:{"check":function($event){_vm.checkBtn(_vm.getAllData())}}}):_vm._e(),_c('span',{staticClass:"vs-title vs-head-title",style:({ lineHeight: (_vm.headHeight + "px") }),attrs:{"title":v.showTitle}},[_vm._v(_vm._s(v.title))]),_c('i',{staticClass:"vs-sort-icon",class:_vm.getSortClass(v.field),on:{"click":function($event){return _vm.sortData(v)}}})],1)}),0)}),0),_c('div',{staticClass:"vs-scroll-f",style:({ height: ("calc(100% - " + _vm.fixed_height + "px)"), width: (_vm.fixed_width + "px") })},[_c('div',{ref:"leftScroll",staticClass:"vs-scroll-content",style:({ width: ((_vm.fixed_width + 17) + "px") }),on:{"scroll":_vm.scrollEventLeft}},[_c('table',{staticClass:"vs-content",style:({ height: (_vm.move_height + "px") })},_vm._l((_vm.fixed_data),function(vc,vc_ind){return _c('tr',{key:'vc' + vc_ind},_vm._l((vc),function(v,v_ind){return _c('td',{key:'vcv' + v_ind,style:({ width:((v.key.width) + "px"), height: (_vm.rawHeight + "px") })},[_c('vs-checkbox',{attrs:{"state":_vm.getClass(_vm.getRawsData(v))},on:{"check":function($event){_vm.checkBtn(_vm.getRawsData(v))}}}),_c('span',{staticClass:"vs-title",style:({ lineHeight: (_vm.rawHeight + "px") })},[_vm._v(_vm._s(v.val))])],1)}),0)}),0)])])]),_c('div',{ref:"rightVSbox",staticClass:"vs-table-right",style:({ width: ("calc(100% - " + _vm.fixed_width + "px)") }),on:{"scroll":_vm.onLeftBoxScroll}},[_c('table',{staticClass:"vs-head",style:({ width: (_vm.move_width + "px") })},_vm._l((_vm.move_columns),function(vh,vh_ind){return _c('tr',{key:'vh' + vh_ind},_vm._l((vh),function(v){return _c('td',{key:v.title,style:({ width:((v.width) + "px"), height: (_vm.headHeight + "px"), textAlign: v.titleAlign })},[(v.selection)?_c('vs-checkbox',{attrs:{"state":_vm.getClass(_vm.getFieldData(v))},on:{"check":function($event){_vm.checkBtn(_vm.getFieldData(v))}}}):_vm._e(),_c('span',{staticClass:"vs-title vs-head-title",style:({ lineHeight: (_vm.headHeight + "px") }),attrs:{"title":v.showTitle}},[_vm._v(_vm._s(v.title))]),_c('i',{staticClass:"vs-sort-icon",class:_vm.getSortClass(v.field),on:{"click":function($event){return _vm.sortData(v)}}})],1)}),0)}),0),_c('div',{staticClass:"vs-scroll-f",style:({ width: (_vm.move_width + "px"),height: ("calc(100% - " + _vm.fixed_height + "px)") })},[_c('div',{ref:"rightScroll",staticClass:"vs-scroll-content",style:({ width: ((_vm.move_width + 17) + "px") }),on:{"scroll":_vm.scrollEventRight}},[_c('vs-dragbox',{on:{"change":_vm.onDragChange,"select":_vm.onSelectDown}},[_c('table',{staticClass:"vs-content"},_vm._l((_vm.move_data),function(vc,vc_ind){return _c('tr',{key:'vc' + vc_ind},_vm._l((vc),function(v,v_ind){return _c('td',{key:'vcv' + v_ind,staticClass:"vs-select-td-box",class:{ active: _vm.getActiveClass(v) },style:({ width:((v.key.width) + "px"), height: (_vm.rawHeight + "px")}),attrs:{"id":JSON.stringify(v)},on:{"click":function($event){return _vm.clickSingleRaw(v)}}},[_vm._t("default",null,{"data":v})],2)}),0)}),0)])],1)])]),_c('div',{ref:"barScroll",staticClass:"vs-scroll-control",style:({ height: ("calc(100% - " + _vm.fixed_height + "px)"), marginTop: (_vm.fixed_height + "px") }),on:{"scroll":_vm.scrollEventBar}},[_c('div',{staticClass:"vs-scroll-control-inner",style:({ height: (_vm.move_height + "px") })})]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showRange),expression:"showRange"}],staticClass:"vs-range-box"},[_c('div',{staticClass:"vs-range-title",style:({ width: _vm.fixed_width + 'px' })},[_vm._v("数值范围")]),_c('div',{ref:"rangebox",staticClass:"vs-range-box-s",style:({ width: ("calc(100% - " + _vm.fixed_width + "px)") })},[_c('ul',{staticClass:"vs-range-ul",style:({width: _vm.move_width + 'px'})},_vm._l((_vm.ranges),function(item,index){return _c('li',{key:'range' + index,staticClass:"vs-range-li",style:({ width: item.width + 'px' }),attrs:{"title":item.val}},[_c('span',[_vm._v(_vm._s(item.val || '-'))])])}),0)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-simple-table/src/vue-simple-table.vue?vue&type=template&id=c47895b0&

// CONCATENATED MODULE: ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js
/*!
 * perfect-scrollbar v1.5.0
 * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */

function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  rtl: 'ps__rtl',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

function processScrollDiff(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function perfect_scrollbar_esm_outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      ('maxTouchPoints' in window.navigator &&
        window.navigator.maxTouchPoints > 0) ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();

  i.containerWidth = Math.ceil(rect.width);
  i.containerHeight = Math.ceil(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt((i.railXWidth * i.containerWidth) / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      ((i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth)) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt((i.railYHeight * i.containerHeight) / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      (roundedScrollTop * (i.railYHeight - i.scrollbarYHeight)) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth -
        9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

function clickRail(i) {
  var element = i.element;

  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
}

function dragThumb(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
}

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageY] = e.touches[0].pageY;
    }
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  function bindMoves(e, touchMode) {
    startingScrollTop = element[scrollTop];
    if (touchMode && e.touches) {
      e[pageY] = e.touches[0].pageY;
    }
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);
    if (!touchMode) {
      i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
      i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);
      e.preventDefault();
    } else {
      i.event.bind(i.ownerDocument, 'touchmove', mouseMoveHandler);
    }

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    bindMoves(e);
  });
  i.event.bind(i[scrollbarY], 'touchstart', function (e) {
    bindMoves(e, true);
  });
}

function keyboard(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}

function wheel(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = (-1 * e.wheelDeltaX) / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
}

function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);

      // if deltaY && vertical scrollable
      if (deltaY && style.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            (cursor.scrollTop > 0 && deltaY < 0) ||
            (cursor.scrollTop < maxScrollTop && deltaY > 0)
          ) {
            return true;
          }
        }
      }
      // if deltaX && horizontal scrollable
      if (deltaX && style.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            (cursor.scrollLeft > 0 && deltaX < 0) ||
            (cursor.scrollLeft < maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
}

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? perfect_scrollbar_esm_outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
        ? 'end'
        : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
        ? 'end'
        : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ var perfect_scrollbar_esm = (PerfectScrollbar);
//# sourceMappingURL=perfect-scrollbar.esm.js.map

// EXTERNAL MODULE: ./node_modules/perfect-scrollbar/css/perfect-scrollbar.css
var perfect_scrollbar = __webpack_require__("7da8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45c986a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-simple-table/src/check-box.vue?vue&type=template&id=54c47cee&
var check_boxvue_type_template_id_54c47cee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{staticClass:"vs-check-box",class:_vm.state_map[_vm.state],on:{"click":function($event){return _vm.$emit('check')}}})}
var check_boxvue_type_template_id_54c47cee_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-simple-table/src/check-box.vue?vue&type=template&id=54c47cee&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-simple-table/src/check-box.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var check_boxvue_type_script_lang_js_ = ({
  name: 'check-box',
  props: {
    state: {
      type: String,
      default: 'no'
    }
  },
  data() {
    return {
      state_map: {
        no: 'vs-no-check',
        check: 'vs-check',
        harf: 'vs-harf-check'
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/vue-simple-table/src/check-box.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_check_boxvue_type_script_lang_js_ = (check_boxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-simple-table/src/check-box.vue?vue&type=style&index=0&lang=scss&
var check_boxvue_type_style_index_0_lang_scss_ = __webpack_require__("8e6c");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
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

// CONCATENATED MODULE: ./packages/vue-simple-table/src/check-box.vue






/* normalize component */

var component = normalizeComponent(
  src_check_boxvue_type_script_lang_js_,
  check_boxvue_type_template_id_54c47cee_render,
  check_boxvue_type_template_id_54c47cee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var check_box = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"45c986a0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-simple-table/src/drag-box.vue?vue&type=template&id=256e6131&scoped=true&
var drag_boxvue_type_template_id_256e6131_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"indrag",rawName:"v-indrag"}],staticClass:"vs-drag-box"},[_vm._t("default"),(_vm.fack_show)?_c('div',{staticClass:"fack-drag"}):_vm._e(),(_vm.drag_show)?_c('div',{ref:"inner",staticClass:"vs-drag-inner-box",style:(_vm.drag_css)}):_vm._e()],2)}
var drag_boxvue_type_template_id_256e6131_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-simple-table/src/drag-box.vue?vue&type=template&id=256e6131&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-simple-table/src/drag-box.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var drag_boxvue_type_script_lang_js_ = ({
  name: 'drag-box',
  data() {
    return {
      sw: 0,
      sh: 0,
      ew: 0,
      eh: 0,
      drag_show: false,
      fack_show: false
    }
  },
  computed: {
    drag_css() {
      const temp = {
        left: (this.sw < this.ew ? this.sw : this.ew) + 'px',
        top: (this.sh < this.eh ? this.sh : this.eh) + 'px',
        width: Math.abs(this.sw - this.ew) + 'px',
        height: Math.abs(this.sh - this.eh) + 'px'
      }
      return temp
    },
    fd() {
      return {
        sw: this.sw,
        sh: this.sh,
        ew: this.ew,
        eh: this.eh
      }
    }
  },
  watch: {
    ew() {
      this.$emit('change', this.fd)
    },
    eh() {
      this.$emit('change', this.fd)
    }
  },
  directives: {
    indrag: {
      // 指令的定义
      bind: function (el, v, vnode) {
        const self = vnode.context
        el.onmousedown = e => {
          //算出鼠标相对页面的位置
          let disX = e.layerX
          let disY = e.layerY
          document.onmousemove = e => {
            self.fack_show = true
            let p = self.getElementPos(el)
            self.sw = disX
            self.sh = disY
            self.ew = e.pageX - p.x
            self.eh = e.pageY - p.y
            self.drag_show = true
          }
          document.onmouseup = e => {
            document.onmousemove = null
            document.onmouseup = null
            self.drag_show = false
            self.fack_show = false
            self.$emit('select', self.fd)
            let p = self.getElementPos(el)
            self.sw = e.pageX - p.x
            self.sh = e.pageY - p.y
            self.ew = e.pageX - p.x
            self.eh = e.pageY - p.y
          }
        }
      }
    }
  },
  methods: {
    isFElement(dom, class_name) {
      if (dom.className.indexOf(class_name) > -1) {
        return true
      } else  if (dom.nodeName === 'BODY') {
        return false
      } else {
        return this.isFElement(dom.parentElement, class_name)
      }
    },
    getElementPos(el) {
    if(el.parentNode === null || el.style.display == 'none') {  return false;}     
      var parent = null
      var pos = []
      var box
      if(el.getBoundingClientRect){     //IE
        box = el.getBoundingClientRect()
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop)
        var scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft)
        return {x:box.left + scrollLeft, y:box.top + scrollTop}
      
      } else {
        pos = [el.offsetLeft, el.offsetTop]
        parent = el.offsetParent
        if (parent != el) {
          while (parent) { 
            pos[0] += parent.offsetLeft
            pos[1] += parent.offsetTop
            parent = parent.offsetParent
          } 
        }  
      }  
      return {x:pos[0], y:pos[1]}
    }   
  }
});

// CONCATENATED MODULE: ./packages/vue-simple-table/src/drag-box.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_drag_boxvue_type_script_lang_js_ = (drag_boxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-simple-table/src/drag-box.vue?vue&type=style&index=0&id=256e6131&lang=scss&scoped=true&
var drag_boxvue_type_style_index_0_id_256e6131_lang_scss_scoped_true_ = __webpack_require__("b09d");

// CONCATENATED MODULE: ./packages/vue-simple-table/src/drag-box.vue






/* normalize component */

var drag_box_component = normalizeComponent(
  src_drag_boxvue_type_script_lang_js_,
  drag_boxvue_type_template_id_256e6131_scoped_true_render,
  drag_boxvue_type_template_id_256e6131_scoped_true_staticRenderFns,
  false,
  null,
  "256e6131",
  null
  
)

/* harmony default export */ var drag_box = (drag_box_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/vue-simple-table/src/vue-simple-table.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var vue_simple_tablevue_type_script_lang_js_ = ({
  name: 'vueSimpleTable',
  components: {
    'vs-checkbox': check_box,
    'vs-dragbox': drag_box
  },
  props: {
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    checksData: {
      type: Array,
      default: () => {
        return []
      }
    },
    columns: {
      type: Array,
      default: () => {
        return []
      }
    },
    rawHeight: {
      type: Number,
      default: 36
    },
    headHeight: {
      type: Number,
      default: 36
    },
    // 单选模式 多选模式
    checkType: {
      type: String,
      default: 'single' // single  many
    },
    showRange: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      now_scroll: null,
      timer: null,
      checks: [],
      sort_key: null,
      reload_table: true,
      isactive_map: {},
      timerout_timer: null
    }
  },
  watch: {
    checks() {
      this.$emit('change', this.checks)
      let map = {}
      this.checks.forEach(item => {
        map[JSON.stringify(item)] = true
      })
      this.isactive_map = map
    },
    checksData() {
      this.checks = this.checksData
    }
  },
  computed: {
    fixed_columns() {
      var temp = []
      this.columns.forEach(item => {
        temp.push(item.filter(ite => ite.isFrozen))
      })
      return temp
    },
    fixed_keys() {
      return this.fixed_columns[this.fixed_columns.length - 1]
    },
    fixed_data() {
      var temp = []
      this.data.forEach(item => {
        const item_arr = []
        this.fixed_keys.forEach(key => {
          item_arr.push({
            data: item,
            key: key,
            val: item[key.field]
          })
        })
        temp.push(item_arr)
      })
      return temp
    },
    move_columns() {
      var temp = []
      this.columns.forEach(item => {
        temp.push(item.filter(ite => !ite.isFrozen))
      })
      return temp
    },
    move_keys() {
      return this.move_columns[this.move_columns.length - 1]
    },
    move_data() {
      var temp = []
      this.data.forEach(item => {
        const item_arr = []
        this.move_keys.forEach(key => {
          item_arr.push({
            data: item,
            key: key,
            val: item[key.field]
          })
        })
        temp.push(item_arr)
      })
      return temp
    },
    fixed_width() {
      let width = 0
      this.fixed_keys.forEach(item => {
        width += item.width
      })
      return width
    },
    fixed_height() {
      return this.fixed_columns.length * this.headHeight
    },
    move_width() {
      let width = 0
      this.move_keys.forEach(item => {
        width += item.width
      })
      return width
    },
    move_height() {
      return this.data.length * this.rawHeight
    },
    data() {
      let temp = JSON.parse(JSON.stringify(this.tableData))
      if (this.sort_key) {
        const key_arr = this.sort_key.split('&')
        let keyx = key_arr[0]
        let sort = Number(key_arr[1])
        let type = key_arr[2]
        temp = temp.sort((a, b) => {
          let x, y
          if (type === 'num') {
            x = isNaN(a[keyx]) ? -Infinity : a[keyx]
            y = isNaN(b[keyx]) ? -Infinity : b[keyx]
          }
          else if (type === 'date') {
            x = new Date(a[keyx]).valueOf()
            y = new Date(b[keyx]).valueOf()
          }
          return (x - y) * sort
        })
      }
      return temp
    },
    // 选择
    check_map() {
      const temp = {}
      this.checks.forEach(item => {
        temp[JSON.stringify(item)] = true
      })
      return temp
    },
    // 全部数据
    all_data() {
      const temp = []
      this.data.forEach(item => {
        for (let key in item) {
          temp.push({
            data: item,
            key: key,
            val: item[key]
          })
        }
      })
      return temp
    },
    // 选择范围
    ranges() {
      let max_min_map = {}
      this.checks.forEach(item => {
        let val = isNaN(item.val) ? null : item.val
        if (!val) { return }
        if (max_min_map[item.key]) {
          let obj = max_min_map[item.key]
          obj.min = obj.min < val ? obj.min : val
          obj.max = obj.max > val ? obj.max : val
        } else {
          max_min_map[item.key] = { max: val, min: val }
        }
      })
      var temp = []
      this.move_columns[this.move_columns.length - 1].forEach(item => {
        let val
        if (max_min_map[item.field]) {
          let obj = max_min_map[item.field]
          val = `${obj.min}~${obj.max}`
        }
        temp.push({
          width: item.width,
          val: val
        })
      })
      return temp
    }
  },
  mounted() {
    this.setScrollbar()
  },
  methods: {
    // 联合滚动
    scrollEventLeft(e) {
      if (this.now_scroll && this.now_scroll !== 'l') return
      this.setAllScrollTop(e.target.scrollTop, 'l')
    },
    scrollEventRight(e) {
      if (this.now_scroll && this.now_scroll !== 'r') return
      this.setAllScrollTop(e.target.scrollTop, 'r')
    },
    scrollEventBar(e) {
      if (this.now_scroll && this.now_scroll !== 'b') return
      this.setAllScrollTop(e.target.scrollTop, 'b')
    },
    setAllScrollTop(val, name) {
      this.now_scroll = name
      clearTimeout(this.timer)
      if (name !== 'l') this.$refs.leftScroll.scrollTop = val
      if (name !== 'r') this.$refs.rightScroll.scrollTop = val
      if (name !== 'b') {
        clearTimeout(this.timerout_timer)
        this.timerout_timer = setTimeout(() => {
          this.$refs.barScroll.scrollTop = val
        }, 100)
      }
      this.timer = setTimeout(() => {
        this.now_scroll = null
      }, 500)
    },
    onLeftBoxScroll(e) {
      this.$refs.rangebox.scrollLeft = e.target.scrollLeft
    },
    setScrollbar() {
      new perfect_scrollbar_esm(this.$refs.barScroll)
      new perfect_scrollbar_esm(this.$refs.rightVSbox)
    },
    // 选择
    // 获取整行数据
    getRawsData(v) {
      const temp = []
      const key = v.key.field
      const data = v.data
      for (let ke in data) {
        if (key !== ke) {
          temp.push({
            data: data,
            key: ke,
            val: data[ke]
          })
        }
      }
      return temp
    },
    // 获取整列数据
    getFieldData(v) {
      const temp = []
      this.data.forEach(item => {
        temp.push({
          data: item,
          key: v.field,
          val: item[v.field]
        })
      })
      return temp
    },
    //获取全部数据
    getAllData() {
      return this.all_data
    },
    getClass(arr) {
      let temp = []
      arr.forEach(item => {
        if (this.check_map[JSON.stringify(item)]) {
          temp.push(item)
        }
      })
      if (!temp.length) {
        return 'no'
      }
      if (temp.length === arr.length) {
        return 'check'
      } else {
        return 'harf'
      }
    },
    dedupe(array){
      return Array.from(new Set(array))
    },
    checkBtn(arr) {
      const state = this.getClass(arr)
      if (state === 'no' || state === 'harf') {
        this.setChecksAdd(arr)
      } else {
        this.setChecksDel(arr)
      }
    },
    sortData(v) {
      let key = v.field
      let key_arr = []
      if (this.sort_key) {
        key_arr = this.sort_key.split('&')
      }
      let keyx = key_arr.length ? key_arr[0] : ''
      let sort = key_arr.length ? key_arr[1] : ''
      if (key === keyx) {
        if (sort === '-1') {
          sort = '1'
        } else if (sort === '1') {
          this.sort_key = null
          return
        }
      } else {
        keyx = key
        sort = '-1'
      }
      this.sort_key = `${keyx}&${sort}&${v.valType || 'num'}`
    },
    getSortClass(key) {
      let temp = 'vs-default'
      if (this.sort_key) {
        const key_arr = this.sort_key.split('&')
        let keyx = key_arr.length ? key_arr[0] : ''
        let sort = key_arr.length ? key_arr[1] : ''
        if (key === keyx) {
          if (sort === '-1') {
            temp = 'vs-down'
          } else if (sort === '1') {
            temp = 'vs-up'
          }
        }
      }
      return temp
    },
    // 手动拖动滚动条
    onDragChange(e) {
      const width = this.$refs.rightVSbox.clientWidth
      const height = this.$refs.rightScroll.clientHeight
      const scrollL = this.$refs.rightVSbox.scrollLeft
      const scrollT = this.$refs.rightScroll.scrollTop
      const maxScrollL = this.move_width - width
      const maxScrollH = this.move_height - height
      if (e.ew > (width + scrollL)) {
        this.$refs.rightVSbox.scrollLeft = (e.ew - width) < maxScrollL ? e.ew - width : maxScrollL
      }
      if (e.eh > (height + scrollT)) {
        this.$refs.rightScroll.scrollTop = (e.eh - height) < maxScrollH ? e.eh - height : maxScrollH
      }
      if (e.ew < scrollL) {
        this.$refs.rightVSbox.scrollLeft = e.ew > 0 ? e.ew : 0
      }
      if (e.eh < scrollT) {
        this.$refs.rightScroll.scrollTop = e.eh > 0 ? e.eh : 0
      }
    },
    // 选择完毕区域
    onSelectDown(e) {
      if (e.sw === e.ew && e.sh === e.eh) {
        return
      }
      const doms = document.getElementsByClassName('vs-select-td-box')
      const arr = []
      for (let i = 0; i < doms.length; i++) {
        const left = doms[i].offsetLeft
        const top = doms[i].offsetTop
        const width = doms[i].clientWidth
        const height = doms[i].clientHeight
        let sw = e.sw, ew = e.ew, sh = e.sh, eh = e.eh
        if (e.sw > e.ew) {
          sw = e.ew
          ew = e.sw
        }
        if (e.sh > e.eh) {
          sh = e.eh
          eh = e.sh
        }
        if (sw < left + width && ew > left && sh < top + height && eh > top) {
          const obj = JSON.parse(doms[i].id)
          obj.key = obj.key.field
          arr.push(obj)
        }
      }
      this.setChecksAdd(arr)
    },
    setChecksAdd(arr) {
      if (this.checkType === 'single') {
        this.checks = []
      }
      let checks = JSON.parse(JSON.stringify(this.checks))
      arr.forEach(item => {
        if (!this.isactive_map[JSON.stringify(item)]) {
          checks.push(item)
        }
      })
      this.checks = checks
    },
    setChecksDel(arr) {
      let arr_map = {}
      arr.forEach(item => {
        arr_map[JSON.stringify(item)] = true
      })
      this.checks = this.checks.filter(item => {
        return !arr_map[JSON.stringify(item)]
      })
    },
    clickSingleRaw(v) {
      let v_temp = JSON.parse(JSON.stringify(v))
      v_temp.key = v_temp.key.field
      let arr = [v_temp]
      let state = false
      if (this.checkType === 'many') {
        this.checks.filter(item => {
          if (JSON.stringify(item) === JSON.stringify(v_temp)) {
            state = true
          }
        })
      }
      if (state) {
        this.setChecksDel(arr)
      } else {
        this.setChecksAdd(arr)
      }
    },
    getActiveClass(v) {
      let v_temp = JSON.parse(JSON.stringify(v))
      v_temp.key = v_temp.key.field
      let key = JSON.stringify(v_temp)
      return this.isactive_map[key]
    }
  }
});

// CONCATENATED MODULE: ./packages/vue-simple-table/src/vue-simple-table.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_vue_simple_tablevue_type_script_lang_js_ = (vue_simple_tablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-simple-table/src/vue-simple-table.vue?vue&type=style&index=0&lang=scss&
var vue_simple_tablevue_type_style_index_0_lang_scss_ = __webpack_require__("1c2f");

// CONCATENATED MODULE: ./packages/vue-simple-table/src/vue-simple-table.vue






/* normalize component */

var vue_simple_table_component = normalizeComponent(
  src_vue_simple_tablevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var vue_simple_table = (vue_simple_table_component.exports);
// CONCATENATED MODULE: ./packages/vue-simple-table/index.js
// src/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
vue_simple_table.install = function (Vue) {
 Vue.component(vue_simple_table.name, vue_simple_table)
}
// 默认导出组件
/* harmony default export */ var packages_vue_simple_table = (vue_simple_table);
// CONCATENATED MODULE: ./packages/index.js
// 导入颜色选择器组件


// 存储组件列表
const components = [packages_vue_simple_table];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  });
};
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  vueSimpleTable: packages_vue_simple_table
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=vue-simple-table.common.js.map