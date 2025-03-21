import getElement from '../global/get-element';
import OptionItemController from './option-item-controller';
import Main from '../layouts/main';
import State from './state-app';
import ElementCreator from '../global/element-creator';
import ModalScvAreaToggler from '../layouts/modal-paste-list';
import FileManager from './save-the-data';
class OptionControllerHandlerrs  {
  private _optinNavBtns: HTMLElement | NodeListOf<Element>| HTMLInputElement | null;
  private _input: HTMLElement | NodeListOf<Element>| HTMLInputElement | null;
  constructor(public _instanceMain:Main, 
             public _instanceState:State,
             public _instanceOptionItemController:OptionItemController,
             public _instanceElementCreator: ElementCreator, 
             public _modalCsvArea:ModalScvAreaToggler,
             public _instanceOfFileManager:FileManager
  ) {
    this._optinNavBtns = getElement('.option-nav-item');
    this._instanceMain = _instanceMain
    this._instanceState = _instanceState
    this._instanceOptionItemController = _instanceOptionItemController
    this._instanceElementCreator =  _instanceElementCreator
    this._input =  null
    this._instanceOfFileManager =  _instanceOfFileManager
  }
  // TODO rewrite the function to save data when you put
  public inputHandlers(inputClassName: string): void {
    this._input = getElement(inputClassName);
    if (this._input && this._input instanceof HTMLInputElement) {
       console.log('Input element found:', this._input); 
       this._input.addEventListener('keydown', (event) => {
          console.log('Key down detected:', event);
          this._instanceState.createDataArr();
          this._instanceState.saveData();
       });
    } else {
       console.log('Element not found or not an input field');
    }
 }


  public addOptionHandler(): void {
    if (this._optinNavBtns && this._optinNavBtns instanceof NodeList) {
      this._optinNavBtns[0].addEventListener('click', () => {
        this._instanceOptionItemController.addOptionItem('', null);
        this._instanceState.createDataArr()
        this._instanceState.saveData()

      });
    }
  }
  public pastListBtnHandler (): void {
      // for opening modal win wit pastList
      if (this._optinNavBtns && this._optinNavBtns instanceof NodeList) {
        this._optinNavBtns[1].addEventListener('click', () => {
           this._modalCsvArea.moadalCsvArea()
        });
       }
  }
  
  public clearListOptionHandler():void {
    if (this._optinNavBtns && this._optinNavBtns instanceof NodeList) {
      this._optinNavBtns[2].addEventListener('click', () => {
        this._instanceOptionItemController.clearOptionList();
        this._instanceState.createDataArr()
        this._instanceState.saveData()
      });
    }
  }

  public saveFileHandler():void {
    if (this._optinNavBtns && this._optinNavBtns instanceof NodeList) {
      this._optinNavBtns[3].addEventListener('click', () => {
        this._instanceState.createDataArr()
        this._instanceState.saveData()
        this._instanceOfFileManager.saveThefile()

      });
    }
  }


  public LoadFileHandler(): void {
    if (this._optinNavBtns && this._optinNavBtns instanceof NodeList) {
      this._optinNavBtns[4].addEventListener('click', () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.json';
  
        fileInput.addEventListener('change', (event) => {
          const target = event.target;
          if (target instanceof HTMLInputElement) {
            const file = target.files?.[0];
            if (file) {
              this._instanceOfFileManager.loadTheFile(file);
            }
          }
        });
  
        fileInput.click();
      });
    }
  }

  public removeOptionHandler(): void {
    document.addEventListener('click', (event) => {
      this._instanceOptionItemController.removeOptionItem(event);
     // this._instanceState.createDataArr()
      //this._instanceState.saveData()
    });
  }

  // TODO add handler to imputs for saveing data in particular input
  public stateLoader():void {
    window.onload = ():void => {
      this._instanceState.getData();
      this._instanceState.loadData(this._instanceMain, this._instanceElementCreator);
    };
  }

}

const instanceElementCreator = new ElementCreator ()
const instanceMain = new Main ()
const instanceState = new State ()
const instanceOptionItemController = new OptionItemController ()
const modalCsvArea = new ModalScvAreaToggler ()
const instanceOfFileManager = new FileManager ()






const recallHandlers = ():void => {
  const handler = new OptionControllerHandlerrs(instanceMain, 
    instanceState, 
    instanceOptionItemController, 
    instanceElementCreator,
    modalCsvArea,
    instanceOfFileManager);
  handler.addOptionHandler();
  handler.pastListBtnHandler();
  handler.removeOptionHandler();
  handler.clearListOptionHandler();
  handler.stateLoader();

  handler.inputHandlers('.item-input-title');
  handler.inputHandlers('.item-input-weight');

  handler.saveFileHandler();
  handler.LoadFileHandler();
};


recallHandlers ()
export default recallHandlers