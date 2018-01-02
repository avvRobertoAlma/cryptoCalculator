import { cryptoAmount, cryptoType, fiatAmount, fiatType, refMonth, refYear, actualPrice, actualPrice1, variationMonthToday, variationYearToday, lastMonthPrice, lastYearPrice } from './domElements';
import { prices } from './prices'

export function updateTable(currentValue, currentCryptoType, currentFiatType){
    let ref;
    if(currentCryptoType == 'BTC'){
        if(currentFiatType == 'EUR'){
            ref = prices.btcToEur;
        }
        else if (currentFiatType == 'USD'){
            ref = prices.btcToUsd;
        }
    } else if (currentCryptoType == 'ETH'){
        if(currentFiatType == 'EUR'){
            ref = prices.ethToEur;
        }
        else if (currentFiatType == 'USD'){
            ref = prices.ethToUsd;
        }
    } else if (currentCryptoType == 'LTC'){
        if(currentFiatType == 'EUR'){
            ref = prices.ltcToEur;
        }
        else if (currentFiatType == 'USD'){
            ref = prices.ltcToUsd;
        }
    }
    refMonth.innerHTML = prices.date.lastMonth;
    refYear.innerHTML = prices.date.lastYear;
    lastMonthPrice.innerHTML = ref.lastMonth;
    lastYearPrice.innerHTML = ref.lastYear;
    actualPrice.innerHTML = currentValue;
    actualPrice1.innerHTML = currentValue;
    var lastMonthVariation = (((currentValue-ref.lastMonth)*100)/ref.lastMonth).toFixed(3);
    var lastYearVariation = (((currentValue-ref.lastYear)*100)/ref.lastYear).toFixed(3);
    if(currentValue > ref.lastMonth){
        variationMonthToday.innerHTML = `${lastMonthVariation} %`;
        variationMonthToday.style.color= 'green';
        variationMonthToday.style.fontWeight= 'bold';
    } else {
        variationMonthToday.innerHTML = `${lastMonthVariation} %`;
        variationMonthToday.style.color= 'red';
        variationMonthToday.style.fontWeight= 'bold';
    }
    if(currentValue > ref.lastYear){
        variationYearToday.innerHTML = `${lastYearVariation} %`;
        variationYearToday.style.color= 'green';
        variationYearToday.style.fontWeight= 'bold';
    } else {
        variationYearToday.innerHTML = `${lastYearVariation} %`;
        variationYearToday.style.color= 'red';
        variationYearToday.style.fontWeight= 'bold'; 
    }
}