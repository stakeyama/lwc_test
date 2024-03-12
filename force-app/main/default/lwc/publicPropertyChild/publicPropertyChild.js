import { LightningElement, api } from 'lwc';
export default class Child extends LightningElement {
    // ↓パブリックプロパティ。@apiデコレーターを使用して宣言。
    // @apiをつけることで親コンポーネントからアクセス可能。
    @api colorName;

    get backgroundStyle() {
        return `background-color:${this.colorName}`;
    }
}