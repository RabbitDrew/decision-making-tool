import getElement from '../../global/get-element';
import AddOptionToggler from './1_options-toggler';

class PasteListDataHandler {

 public static confirmBtnHandler(event: Event): void {
    if (event.target instanceof HTMLElement) {
      const getPasteListModalWin = getElement('.page-modal');    
      if (getPasteListModalWin && getPasteListModalWin instanceof Element) {
        const confirmBtn = getElement('.paste-list-btn-confirm');
        if (confirmBtn) {
          if (event.target === confirmBtn ||
            event.target.closest('.paste-list-btn-confirm .paste-list-btn-title')) {
            this.createElement();
            getPasteListModalWin.remove();
          }
        }
      }
    }
  }

  private static getPastListData(): string {
    let dataTextArea: string = '';
    const textArea = getElement('.textarea');
    if (textArea && textArea instanceof HTMLTextAreaElement) {
      dataTextArea = textArea.value;
    }
    return dataTextArea;
  }

  private static pastListDataProcessor(): (string | number | null)[] {
    const processedDataArr: (string | number)[] = [];
    // get strings separeted by comma
    const getDataTextAreaArr = this.getPastListData().split(',');
    //extrac stringify numbers to get weight of decision
    const getStringifyNumbers = getDataTextAreaArr.filter((item) =>/^-?\d+$/.test(item.trim()));
    if (getStringifyNumbers.length !== 0) {
      //extract title
      const getTitle: string[] = getDataTextAreaArr.filter((item) => {
        // check to get title without last weight number it there is
        if (item !== getStringifyNumbers[getStringifyNumbers.length - 1]) {
          return item.trim();
        }
      });
      //extract weight
      const getWeight = Number(getStringifyNumbers[getStringifyNumbers.length - 1]);
      processedDataArr.push(...getTitle, getWeight);
    } else {
      processedDataArr.push(...getDataTextAreaArr);
    }
    return processedDataArr;
  }

    // create elemetn useing data the i've got
  private static createElement(): void {
    const dataArr = this.pastListDataProcessor();
    const title = dataArr.filter((item) => typeof item === 'string').join();
    const weight = dataArr.find((item) => typeof item === 'number') || null;
    console.log(title, weight);
    AddOptionToggler.addOptionItem(title, weight);
  }

}

export default PasteListDataHandler;
