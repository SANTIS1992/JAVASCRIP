function Buscar(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos");//asigna datos ingresado por teclado
    filter = input.value.toUpperCase();//convertir texto a mayusculas
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr");//asigna todas las filas a un arrays[]
    for (i = 0; i < tr.length; i++) {//recorriendotoda slas filas de la tabla
      td = tr[i].getElementsByTagName("td")[0];//especificamente en la columna=nombre pelicula
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {//busca el nombre pelicula  en la tabla
          tr[i].style.display = "";//muestra peliula 
          } else {
          tr[i].style.display = "none";//oculta lineas de la tabla
        }
      }       
    }
  
}