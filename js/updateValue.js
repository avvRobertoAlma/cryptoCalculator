export function updateValue(valueToUpdate, prevVal, newVal){
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