const getElement = function (selectorName: string): HTMLElement | NodeListOf<Element> | HTMLInputElement | null {
  const getElements = document.querySelectorAll(selectorName);
  if (getElements.length === 1) {
    if (getElements[0] instanceof HTMLElement) {
      return getElements[0];
    }
    return null;
  } else {
    return getElements;
  }
};

export default getElement;
