
var imagenes = [];
imagenes["Pokacho"] = "pollo.png";
imagenes["Cauchin"] = "vaca.png";
imagenes["Tocinauro"] = "cerdo.png";

// array asociativo, tiene texto en cadena, strings, que funciona con el "for in", 
// pero no con el "for of" ya que no tiene indices/numeros para iterar.

var coleccion = []
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Cauchin", 100, 30)); 
coleccion.push(new Pakiman("Tocinauro", 120, 40));

// array numerico, tiene indices, funciona con el "for in",
// tambien con el "for of" ya que tiene numeros para iterar.

for(var p of coleccion)
{
  p.mostrarImagenes();
}

for(var x in coleccion)
{
  console.log(x);
}

// muestra los indices del array.







