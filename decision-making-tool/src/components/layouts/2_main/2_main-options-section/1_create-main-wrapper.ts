import ElementCreator from "../../../global/element-creator"

const createOtionWrapper = function ():Element {
    const optionWrapper = ElementCreator.createElement('section', 'main-option__wrapper')
    return optionWrapper
}

export default createOtionWrapper