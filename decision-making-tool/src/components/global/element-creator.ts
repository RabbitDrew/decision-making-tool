class ElementCreator {
  public static createElement(tag: string, selectorName: string): Element {
    const element = document.createElement(tag);
    if (!element) {
      throw new Error('Failed to create element');
    } else {
      if (element instanceof Element) {
        element.className = selectorName;
      }
      return element;
    }
  }  
  public static renderElement(parentElement: Element,chieldElement: Element): void {
    parentElement.append(chieldElement);
  }
}

export default ElementCreator;
