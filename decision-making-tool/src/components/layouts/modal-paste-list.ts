import '../../style/modals/cvs-input-modal.scss';
import ElementCreator from "../global/element-creator";
import getElement from "../global/get-element";

class ModalScvAreaToggler extends ElementCreator {
    private _page:  HTMLElement | NodeListOf<Element> | HTMLInputElement | null
    private _modalSection: HTMLElement | null
    private _cancelBtn: HTMLElement | NodeListOf<Element> | HTMLInputElement | null
    constructor() {
        super()
        this._page = null
        this._modalSection = null
        this._cancelBtn = null
    }

    public removeCvsArea(event: Event): void {
        if (event.target instanceof HTMLElement) {
            const modalBg = getElement('.page-modal');
            this._cancelBtn = getElement('.csv-btn-cancel');
            const cancelBtnTitle = event.target.closest('.csv-btn-cancel .csv-btn-title');
            if (modalBg instanceof HTMLElement) {
                if (event.target === this._cancelBtn || 
                    cancelBtnTitle || 
                    event.target === modalBg) {
                    modalBg.remove();
                }
            }
        }
    }

    public moadalCsvArea ():void {
        this._modalSection = this.createElement('section', 'page-modal')
        this._page = getElement('.page')
        const modalCsvWWrapper:HTMLElement = this.createElement('div', 'modal-csv__wrapper')
        
        const textArea:HTMLElement = this.createTextArea()
        this.renderElement(modalCsvWWrapper, textArea)
         
        const cvsBtns:HTMLElement = this.createCvsBtns()
        this.renderElement(modalCsvWWrapper, cvsBtns)
  
        if (this._page instanceof HTMLElement && 
            this._modalSection instanceof HTMLElement
           ) {
            this.renderElement(this._modalSection, modalCsvWWrapper)
            this.renderElement(this._page, this._modalSection)
        }
    }

    private createTextArea ():HTMLElement {
        const cvsTextAreaWrapper:HTMLElement = this.createElement('div', 'csv-textarea__wrapper')
        const textArea: HTMLElement = this.createElement('textarea', 'csv-textarea')
        textArea.setAttribute('rows', '12');
        textArea.setAttribute('cols', '64');
        textArea.setAttribute('placeholder', `Paste a list of new options in a CSV-like format:
        title,1                 -> | title                 | 1 |
        title with whitespace,2 -> | title with whitespace | 2 |
        title , with , commas,3 -> | title , with , commas | 3 |
        title with "quotes",4   -> | title with "quotes"   | 4 |`
        );
        textArea.setAttribute('name', 'table');
        this.renderElement(cvsTextAreaWrapper, textArea)
        return cvsTextAreaWrapper
    }

    private createCvsBtns():HTMLElement {
        const cvsBtnsWrapper: HTMLElement = this.createElement('div', 'csv-btns__wrapper');
        const cancelBtnWrapper: HTMLElement = this.createElement('div', 'csv-btn-cancel');
        const cancelBtnTitle: HTMLElement = this.createElement('h2', 'csv-btn-title');
        cancelBtnTitle.textContent = 'Cancel';
        this.renderElement(cancelBtnWrapper, cancelBtnTitle);
        this.renderElement(cvsBtnsWrapper, cancelBtnWrapper);
        const confirmBtnWrapper: HTMLElement = this.createElement('div', 'csv-btn-confirm');
        const confirmBtnTitle: HTMLElement = this.createElement('h2', 'csv-btn-title');
        confirmBtnTitle.textContent = 'Confirm';
        this.renderElement(confirmBtnWrapper, confirmBtnTitle);
        this.renderElement(cvsBtnsWrapper, confirmBtnWrapper);
        return cvsBtnsWrapper
    }


}


//const modalScvArea = new ModalScvArea () 
//modalScvArea.moadalCsvArea()


export default ModalScvAreaToggler