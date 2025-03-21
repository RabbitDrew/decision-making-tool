class ElementCreator {
 public _tag:string 
 public _selectorName:string
 private _parentElement: HTMLElement | NodeListOf<Element> | null;
 private _chieldElement: HTMLElement | NodeListOf<Element> | null;
  constructor ( ) {
   this._tag = ''
   this._selectorName = ''
   this._parentElement = null
   this._chieldElement = null    
  }
  public createElement(tag: string, selectorName: string): HTMLElement {
    this._tag = tag
    this._selectorName = selectorName
    const element:HTMLElement = document.createElement(this._tag);
    element.className = this._selectorName;
    if (element instanceof HTMLInputElement) {
        const inputElement = element
        return inputElement;
    }else {
      return element;
    }
  }
  public renderElement(parentElement: HTMLElement,chieldElement: HTMLElement): void {
    this._parentElement = parentElement
    this._chieldElement = chieldElement
    this._parentElement.append(this._chieldElement);
  }

}
export default ElementCreator;
