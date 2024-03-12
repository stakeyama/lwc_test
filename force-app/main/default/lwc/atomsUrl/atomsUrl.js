import { LightningElement, api } from 'lwc';

export default class AtomsUrl extends LightningElement {
    @api url;

    handleClick() {
        // 「手続き画面へ」ボタンを活性
        const event = new CustomEvent('clickaction',
        {
            detail:'sample',
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(event);
    }
}