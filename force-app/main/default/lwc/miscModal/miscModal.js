import { LightningElement, api } from 'lwc';

export default class MiscModal extends LightningElement {
    content = 'The modal content';
    header = 'The modal header';

    handleHeaderChange(event) {
        this.header = event.target.value;
    }

    handleContentChange(event) {
        this.content = event.target.value;
    }

    handleShowFirstModal() {
        const modal = this.template.querySelectorAll('c-modal')[0];
        modal.show();
    }

    handleShowSecondModal() {
        const modal = this.template.querySelectorAll('c-modal')[1];
        modal.show();
    }

    handleCancelModal() {
        const modal = this.template.querySelector('c-modal');
        modal.hide();
    }

    handleCloseModal() {
        const modal = this.template.querySelector('c-modal');
        modal.hide();
    }
}
