// close pasteList
import PastLIstToggler from "../content-controller/2_0_paste-list-toggler"
class PastListHandlers {
    public static cancelBtn ():void {
       document.addEventListener('click', (event) => {
        PastLIstToggler.closePasteList(event)
       })
       document.addEventListener("keydown", (event) => {
        if (event.code == "Escape") {
            PastLIstToggler.closePasteList(event)
        }
      });
    }

   /* public static confirmBtn ():void {
        document.addEventListener('click', (event) => {
        })
     } */
}

PastListHandlers.cancelBtn()