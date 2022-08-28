/**** Disponibilidad de horarios *****/



const lunes = "lunes";
const martes = "martes";
const miercoles = "miercoles";
const jueves = "jueves";
const viernes = "viernes";


const mañana = "mañana";
const tarde = "tarde";

let intentos = 0
while(intentos <= 1) {
    let diaDePaseo = prompt("Ingrese un dia habil: ");
    let turnoDePaseo = prompt("Ingrese mañana o tarde: ");
    let chequeoDia = (diaDePaseo === lunes ) || (diaDePaseo === martes) || (diaDePaseo === miercoles) || (diaDePaseo === jueves) || (diaDePaseo === viernes)
    
    let chequeoTurno = (turnoDePaseo === mañana) || (turnoDePaseo === tarde);
    if( chequeoDia && chequeoTurno){
        alert("fecha confirmada!");
        break;
    }
    else{
        alert("No ingresaste un dato valido!");
        intentos++;    
    }
    
}