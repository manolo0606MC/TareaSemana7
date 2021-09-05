const toda_la_banda = ["Diana", "Monica", "Maria", "Breny"];

console.log(toda_la_banda);

let html ='';
toda_la_banda.forEach(prod => {
   
    html += `<li>${prod}</li>`
});

const nomContenedor = document.querySelector(`#nombres`);
nomContenedor.innerHTML = html;

//duplicando el arrar con spread operation
let duplicado =[...toda_la_banda];
duplicado.splice(duplicado.indexOf("Monica"),1);
console.log(duplicado);

let html2 ='';
duplicado.forEach(prod2 => {
   
    html2 += `<li>${prod2}</li>`
});

const Contenedor2 = document.querySelector(`#duplicado`);
Contenedor2.innerHTML = html2;

//romiviendo a breny
duplicado.splice(duplicado.indexOf("Breny"),);
console.log(duplicado);
let html3 ='';
duplicado.forEach(prod3 => {
   
    html3 += `<li>${prod3}</li>`
});

const Contenedor3 = document.querySelector(`#remover`);
Contenedor3.innerHTML = html3;

//agregando a jose al principio del nuevo arreglo
duplicado.unshift("Jose");
console.log(duplicado);

let html4 ='';
duplicado.forEach(prod4 => {
   
    html4 += `<li>${prod4}</li>`
});

const Contenedor4 = document.querySelector(`#alprincipio`);
Contenedor4.innerHTML = html4;

//agregar mi nombre al final del nuevo arreglo
duplicado.push("Manolo");
console.log(duplicado);

let html5 ='';
duplicado.forEach(prod5 => {
   
    html5 += `<li>${prod5}</li>`
});

const Contenedor5 = document.querySelector(`#alfinal`);
Contenedor5.innerHTML = html5;



//obtener el item de Diana
const item = duplicado.find(nombre => nombre == "Diana");
console.log(item);
/*
let html6 ='';
item.array.forEach(element => {
    
});(prod6 => {
   
    html6 += `<li>${prod6}</li>`
});

const Contenedor6 = document.querySelector(`#itenDiana`);
Contenedor6.innerHTML = html6;
*/

// Haga otra copia del arreglo original usando slice, excluya a Diana y Breny
let dupslice = toda_la_banda.slice(1,3);
console.log(dupslice);

let html7 ='';
dupslice.forEach(prod7 => {
   
    html7 += `<li>${prod7}</li>`
});

const Contenedor7 = document.querySelector(`#ultimacopia`);
Contenedor7.innerHTML = html7;


