import { cryptoAmount, cryptoType, fiatAmount } from './domElements';
import { getPrices } from './getPrices';
import { TOFIAT, TOCRYPTO } from './constants';


cryptoAmount.addEventListener('change', function(){
    var currentCryptoType = cryptoType.value;
    getPrices(currentCryptoType, fiatAmount, TOFIAT);   
});

cryptoType.addEventListener('change', function(){
    var currentCryptoType = cryptoType.value;
    getPrices(currentCryptoType, fiatAmount, TOFIAT);
});


fiatAmount.addEventListener('change', function(){
    var currentCryptoType = cryptoType.value;
    getPrices(currentCryptoType, cryptoAmount, TOCRYPTO);
});

setInterval(function(){
    var currentCryptoType = cryptoType.value;    
    getPrices(currentCryptoType, fiatAmount, TOFIAT)
}, 10000);