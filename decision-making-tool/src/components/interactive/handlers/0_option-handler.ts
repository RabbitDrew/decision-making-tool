import getElement from '../../global/get-element';
import type { ElementType } from '../../global/types';
import AddOptionToggler from '../content-controller/1_options-toggler';
import PastLIstToggler from '../content-controller/2_0_paste-list-toggler';
class optionHendler {
  private static _optionItems: ElementType = getElement('.option-nav-item');

  public static handlers ():void {
    this.addOptionHandler()
    this.pastListItemHandler ()
  }

  private static addOptionHandler(): void {
    this.getOptionsItems();
    if (this._optionItems instanceof NodeList) {
      this._optionItems[0].addEventListener('click', () => {
        AddOptionToggler.addOptionItem();
      });
    }
  }

  private static pastListItemHandler ():void {
    this.getOptionsItems();
    if (this._optionItems instanceof NodeList) {
      this._optionItems[1].addEventListener('click', () => {
        PastLIstToggler.openPasteList()
      });
    }
  }

  // reassighne elements to this._option items
  private static getOptionsItems(): ElementType {
    this._optionItems = getElement('.option-nav-item');
    if (this._optionItems && this._optionItems instanceof NodeList) {
      return this._optionItems;
    }
  }
}

optionHendler.handlers();
