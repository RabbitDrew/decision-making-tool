import ElementCreator from "../global/element-creator";
import getElement from "../global/get-element";
import Main from "../layouts/main";
import DiagramSectionToggler from "./main-diagram-sec-toggler";
import State from "./state-app";
import recallHandlers from "./handler-option-item-controller";
import startBtnHandler from "./hendler-decision-btn";
import rotateWheel from "./rotate-wheel";

class HandlerDiagramNav {
    private _backBtn: HTMLElement | NodeListOf<Element> | HTMLInputElement | null;
    private _mainContainer: HTMLElement | NodeListOf<Element> | HTMLInputElement | null;
    constructor(
        public  _instanceOfDiagramSectionToggler: DiagramSectionToggler,
        public _instanceOfMain:Main,
        public  _instanceOfState:State,
        public  _instanceOfElementCreator:ElementCreator
     
    ) {
        this._backBtn = null;
        this._instanceOfDiagramSectionToggler = _instanceOfDiagramSectionToggler
        this._instanceOfMain = _instanceOfMain
        this._instanceOfState = _instanceOfState
        this._instanceOfElementCreator = _instanceOfElementCreator
        this._mainContainer = null
    }
    public back(): void {
        const mainContainer = getElement('.page-main');
        if (mainContainer instanceof HTMLElement) {
          mainContainer.addEventListener('click', (event: Event) => {
            if (event.target instanceof HTMLElement) {
              const clickedTitle = event.target.closest('.diagram-nav-item-title');
              if (clickedTitle && clickedTitle instanceof HTMLElement) {
                const navTitles = Array.from(document.querySelectorAll('.diagram-nav-item-title'));
                if (navTitles.indexOf(clickedTitle) === 0) {
                  this._instanceOfDiagramSectionToggler.closeDecionSection();
                  this._instanceOfState.getData();
                  this._instanceOfState.loadData(this._instanceOfMain, this._instanceOfElementCreator);
                  recallHandlers();
                  startBtnHandler(this._instanceOfDiagramSectionToggler, this._instanceOfState);
                }
              }
            }
          });
        }
      }
    
      public startBtn(): void {
        this._mainContainer = getElement('.page-main');
        if (this._mainContainer instanceof HTMLElement) {
          this._mainContainer.addEventListener('click', (event: Event) => {
            if (event.target instanceof HTMLElement) {
              const clickedButton = event.target.closest('.start-btn-title, .diagram-start-btn');
              if (clickedButton && clickedButton instanceof HTMLElement) {
                rotateWheel();
              }
            }
          });
        }
      }
}


const instanceOfMain = new Main ()
const instanceOfDiagramSectionToggler = new DiagramSectionToggler (instanceOfMain)
const instanceOfState = new State ()
const instanceOfElementCreator = new ElementCreator ()
const handlerDiagramNav = new HandlerDiagramNav (
    instanceOfDiagramSectionToggler, 
    instanceOfMain,
    instanceOfState, 
    instanceOfElementCreator
)


handlerDiagramNav.back()
handlerDiagramNav.startBtn()