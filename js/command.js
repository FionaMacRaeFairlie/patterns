
console.log("command.js");

function add(x, y) { return x + y; }
function sub(x, y) { return x - y; }
function mul(x, y) { return x * y; }
function div(x, y) { return x / y; }
 
const Command = function (execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
}
 
const AddCommand = function(value) {
    return new Command(add, sub, value);
};
 
const SubCommand = function (value) {
    return new Command(sub, add, value);
};
 
const MulCommand = function (value) {
    return new Command(mul, div, value);
};
 
const DivCommand = function (value) {
    return new Command(div, mul, value);
};
 
// calculator object that will invoke commands
const Calculator = function () {
    let current = 0;      // current state of the calculator
    const commands = [];    // array of commands
 
    // this is for logging commands
    function action(command) {
        const name = command.execute.toString().substr(9, 3);
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
 
    // public methods - execute and undo
    // each takes a command object as a parameter,
    // calls the execute or undo function of that commmand object,
    // adds the command object to the array of commands and logs
    // the action that has happened
    return {
        execute: function (command) {
            current = command.execute(current, command.value);
            commands.push(command);
            log.add(action(command) + ": " + command.value);
        },
 
        undo: function () {
            const command = commands.pop();
            current = command.undo(current, command.value);
            log.add("Undo " + action(command) + ": " + command.value);
        },
 
        getCurrentValue: function () {
            return current;
        }
    }
}
 
// log helper
 
const log = (function () {
    let log = "";
 
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();
 
// USAGE

// create a calculator
const calculator = new Calculator();

// issue commands

calculator.execute(new AddCommand(100));
calculator.execute(new SubCommand(24));
calculator.execute(new MulCommand(6));
calculator.execute(new DivCommand(2));

log.add("\nValue: " + calculator.getCurrentValue());

// reverse last two commands

calculator.undo();
calculator.undo();

log.add("\nValue: " + calculator.getCurrentValue());
log.show();
