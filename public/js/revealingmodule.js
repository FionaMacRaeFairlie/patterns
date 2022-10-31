console.log("module.js");

const myRevealingModule = (function () {
 
    let privateVar = "Lando Norris";
    let publicVar = "Hey there!";

    function privateFunction() {
        return( "Name:" + privateVar );
    }

    function publicSetName( strName ) {
        privateVar = strName;
    }

    function publicGetName() {
        return privateFunction();
    }

    // Reveal public pointers to
    // private functions and properties
    return {
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName
    };

})();

// call public functions
console.log(myRevealingModule.getName());
myRevealingModule.setName( "Valtteri Bottas" );
console.log(myRevealingModule.getName());