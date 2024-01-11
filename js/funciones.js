/*definimos la cantidad de divisores*/
function Divisores(){
    var a=document.getElementById("nume2").value;
    var c=0;
    for(x=1;x<=a;x++){
        if(a%x==0){
            c++;
        }
    }//for    
    alert ("El numero "+ a + " tiene " + c + " divisores");

}

function CrearCarta()
{
    var a=document.getElementById("rut").value;
    var b=document.getElementById("nom").value;
    var c=document.getElementById("ape1").value;
    var d=document.getElementById("ape2").value;
    var e=document.getElementById("edad").value;
    var f=document.getElementById("genero").value;
    var g=document.getElementById("celu").value;
    var h=document.getElementById("motivo").value;

    if (parseInt(h)==1)
    {
        motivo="Conseguir un trabajo full time";
    }
    if(h==2){
        motivo="Ser un aporte valioso a la empresa";
    }

    var cadena=
        "Rut: " + a + "\n" +
        "Nombre: " + b + "\n" +
        "Apellido paterno: " + c + "\n" +
        "Apellido materno: " + d + "\n" +
        "Edad: " + e + "\n" +
        "Genero: " + f + "\n" +
        "Celular: " + g + "\n" +
        "Motivo: " + motivo + "\n";

        document.getElementById("carta").value=cadena;
        

}