import { LightningElement, api } from 'lwc';

export default class GreetingDisplay extends LightningElement {
    @api name; // makes the name public property; parent sets it from outside

    handleRemove() {
        this.dispatchEvent(new CustomEvent('remove', { detail: this.name }));
    }
    // 'remove' is the event name; 'detail' carries whatever data you want (in this case, the name to be removed)
}