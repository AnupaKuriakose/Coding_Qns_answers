// //Implement an EventEmitter class
// new EventEmitter()
// Creates an instance of the EventEmitter class. Events and listeners are isolated within the EventEmitter instances they're added to, aka listeners shouldn't react to events emitted by other EventEmitter instances.

// emitter.on(eventName, listener)
// Adds a callback function (listener) that will be invoked 
// when an event with the name eventName is emitted.

// eventName-	string	The name of the event.
// listener	-Function	The callback function to be invoked when the event occurs.
// Returns the EventEmitter instance so that calls can be chained.

// emitter.off(eventName, listener)/deregister
// Removes the specified listener from the list of listeners for the 
// event with the name eventName.

// eventName	-string	The name of the event.
// listener	-Function	Callback function to be removed from the list of listeners for the event.
// Returns the EventEmitter instance so that calls can be chained.

// emitter.emit(eventName[, ...args])
// Invokes each of the listeners listening to eventName with the supplied arguments in order.
// eventName	-string	The name of the event.
// ...args	-any	Arguments to invoke the list of listener functions with.
// Returns true if the event had listeners, false otherwise.

class EventEmitter {
  constructor() {
     // 1. Initialize an empty object to store our events. 
    // Keys will be event names (strings), values will be arrays of functions
    this.events = {};
  }

  on(event, listener) {
      // 2. Check if the event already exists. If not, create an empty array for it.
    if (!this.events[event]) {
      this.events[event] = [];
    }
    // 3. Add the callback function to the array.
    this.events[event].push(listener);
    
    // 4. Return 'this' to allow chaining: emitter.on(...).on(...)
    return this;
  }
  off(event, listener) {
    const listeners = this.events[event];
    if (listeners) {
    // 5. Filter out the specific listener function we want to remove.
      this.events[event] = listeners.filter((l) => l !== listener);
    }
  }
  emit(event, ...args) {
    const listeners = this.events[event];
    if (!listeners || listeners.length === 0) return false;
    if (listeners) {
        // 6. Loop through every function subscribed to this event name...
      // 7. ...and call them using the spread (...args) passed in.
      listeners.forEach((listener) => listener(...args));
      return true;
    }
  }
}
// 1. Create the instance
const myEmitter = new EventEmitter();

// 2. Define a function to act as a listener
const onScroll = ()=> console.log("scrolling");//call back func
const onType = ()=> console.log("typing");
// 3. Subscribe to an event ('on')
myEmitter.on('scroll', onScroll);//regitser callback for this event
myEmitter.on('type', onType);

// 4. Trigger the event ('emit')
// This will log: 
myEmitter.emit('scroll'); //scrolling //any callback that are registered for this event get executed

// 5. Unsubscribe ('off')
myEmitter.off('scroll', onScroll);

// 6. Try to emit again

myEmitter.emit('scroll', onScroll); 
myEmitter.emit('type', onType); //scrolling