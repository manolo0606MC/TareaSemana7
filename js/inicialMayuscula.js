const oracion = "quezadillas   de   jutiapa";

const capitalize = cambio => {
    let newCambio = cambio.split("  ");
    let resultado = [ ];
    newCambio.forEach(palabras => {
        let primerLetra = palabras.charAt(0).toUpperCase();
        let restoOracion = palabras.slice(1, palabras.length);
        resultado.push(primerLetra + restoOracion);
    });
    console.log(resultado.join(" "));


    let html = "";
resultado.forEach(let => {
html += `${let}`
});
const Contenedor = document.querySelector(`#Mayuscula`);
Contenedor.innerHTML = html;

};

capitalize(oracion);

