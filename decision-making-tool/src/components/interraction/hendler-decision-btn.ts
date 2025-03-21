import getElement from "../global/get-element"
import Main from "../layouts/main";

import DiagramSectionToggler from "./main-diagram-sec-toggler";
import State from "./state-app";


import drawPieChart from "./canvas-diagram";
const startBtnHandler = function (
    instanceOfDiagramSectionToggler:DiagramSectionToggler,
    instanceOfStae:State
):void {
    const mainDecisionBtn:HTMLElement | NodeListOf<Element>| HTMLInputElement | null= getElement('.main-decision-btn');  
    if (mainDecisionBtn instanceof HTMLElement) {
        mainDecisionBtn.addEventListener('click', () => {
           instanceOfStae.createDataArr()
           instanceOfStae.saveData()
           instanceOfDiagramSectionToggler.openDecisionSection()
           drawPieChart(".main-canvas")
        }) 
    }

}

const instanceOfMain = new Main
const instanceOfDiagramSectionToggler = new DiagramSectionToggler(instanceOfMain)
const instanceOfState = new State ()
startBtnHandler(
    instanceOfDiagramSectionToggler,
    instanceOfState
)
export default startBtnHandler 