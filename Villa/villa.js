var vp = document.getElementById("villa_platzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

var cantidad = 20; 

fondo.imagen = new Image();
fondo.imagen.src = "tile.png";
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = "vaca.png";
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = "cerdo.png";
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = "pollo.png";
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo() 
{
    fondo.cargaOK = true;
    dibujar();

}

function cargarVaca() 
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdo() 
{
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollo() 
{
    pollo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if (fondo.cargaOK == true)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if (vaca.cargaOK == true)
    {
        console.log(cantidad);
        for (var v = 0; v < cantidad; v++)
        {
            var x = aleatorio(0, 150);
            var y = aleatorio(0, 150);
            papel.drawImage(vaca.imagen, x, y);
        }
    }

    if (cerdo.cargaOK == true)
    {
        for (var c = 0; c < cantidad; c++)
        {
            var x = aleatorio(200, 250);
            var y = aleatorio(200, 250);
            papel.drawImage(cerdo.imagen, x, y);
        }
    }

    if (pollo.cargaOK == true)
    {
        for (var p = 0; p < cantidad; p++)
        {
            var x = aleatorio(300, 420);
            var y = aleatorio(300, 420);
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado; 
}
