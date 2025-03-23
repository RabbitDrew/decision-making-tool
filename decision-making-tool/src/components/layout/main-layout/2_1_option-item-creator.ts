import ElementCreator from "../../global/element-creator"
import type { OptonItemCreator } from "../../global/types"

const optionItemCreator:OptonItemCreator = (id, title, weight) => {
    const optionItem = ElementCreator.createElement('li', 'opton-item')
    const itemId = ElementCreator.createElement('h2', 'item-id')
          itemId.textContent =`#${id}`
    ElementCreator.renderElement(optionItem, itemId)

    //title input 
    const inputTitleBlock = ElementCreator.createElement('div', 'item-input-title__wrapper')
    const inputTitle = ElementCreator.createElement('input', 'item-input-title')
    if (inputTitle instanceof HTMLInputElement) {
        inputTitle.type = 'text'
        inputTitle.placeholder = 'Decision title'
        inputTitle.value = title
    }
    ElementCreator.renderElement(inputTitleBlock, inputTitle)
    const styleLineTitle = ElementCreator.createElement('div', 'input-style-line')
    
    //weight input
    ElementCreator.renderElement(inputTitleBlock, styleLineTitle)
    const inputWeightBlock = ElementCreator.createElement('div', 'item-input-weight__wrapper')
    const inputWeight = ElementCreator.createElement('input', 'item-input-weight')
    if (inputWeight instanceof HTMLInputElement) {
        inputWeight.type = 'number'
        inputWeight.placeholder = 'Weight'
        if (weight) {
            inputWeight.value = weight.toString()
        }else {
            inputWeight.value = ''
        }
        
    }
    ElementCreator.renderElement(inputWeightBlock, inputWeight)
    const styleLineWeight = ElementCreator.createElement('div', 'input-style-line')
    ElementCreator.renderElement(inputWeightBlock,styleLineWeight)

    // reneder titleinput and wightInput
    ElementCreator.renderElement(optionItem, inputTitleBlock)
    ElementCreator.renderElement(optionItem, inputWeightBlock)

    // delete btn 
    const optionDeleteBtn = ElementCreator.createElement('div', 'item-delete-btn')
    const optionDeleteBtnTitle = ElementCreator.createElement('h2', 'delete-btn-title')
          optionDeleteBtnTitle.textContent = "Delete"
    ElementCreator.renderElement(optionDeleteBtn, optionDeleteBtnTitle)

    // render btn
    ElementCreator.renderElement(optionItem, optionDeleteBtn)

    return optionItem
}


export default optionItemCreator