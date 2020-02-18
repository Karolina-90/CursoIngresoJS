/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var precioTotal;
    
    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);

    precioTotal = precioUno + precioDos + precioTres;

    alert("La suma total de los precios es de: $" + precioTotal);
    
}
function Promedio () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var precioTotal;
    
    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);

    precioTotal = precioUno + precioDos + precioTres;

    precioTotal = precioTotal / 3;

    alert("El promedio del precio total es de: $" + precioTotal);
}
function PrecioFinal () 
{
	var precioUno;
    var precioDos;
    var precioTres;
    var precioTotal;
    var iva = 21;
    parseInt(iva);
    
    precioUno = parseInt(document.getElementById("PrecioUno").value);
    precioDos = parseInt(document.getElementById("PrecioDos").value);
    precioTres = parseInt(document.getElementById("PrecioTres").value);

    precioTotal = precioUno + precioDos + precioTres;

    precioTotal = precioTotal * iva / 100;

    alert("El precio final más iva es de: $" + precioTotal);
}