// js -> por defecto es common js
// mjs -> para utilizar ES modules
// .cjs -> para utilar commonJS

import {sum, rest,multi} from './funcionsumar.mjs';

console.group("| operaciones |")
console.log("- el resultado de la suma es: " + sum(1,2));
console.log("- el resultado de la resta es: " + rest(50,3));
console.log("- el resultado de la resta es: " + multi(9,5));