import type { IElementStorage, IItemOption, IItemNavOption } from "./interfaces"
class ElementStorage {
    private static elements:IElementStorage ={}
    // for single elements
    public static addElement(key:string, el: Element | IItemNavOption):void {
        this.elements[key]  = el
        console.log(this.elements)
    }
    // for collections
    public static addElements (key:string, el: IItemOption[]):void {
        this.elements[key]  = el
    }
    //TODO add type for the method 
    public static getElement(key:string):Element |IItemOption[]| IItemNavOption | undefined {
        const element = this.elements[key];
        if (!element) {
            console.warn('element isn`t found');
            return undefined;
        }
        return element; 
    }
}

export default ElementStorage


