import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from "lightning/messageService";
import MESSAGECHANNEL from "@salesforce/messageChannel/messageChannel__c";

export default class Organisms_sample01 extends LightningElement {
    data;

    // subscribe()の戻り値を格納する変数
    subscription;

    // ワイヤーサービスを使用してMessageContextオブジェクトを作成
    @wire(MessageContext)
    messageContext;

    // subscribe()を実行し、SampleMessageを購読
    connectedCallback() {
        this.subscribeToMessageChannel();
    }
    subscribeToMessageChannel() {
        this.subscription = subscribe(
                this.messageContext,
                MESSAGECHANNEL,
                // メッセージを受信したときのコールバック関数
                (message) => {
                        this.data = message.value;
                }
        );
}
}