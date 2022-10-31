console.log("prototype.js");

var myCar = {

    name: "Ford Focus",
   
    drive: function () {
      console.log( "Weeee. I'm driving!" );
    },
   
    panic: function () {
      console.log( "Wait. How do you stop this thing?" );
    }
   
};

// Use Object.create to instantiate a new car
var yourCar = Object.create( myCar);
    
// Now we can see that one is a prototype of the other
console.log( yourCar.name );
yourCar.drive();

// Specify a property when instantiating
var yourOtherCar = Object.create( myCar , 
{"name" : {
    value: "Honda Civic",
    enumerable: true
    }
});

// Now we can see that one is a prototype of the other
console.log( yourOtherCar.name );
yourOtherCar.panic();