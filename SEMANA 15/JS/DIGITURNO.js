function prefer(){
    let num=1;//primer digiturno eps
    let res=true;//confirmacion de siguiente turno
    while (num<=99 && res==true){
        nomuser=prompt("ingrese nombre usuario");
        if(nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"E"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//INCREMENTAR TURNO
        }else{
            alert("ERROR EN TURNO …");
           break;
       }
   }
}
function user(){
    let num=1;//primer digiturno eps
    let res=true;//confirmacion de siguiente turno
    while (num<=99 && res==true){
        nomuser=prompt("ingrese nombre usuario");
        if(nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"A"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//INCREMENTAR TURNO
        }else{
            alert("ERROR EN TURNO …");
           break;
       }
   }
}

        
    

        
    
