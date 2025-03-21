import type { IStateData } from "../global/interfaces";

function drawPieChart(canvasId: string): void {

  const storedData: string | null = localStorage.getItem('itemOptionList'); 

  const decisions: IStateData[] = storedData ? JSON.parse(storedData) : [];
  

  if (decisions.length === 0) return;

  const canvas = document.querySelector(canvasId);
  if (!(canvas instanceof HTMLCanvasElement)) return;
  
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const effectiveDecisions = decisions.map(decision => {
    const weight = parseFloat(decision.valueWidth);
    return {
      ...decision,
      effectiveWeight: (!isNaN(weight) && weight > 0 ? weight : 1)
    };
  });

  const totalWeight = effectiveDecisions.reduce((sum, decision) => sum + decision.effectiveWeight, 0);
  
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const radius = Math.min(cx, cy) * 0.9; 
  
  let currentAngle = -Math.PI / 2; 

  effectiveDecisions.forEach(decision => {
    const sliceAngle = (decision.effectiveWeight / totalWeight) * 2 * Math.PI;

    const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, currentAngle, currentAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();


    const labelAngle = currentAngle + sliceAngle / 2;
    const labelRadius = radius * 0.7;
    const labelX = cx + labelRadius * Math.cos(labelAngle);
    const labelY = cy + labelRadius * Math.sin(labelAngle);


    ctx.fillStyle = "#000";
    ctx.font = "14px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(decision.valueTitle, labelX, labelY);

    currentAngle += sliceAngle;
  });
}

export default drawPieChart;

