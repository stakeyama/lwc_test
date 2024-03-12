import { LightningElement } from 'lwc';

export default class PublicPropertyParent extends LightningElement {
    // ↓HTMLで子コンポーネントに渡している値。
    color = 'blue';

    get options() {
        return [
            { label: 'BLUE', value: 'blue' },
            { label: 'RED', value: 'red' },
            { label: 'GREEN', value: 'green' },
        ];
    }

    handleChange(event) {
        this.color = event.detail.value;
    }
}