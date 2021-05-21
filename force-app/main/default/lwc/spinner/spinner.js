import { LightningElement, api } from 'lwc';

export default class Spinner extends LightningElement {
    showSpinner = false;

    @api
    show() {
        this.showSpinner = true;
    }

    @api
    hide() {
        this.showSpinner = false;
    }

    @api showOnLoad;
    connectedCallback() {
        if (this.showOnLoad) {
            this.showSpinner = true;
        }
    }

}