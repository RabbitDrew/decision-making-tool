import ElementCreator from "../../../global/element-creator";

const createOptionList = function ():Element {
    const optionList = ElementCreator.createElement('div', 'main-option-list')
    return optionList
}

export default createOptionList