import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


class Oldsyntax {
    constructor () {
        this.name = 'mike'
    };

    getGreeting () {
        return `hi ${this.name}`
    }
}


const oldsyntax = new Oldsyntax();
console.log(oldsyntax.getGreeting());


class NewSysntax {
    name = 'Jen';
    getGreeting = () => {
        return `hi ${this.name}`
    }
}
const newSysntax = new NewSysntax();
console.log(newSysntax);



