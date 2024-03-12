import { LightningElement, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    color;

    // ↓パブリックメソッドを宣言している箇所。
    @api
    setColor(value) {
        this.color = value;
    }

    get backgroundStyle() {
        return `background-color:${this.color}`;
    }
}