import getElement from '../../global/get-element';
import optionItemCreator from '../../layout/main-layout/2_1_option-item-creator';
import ElementCreator from '../../global/element-creator';

class AddOption {
  public static addOptionItem(): void {
    const optionList = getElement('.main-option-list')
    let idNum: number | undefined = this.getitemOptionId()
    if (idNum && optionList && optionList instanceof Element) {
        idNum ++
        const optionItem = optionItemCreator(idNum, '', null)
        ElementCreator.renderElement(optionList, optionItem)
    }
  }

  private static getitemOptionId(): number | undefined {
    const getItmeIdTitle = getElement('.item-id');
    if (getItmeIdTitle && getItmeIdTitle instanceof HTMLElement) {
      return Number(getItmeIdTitle.textContent?.replace('#', ''));
    } else if (getItmeIdTitle && getItmeIdTitle instanceof NodeList) {
      const idValueArr: (number | null)[] = Array.from(getItmeIdTitle).map(el => Number(el.textContent?.replace('#', '')))
      return Math.max(...idValueArr.filter((el) => typeof el === 'number'));
    }
  }
}


export default AddOption
