// Atom
Atom = function (state) {
    this.state = state;
    this.observers = [];
}

// X -> BOOLEAN
// Checks if current state is equal new state
Atom.prototype.notEquals = function (newState) {
    return (this.state !== newState)
}

// X, Y -> Nothing
// Notifies all observers of state change
Atom.prototype.notify = function (newState, oldState) {
    for (i = 0; i < this.observers.length; i++) {
        this.observers[i](newState, oldState)
    }
};

// X -> Y
// Sets the state of an Atom, returns the old state
Atom.prototype.set = function (newState) {
    var oldState = this.state,
        i;

    if (this.notEquals(newState)) {
        this.state = newState;
        this.notify(newState, oldState);
    }
    return oldState;
};

// Adds an observer to Atom
Atom.prototype.onChange = function (observer) {
    this.observers.push(observer);
};

// Removes an observer from the list
Atom.prototype.ignore = function (observer) {
    var i,
        len = this.observers.length;

    for (i = 0; i < len; i++) {
        if( this.observers[i] === observer ) {
            this.observers.splice( i, 1 );
            return true;
        }
    }
    return false;
};

