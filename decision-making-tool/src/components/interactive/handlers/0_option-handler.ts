import getElement from "../../global/get-element";
import type { ElementType } from "../../global/types";
import AddOption from "../content-controller/1_options-toggler";
class optionHendler {
    private static _optionItems: ElementType = getElement('.option-nav-item')
    // reassighn elements to _option items


    public static addOptionHandler (): void {
        this.getOptionsItems()
        console.log(this._optionItems)
        if (this._optionItems instanceof NodeList) {
            this._optionItems[0].addEventListener('click', () => {
               AddOption.addOptionItem()
            })
        }
    }



    private static getOptionsItems(): ElementType {
        this._optionItems = getElement('.option-nav-item')
        if (this._optionItems && this._optionItems instanceof NodeList) {
            return this._optionItems;
        }
    }
}

optionHendler.addOptionHandler()