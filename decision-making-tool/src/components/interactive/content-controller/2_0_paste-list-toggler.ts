import getElement from '../../global/get-element';
import PasteList from '../../layout/modal-win/0_paste-list';

class PastLIstToggler {
  public static openPasteList():void {
    PasteList.pasteList();
  }

  public static closePasteList(event: Event):void {
    const getPasteListModalWin = getElement('.page-modal');
    // close win on ecape key 
    if (event instanceof KeyboardEvent && event.code === 'Escape') {
      if (getPasteListModalWin instanceof Element) {
        getPasteListModalWin.remove();
      }
      return;
    }
    // close win on cancel btn
    if (event.target instanceof HTMLElement) {
      const clickedTitle = event.target.closest('.paste-list-btn-title');
      const cancelBtn = clickedTitle?.closest('.paste-list-btn-cancel');
      // TODO close window on cancel btn area and title cancel btn 
      if (cancelBtn && getPasteListModalWin instanceof Element) {
        getPasteListModalWin.remove();
      }

      if (getPasteListModalWin) {
        if (event.target === getPasteListModalWin) {
          getPasteListModalWin.remove();
        }
      }
    }
    //TODO close win on confirm btn after adding option item


  }
}

export default PastLIstToggler;
