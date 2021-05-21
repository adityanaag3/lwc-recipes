import { LightningElement } from 'lwc';

export default class UtilityBarComponent extends LightningElement {
    renderedCallback(){
        window.addEventListener('popstate', function (event) {
            alert('URL Changed');
        });
    }
}