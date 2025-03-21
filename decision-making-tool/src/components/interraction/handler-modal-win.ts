import getElement from "../global/get-element";
import ModalScvAreaToggler from "../layouts/modal-paste-list";
import PasteListProcesser from "./past-list-prcesser";
import OptionItemController from "./option-item-controller";
import State from "./state-app";
class ModalWinHandler {
    private _confirmBtn: HTMLElement | NodeListOf<Element> | HTMLInputElement | null
    constructor (public _modalWinScvAreaToggler:ModalScvAreaToggler,
                 public _pasteListProcessor:PasteListProcesser,
                 public _optionItemController:OptionItemController,
                 public _state:State
    ) {
        this._modalWinScvAreaToggler = _modalWinScvAreaToggler;
        this._pasteListProcessor = _pasteListProcessor;
        this._confirmBtn = null
        this._optionItemController = _optionItemController;
        this._state = _state;
    }
    
    public removeModal ():void {         
        document.addEventListener ('click', (event) => {
            //TODO add check inside the method to close modal on confirm btn 
            this._modalWinScvAreaToggler.removeCvsArea(event)
        })
    }
    public confirmHandlerPasteList ():void {
        document.addEventListener('click', (event) => {
            this._confirmBtn = getElement('.csv-btn-confirm')
            if (event.target instanceof HTMLElement) {
                if (this._confirmBtn && this._confirmBtn instanceof HTMLElement) {
                    const confirmBtn = event.target.closest('.csv-btn-confirm  .csv-btn-title')
                    if (event.target === this._confirmBtn || confirmBtn) {
                       this._pasteListProcessor.createOptionItem(this._optionItemController)
                       this._state.createDataArr()
                       this._state.saveData()
                    }
                }
            }
        })
    }
}


const modalCsvArea = new ModalScvAreaToggler ()
const pasteListProcessor = new PasteListProcesser ()
const instanceOfOptionItemController = new OptionItemController ()
const instanceState = new State ()

const modalWinHandler = new ModalWinHandler (modalCsvArea, 
                                             pasteListProcessor,
                                             instanceOfOptionItemController,
                                             instanceState) 

modalWinHandler.removeModal()
modalWinHandler.confirmHandlerPasteList()

