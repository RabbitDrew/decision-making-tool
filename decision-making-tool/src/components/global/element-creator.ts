
class ElementCreator   {
    public static createElement (tag:string, selectorName:string): Element | undefined{
       const element = document.createElement(tag) 
       if (element && element instanceof Element) {
        element.className = selectorName
        return element
       }else {
        return undefined
       }
    }

    public static renderElement (parentElement:Element, chieldElement:Element):void {
        parentElement.append(chieldElement)
    }
}

export default ElementCreator