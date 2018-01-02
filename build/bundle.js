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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const cryptoAmount = document.querySelector('#cryptoAmount');
/* harmony export (immutable) */ __webpack_exports__["c"] = cryptoAmount;

const cryptoType = document.querySelector('#cryptoType');
/* harmony export (immutable) */ __webpack_exports__["d"] = cryptoType;

const fiatAmount = document.querySelector('#fiatAmount');
/* harmony export (immutable) */ __webpack_exports__["e"] = fiatAmount;

const fiatType = document.querySelector('#fiatType');
/* harmony export (immutable) */ __webpack_exports__["f"] = fiatType;


const refMonth = document.querySelector('#refMonth');
/* harmony export (immutable) */ __webpack_exports__["i"] = refMonth;

const refYear = document.querySelector('#refYear');
/* harmony export (immutable) */ __webpack_exports__["j"] = refYear;


const lastMonthPrice = document.querySelector('#lastMonthPrice');
/* harmony export (immutable) */ __webpack_exports__["g"] = lastMonthPrice;

const lastYearPrice = document.querySelector('#lastYearPrice');
/* harmony export (immutable) */ __webpack_exports__["h"] = lastYearPrice;


const actualPrice = document.querySelector('#actualPrice');
/* harmony export (immutable) */ __webpack_exports__["a"] = actualPrice;

const actualPrice1 = document.querySelector('#actualPrice1');
/* harmony export (immutable) */ __webpack_exports__["b"] = actualPrice1;


const variationMonthToday = document.querySelector('#variationMonthToday');
/* harmony export (immutable) */ __webpack_exports__["k"] = variationMonthToday;

const variationYearToday = document.querySelector('#variationYearToday');
/* harmony export (immutable) */ __webpack_exports__["l"] = variationYearToday;




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return currentChange; });
/* harmony export (immutable) */ __webpack_exports__["b"] = getPrices;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domElements__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__updateValue__ = __webpack_require__(4);




let currentChange;


function getPrices (cryptoType, valueToUpdate, type, fiatType) {
    var myHeaders = {
        'Access-Control-Allow-Origin':'*'
    }
    fetch(`https://api.coinbase.com/v2/prices/${cryptoType}-${fiatType}/buy`, {
        method: 'GET',
        mode: 'cors',
        headers:myHeaders,
    }).then(function(response){
        return response.json()
    }).then(function(res){
        if(type == 'cryptoToFiat'){
            currentChange = res.data.amount;
            const prevVal = valueToUpdate.value;
            const newVal = (Number(__WEBPACK_IMPORTED_MODULE_0__domElements__["c" /* cryptoAmount */].value)*Number(res.data.amount)).toFixed(2);
            valueToUpdate.value = newVal
            return Object(__WEBPACK_IMPORTED_MODULE_2__updateValue__["a" /* updateValue */])(valueToUpdate, prevVal, newVal);
        } else if (type =='fiatToCrypto'){
            currentChange = res.data.amount;           
            const prevVal = valueToUpdate.value;
            const newVal = (Number(__WEBPACK_IMPORTED_MODULE_0__domElements__["e" /* fiatAmount */].value)/Number(res.data.amount)).toFixed(2);
            valueToUpdate.value = newVal;
            return Object(__WEBPACK_IMPORTED_MODULE_2__updateValue__["a" /* updateValue */])(valueToUpdate, prevVal, newVal);
        }
        });
        
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const TOFIAT = 'cryptoToFiat';
/* harmony export (immutable) */ __webpack_exports__["b"] = TOFIAT;

const TOCRYPTO = 'fiatToCrypto';
/* harmony export (immutable) */ __webpack_exports__["a"] = TOCRYPTO;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domElements__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrices__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__updateTable__ = __webpack_require__(5);






__WEBPACK_IMPORTED_MODULE_0__domElements__["c" /* cryptoAmount */].addEventListener('change', function(){
    var currentCryptoType = __WEBPACK_IMPORTED_MODULE_0__domElements__["d" /* cryptoType */].value;
    var currentFiatType = __WEBPACK_IMPORTED_MODULE_0__domElements__["f" /* fiatType */].value;
    Object(__WEBPACK_IMPORTED_MODULE_1__getPrices__["b" /* getPrices */])(currentCryptoType, __WEBPACK_IMPORTED_MODULE_0__domElements__["e" /* fiatAmount */], __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* TOFIAT */], currentFiatType);  
});

__WEBPACK_IMPORTED_MODULE_0__domElements__["d" /* cryptoType */].addEventListener('change', function(){
    var currentCryptoType = __WEBPACK_IMPORTED_MODULE_0__domElements__["d" /* cryptoType */].value;
    var currentFiatType = __WEBPACK_IMPORTED_MODULE_0__domElements__["f" /* fiatType */].value;
    Object(__WEBPACK_IMPORTED_MODULE_1__getPrices__["b" /* getPrices */])(currentCryptoType, __WEBPACK_IMPORTED_MODULE_0__domElements__["e" /* fiatAmount */], __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* TOFIAT */], currentFiatType);
});


__WEBPACK_IMPORTED_MODULE_0__domElements__["e" /* fiatAmount */].addEventListener('change', function(){
    var currentCryptoType = __WEBPACK_IMPORTED_MODULE_0__domElements__["d" /* cryptoType */].value;
    var currentFiatType = __WEBPACK_IMPORTED_MODULE_0__domElements__["f" /* fiatType */].value;
    Object(__WEBPACK_IMPORTED_MODULE_1__getPrices__["b" /* getPrices */])(currentCryptoType, __WEBPACK_IMPORTED_MODULE_0__domElements__["c" /* cryptoAmount */], __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* TOCRYPTO */], currentFiatType);
});

setInterval(function(){
    var currentCryptoType = __WEBPACK_IMPORTED_MODULE_0__domElements__["d" /* cryptoType */].value; 
    var currentFiatType = __WEBPACK_IMPORTED_MODULE_0__domElements__["f" /* fiatType */].value;   
    Object(__WEBPACK_IMPORTED_MODULE_1__getPrices__["b" /* getPrices */])(currentCryptoType, __WEBPACK_IMPORTED_MODULE_0__domElements__["e" /* fiatAmount */], __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* TOFIAT */], currentFiatType)
}, 10000);

setInterval(function(){
    var currentCryptoType = __WEBPACK_IMPORTED_MODULE_0__domElements__["d" /* cryptoType */].value;  
    var currentFiatType = __WEBPACK_IMPORTED_MODULE_0__domElements__["f" /* fiatType */].value;
    var currentValue = Number(__WEBPACK_IMPORTED_MODULE_0__domElements__["e" /* fiatAmount */].value);
    if(currentValue){
    return Object(__WEBPACK_IMPORTED_MODULE_3__updateTable__["a" /* updateTable */])(currentValue, currentCryptoType, currentFiatType);
    }
},5000);

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

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = updateTable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__domElements__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__prices__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getPrices__ = __webpack_require__(1);




function updateTable(currentValue, currentCryptoType, currentFiatType){
    let ref;
    if(currentCryptoType == 'BTC'){
        if(currentFiatType == 'EUR'){
            ref = __WEBPACK_IMPORTED_MODULE_1__prices__["a" /* prices */].btcToEur;
        }
        else if (currentFiatType == 'USD'){
            ref = __WEBPACK_IMPORTED_MODULE_1__prices__["a" /* prices */].btcToUsd;
        }
    } else if (currentCryptoType == 'ETH'){
        if(currentFiatType == 'EUR'){
            ref = __WEBPACK_IMPORTED_MODULE_1__prices__["a" /* prices */].ethToEur;
        }
        else if (currentFiatType == 'USD'){
            ref = __WEBPACK_IMPORTED_MODULE_1__prices__["a" /* prices */].ethToUsd;
        }
    } else if (currentCryptoType == 'LTC'){
        if(currentFiatType == 'EUR'){
            ref = __WEBPACK_IMPORTED_MODULE_1__prices__["a" /* prices */].ltcToEur;
        }
        else if (currentFiatType == 'USD'){
            ref = __WEBPACK_IMPORTED_MODULE_1__prices__["a" /* prices */].ltcToUsd;
        }
    }
    console.log('currentChange', __WEBPACK_IMPORTED_MODULE_2__getPrices__["a" /* currentChange */]);
    __WEBPACK_IMPORTED_MODULE_0__domElements__["i" /* refMonth */].innerHTML = __WEBPACK_IMPORTED_MODULE_1__prices__["a" /* prices */].date.lastMonth;
    __WEBPACK_IMPORTED_MODULE_0__domElements__["j" /* refYear */].innerHTML = __WEBPACK_IMPORTED_MODULE_1__prices__["a" /* prices */].date.lastYear;
    __WEBPACK_IMPORTED_MODULE_0__domElements__["g" /* lastMonthPrice */].innerHTML = ref.lastMonth;
    __WEBPACK_IMPORTED_MODULE_0__domElements__["h" /* lastYearPrice */].innerHTML = ref.lastYear;
    __WEBPACK_IMPORTED_MODULE_0__domElements__["a" /* actualPrice */].innerHTML = __WEBPACK_IMPORTED_MODULE_2__getPrices__["a" /* currentChange */];
    __WEBPACK_IMPORTED_MODULE_0__domElements__["b" /* actualPrice1 */].innerHTML = __WEBPACK_IMPORTED_MODULE_2__getPrices__["a" /* currentChange */];
    var lastMonthVariation = (((__WEBPACK_IMPORTED_MODULE_2__getPrices__["a" /* currentChange */]-ref.lastMonth)*100)/ref.lastMonth).toFixed(3);
    var lastYearVariation = (((__WEBPACK_IMPORTED_MODULE_2__getPrices__["a" /* currentChange */]-ref.lastYear)*100)/ref.lastYear).toFixed(3);
    if(__WEBPACK_IMPORTED_MODULE_2__getPrices__["a" /* currentChange */] > ref.lastMonth){
        __WEBPACK_IMPORTED_MODULE_0__domElements__["k" /* variationMonthToday */].innerHTML = `${lastMonthVariation} %`;
        __WEBPACK_IMPORTED_MODULE_0__domElements__["k" /* variationMonthToday */].style.color= 'green';
        __WEBPACK_IMPORTED_MODULE_0__domElements__["k" /* variationMonthToday */].style.fontWeight= 'bold';
    } else {
        __WEBPACK_IMPORTED_MODULE_0__domElements__["k" /* variationMonthToday */].innerHTML = `${lastMonthVariation} %`;
        __WEBPACK_IMPORTED_MODULE_0__domElements__["k" /* variationMonthToday */].style.color= 'red';
        __WEBPACK_IMPORTED_MODULE_0__domElements__["k" /* variationMonthToday */].style.fontWeight= 'bold';
    }
    if(__WEBPACK_IMPORTED_MODULE_2__getPrices__["a" /* currentChange */] > ref.lastYear){
        __WEBPACK_IMPORTED_MODULE_0__domElements__["l" /* variationYearToday */].innerHTML = `${lastYearVariation} %`;
        __WEBPACK_IMPORTED_MODULE_0__domElements__["l" /* variationYearToday */].style.color= 'green';
        __WEBPACK_IMPORTED_MODULE_0__domElements__["l" /* variationYearToday */].style.fontWeight= 'bold';
    } else {
        __WEBPACK_IMPORTED_MODULE_0__domElements__["l" /* variationYearToday */].innerHTML = `${lastYearVariation} %`;
        __WEBPACK_IMPORTED_MODULE_0__domElements__["l" /* variationYearToday */].style.color= 'red';
        __WEBPACK_IMPORTED_MODULE_0__domElements__["l" /* variationYearToday */].style.fontWeight= 'bold'; 
    }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const prices = {
    date:{
        lastYear:'03/01/2017',
        lastMonth:'03/12/2017',
    },
    btcToEur :{
        lastYear:975.60,
        lastMonth:9913.72,
    },
    btcToUsd :{
        lastYear: 1016.35,
        lastMonth: 11754.36,
    },
    ethToEur:{
        lastYear:8.23,
        lastMonth:403.93,
    },
    ethToUsd:{
        lastYear:8.57,
        lastMonth:478.93,
    },
    ltcToEur:{
        lastYear:4.37,
        lastMonth:87.50,
    },
    ltcToUsd:{
        lastYear:4.55,
        lastMonth:103.55,
    },


};
/* harmony export (immutable) */ __webpack_exports__["a"] = prices;


/***/ })
/******/ ]);