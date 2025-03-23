import getElement from '../../global/get-element';
import type { ElementType } from '../../global/types';
import AddOptionToggler from '../content-controller/1_options-toggler';
class optionHendler {
  private static _optionItems: ElementType = getElement('.option-nav-item');

  public static addOptionHandler(): void {
    this.getOptionsItems();
    console.log(this._optionItems);
    if (this._optionItems instanceof NodeList) {
      this._optionItems[0].addEventListener('click', () => {
        AddOptionToggler.addOptionItem();
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

optionHendler.addOptionHandler();
