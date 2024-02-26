import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Tutorial2 extends NavigationMixin(LightningElement) {
    inputValidator() {
        let isValid = true;
        let input = this.template.querySelectorAll('lightning-input-field');
        input.forEach(inputField => {
            if(inputField.value) {
                isValid = false;
            }
        });
        return isValid;
    }

    submitPage() {
        if (this.inputValidator()){
            return
        }
        // 登録ボタン押下後、タスクリスト標準画面に遷移
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'tasklist__c',
                actionName: 'list'
            }
        });
    }
}
