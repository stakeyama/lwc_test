import { LightningElement, wire } from 'lwc';
import CommonStyles from './sample_01.css';
// import CommonStyles1 from '../cssLibrary/common1.css';
// import CommonStyles2 from '../cssLibrary/common2.css';
// import CommonStyles3 from '../cssLibrary/common3.css';
// import CommonStyles4 from '../cssLibrary/common4.css';
import { publish, MessageContext } from "lightning/messageService";
import MESSAGECHANNEL from "@salesforce/messageChannel/messageChannel__c";

export default class Sample_01 extends LightningElement {
    // データはインターフェース側に保持
    data = {
        nextButton: { // 次画面遷移ボタン
            label: '手続き画面へ',
            nextButtonDisabled: true
        },
        documentReferenceList: [ // 公募要領ボタンラベル名
            { id: 1, labelName: '公募要領 通常枠（A・B類型）'},
            { id: 2, labelName: '公募要領 デジタル化基盤導入枠（デジタル化基盤導入類型）'},
            { id: 3, labelName: '公募要領 セキュリティ対策推進枠'},
            { id: 4, labelName: '手引き'}
        ],
        description: {
            url : 'https://www.miradigi.go.jp/info/230411_1/',
            miraDigitalMessage: '本事業では、IT導入補助金の申請に用いているgBizIDプライムを利用して、みらデジ事業者登録 を行ったうえで、みらデジ経営チェックを実施することを求めています。<br>必ず以下URLを確認いただき、記載された手順にのっとり事業者登録及び経営チェックを実施してください。<br>',
            urlMessage: '※URLをクリックして内容・<span style="text-decoration: underline; font-weight: bold;">手順</span>を確認後、次画面へ遷移してください。'
        },
        headTitle: {
            headDescriptionLabel: '下記書類をよく読み、本制度や手続きの手順について\n十分ご理解のうえ、手続きを進めてください',
            formLabel: 'みらデジ事業者登録・経営チェックについて'
        }
    }
    // ワイヤーサービスを使用してMessageContextオブジェクトを作成します。
    @wire(MessageContext)
    messageContext;

    // publishメソッドでdataを公開。
    connectedCallback() {
        const payload = {
            type: 'LightningMessageService',
            value: this.data
        };
        publish(this.messageContext, MESSAGECHANNEL, payload);
    }

    static stylesheets = [
        CommonStyles
    ];

    handleClick() {
        // 「手続き画面へ」ボタンを活性
        this.disabled = false;
    }

}