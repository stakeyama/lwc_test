import { LightningElement } from 'lwc';

export default class LwcFlowTest extends LightningElement {
    // RESTART 終了後再開
    // NONE そのまま終了
    finishBehavior = 'NONE';

    // フローに渡す値
    get inputVariables() {
        return [
        {
            name : 'inputTest', // フローの変数 API参照名
            type : 'String', // フローの変数型
            value : 'テストデータ' // 値
        }
        ];
    }

    handleStatusChange(event) {
        console.log(event.detail)
        console.log(event.detail.status)
        if (event.detail.status === 'FINISHED') {
        // set behavior after a finished flow interview
        }
    }
}