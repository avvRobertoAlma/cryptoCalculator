import { cryptoAmount, cryptoType, fiatAmount } from './domElements';


export function getPrices (cryptoType, valueToUpdate, type) {
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
            return valueToUpdate.value = Number(cryptoAmount.value)*Number(res.data.amount);
        } else if (type =='fiatToCrypto'){
            console.log(res.data.amount);
            return valueToUpdate.value = Number(fiatAmount.value)/Number(res.data.amount);
        }
        });
        
}