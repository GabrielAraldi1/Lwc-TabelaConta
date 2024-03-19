import { LightningElement } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';


export default class accountList extends LightningElement {

    accounts;
    columns = [
        { label: 'Nome da Conta', fieldName: 'Name', type: 'text' },
        { label: 'Telefone', fieldName: 'Phone', type: 'phone' },
        { label: 'UF', fieldName: 'BillingState', type: 'text'},
        { label: 'Website', fieldName: 'Website', type: 'url'}
    ];

    connectedCallback() {
        this.loadAccounts();
    }

    loadAccounts() {
        getAccounts()
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
                // Handle error
            });
    }
}

    // @wire(getListInfoByName, { objectApiName: ACCOUNT_OBJECT.objectApiName, listViewApiName: 'AllAccounts' })
    // listViewWire({ error, data }) {
    //     if (data) {
    //         console.log('data inside list view',data);
    //         this.listViewData = data.displayColumns;
    //         this.error = undefined;
    //     } else if (error) {
    //         this.data = undefined;
    //         console.log('data inside list view',error);
    //         console.error(error);
    //     }
    // }

    // @wire(getAccounts)
    // accountDataWire({ error, data }) {
    //     if (data) {
    //         console.log('Account data', data);
    //         this.accountData = data;
    //         this.error = undefined;
    //     } else if (error) {
    //         this.accountData = undefined;
    //         console.error(error);
    //     }
    // }
