import { cryptoAmount, cryptoType, fiatAmount, fiatType } from './domElements';
import { TOFIAT, TOCRYPTO } from './constants';
import { updateValue } from './updateValue';


export function getPrices (cryptoType, valueToUpdate, type, fiatType) {
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
            console.log(res.data.amount);
            const prevVal = valueToUpdate.value;
            const newVal = Number(cryptoAmount.value)*Number(res.data.amount);
            valueToUpdate.value = newVal
            return updateValue(valueToUpdate, prevVal, newVal);
        } else if (type =='fiatToCrypto'){
            console.log(res.data.amount);
            const prevVal = valueToUpdate.value;
            const newVal = Number(fiatAmount.value)/Number(res.data.amount);
            valueToUpdate.value = newVal;
            return updateValue(valueToUpdate, prevVal, newVal);
        }
        });
        
}