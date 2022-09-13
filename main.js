/**** Disponibilidad de horarios *****/

const arrayDiasHabiles = ["lunes", "martes", "miercoles", "jueves", "viernes"]
const arrayTurnos = ["mañana", "tarde"]

let intentos = 0
while(intentos <= 3) {
    let diaDePaseo = prompt("Ingrese un dia habil: ");
    let turnoDePaseo = prompt("Ingrese mañana o tarde: ");
    let chequeoDia = arrayDiasHabiles.includes(diaDePaseo);
    
    let chequeoTurno = arrayTurnos.includes(turnoDePaseo);
    if( chequeoDia && chequeoTurno){
        alert("fecha confirmada!");
        break;
    }
    else{
        alert("No ingresaste un dato valido!");
        intentos++;    
    }
    
}