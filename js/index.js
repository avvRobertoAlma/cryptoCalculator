import { cryptoAmount, cryptoType, fiatAmount, fiatType, refMonth, refYear, actualPrice, actualPrice1, variationMonthToday, variationYearToday, lastMonthPrice, lastYearPrice } from './domElements';
import { getPrices } from './getPrices';
import { TOFIAT, TOCRYPTO } from './constants';
import { updateTable } from './updateTable';


cryptoAmount.addEventListener('change', function(){
    var currentCryptoType = cryptoType.value;
    var currentFiatType = fiatType.value;
    getPrices(currentCryptoType, fiatAmount, TOFIAT, currentFiatType);  
});

cryptoType.addEventListener('change', function(){
    var currentCryptoType = cryptoType.value;
    var currentFiatType = fiatType.value;
    getPrices(currentCryptoType, fiatAmount, TOFIAT, currentFiatType);
});


fiatAmount.addEventListener('change', function(){
    var currentCryptoType = cryptoType.value;
    var currentFiatType = fiatType.value;
    getPrices(currentCryptoType, cryptoAmount, TOCRYPTO, currentFiatType);
});

setInterval(function(){
    var currentCryptoType = cryptoType.value; 
    var currentFiatType = fiatType.value;   
    getPrices(currentCryptoType, fiatAmount, TOFIAT, currentFiatType)
}, 10000);

setInterval(function(){
    var currentCryptoType = cryptoType.value;  
    var currentFiatType = fiatType.value;
    var currentValue = Number(fiatAmount.value);
    if(currentValue){
    return updateTable(currentValue, currentCryptoType, currentFiatType);
    }
},5000);