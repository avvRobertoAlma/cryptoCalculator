import { rangeSlider, outputRange, cryptoAmount, cryptoType, fiatAmount, fiatType, refMonth, refYear, actualPrice, actualPrice1, variationMonthToday, variationYearToday, lastMonthPrice, lastYearPrice } from './domElements';
import { getPrices } from './getPrices';
import { TOFIAT, TOCRYPTO } from './constants';
import { updateTable } from './updateTable';
import { setSpeed, priceSpeedUpdate, tableSpeedUpdate } from './setSpeed';


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
    console.log(priceSpeedUpdate);
    var currentCryptoType = cryptoType.value; 
    var currentFiatType = fiatType.value;   
    getPrices(currentCryptoType, fiatAmount, TOFIAT, currentFiatType)
}, priceSpeedUpdate);

setInterval(function(){
    var currentCryptoType = cryptoType.value;  
    var currentFiatType = fiatType.value;
    var currentValue = Number(fiatAmount.value);
    if(currentValue){
    return updateTable(currentValue, currentCryptoType, currentFiatType);
    }
},tableSpeedUpdate);

rangeSlider.addEventListener('input', function(){
    var currentSpeed = this.value/1000;
    outputRange.innerHTML = `Current Speed: ${currentSpeed}`;
    setSpeed(this.value);
})