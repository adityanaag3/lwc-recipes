import { LightningElement, wire } from 'lwc';
import FORM_FACTOR from '@salesforce/client/formFactor';
import { getListUi } from 'lightning/uiListApi';

import DesktopView from './multiTemplateDesktop.html';
import MobileView from './multiTemplateMobile.html';

export default class MultiTemplate extends LightningElement {

    render() {
        return FORM_FACTOR === 'Large' ? DesktopView : MobileView;
    }

    @wire(getListUi, {
        objectApiName: 'Contact',
        listViewApiName: 'All_Recipes_Contacts',
        pageSize: 10
    })
    listView;

    get contacts() {
        return this.listView.data.records.records;
    }

}