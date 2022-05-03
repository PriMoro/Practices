
var boton = document.getElementById("botoncito");
boton.addEventListener("click", entregarDinero);

var r = document.getElementById("resultado");


class Billete
{
    constructor(valor, cantidad)
    {
        this.valor = valor;
        this.cantidad = cantidad;
    }
}



function entregarDinero()
{
    var t = document.getElementById("textito");
    dinero = parseInt(t.value); 
    for(var b of caja)
    {

        if(dinero > 0)
        {
            div = Math.floor(dinero / b.valor);

            if (div > b.cantidad)
            {
                papeles = b.cantidad;
            }
            else 
            {
                papeles = div;
            }

            entregado.push(new Billete (b.valor, papeles))
            dinero -= (papeles * b.valor);

            // -= significa que es igual a dinero menos lo que haya despues del operador.
        }

    }

    if (dinero > 0)
    {
        r.innerHTML = "Forgive me, I'm just a poor machine and I don't have enough money";
    }
    else 
    {
        for(var x of entregado)
        {
            if (x.cantidad > 0)

            // x es una instancia de la clase billete, y 
            // entregado es una variable de tipo array a la que le hacemos .push 
            // en el algoritmo de instancias de la clse billete.

            r.innerHTML += x.cantidad + " billetes de $" + x.valor + "</br>";

            // innerHTML es el atributo del objeto resultado. La forma correcta de escribir, 
            //y reemplazar el document.write.

            // += significa que es igual a r mas lo que haya despues del operador.
        }
    }

    console.log(entregado);

}

var caja = [];
var entregado = [];
caja.push( new Billete(100, 50) );
caja.push( new Billete(50, 20) );
caja.push( new Billete(20, 5) );
caja.push( new Billete(10, 10) );
caja.push( new Billete(5, 5) );

var dinero;
var div = 0;
var papeles = 0;


