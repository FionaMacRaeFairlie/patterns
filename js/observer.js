
function Subject() {
    this.observers = [];

    this.subscribeObserver = function(observer) {
        this.observers.push(observer);
    };

    this.unsubscribeObserver = function(observer) {
        const index = this.observers.indexOf(observer);
        if(index > -1) {
            this.observers.splice(index, 1);
        }
    };

    this.notifyObserver = function(observer) {
        const index = this.observers.indexOf(observer);
        if(index > -1) {
            this.observers[index].notify(index);
        }
    };

    this.notifyAllObservers = function() {
        for(let i = 0; i < this.observers.length; i++){
            this.observers[i].notify(i);
        };
    };
}

function Observer() {  

    this.notify = function(index) {
        console.log("Observer " + index + " is notified!");
    }

}

const subject = new Subject();

const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();
const observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); 

subject.notifyAllObservers();
