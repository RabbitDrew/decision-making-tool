import '../../../style/mian/diagram.scss'
import ElementCreator from "../../global/element-creator";
import getElement from '../../global/get-element';
import SvgElements from './svg-elements';

class Diagram extends ElementCreator {
    constructor () {
        super()
    }

    public static diagram ():void {
        const main = getElement('.page-main')
        const mainDiagram = this.createElement('section', 'main-diagram')
        const diagramNav = this.diagramNav()        
        this.renderElement(mainDiagram, diagramNav)
        const canvas = this.canvas()
              canvas.setAttribute('width', '400')
              canvas.setAttribute('height', '400') 
        this.renderElement(mainDiagram, canvas)
        if (main instanceof Element) {
            this.renderElement(main, mainDiagram)
        }
    }

    private static diagramNav(): Element {
        const diagramNavWrapper = this.createElement('div', 'diagram-nav__wrapper');
        const diagramNavList = this.createElement('ul', 'diagram-nav');
        this.renderElement(diagramNavWrapper, diagramNavList);
    
        const diagramNavItemBack = this.createElement('li', 'diagram-nav-item');
        const svgBack = SvgElements.backArrow(); 
        this.renderElement(diagramNavItemBack, svgBack);

        const diagramNavItemSound = this.createElement('li', 'diagram-nav-item');
        const svgSound = SvgElements.soundOn(); 
        this.renderElement(diagramNavItemSound, svgSound);


        const diagramNavItemTime = this.createElement('li', 'diagram-nav-item');
        const svgTime = SvgElements.time(); 
        this.renderElement(diagramNavItemTime, svgTime);
        const timeInputWrapper = ElementCreator.createElement('div', 'time-input__wrapper')
        const timeInput = ElementCreator.createElement('input', 'time-input')
        if (timeInput instanceof HTMLInputElement){
              timeInput.type = 'number'
              timeInput.autocomplete="off" 
              timeInput.value = '16'
        }

        this.renderElement(timeInputWrapper, timeInput);
        const timeStyleLine = ElementCreator.createElement('div', 'style-line')
        this.renderElement(timeInputWrapper,timeStyleLine);
        this.renderElement(diagramNavItemTime, timeInputWrapper);
        
        this.renderElement(diagramNavList, diagramNavItemBack);
        this.renderElement(diagramNavList, diagramNavItemSound);
        this.renderElement(diagramNavList, diagramNavItemTime);
        return diagramNavWrapper;
    }

    private static canvas (): Element {
        const canvas = this.createElement('canvas', 'canvas')
        return canvas
    }

}

//Diagram.diagram()

export default Diagram
