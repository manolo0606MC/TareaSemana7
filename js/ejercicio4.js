/*
function obtenerMediana (numero){
    if (!Array.isArray(numero)){
        throw TypeError("El argumento debe ser un arreglo ");
    }

    if (!numero.every(i => typeof i === 'number')){
        throw TypeError("Todos los elementos del arreglo deben sr numeros");
    }
    numero = numero.sort((x,y) => x - y);
    let mitad = Math.floor(numero.length / 2);

    return numero.length % 2 == 1 ? numero[mitad]: (numero[mitad -1]+ numero[mitad + 2]) /2;

try {
    console.log(obtenerMediana([10, 20, 30, 20, 30, 40, 60]));
} catch(i){
    console.log(`Error: ${i.message}`);
}
let html = '';
obtenerMediana.forEach(element => {
    html += `<li>${element}</li>`
});
const PromedioContenedor = document.querySelector(`#Promedio`);
//PromedioContenedor.innerHTML = i;
PromedioContenedor.innerHTML = html;
*/
let num = [10, 20, 30, 20, 30, 40, 60];
let sum = num.reduce((previous, current) => current += previous);
let ressultado = sum / num.length;

console.log(num);
console.log(("El promedio de este arreglo es:")+ressultado);

let html ='';
num.forEach(prod => {
    html += `<li>${prod}</li>`
}
    );
const Contenedor = document.querySelector(`#Promedio`);
Contenedor.innerHTML = html;
const Contenedor2 = document.querySelector(`#Resultado`);
Contenedor2.innerHTML = ressultado;