import '../../style/header/header.scss';
import ElementCreator from '../global/element-creator';
import getElement from '../global/get-element';

class Header extends ElementCreator {
  private _page: HTMLElement | NodeListOf<Element> | null;
  constructor() {
    super();
    this._page = getElement('.page');
  }
  public createHeader(): void {
    const header: HTMLElement = this.createElement('header', 'page-header');
    const headerTitle: HTMLElement = this.createElement('h2', 'header-logo-title');
    headerTitle.textContent = 'Decision making tool';
    this.renderElement(header, headerTitle)
    if (this._page instanceof HTMLElement) {
      this.renderElement(this._page, header);
    }
  }
}
const header = new Header();
header.createHeader();
