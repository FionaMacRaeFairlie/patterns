console.log("module.js");

// object 
const myObjectLiteral = {
 
    variableKey: "variable value",
 
    functionKey: function () {
      // ...
    }
};

console.log(myObjectLiteral.variableKey)

// Module pattern
const myModule = (function () {
 
    let counter = 0;
   
    return {
   
      incrementCounter: function () {
        return counter++;
      },
   
      resetCounter: function () {
        console.log( "counter value prior to reset: " + counter );
        counter = 0;
      }
    };
   
})();
   
// Usage:

// Increment our counter
myModule.incrementCounter();
//console.log(myModule.counter);

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
myModule.resetCounter();

// counter is not exposed to global scope - undefined
console.log(myModule.counter);