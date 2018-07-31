class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscriberd to ${fn.name}`);
    }

    unsubscribe(fn) {
        // Filter out form the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list observers.
        this.observers = this.observers.filter(function(item) {
            if (item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribe form ${fn.name}`);
    }

    fire() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
}


const click = new EventObserver();

// Event listeners
document.querySelector('.sub-ms').addEventListener('click', function() {
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function() {
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', function() {
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function() {
    click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', function() {
    click.fire();
});

// Click handler
const getCurSeconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`)
}

const getCurMilliseconds = function() {
    console.log(`Current Milleseconds: ${new Date().getMilliseconds()}`)
}