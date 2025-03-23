import getElement from '../../global/get-element';
import optionItemCreator from '../../layout/main-layout/2_1_option-item-creator';
import ElementCreator from '../../global/element-creator';

class AddOptionToggler {
  public static addOptionItem(): void {
    const optionList = getElement('.main-option-list')
    let idNum: number | undefined = this.getitemOptionId()
    if (idNum && optionList && optionList instanceof Element) {
        idNum ++
        const optionItem = optionItemCreator(idNum, '', null)
        ElementCreator.renderElement(optionList, optionItem)
    }else if (!idNum && optionList && optionList instanceof Element) {
        const optionItem = optionItemCreator(1, '', null)
        ElementCreator.renderElement(optionList, optionItem)
    }
  }

  //clear option
  public static deleteOption (event:Event):void {
    const deleteTitleBtn = getElement('.delete-btn-title')
    //TODO  create refactoring  to make code esier
    // remove el if we get just one element 
    if (event.target instanceof Element) {
      if (deleteTitleBtn && deleteTitleBtn instanceof HTMLElement) {
        const deleteBtn = deleteTitleBtn.closest('.item-delete-btn')
        if (deleteBtn && 
            (event.target === deleteTitleBtn || event.target === deleteBtn))  {
          const itemOption = deleteBtn.closest('.opton-item')
          if (itemOption) {
            itemOption.remove()
          }
        } // if we get collection of elements
      } else if (deleteTitleBtn && deleteTitleBtn instanceof NodeList) {
          deleteTitleBtn.forEach (btnTitleElelemnt => {
          if (btnTitleElelemnt && btnTitleElelemnt instanceof HTMLElement) {
            const deleteBtn = btnTitleElelemnt.closest('.item-delete-btn')
            if (deleteBtn) {
              if (event.target === btnTitleElelemnt || event.target === deleteBtn ) {
                const itemOption = deleteBtn.closest('.opton-item')
                if (itemOption) {
                  itemOption.remove()
                }
              }
            }
           }
         })
      }
   }
  }

  // find max id number to add new option
  private static getitemOptionId(): number | undefined {
    const getItmeIdTitle = getElement('.item-id');
     if (getItmeIdTitle) {

        if (getItmeIdTitle instanceof NodeList) {
           if (getItmeIdTitle.length === 0) {
            return 1
           }
        }

        if (getItmeIdTitle instanceof HTMLElement) {
          return Number(getItmeIdTitle.textContent?.replace('#', ''));
        } else if (getItmeIdTitle instanceof NodeList) {
          const idValueArr: (number | null)[] = Array.from(getItmeIdTitle).map(el => Number(el.textContent?.replace('#', '')))
          return Math.max(...idValueArr.filter((el) => typeof el === 'number'));
        }
     }
  }
}

export default AddOptionToggler
