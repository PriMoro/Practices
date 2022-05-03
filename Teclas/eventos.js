var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT:  39
};


console.log(teclas);

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("área_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 250;
var y = 250;

dibujoDeLineas("green", x - 1, y - 1, x + 1, y + 1, papel);

function dibujoDeLineas(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 4;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath;
}


function dibujarTeclado(evento)
{
    var colorcito = "yellow";
    var movimiento = 5;
    switch (evento.keyCode)
    {
        case teclas.UP:
            dibujoDeLineas(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujoDeLineas(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujoDeLineas(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujoDeLineas(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        default:
            console.log("Otra tecla");
        break;
    }

}
