import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = 'World';

    handleChange(event) { // handleChange receives an event object automatically — every DOM event handler in LWC does.
        this.greeting = event.target.value;
    }
    // event.target is the DOM element that fired the event (the input box), 
    // and event.target.value is whatever's currently typed in it. 
    // We assign that into this.greeting, which — because it's reactive — instantly updates the {greeting} text below it.
}