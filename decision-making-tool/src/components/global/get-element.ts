import type { ElementType} from "../global/types";
const getElement = (selector:string): ElementType =>  {
    const elements = document.querySelectorAll(selector);
    const element = elements[0]
    if (elements.length === 1) {
        return element instanceof Element ? element : undefined;
            
    } else {
        return elements instanceof  NodeList  ? elements : undefined;
    }
};

export default getElement;