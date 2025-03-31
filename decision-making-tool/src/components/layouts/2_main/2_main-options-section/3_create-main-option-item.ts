import ElementCreator from "../../../global/element-creator"
// TODO delete the type from type list 
import type {IItemOption } from "../../../global/interfaces"


class OptionItemCreator {
    private static item: IItemOption = {
        itemOption: undefined,
        itemOptionId: undefined,
        ItemOptionTitleInput: {
             inputWrapper: undefined,
             input: undefined, 
             //inputValue: ''
        },
        ItemOptionWeightInput: { 
            inputWrapper: undefined, 
            input: undefined, 
            //inputValue: null
        },
        inputStyleLine:undefined,
        deleteBtn: undefined
    }

    // create item in object 
    public static createItemObj(id:number, title: string, weight: number| null):IItemOption {
         this.item.itemOption = this.createOptionItem ()
         this.item.itemOptionId = this.createItemid (id)
         this.item.ItemOptionTitleInput.inputWrapper = this.inputTitleWrapper()
         this.item.ItemOptionTitleInput.input = this.createInputTitle(title)
         this.item.ItemOptionWeightInput.inputWrapper = this.inputWeightWrapper()
         this.item.ItemOptionWeightInput.input = this.createInputWeight(weight)
         this.item.inputStyleLine = this.inputStyleLine ()
         this.item.deleteBtn = this.createDeleteBtn()
         return this.item
    } 

    private static createOptionItem ():Element {
        const createItem = ElementCreator.createElement('ul', 'opton-item')
        return createItem
    }

    private static createItemid (id:number):Element {
          const itemId = ElementCreator.createElement('h2', 'item-id')
          itemId.textContent =`#${id}`
          return itemId
    }

    private static inputTitleWrapper(): Element {
        const inputTitleBlock = ElementCreator.createElement('div', 'item-input-title__wrapper')
        return inputTitleBlock
    }

    private static createInputTitle(title: string):Element {     
        const inputTitle = ElementCreator.createElement('input', 'item-input-title')
        if (inputTitle instanceof HTMLInputElement) {
            inputTitle.type = 'text'
            inputTitle.placeholder = 'Decision title'
            inputTitle.value = title

        }
        return inputTitle

    }
    private static inputWeightWrapper(): Element {
        const inputWeightBlock = ElementCreator.createElement('div', 'item-input-weight__wrapper')
        return inputWeightBlock
    }
    private static createInputWeight (weight:number | null):Element { 
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
        return inputWeight
    }

    private static inputStyleLine ():Element {
        const inputStyleLine = ElementCreator.createElement('div', 'input-style-line')
        return inputStyleLine
    }

    private static createDeleteBtn ():Element {
        const deleteBtn = ElementCreator.createElement('div', 'item-delete-btn')
        const deleteBtnTitle = ElementCreator.createElement('h2', 'delete-btn-title') 
              deleteBtnTitle.textContent = 'Delete'
        ElementCreator.renderElement(deleteBtn, deleteBtnTitle)
        return deleteBtn
    }
}

export default OptionItemCreator