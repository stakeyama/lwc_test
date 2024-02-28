import { LightningElement, api } from 'lwc';

export default class AtomButton extends LightningElement {
    @api label;
    @api disabled;
}