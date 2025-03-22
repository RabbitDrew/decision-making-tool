import '../../../style/mian/main.scss'
import getElement from '../../global/get-element';
import ElementCreator from '../../global/element-creator';
import optionItemCreator from './2_1_option-item-creator';
import contentData from '../../global/content-data';

class Main extends ElementCreator {
    public static renderMain ():void {
       const page = getElement('.page')
        const main = this.createElement('main','page-main')
        const mainOptionSection = this.createMainOptionSection()
        this.renderElement(main, mainOptionSection)
        if (page instanceof Element) {
            this.renderElement(page, main)
        } 
    }

    // main option Items block
    private static createMainOptionSection(): Element {
        const mainOptionSection = this.createElement('section', 'main-option__wrapper')
        //option list
        const optionList = this.createElement('ul', 'main-option-list') 
        this.renderElement(mainOptionSection, optionList)
        const staticOptionItem = optionItemCreator(1, '', null)
        this.renderElement(optionList, staticOptionItem)

        //nav options 
        const optionNavList = this.createMainNavOptions()
        this.renderElement(mainOptionSection, optionNavList)


        //decision btn
        const decisionBtn = this.createMainBtnDecision ()
        this.renderElement(mainOptionSection, decisionBtn)

        return mainOptionSection
    }

    //main option nav block 
    private static createMainNavOptions ():Element {
        const mainNavOption = this.createElement('ul', 'option-nav')
        contentData.optionNavTitles.forEach(title => {
            const optionNavItem = this.createElement('li', 'option-nav-item')
            const optionNavItemTitle = this.createElement('h2', 'option-nav-title')
                  optionNavItemTitle.textContent = title
            this.renderElement(optionNavItem, optionNavItemTitle)
            this.renderElement(mainNavOption, optionNavItem)
        })
        return mainNavOption
    }

    //main btn decision 
    private static createMainBtnDecision ():Element {
        const mainDecisionBtn = this.createElement('div', 'main-decision-btn')
        const decisionBtnTitle = this.createElement ('h2', 'decision-btn-title')
              decisionBtnTitle.textContent = 'Let me help you make a decision'
        this.renderElement(mainDecisionBtn, decisionBtnTitle)
        return mainDecisionBtn
    }

}

Main.renderMain()