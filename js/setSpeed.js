import { prices } from "./prices";


export let priceSpeedUpdate = 10000;
export let tableSpeedUpdate = 5000;

export function setSpeed(value){
    priceSpeedUpdate = value;
    tableSpeedUpdate = value/2;
}