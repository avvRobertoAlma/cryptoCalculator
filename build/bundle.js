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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const cryptoAmount = document.querySelector('#cryptoAmount');
/* harmony export (immutable) */ __webpack_exports__["a"] = cryptoAmount;

const cryptoType = document.querySelector('#cryptoType');
/* harmony export (immutable) */ __webpack_exports__["b"] = cryptoType;

const fiatAmount = document.querySelector('#fiatAmount');
/* harmony export (immutable) */ __webpack_exports__["c"] = fiatAmount;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TOFIAT = 'cryptoToFiat';
/* harmony export (immutable) */ __webpack_exports__["b"] = TOFIAT;

const TOCRYPTO = 'fiatToCrypto';
/* harmony export (immutable) */ __webpack_exports__["a"] = TOCRYPTO;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domElements__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrices__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(1);





__WEBPACK_IMPORTED_MODULE_0__domElements__["a" /* cryptoAmount */].addEventListener('change', function(){
    var currentCryptoType = __WEBPACK_IMPORTED_MODULE_0__domElements__["b" /* cryptoType */].value;
    Object(__WEBPACK_IMPORTED_MODULE_1__getPrices__["a" /* getPrices */])(currentCryptoType, __WEBPACK_IMPORTED_MODULE_0__domElements__["c" /* fiatAmount */], __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* TOFIAT */]);   
});

__WEBPACK_IMPORTED_MODULE_0__domElements__["b" /* cryptoType */].addEventListener('change', function(){
    var currentCryptoType = __WEBPACK_IMPORTED_MODULE_0__domElements__["b" /* cryptoType */].value;
    Object(__WEBPACK_IMPORTED_MODULE_1__getPrices__["a" /* getPrices */])(currentCryptoType, __WEBPACK_IMPORTED_MODULE_0__domElements__["c" /* fiatAmount */], __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* TOFIAT */]);
});


__WEBPACK_IMPORTED_MODULE_0__domElements__["c" /* fiatAmount */].addEventListener('change', function(){
    var currentCryptoType = __WEBPACK_IMPORTED_MODULE_0__domElements__["b" /* cryptoType */].value;
    Object(__WEBPACK_IMPORTED_MODULE_1__getPrices__["a" /* getPrices */])(currentCryptoType, __WEBPACK_IMPORTED_MODULE_0__domElements__["a" /* cryptoAmount */], __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* TOCRYPTO */]);
});

setInterval(function(){
    var currentCryptoType = __WEBPACK_IMPORTED_MODULE_0__domElements__["b" /* cryptoType */].value;    
    Object(__WEBPACK_IMPORTED_MODULE_1__getPrices__["a" /* getPrices */])(currentCryptoType, __WEBPACK_IMPORTED_MODULE_0__domElements__["c" /* fiatAmount */], __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* TOFIAT */])
}, 10000);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPrices;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domElements__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updateValue__ = __webpack_require__(4);





function getPrices (cryptoType, valueToUpdate, type) {
    var myHeaders = {
        'Access-Control-Allow-Origin':'*'
    }
    fetch(`https://api.coinbase.com/v2/prices/${cryptoType}-EUR/buy`, {
        method: 'GET',
        mode: 'cors',
        headers:myHeaders,
    }).then(function(response){
        return response.json()
    }).then(function(res){
        if(type == 'cryptoToFiat'){
            console.log(res.data.amount);
            const prevVal = valueToUpdate.value;
            const newVal = Number(__WEBPACK_IMPORTED_MODULE_0__domElements__["a" /* cryptoAmount */].value)*Number(res.data.amount);
            valueToUpdate.value = newVal
            return Object(__WEBPACK_IMPORTED_MODULE_2__updateValue__["a" /* updateValue */])(valueToUpdate, prevVal, newVal);
        } else if (type =='fiatToCrypto'){
            console.log(res.data.amount);
            const prevVal = valueToUpdate.value;
            const newVal = Number(__WEBPACK_IMPORTED_MODULE_0__domElements__["c" /* fiatAmount */].value)/Number(res.data.amount);
            valueToUpdate.value = newVal;
            return Object(__WEBPACK_IMPORTED_MODULE_2__updateValue__["a" /* updateValue */])(valueToUpdate, prevVal, newVal);
        }
        });
        
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = updateValue;
function updateValue(valueToUpdate, prevVal, newVal){
    if(newVal > prevVal){
        valueToUpdate.style.color = 'green';
        return setTimeout(function(){
            valueToUpdate.style.color = 'black';
        }, 2000);
    } else if (newVal < prevVal){
        valueToUpdate.style.color = 'red';
        return setTimeout(function(){
            valueToUpdate.style.color = 'black';
        }, 2000);
    }
}

/***/ })
/******/ ]);