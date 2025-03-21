import ElementCreator from '../global/element-creator';
import getElement from '../global/get-element';
import { contentData } from '../global/content-data';

class Diagram extends ElementCreator {
  private _main: HTMLElement | NodeListOf<Element> | null;
  constructor() {
    super();
    this._main = getElement('.page-main');
  }
  
  public diagramCreator(): void {
     //*wrapper for canvas and diagram nav
     const diagramWrapper = this.createElement('div', 'main-diagram')
     //diagram block
     const diagramNav = this.createDiagramNav()
     this.renderElement(diagramWrapper, diagramNav);
     
     //canvas
     const canvas = this.createElement('canvas', 'main-canvas')
     this.renderElement(diagramWrapper, canvas);
 
    if (this._main instanceof HTMLElement) {
      this.renderElement(this._main, diagramWrapper );
    }
  }
  public createDiagramNav(): HTMLElement {
    const diagramNavWrapper: HTMLElement = this.createElement('div', 'diagram-nav__wrapper');
    const diagramNav: HTMLElement = this.createElement('ul', 'diagram-nav');
    this.renderElement( diagramNavWrapper, diagramNav);
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
        timeInput.placeholder = '';
        timeInput.value = '16'
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

    return diagramNavWrapper;
 }

}

export default Diagram