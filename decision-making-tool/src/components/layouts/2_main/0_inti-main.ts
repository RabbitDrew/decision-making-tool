//import ElementCreator from "../../global/element-creator";
import ElementStorage from "../../global/element-storage";
import type { IItemOption, IItemNavOption } from "../../global/interfaces";
//importElements 
import createMain from "./1_create-main";
import createOtionWrapper from "./2_main-options-section/1_create-main-wrapper";
import createOptionList from "./2_main-options-section/2_create_main-option-list";
import OptionItemCreator from "./2_main-options-section/3_create-main-option-item";
import CreateOptinNav from "./2_main-options-section/4_option-nav-itmes";
import createDecisionBtn from "./2_main-options-section/5_decision-btn";


class Main {
private static main: Element
private static optionListWrapper: Element
private static optionList: Element
private static optonItemsArr: IItemOption []
private static optionNavList: IItemNavOption
private static decisionBtn:Element

public static initElement ():void {
    this.saveElements()
}    

private static saveElements ():void {
    this.main = createMain()
    ElementStorage.addElement('main', this.main)
    this.optionListWrapper = createOtionWrapper()
    ElementStorage.addElement('optionListWrapper',this.optionListWrapper)
    this.optionList = createOptionList()
    ElementStorage.addElement('optionList',this.optionList)
    //! is it possible that can be necceuary to add getting information for state
    //! and than create items for rendring 
    this.optonItemsArr = [OptionItemCreator.createItemObj(1, '', null)]
    ElementStorage.addElements('optionItems',this.optonItemsArr)
    //*-----------------------------------------------------------------
    this.optionNavList = CreateOptinNav.createNavOptionObj()
    ElementStorage.addElement('optionNavList', this.optionNavList)
    this.decisionBtn = createDecisionBtn()
    ElementStorage.addElement('decisionBtn', this.decisionBtn)    
}
//TODO the next is to rende created elements above 
//private static renderElements ():void {}


}


export default Main