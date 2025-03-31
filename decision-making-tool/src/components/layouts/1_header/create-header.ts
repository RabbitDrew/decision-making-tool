import '../../../style/header/header.scss'
import ElementCreator from '../../global/element-creator';
import ElementStorage from '../../global/element-storage';
import { page } from '../0_page/page';

class Header {
  // Use the obj from Element storage module
  public static initElement ():void {
    // save element to the storage 
    const header = this.createHeader()
    ElementStorage.addElement('header', header)
    //get element from the storage and render it
    this.renderElement()
  }

  private static createHeader(): Element {
    const header: Element = ElementCreator.createElement('header','page-header');
    const headerLogo: Element = this.headerLogo();
    ElementCreator.renderElement(header, headerLogo);
    return header;
  }
  private static headerLogo(): Element {
    const headerLogo = ElementCreator.createElement('h2', 'header-logo-title');
    headerLogo.textContent = 'Decision making tool';
    return headerLogo;
  }
  private static renderElement ():void {
    const header = ElementStorage.getElement('header')
    if (header && header instanceof Element) {
      ElementCreator.renderElement(page, header)
    }
  }
}

export default Header


