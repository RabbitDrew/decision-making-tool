import getElement from '../global/get-element';
import type { IStateData } from '../global/interfaces';
import type Main from '../layouts/main';
import type ElementCreator from '../global/element-creator';

class State {
  private _stateDataList: IStateData[];
  private _optionItemsList: HTMLElement | NodeListOf<Element> | HTMLInputElement | null;
  private _optionList: HTMLElement | NodeListOf<Element> | HTMLInputElement | null;
  private _storedStateDataList: IStateData[];
  constructor() {
    this._stateDataList = [];
    this._optionItemsList = null;
    this._storedStateDataList = [];
    this._optionList= getElement('.main-option-list')
  }

  public dataExtractor(optionItem: HTMLElement): IStateData  {
    const stateElementObj:IStateData =  {
      id: null,
      valueTitle: '',
      valueWidth: '',
    };
    if (this._stateDataList) { //! ask to swich off the rull aboit this
      const idOptionItem = optionItem.querySelector('.item-id');
      if (idOptionItem && idOptionItem instanceof HTMLElement) {
        stateElementObj.id = Number(idOptionItem.textContent?.replace('#', ''));
      }
  
      const inputTitleElement = optionItem.querySelector('.item-input-title');
      if (inputTitleElement && inputTitleElement instanceof HTMLInputElement) {
        stateElementObj.valueTitle = inputTitleElement.value || '';
      }
  
      const inputWeightElement = optionItem.querySelector('.item-input-weight');
      if (inputWeightElement && inputWeightElement instanceof HTMLInputElement) {
        stateElementObj.valueWidth = inputWeightElement.value || '';
      }
    }
    return stateElementObj;
  }

  public createDataArr(): void {
    this._stateDataList= []
    this._optionItemsList = getElement('.opton-item');
    if (this._optionItemsList instanceof HTMLElement) {
      const optionItem = this._optionItemsList;
      const stateDataObj = this.dataExtractor(optionItem);
      this._stateDataList.push(stateDataObj);
     // console.log(this._stateDataList);
    } else if (this._optionItemsList instanceof NodeList) {
      this._optionItemsList.forEach((optionItem) => {
        if (optionItem instanceof HTMLElement) {
          const stateDataObj = this.dataExtractor(optionItem);
          this._stateDataList.push(stateDataObj);
        }
      });
      //console.log(this._stateDataList);
    }
  }

  public saveData(): void {
    localStorage.setItem('itemOptionList', JSON.stringify(this._stateDataList));
  }

  public getData(): void {
    const storedData = localStorage.getItem('itemOptionList');
    if (storedData) {
      this._storedStateDataList = JSON.parse(storedData);
    } else {
      this._storedStateDataList = [];
    }
    //console.log(this._storedStateDataList);
  }
  public loadData(mainInstance: Main, elementCreatorInstance: ElementCreator): void {
    this._optionList = getElement('.main-option-list');
    if (this._optionList instanceof HTMLElement) {
      const optionList: HTMLElement = this._optionList;
      optionList.innerHTML = '';
      if (this._storedStateDataList.length > 0) {
        this._storedStateDataList.forEach(itemOptionObj => {
          const itemOption = mainInstance.optionItemCreator(
            itemOptionObj.id, 
            itemOptionObj.valueTitle, 
            itemOptionObj.valueWidth
          );
          elementCreatorInstance.renderElement(optionList, itemOption);
        });
      } else {
        const startOption: HTMLElement = mainInstance.optionItemCreator(1, '', null);
        elementCreatorInstance.renderElement(optionList, startOption);
      }
    }
  }
  
}





export default State

