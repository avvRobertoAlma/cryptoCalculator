import { cryptoAmount, cryptoType, fiatAmount, fiatType, refMonth, refYear, actualPrice, actualPrice1, variationMonthToday, variationYearToday, lastMonthPrice, lastYearPrice } from './domElements';
import { prices } from './prices'
import { currentChange } from './getPrices'

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
    console.log('currentChange', currentChange);
    refMonth.innerHTML = prices.date.lastMonth;
    refYear.innerHTML = prices.date.lastYear;
    lastMonthPrice.innerHTML = ref.lastMonth;
    lastYearPrice.innerHTML = ref.lastYear;
    actualPrice.innerHTML = currentChange;
    actualPrice1.innerHTML = currentChange;
    var lastMonthVariation = (((currentChange-ref.lastMonth)*100)/ref.lastMonth).toFixed(3);
    var lastYearVariation = (((currentChange-ref.lastYear)*100)/ref.lastYear).toFixed(3);
    if(currentChange > ref.lastMonth){
        variationMonthToday.innerHTML = `${lastMonthVariation} %`;
        variationMonthToday.style.color= 'green';
        variationMonthToday.style.fontWeight= 'bold';
    } else {
        variationMonthToday.innerHTML = `${lastMonthVariation} %`;
        variationMonthToday.style.color= 'red';
        variationMonthToday.style.fontWeight= 'bold';
    }
    if(currentChange > ref.lastYear){
        variationYearToday.innerHTML = `${lastYearVariation} %`;
        variationYearToday.style.color= 'green';
        variationYearToday.style.fontWeight= 'bold';
    } else {
        variationYearToday.innerHTML = `${lastYearVariation} %`;
        variationYearToday.style.color= 'red';
        variationYearToday.style.fontWeight= 'bold'; 
    }
}