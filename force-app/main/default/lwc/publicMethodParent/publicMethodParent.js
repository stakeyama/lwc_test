import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    color = 'blue';

    // ↓下記がパブリックメソッドを使用している箇所。
    // querySelectorメソッドで子コンポーネントを取得する必要がある。
    // 同じ子コンポーネントが複数ある場合はquerySelectorAllメソッドを使用。
    renderedCallback() {
        this.template.querySelector('c-public-method-child').setColor(this.color);
    }

    handleChange(event) {
        this.color = event.detail.value;
    }

    get options() {
        return [
            { label: 'BLUE', value: 'blue' },
            { label: 'RED', value: 'red' },
            { label: 'GREEN', value: 'green' },
        ];
    }
}