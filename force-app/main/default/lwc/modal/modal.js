import { LightningElement, api } from 'lwc';

const CSS_CLASS = 'modal-hidden';

export default class Modal extends LightningElement {
    showModal = false;
    
    _modalId;

    @api
    get modalId() {
        return this._modalId;
    }
    set modalId(value) {
       this._modalId = value;
       this.setAttribute('modal-id',value);
       this.setAttribute('aria-label',`Modal Id is ${value}`);
    }

    get modalContentId(){
        return `modal-content-id-${this.modalId}`;
    }

    get modalHeadingId(){
        return `modal-heading-id-${this.modalId}`;
    }
    
    @api
    set header(value) {
        this.hasHeaderString = value !== '';
        this._headerPrivate = value;
    }
    get header() {
        return this._headerPrivate;
    }

    hasHeaderString = false;
    _headerPrivate;

    @api show() {
        this.showModal = true;
    }

    @api hide() {
        this.showModal = false;
    }

    handleDialogClose() {
        //Let parent know that dialog is closed (mainly by that cross button) so it can set proper variables if needed
        const closedialog = new CustomEvent('closedialog');
        this.dispatchEvent(closedialog);
        this.hide();
    }

    handleSlotTaglineChange() {
        // Only needed in "show" state. If hiding, we're removing from DOM anyway
        // Added to address Issue #344 where querySelector would intermittently return null element on hide
        if (this.showModal === false) {
            return;
        }
        const taglineEl = this.template.querySelector('p');
        taglineEl.classList.remove(CSS_CLASS);
    }

    handleSlotFooterChange() {
        // Only needed in "show" state. If hiding, we're removing from DOM anyway
        // Added to address Issue #344 where querySelector would intermittently return null element on hide
        if (this.showModal === false) {
            return;
        }
        const footerEl = this.template.querySelector('footer');
        footerEl.classList.remove(CSS_CLASS);
    }
}
