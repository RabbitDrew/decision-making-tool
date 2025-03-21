import '../../style/mian/main.scss';
import '../../style/mian/diagram.scss';

import ElementCreator from '../global/element-creator';
import getElement from '../global/get-element';
import { contentData } from '../global/content-data';

class Main extends ElementCreator {
  private _page: HTMLElement | NodeListOf<Element> | null;
  constructor() {
    super();
    this._page = getElement('.page');
  }

  public createMain(): void {
    const main: HTMLElement = this.createElement('main', 'page-main');
    const optionListBlock:HTMLElement = this.createOptionList()
    this.renderElement(main, optionListBlock)
    if (this._page instanceof HTMLElement) {
      this.renderElement(this._page, main);
    }
  }


  public createOptionList ():HTMLElement {
    const optionsWrapper: HTMLElement = this.createElement('div', 'main-option__wrapper');
    const optionList = this.createElement('ul', 'main-option-list');
    this.renderElement(optionsWrapper, optionList);
    const startOption: HTMLElement = this.optionItemCreator(1, '', null)
    this.renderElement(optionList, startOption)
    //option nav block
    const optionNav = this.createMainOptionNav() 
    this.renderElement(optionsWrapper, optionNav);
    // dicisionBtn
    const decisionBTn = this.createDecisionButton()
    this.renderElement(optionsWrapper, decisionBTn);
    return optionsWrapper
  } 

  // for dinamic elements creating
  public optionItemCreator(num: number | null, titleValue:string, weightValue:number | string | null): HTMLElement {
    const optionItem: HTMLElement = this.createElement('li', 'opton-item');
  
    const itemNum: HTMLElement = this.createElement('h2', 'item-id');
    itemNum.textContent = `#${num}`;

    this.renderElement(optionItem, itemNum);
  
    const inputTitleWrapper: HTMLElement = this.createElement('div', 'item-input-title__wrapper');
    const inputTitle = this.createElement('input', 'item-input-title');
    if (inputTitle instanceof HTMLInputElement) {
      inputTitle.type = 'text';
      inputTitle.name = 'title';
      inputTitle.id = 'title';
      inputTitle.placeholder = 'Title';
      inputTitle.value = titleValue
    }
    const inputTitleStyleLine: HTMLElement = this.createElement('div', 'input-style-line');
    this.renderElement(inputTitleWrapper, inputTitle);
    this.renderElement(inputTitleWrapper, inputTitleStyleLine);
  
    const inputWeightWrapper: HTMLElement = this.createElement('div', 'item-input-weight__wrapper');
    const inputWeight = this.createElement('input', 'item-input-weight');
    if (inputWeight instanceof HTMLInputElement) {
      inputWeight.className = 'item-input-weight';
      inputWeight.type = 'number';
      inputWeight.name = 'weight';
      inputWeight.id = 'weight';
      inputWeight.placeholder = 'Weight';
      inputWeight.value = weightValue !== null ? weightValue.toString() : '';
    }
    const inputWeightStyleLine: HTMLElement = this.createElement('div', 'input-style-line');

    this.renderElement(inputWeightWrapper, inputWeight);
    this.renderElement(inputWeightWrapper, inputWeightStyleLine);
  
    const deleteBtnWrapper: HTMLElement = this.createElement('div', 'item-delete-btn');
    const deleteBtnTitle: HTMLElement = this.createElement('h2', 'delete-btn-title');
    deleteBtnTitle.textContent = 'Delete';

    this.renderElement(deleteBtnWrapper, deleteBtnTitle);
  
    this.renderElement(optionItem, inputTitleWrapper);
    this.renderElement(optionItem, inputWeightWrapper);
    this.renderElement(optionItem, deleteBtnWrapper);
  
    return optionItem;
  }


  public createMainOptionNav(): HTMLElement {
    const mainOptionNavWrapper: HTMLElement = this.createElement('div', 'main-option-nav__wrapper');
    const optionNav: HTMLElement = this.createElement('ul', 'option-nav');

    contentData.optionList.forEach(title => {
      const optionNavItem: HTMLElement = this.createElement('li', 'option-nav-item');
      const optionNavTitle: HTMLElement = this.createElement('h2', 'option-nav-title');
      optionNavTitle.textContent = title;
      this.renderElement(optionNavItem, optionNavTitle);
      this.renderElement(optionNav, optionNavItem);
    });
    this.renderElement(mainOptionNavWrapper, optionNav);
  
    return mainOptionNavWrapper;
  }
  
  public createDecisionButton(): HTMLElement {
    const mainDecisionBtnWrapper: HTMLElement = this.createElement('div', 'main-decision-btn');
    const decisionBtnTitle: HTMLElement = this.createElement('h2', 'decision-btn-title');
    decisionBtnTitle.textContent = 'Let me help you make a decision';
    this.renderElement(mainDecisionBtnWrapper, decisionBtnTitle);
    return mainDecisionBtnWrapper;
}


public createDiagramSection(): HTMLElement {
  const diagramSection: HTMLElement = this.createElement('section', 'main-diagram');
  const diagramNavWrapper: HTMLElement = this.createElement('div', 'diagram-nav__wrapper');
  const diagramNav: HTMLElement = this.createElement('ul', 'diagram-nav');
  this.renderElement(diagramNavWrapper, diagramNav);
  
  contentData.diagramOptionList.forEach(title => {
      const navItem: HTMLElement = this.createElement('li', 'diagram-nav-item');
      const navTitle: HTMLElement = this.createElement('h2', 'diagram-nav-item-title');
      navTitle.textContent = title;
      this.renderElement(navItem, navTitle);
      this.renderElement(diagramNav, navItem);
  });

  const timeItem: HTMLElement = this.createElement('li', 'diagram-nav-item');
  const timeTitle: HTMLElement = this.createElement('h2', 'diagram-nav-item-title');
  timeTitle.textContent = 'Time';
  this.renderElement(timeItem, timeTitle);

  const timeInputWrapper: HTMLElement = this.createElement('div', 'time-input__wrapper');
  const timeInput: HTMLElement = this.createElement('input', 'time-input');

  if (timeInput instanceof HTMLInputElement) {
      timeInput.type = 'number';
      timeInput.autocomplete = 'off';
      timeInput.placeholder = '15';
  }

  const timeLine: HTMLElement = this.createElement('div', 'style-line');
  this.renderElement(timeInputWrapper, timeInput);
  this.renderElement(timeInputWrapper, timeLine);
  this.renderElement(timeItem, timeInputWrapper);
  this.renderElement(diagramNav, timeItem);

  const diagramStartBtn: HTMLElement = this.createElement('div', 'diagram-start-btn');
  const startBtnTitle: HTMLElement = this.createElement('h2', 'start-btn-title');
  startBtnTitle.textContent = 'Start';
  this.renderElement(diagramStartBtn, startBtnTitle);
  this.renderElement(diagramNavWrapper, diagramStartBtn);

  const canvas: HTMLElement = this.createElement('canvas', 'main-canvas');
  if (canvas instanceof HTMLCanvasElement) {
    canvas.width = 500;
    canvas.height = 500;
    canvas.classList.add('wheel');
  }
  this.renderElement(diagramSection, diagramNavWrapper);
  this.renderElement(diagramSection, canvas);

  return diagramSection;
}



}

const main = new Main();
main.createMain();

export default Main