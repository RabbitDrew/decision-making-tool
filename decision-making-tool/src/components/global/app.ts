import Header from "../layouts/1_header/create-header"
import Main from "../layouts/2_main/0_inti-main"

class App  {
    public static init ():void {
        Header.initElement()
        Main.initElement()
    }


}

// for add all logic
//render element 
//add handlers 
document.addEventListener('DOMContentLoaded', App.init)