console.log("singleton.js");

const mySingleton = (function () {
 
    // Instance stores a reference to the Singleton
    var instance;
   
    function init() {
   
      // Singleton
   
      // private variable
      let privateRandomNumber = Math.random();
   
      return {
   
        // Public method
        getRandomNumber: function() {
          return privateRandomNumber;
        }
   
      };
   
    };
   
    return {
   
      // Get the Singleton instance if one exists
      // or create one if it doesn't
      getInstance: function () {
   
        if ( !instance ) {
          instance = init();
        }
   
        return instance;
      }
   
    };
   
})();
   
  
   
  // Usage:
  const singleA = mySingleton.getInstance();
  const singleB = mySingleton.getInstance();
  console.log( singleA.getRandomNumber() === singleB.getRandomNumber() );
  console.log( singleA === singleB );  // t