class Pakiman
{
    constructor(n, v, a)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrarImagenes()
    {
        document.body.appendChild(this.imagen);
        document.write("</br>" + "<u>" + "<strong>"+ this.nombre + "</strong>" + "</u>" + "</br>");
        document.write("Vida: " + this.vida + "</br>");
        document.write("Ataque: " + this.ataque + "</br>" +"<hr/>");
    }
}