
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 800;
canvas.height = 800;

// 蓝底背景
ctx.ellipse(400, 400, 300, 180, 0, 0, Math.PI * 2);
ctx.fillStyle = "#058";
ctx.strokeStyle = "#000";
ctx.fill();
ctx.stroke();
// ---------------------------------------------------------------------

// 左边线条
ctx.beginPath();
ctx.moveTo(100, 400);
ctx.lineTo(140, 270);
ctx.lineTo(160, 500);
ctx.lineTo(180, 360);
ctx.lineTo(200, 420);
ctx.lineTo(220, 400);
ctx.lineTo(340, 400);
ctx.strokeStyle = '#fff'
ctx.stroke()
// ---------------------------------------------------------------------

// 右边线条
ctx.beginPath();
ctx.moveTo(700, 400);
ctx.lineTo(660, 300);
ctx.lineTo(620, 518);
ctx.lineTo(580, 360);
ctx.lineTo(540, 400);
ctx.lineTo(480, 400);
ctx.strokeStyle = '#fff'
ctx.stroke()
// ---------------------------------------------------------------------

// 话筒
ctx.ellipse(400, 400, 60, 100, 0, 0, Math.PI * 2);
ctx.strokeStyle = "#fff";
ctx.stroke();
// ---------------------------------------------------------------------

// 话筒 线条
ctx.beginPath()
ctx.moveTo(350, 350)
ctx.lineTo(380, 350)
ctx.moveTo(344, 370)
ctx.lineTo(380, 370)

ctx.moveTo(450, 350)
ctx.lineTo(420, 350)
ctx.moveTo(454, 370)
ctx.lineTo(420, 370)
ctx.stroke()
// ---------------------------------------------------------------------
// 抓手
ctx.beginPath()
ctx.ellipse(400, 440, 80, 80, 0, 0, Math.PI * 1);
ctx.strokeStyle = "#fff";
ctx.stroke();
ctx.beginPath()
ctx.moveTo(400, 520)
ctx.lineTo(400, 560)
ctx.stroke()
ctx.beginPath()
ctx.moveTo(360, 560)
ctx.lineTo(440, 560)
ctx.stroke()
// ---------------------------------------------------------------------


