import '../../../style/modals/modal.scss'
import getElement from "../../global/get-element";
import ElementCreator from "../../global/element-creator";

class WarnWindow extends ElementCreator {
    constructor () {
        super ()
    }

    public static warnWindow ():void {
        const main = getElement('.page-main')
        const modalWin = this.createElement('section', 'page-modal')
        
        const modalWarn = this.createElement('div', 'modal-warn')
        this.renderElement(modalWin, modalWarn)

        //warn title
        const warnTitleWrapper = this.createElement('div', 'warn-title__wrapper')
        this.renderElement(modalWarn, warnTitleWrapper)
        const warnTitle = this.createElement('div', 'warn-title')
              warnTitle.textContent = 'There have to be at least two options to make a decision!'
        this.renderElement(warnTitleWrapper, warnTitle)
        //warn btn
        const warnCancelBtn = this.createElement('div', 'warn-cancel-btn')
        this.renderElement(modalWarn, warnCancelBtn)
        const warnCancelBtnTitle = this.createElement('h2', 'cancel-btn-title')
              warnCancelBtnTitle.textContent = 'Cancel'
        this.renderElement(warnCancelBtn, warnCancelBtnTitle )

        if (main instanceof Element) {
            this.renderElement(main, modalWin)
        }    
    }
}



export default WarnWindow