import getElement from '../../global/get-element';
import ElementCreator from '../../global/element-creator';


class Header extends ElementCreator {

  constructor() {
    super();
  }

  public static createHeader():void {
    const page = getElement('.page')
    const header: Element = this.createElement('header', 'page-header');
    
    if (page && page instanceof Element) {
        this.renderElement(page, header)
    }
  }

}


Header.createHeader()