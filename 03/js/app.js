const botonSuma = document.getElementById("botonSuma");
const botonResta = document.getElementById("botonResta");
const botonDividir = document.getElementById("botonDividir");
const botonProducto = document.getElementById("botonProducto");

const resultado = document.getElementById("resultado");

const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");

let result;

const sumarNumeros = (a,b) => {
    //console.log( parseInt(a) + parseInt(b));
    return parseInt(a) + parseInt(b);
}
const restarNumeros = (a,b) => {
    
    return parseInt(a) - parseInt(b);
}

function dividirNumeros (a,b) { 
    if (b === '0') {
        // resultado.innerHTML  = "no se puede dividir entre 0";
        return;
    }
    return parseInt(a) / parseInt(b);
}
const multiplicarNumeros = (a,b) => parseInt(a) * parseInt(b); 

botonSuma.addEventListener('click' , () => {
    let suma = sumarNumeros( numero1.value , numero2.value);
    if (suma >= 0){
        resultado.style.color="yellow"
    } else {
        resultado.style.color="red"
    }
    
    resultado.innerHTML = `${suma}` });

botonResta.addEventListener('click' , () => { 
    let resta = restarNumeros( numero1.value, numero2.value);
    if (resta >=0) {
        resultado.style.color="yellow"
    }else {
        resultado.style.color="red"
    }
    
    resultado.innerHTML = `${resta}` });

botonDividir.addEventListener("click", () => {
    let dividir = dividirNumeros(numero1.value , numero2.value);
    
    resultado.style.color = (dividir >=0) ? "yellow" : "red";
    
    resultado.innerHTML = `${!dividir ? 'no se puede dividir entre 0' : dividir}`;
})

botonProducto.addEventListener("click", () => {
    let multiplicar = multiplicarNumeros(numero1.value, numero2.value);
    
    resultado.style.color = (multiplicar >= 0) ? "yellow" : "red";
    
    resultado.innerHTML = `${multiplicar}` 
});


