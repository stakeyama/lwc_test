import { LightningElement, api } from 'lwc';

export default class TemplateSample01 extends LightningElement {
    @api headDescriptionText
    @api listDocumentReferences
    @api formHeadTitle
    @api description1
    @api description2
    @api url
    @api disabled
    @api labelName
}