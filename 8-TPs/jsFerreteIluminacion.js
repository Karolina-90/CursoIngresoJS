/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

//Declaración de variables y obtención de datos.

    var lamparita;
    var precio;
    var descuento;
    var precioDescuento;
    var precioTotal;
    var marca;
     
    parseInt(descuento);

    lamparita = parseInt(document.getElementById("Cantidad").value);
    marca = document.getElementById("Marca").value;

//    debugger;

//A   

     if (lamparita >= 6) {
        
        descuento = 50;
        precio = lamparita * 35; 
        precioDescuento = precio * descuento / 100;
        precioTotal = precio - precioDescuento;
        
        document.getElementById("precioDescuento").value = precioTotal;
        
    }  
 
//B

    if (lamparita == 5 && marca == "ArgentinaLuz") {
        
        descuento = 40;
        precio = lamparita * 35; 
        precioDescuento = precio * descuento / 100;
        precioTotal = precio - precioDescuento;

        document.getElementById("precioDescuento").value = precioTotal;

    } else if (lamparita == 5 && marca != "ArgentinaLuz") { 
        descuento = 30;
        precio = lamparita * 35; 
        precioDescuento = precio * descuento / 100;
        precioTotal = precio - precioDescuento;

        document.getElementById("precioDescuento").value = precioTotal;
    } 

//C

    if (lamparita == 4 && (marca == "ArgentinaLuz" || marca == "FelipeLamparas")) {
        
        descuento = 25;
        precio = lamparita * 35; 
        precioDescuento = precio * descuento / 100;
        precioTotal = precio - precioDescuento;

        document.getElementById("precioDescuento").value = precioTotal;

    } else {  //VER
        descuento = 20;
        precio = lamparita * 35; 
        precioDescuento = precio * descuento / 100;
        precioTotal = precio - precioDescuento;

        document.getElementById("precioDescuento").value = precioTotal;
    
    }

//D    

    if (lamparita == 3 && marca == "ArgentinaLuz")  {
        
        descuento = 15;
        precio = lamparita * 35; 
        precioDescuento = precio * descuento / 100;
        precioTotal = precio - precioDescuento;

        document.getElementById("precioDescuento").value = precioTotal;

    } else if (lamparita == 3 && marca == "FelipeLamparas") {
        descuento = 10;
        precio = lamparita * 35; 
        precioDescuento = precio * descuento / 100;
        precioTotal = precio - precioDescuento;

        document.getElementById("precioDescuento").value = precioTotal;

    } else {
        descuento = 5;
        precio = lamparita * 35; 
        precioDescuento = precio * descuento / 100;
        precioTotal = precio - precioDescuento;

        document.getElementById("precioDescuento").value = precioTotal;
    } 

//E

    if (precioTotal > 120) {
        impuesto = precioTotal * 10 / 100;
        precioImpuesto = precioTotal + impuesto ;
        alert("Usted pagó " + precioImpuesto + " de Ingresos Brutos.");
    }   
}