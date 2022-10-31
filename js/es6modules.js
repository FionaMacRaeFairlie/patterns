console.log("es6modules.js");

import { sum, mult } from './lib.js';  

// default can be imported with any name
import pie from './lib.js'; 
    

console.log( sum(1,2,3,4) );  // 10
console.log( mult(1,2,3,4) ); // 24

console.log(pie);
