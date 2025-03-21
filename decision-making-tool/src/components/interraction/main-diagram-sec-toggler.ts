import getElement from "../global/get-element";
import type Main from "../layouts/main";
import recallHandlers from "./handler-option-item-controller";


class DiagramSectionToggler {
    private _main: HTMLElement | NodeListOf<Element>| HTMLInputElement | null; 
    private _decisionSection: HTMLElement | NodeListOf<Element>| HTMLInputElement | null; 
    private _optionSection: HTMLElement | NodeListOf<Element>| HTMLInputElement | null; 
    constructor(
        public _instanceOfMain:Main
    ) {
        this._main = null
        this._decisionSection = null
        this._optionSection = null
        this._instanceOfMain = _instanceOfMain
    }


    public openDecisionSection ():void {
        this._main = getElement('.page-main')
        if (this._main instanceof HTMLElement) {
            this._decisionSection = this._instanceOfMain.createDiagramSection()
            this._main.innerHTML = ''
            this._main.appendChild(this._decisionSection)
        }       
    }


    public closeDecionSection ():void {
        this._main = getElement('.page-main')
        if (this._main instanceof HTMLElement) {
            this._optionSection = this._instanceOfMain.createOptionList()
            this._main.innerHTML=''
            this._main.appendChild(this._optionSection)
            recallHandlers()
        } 
    }


}

export default DiagramSectionToggler