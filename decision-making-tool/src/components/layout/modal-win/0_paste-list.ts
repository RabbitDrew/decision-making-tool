import '../../../style/modals/modal.scss'
import getElement from "../../global/get-element";
import ElementCreator from "../../global/element-creator";

class PasteList extends ElementCreator {
    constructor () {
        super ()
    }

    public static pasteList ():void {
        const main = getElement('.page-main')
        const modalWin = this.createElement('section', 'page-modal')
        const modalTextAreaWindow = this.createElement('div', 'modal-text-area__wrapper')
        this.renderElement(modalWin, modalTextAreaWindow)
        // text area table 
        const textArea = this. pasteListTextArea()
        this.renderElement(modalTextAreaWindow, textArea)
        // paste list btns cancel and confirm
        const pasteListBtns = this.pasteListBtns() 
        this.renderElement(modalTextAreaWindow, pasteListBtns)
        if (main instanceof Element) {
            this.renderElement(main, modalWin)
        }    
    }

    private static pasteListTextArea ():Element {
        const textaAreaWrapper = this.createElement('div', 'textarea__wrapper')
        const textArea = this.createElement('textarea', 'textarea')
        if (textArea instanceof HTMLTextAreaElement) {
            textArea.rows = 12
            textArea.cols = 64
            textArea.placeholder = `Paste a list of new options in a CSV-like format:
title,1 -> | title | 1 |
title with whitespace,2 -> | title with whitespace | 2 |
title , with , commas,3 -> | title , with , commas | 3 |
title with "quotes",4   -> | title with "quotes"   | 4 |
`
            textArea.name = 'table'
        }
        this.renderElement(textaAreaWrapper, textArea)
        return textaAreaWrapper
    }


    private static pasteListBtns ():Element {
        const pasteListBtnsWrapper = this.createElement('div', 'paste-list-btns__wrapper')
        //cancel btn
        const cancelBtn = this.createElement('div', 'paste-list-btn-cancel')
        const cancelBtnTitle = this.createElement('h2', 'paste-list-btn-title')
              cancelBtnTitle.textContent = 'Cancel'
        this.renderElement(cancelBtn, cancelBtnTitle)
        this.renderElement(pasteListBtnsWrapper, cancelBtn)
        
        //confirm btn
        const confirmBtn = this.createElement('div', 'paste-list-btn-confirm')
        const confirmBtnTitle = this.createElement('h2', 'paste-list-btn-title')
              confirmBtnTitle.textContent = 'Confirm'
        this.renderElement(confirmBtn, confirmBtnTitle)
        this.renderElement(pasteListBtnsWrapper, confirmBtn)

        return pasteListBtnsWrapper
    }

}


export default PasteList
