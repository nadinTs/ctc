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
/******/ 	__webpack_require__.p = "../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/addHobby.js":
/*!*****************************!*\
  !*** ./scripts/addHobby.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function addHobby(element, userList) {
  const text = element.value ?  element.value : element.querySelector('.js-text').innerHTML;

  const li = document.createElement('li');
  li.className = 'item';
  li.innerHTML = `<div class="control-cross js-control-cross"></div>
          <p class="text js-text">${text}</p>`;
  userList.appendChild(li);
}

/* harmony default export */ __webpack_exports__["default"] = (addHobby);


/***/ }),

/***/ "./scripts/app.js":
/*!************************!*\
  !*** ./scripts/app.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deleteElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteElement */ "./scripts/deleteElement.js");
/* harmony import */ var _addHobby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addHobby */ "./scripts/addHobby.js");
/* harmony import */ var _checkedHobby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkedHobby */ "./scripts/checkedHobby.js");
/* harmony import */ var _hideControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hideControl */ "./scripts/hideControl.js");
/* harmony import */ var _showWarningForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showWarningForm */ "./scripts/showWarningForm.js");
/* harmony import */ var _hideWarningForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hideWarningForm */ "./scripts/hideWarningForm.js");








const userList = document.querySelector('.js-user-items');
const otherList = document.querySelector('.js-items');
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');

function setHobby(event) {
  event.keyCode === 13 && Object(_addHobby__WEBPACK_IMPORTED_MODULE_1__["default"])(event.target, userList);
}

function handlers(event) {
  const elementParent = event.target.parentNode;

  if (event.target.classList.contains('js-warning')) {
    Object(_showWarningForm__WEBPACK_IMPORTED_MODULE_4__["default"])(form);
  }

  if (event.target.classList.contains('js-control-plus')) {
    Object(_hideControl__WEBPACK_IMPORTED_MODULE_3__["default"])(elementParent.parentNode);
    Object(_addHobby__WEBPACK_IMPORTED_MODULE_1__["default"])(elementParent, userList);
    Object(_checkedHobby__WEBPACK_IMPORTED_MODULE_2__["default"])(elementParent.parentNode);
  }
}

userList.addEventListener('click', _deleteElement__WEBPACK_IMPORTED_MODULE_0__["default"]);
otherList.addEventListener('click', handlers);
form.addEventListener('click', _hideWarningForm__WEBPACK_IMPORTED_MODULE_5__["default"]);
input.addEventListener('keyup', setHobby);


/***/ }),

/***/ "./scripts/checkedHobby.js":
/*!*********************************!*\
  !*** ./scripts/checkedHobby.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function checkedHobby(element) {
  const div = document.createElement('div');
  div.className = 'checked-hobby';
  div.innerHTML = `<span class="checked-hobby-icon"></span>Добавленно в ваши увлечения`;
  element.appendChild(div);
};

/* harmony default export */ __webpack_exports__["default"] = (checkedHobby);


/***/ }),

/***/ "./scripts/deleteElement.js":
/*!**********************************!*\
  !*** ./scripts/deleteElement.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function deleteElement(event) {
  const element = event.target.parentNode;
  event.target.classList.contains('js-control-cross') && element.parentNode.removeChild(element);
}

/* harmony default export */ __webpack_exports__["default"] = (deleteElement);


/***/ }),

/***/ "./scripts/hideControl.js":
/*!********************************!*\
  !*** ./scripts/hideControl.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function hideControl(element) {
  element.classList.add('hideControl');
}

/* harmony default export */ __webpack_exports__["default"] = (hideControl);


/***/ }),

/***/ "./scripts/hideWarningForm.js":
/*!************************************!*\
  !*** ./scripts/hideWarningForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function hideWarningForm(event) {
    if (event.target.classList.contains('js-form')) {
        event.target.classList.remove('showForm')
    }
}

/* harmony default export */ __webpack_exports__["default"] = (hideWarningForm);


/***/ }),

/***/ "./scripts/showWarningForm.js":
/*!************************************!*\
  !*** ./scripts/showWarningForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function showWarningForm(form) {
  form.classList.add('showForm');
}

/* harmony default export */ __webpack_exports__["default"] = (showWarningForm);


/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./scripts/app.js ./styles/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./scripts/app.js */"./scripts/app.js");
module.exports = __webpack_require__(/*! ./styles/style.scss */"./styles/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9hZGRIb2JieS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2NoZWNrZWRIb2JieS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2RlbGV0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc2NyaXB0cy9oaWRlQ29udHJvbC5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL2hpZGVXYXJuaW5nRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3Nob3dXYXJuaW5nRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvc3R5bGUuc2Nzcz8yZGY4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxLQUFLO0FBQ3pDO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ0pBLHlDIiwiZmlsZSI6InNjcmlwdHMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuLi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZnVuY3Rpb24gYWRkSG9iYnkoZWxlbWVudCwgdXNlckxpc3QpIHtcbiAgY29uc3QgdGV4dCA9IGVsZW1lbnQudmFsdWUgPyAgZWxlbWVudC52YWx1ZSA6IGVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRleHQnKS5pbm5lckhUTUw7XG5cbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsaS5jbGFzc05hbWUgPSAnaXRlbSc7XG4gIGxpLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiY29udHJvbC1jcm9zcyBqcy1jb250cm9sLWNyb3NzXCI+PC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0IGpzLXRleHRcIj4ke3RleHR9PC9wPmA7XG4gIHVzZXJMaXN0LmFwcGVuZENoaWxkKGxpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkSG9iYnk7XG4iLCJpbXBvcnQgZGVsZXRlRWxlbWVudCBmcm9tICcuL2RlbGV0ZUVsZW1lbnQnO1xuaW1wb3J0IGFkZEhvYmJ5IGZyb20gJy4vYWRkSG9iYnknO1xuaW1wb3J0IGNoZWNrZWRIb2JieSBmcm9tICcuL2NoZWNrZWRIb2JieSc7XG5pbXBvcnQgaGlkZUNvbnRyb2wgZnJvbSAnLi9oaWRlQ29udHJvbCc7XG5pbXBvcnQgc2hvd1dhcm5pbmdGb3JtIGZyb20gJy4vc2hvd1dhcm5pbmdGb3JtJztcbmltcG9ydCBoaWRlV2FybmluZ0Zvcm0gZnJvbSAnLi9oaWRlV2FybmluZ0Zvcm0nO1xuXG5cbmNvbnN0IHVzZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXVzZXItaXRlbXMnKTtcbmNvbnN0IG90aGVyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1pdGVtcycpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mb3JtJyk7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1pbnB1dCcpO1xuXG5mdW5jdGlvbiBzZXRIb2JieShldmVudCkge1xuICBldmVudC5rZXlDb2RlID09PSAxMyAmJiBhZGRIb2JieShldmVudC50YXJnZXQsIHVzZXJMaXN0KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlcnMoZXZlbnQpIHtcbiAgY29uc3QgZWxlbWVudFBhcmVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuXG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy13YXJuaW5nJykpIHtcbiAgICBzaG93V2FybmluZ0Zvcm0oZm9ybSk7XG4gIH1cblxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnanMtY29udHJvbC1wbHVzJykpIHtcbiAgICBoaWRlQ29udHJvbChlbGVtZW50UGFyZW50LnBhcmVudE5vZGUpO1xuICAgIGFkZEhvYmJ5KGVsZW1lbnRQYXJlbnQsIHVzZXJMaXN0KTtcbiAgICBjaGVja2VkSG9iYnkoZWxlbWVudFBhcmVudC5wYXJlbnROb2RlKTtcbiAgfVxufVxuXG51c2VyTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUVsZW1lbnQpO1xub3RoZXJMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcnMpO1xuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVXYXJuaW5nRm9ybSk7XG5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHNldEhvYmJ5KTtcbiIsImZ1bmN0aW9uIGNoZWNrZWRIb2JieShlbGVtZW50KSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NOYW1lID0gJ2NoZWNrZWQtaG9iYnknO1xuICBkaXYuaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiY2hlY2tlZC1ob2JieS1pY29uXCI+PC9zcGFuPtCU0L7QsdCw0LLQu9C10L3QvdC+INCyINCy0LDRiNC4INGD0LLQu9C10YfQtdC90LjRj2A7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNoZWNrZWRIb2JieTtcbiIsImZ1bmN0aW9uIGRlbGV0ZUVsZW1lbnQoZXZlbnQpIHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xuICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1jb250cm9sLWNyb3NzJykgJiYgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWxldGVFbGVtZW50O1xuIiwiZnVuY3Rpb24gaGlkZUNvbnRyb2woZWxlbWVudCkge1xuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGVDb250cm9sJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhpZGVDb250cm9sO1xuIiwiZnVuY3Rpb24gaGlkZVdhcm5pbmdGb3JtKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2pzLWZvcm0nKSkge1xuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd0Zvcm0nKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGlkZVdhcm5pbmdGb3JtO1xuIiwiZnVuY3Rpb24gc2hvd1dhcm5pbmdGb3JtKGZvcm0pIHtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKCdzaG93Rm9ybScpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzaG93V2FybmluZ0Zvcm07XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=