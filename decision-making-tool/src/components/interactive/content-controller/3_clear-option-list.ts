import ElementCreator from '../../global/element-creator';
import getElement from '../../global/get-element';
import optionItemCreator from '../../layout/main-layout/2_1_option-item-creator';

const clearOptionList = function (): void {
  const getOptionList = getElement('.main-option-list');
  if (getOptionList && getOptionList instanceof HTMLElement) {
    getOptionList.innerHTML = '';
    const optionItem = optionItemCreator(1, '', null);
    ElementCreator.renderElement(getOptionList, optionItem);
  }
};

export default clearOptionList;
