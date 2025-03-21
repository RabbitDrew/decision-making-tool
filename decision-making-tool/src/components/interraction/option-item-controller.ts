import Main from '../layouts/main';
import getElement from '../global/get-element';

class OptionItemController extends Main {
  private _options: HTMLElement | NodeListOf<Element> | HTMLInputElement | null;
  private _optionItemNum: number | null;
  private _optionList:| HTMLElement| NodeListOf<Element>| HTMLInputElement| null;
  constructor() {
    super();
    this._options = null;
    this._optionItemNum = null;
    this._optionList = null;
  }
  // to get num  of the lust existing option item
  public getOptinOrderNumber(): number {
    let orderNum: number = 0;
    this._options = getElement('.opton-item');
    if (this._options && this._options instanceof HTMLElement) {
      const itemOptionTitle = this._options.querySelector('.item-id');
      if (itemOptionTitle) {
        orderNum = Number(itemOptionTitle.textContent?.replace('#', ''));
      }
    } else if (this._options && this._options instanceof NodeList) {
      const arrOptions: number[] = Array.from(this._options).map((el) => {
        return Number(
          el.querySelector('.item-id')?.textContent?.replace('#', '')
        );
      });
      if (arrOptions.length > 0) {
        orderNum = Math.max(...arrOptions);
        console.log(orderNum);
      }
    }
    return orderNum;
  }

  public addOptionItem(title:string, weight:number | null): void {
    this._optionList = getElement('.main-option-list');
    let optionItemElement: HTMLElement;
    this._optionItemNum = this.getOptinOrderNumber();
    if (!this._optionItemNum) {
      optionItemElement = this.optionItemCreator(1, title, weight);
    } else {
      this._optionItemNum += 1;
      optionItemElement = this.optionItemCreator(this._optionItemNum, title, weight);
    }
    if (this._optionList instanceof HTMLElement) {
      this.renderElement(this._optionList, optionItemElement);
    }
  }

  public removeOptionItem(event: Event): void {
    // update list of elements for deliteng element
    this._optionList = getElement('.main-option-list');
    if (event.target && event.target instanceof HTMLElement) {
      const deleteButton = event.target.closest('.delete-btn-title');
      if (deleteButton) {
        const optionItem = deleteButton.closest('.opton-item');
        if (optionItem) {
          if (this._optionList instanceof HTMLElement) {
            this._optionList.removeChild(optionItem);
          }
        }
      }
    }
  }

  public clearOptionList(): void {
    this._optionList = getElement('.main-option-list');
    if (this._optionList instanceof HTMLElement) {
      this._optionList.innerHTML = '';
      this.addOptionItem('', null);
    }
  }
}

export default OptionItemController;
