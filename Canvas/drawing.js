var d = document.getElementById("midibujo");
var lienzo = d.getContext("2d");
var ancho = d.width;

var texto = document.getElementById("textito");
var boton = document.getElementById("botoncito");
boton.addEventListener ("click", dibujoPorClick);


function dibujoDeLineas(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath;
}

function dibujoPorClick ()
{
    var lineas = parseInt(texto.value);
    var espacio = ancho / lineas;
    var l = 0;
    var xf, yi;
    var xf2, yi2; 
    var xi, yf;
    var colorDeLineas = "skyblue";

    for (var l = 0; l < lineas; l++)
    {
    yi = l * espacio;
    xf = (l + 1) * espacio;
    xf2 = 300 - espacio * (l + 1);
    yi2 = 300 - (l * espacio);
    xi = l * espacio;
    yf = 300 - (l * espacio);
    dibujoDeLineas(colorDeLineas, yi2, 0, 300, xf2);
    dibujoDeLineas(colorDeLineas, yi2, 300, 0, xf2);
    dibujoDeLineas(colorDeLineas, xi, 300, 300, yf);
    dibujoDeLineas(colorDeLineas, xi, 0, 0, yf);
    console.log("linea " + l);
    }

}









