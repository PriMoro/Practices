var d = document.getElementById("dibujito");
var papelito = d.getContext("2d");



document.addEventListener("mousedown", dibujoMouseDown);
document.addEventListener("mousemove", dibujoMouseMove);
document.addEventListener("mouseup", dibujoMouseUp);

console.log(papelito);

function dibujoMouseDown(evento)
{}

function dibujoMouseMove(evento)
{}

function dibujoMouseUp(evento)
{}

function dibujoConMouse(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 4;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath;
}