import { LightningElement } from 'lwc';
import CommonStyles from './header.css';
// import CommonStyles1 from '../cssLibrary/common1.css';
// import CommonStyles2 from '../cssLibrary/common2.css';
// import CommonStyles3 from '../cssLibrary/common3.css';
// import CommonStyles4 from '../cssLibrary/common4.css';
import SIT_LOGO from "@salesforce/resourceUrl/sit_logo";


export default class Header extends LightningElement {
    static stylesheets = [
        CommonStyles
    ];

    SITLogoUrl = SIT_LOGO;
}