function limpiar(){
    document.getElementById("Nota1").value="";//borrar contenido imput
    document.getElementById("Nota2").value="";//borrar contenido imput
    document.getElementById("Nota3").value="";//borrar contenido imput
    document.getElementById("Definitiva").value="";//borrar contenido imput
}
function promedio(){
     var n1=document.getElementById("Nota1").value;//asignar nota 1 ingresada a n1
     var n2=document.getElementById("Nota2").value;//asignar nota 1 ingresada a n1
     var n3=document.getElementById("Nota3").value;//asignar nota 1 ingresada a n1
     var Definitiva=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;document.getElementById("Definitiva").value=Definitiva.toFixed(2);
} 