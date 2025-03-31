import ElementCreator from '../../../global/element-creator';

const createDecisionBtn = function (): Element {
  const decisionBtn = ElementCreator.createElement('div', 'main-decision-btn');
  const decisionBtnTitle = ElementCreator.createElement(
    'h2',
    'decision-btn-title'
  );
  decisionBtnTitle.textContent = 'Let me help you to make decision';
  ElementCreator.renderElement(decisionBtn, decisionBtnTitle);
  return decisionBtn;
};

export default createDecisionBtn;
