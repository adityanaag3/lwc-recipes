import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement, wire, api } from 'lwc';

export default class ReusableSpinner extends LightningElement {

    recordId;

    @wire(getRecord, { recordId: '$recordId'})
    wiredFunction({data, error}){
        //this.template.querySelector('c-spinner').hide();
    }

    renderedCallback(){
        // this.template.querySelector('c-spinner').hide();
    }

    connectedCallback(){
        // this.template.querySelector('c-spinner').show();
    }
}