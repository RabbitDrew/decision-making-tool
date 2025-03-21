import getElement from "../global/get-element";
import type OptionItemController from "./option-item-controller";


class PasteListProcesser {
 private _textArea:HTMLElement | NodeListOf<Element> | HTMLInputElement | null
constructor () {
    this._textArea = null 
}    


public createOptionItem(callback:OptionItemController):void {
    const textAreaData: (string| number)[] | undefined = this.getTextAreaData()
    if (textAreaData){
    let title:string = ''
    const weight: number | null = typeof textAreaData[0] === 'number' ? Number(textAreaData.splice(0, 1)[0]) : null;
    title = textAreaData.join('')
    console.log(title)
    callback.addOptionItem(title, weight)
    }else {
        return 
    }

 }

 private getTextAreaData(): (string| number)[] | undefined {
    const textAreaData: (string | number)[] = []
    this._textArea = getElement('.csv-textarea');
    if (this._textArea instanceof HTMLTextAreaElement) {
        const textValue: string = this._textArea.value;
        if (textValue.length !== 0) {
            const textValueArr: string[] = textValue.includes(',')  // create arr to separeat input value from text area  according commas
            ? textValue.split(',').map(word => word.trim())  // if words separated by commas
            : textValue.split(' ').map(word => word.trim()); // if just one word without commas
            //create the copy of arr to separet wheit and title
            const copyWordsArr = [...textValueArr].reverse()
            //get the num of weight
            const getWeight:number = Number(copyWordsArr.splice(0, 1))
            //check if there is not  the num than we push in the ruslt just title 
            if (!getWeight) {
                textAreaData.push(...textValueArr)
            }else {
                textAreaData.push(getWeight, ...copyWordsArr.reverse())
            }   
        }else {
            return undefined
        }
    }
    return textAreaData
}


}

export default PasteListProcesser