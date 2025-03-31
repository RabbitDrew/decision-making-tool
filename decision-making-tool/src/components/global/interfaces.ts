// axiluray interface to IItemOption interface 
interface IInput {
    inputWrapper:Element | undefined
    input: Element | undefined
    //inputValue?:string|number|null
}
// interface for single item 
export interface IItemOption {
    itemOption: Element | undefined
    itemOptionId:Element | undefined
    ItemOptionTitleInput:IInput
    ItemOptionWeightInput:IInput
    inputStyleLine:Element | undefined
    deleteBtn: Element | undefined
}

export interface IItemNavOption {
 optionNav: Element | undefined
 optionNavItem: Element [] | undefined
}

//TODO refactor the interface to add exact keys names 
export interface IElementStorage {
[key: string]: Element | 
               HTMLInputElement| 
               IItemOption[] | 
               IItemNavOption |
               undefined
}

export interface IContentData  {
    optionNavTitles: string[]
}
