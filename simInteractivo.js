// Calcular nota final de alumnos ingresados

function adquirirPalabra (palabra){
    let resultado = prompt(`Ingrese su: ${palabra}`);
    return resultado;
}

function adquirirNombre(){
    let repreguntar = true;
    while (repreguntar) {
        let nombre = adquirirPalabra("nombre");
        let apellido = adquirirPalabra("apellido");
        if (nombre != "" && apellido != ""){
            repreguntar = false;
            alert(`Hola alumno ${nombre} ${apellido}`);
            return `${nombre} ${apellido}`;
        }else {
            alert ("Es obligatorio ingresar nombre y apellido"); 
        }
    }    
}

let continuarProceso = true;
let pedirUsuario = true;
let nombreCompleto;

while (continuarProceso){
    if(pedirUsuario){
        nombreCompleto = adquirirNombre();
    }
    

    let nota1 = parseInt(prompt("Ingrese nota de primer examen: "));
    let nota2 = parseInt(prompt("Ingrese nota de segundo examen: "));
    
    const promedio = (a, b) => (a + b)/2;
    
    let resultado = promedio(nota1, nota2);
    
    alert(nombreCompleto + ", su promedio de notas es de " + resultado);
    
    if(resultado >= 8){
        alert(nombreCompleto + ", es un alumno sobresaliente");
    }
    else if (resultado >= 4 && resultado <= 7) {
        alert(nombreCompleto + ", es un alumne regular");
    }
    else{
        alert(nombreCompleto + ", tiene que volver al primario");
    }

    let respuesta = prompt("quiere continuar con el usuario actual? Si o no:");
    if (respuesta.toLowerCase() === "no"){
        pedirUsuario = true;
    }else if(respuesta.toLowerCase() === "si"){
        pedirUsuario = false;
    }else {
        continuarProceso = false;
    }
}