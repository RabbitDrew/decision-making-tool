import contentData from '../../../global/content-data';
import ElementCreator from '../../../global/element-creator';
import type { IItemNavOption } from '../../../global/interfaces';

class CreateOptinNav {
  private static item: IItemNavOption = {
    optionNav: undefined,
    optionNavItem: undefined,
  };

  public static createNavOptionObj(): IItemNavOption {
    this.item.optionNav = this.createOptionNavList();
    this.item.optionNavItem = this.createOptionNavItems();
    return this.item
  }

  private static createOptionNavList(): Element {
    const optionNavList = ElementCreator.createElement('ul', 'option-nav');
    return optionNavList;
  }

  private static createOptionNavItems(): Element[] {
    const result: Element[] = [];
    contentData.optionNavTitles.forEach((title) => {
      const item = ElementCreator.createElement('li', 'option-nav-item');
      const itemTitle = ElementCreator.createElement('h2', 'option-nav-title');
      itemTitle.textContent = title;
      ElementCreator.renderElement(item, itemTitle);
      result.push(item);
    });
    return result;
  }
}


export default CreateOptinNav