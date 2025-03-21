import getElement from '../global/get-element';
import type { IStateData } from "../global/interfaces";

let isRotating = false;

function rotateWheel(): void {
  const spinButton = getElement('.start-btn-title');
  if (!spinButton || !(spinButton instanceof HTMLElement) || isRotating) return;

  isRotating = true;

  const wheelElement = getElement('.wheel');
  const timeInputElement = getElement('.time-input');

  if (
    wheelElement && wheelElement instanceof HTMLElement &&
    timeInputElement && timeInputElement instanceof HTMLInputElement
  ) {
    const storedData = localStorage.getItem('itemOptionList');
    const decisions: IStateData[] = storedData ? JSON.parse(storedData) : [];

    if (decisions.length === 0) {
      isRotating = false;
      return;
    }

    const inputTime = timeInputElement.value ? parseFloat(timeInputElement.value) : 15;
    const rotationTime = inputTime * 300;
    const randomStopAngle = Math.random() * 2 * Math.PI;

    wheelElement.style.transition = 'none';
    wheelElement.style.transform = 'rotate(0deg)';

    setTimeout(() => {
      wheelElement.style.transition = `transform ${rotationTime / 1000}s cubic-bezier(0.25, 0.8, 0.25, 1)`;
      const rotationDegree = (randomStopAngle * 180 / Math.PI) + 360 * 5;
      wheelElement.style.transform = `rotate(${rotationDegree}deg)`;

      setTimeout(() => {
        isRotating = false;
      }, rotationTime);
    }, 100);
  } else {
    isRotating = false;
  }
}

export default rotateWheel;




