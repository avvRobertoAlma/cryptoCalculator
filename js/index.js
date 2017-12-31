import { cryptoAmount, cryptoType, fiatAmount } from './domElements';
import { getPrices } from './getPrices'

cryptoAmount.addEventListener('change', function(){
    var currentCryptoType = cryptoType.value;
    getPrices(currentCryptoType, fiatAmount, 'cryptoToFiat');   
});

cryptoType.addEventListener('change', function(){
    var currentCryptoType = cryptoType.value;
    getPrices(currentCryptoType, fiatAmount, 'cryptoToFiat');
});


fiatAmount.addEventListener('change', function(){
    var currentCryptoType = cryptoType.value;
    getPrices(currentCryptoType, cryptoAmount, 'fiatToCrypto');
});