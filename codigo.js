
var inventario = "";

let entrada = prompt("bienvenido a la herrería de la ciudad, pulsa 1 para la sección de armas, 2 para retirarte");
   if(entrada !=2){
      alert("Adelante! Mira lo que quieras... cuidado con el acero valyrio, es muy filoso");
   }else{
      alert("adios, vuelve pronto");
      window.close();
   }



let arma = prompt("1-Garrote ... 5 piezas de cobre\n2-daga ... 2 piezas de plata\n3-espada corta ... 8 piezas de plata\n4-espada larga ... 15 piezas de plata\n5-espada larga acero de castillo ... 3 piezas de oro\n6-espada larga acero valyrio ... 20 piezas de oro\n0-salir");

while(arma != "0"){
    switch(arma){
        case "1":
           alert("has comprado un garrote; -5 piezas de cobre");
           inventarioGlobal("garrote; ");
           break;
        case "2":
           alert("has comprado una daga; -2 piezas de plata");
           inventarioGlobal("daga; ");
           break;
        case "3":
           alert("has comprado una espada corta; -8 piezas de plata");
           inventarioGlobal("espada corta; ");
           break;
        case "4":
           alert("has comprado una espada larga; -15 piezas de plata");
           inventarioGlobal("espada larga; ");
           break;
        case "5":
           alert("has comprado una espada larga de acero de castillo; -3 piezas de oro");
           inventarioGlobal("espada larga de acero de castillo; ");
           break;   
        case "6":
           alert("No cuentas con dinero suficiente =(");
           break;
           
    }
    arma = prompt("1-Garrote ... 5 piezas de cobre\n2-daga ... 2 piezas de plata\n3-espada corta ... 8 piezas de plata\n4-espada larga ... 15 piezas de plata\n5-espada larga acero de castillo ... 3 piezas de oro\n6-espada larga acero valyrio ... 20 piezas de oro\n0-salir");
}

alert("has agregado al inventario las siguientes armas: " + inventario);

function inventarioGlobal (nuevoInventario){
   inventario = inventario + nuevoInventario;
   console.log("inventario: " + inventario)
}
