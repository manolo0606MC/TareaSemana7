var vector1 = [2, 4, 6];
var elevado1 = vector1.map(num => {
    return Math.pow(num, 2);
});



var vector2 = [-3, 2, -8, 12, 5];
var elevado2 = vector2.map(num => {
    if (num === 5) {
        return num
    } else if (num > 0) {
        return Math.pow(num, 2);
    } else if (num === (-8)) {
        return Math.pow(num, 2);
    } else if (num < 0) {
        return num;
    }
});

var vector3 = [1, 2, 3, 4, 5];
var elevado3 = vector3.map(num => {
    if (num <= 2) {
        return Math.pow(num, 2);
    } else if (num <= 4 && num != 3) {
        return Math.pow(num, 2);
    }
    return num;

});
console.log(vector1);
console.log(elevado1);
console.log(vector2);
console.log(elevado2);
console.log(vector3);
console.log(elevado3);

let html ='';
vector1.forEach(prom => {
   
    html += `<ul > <li>${prom}</li></ul>`
}
    );
const Contenedor1 = document.querySelector(`#num1`);
Contenedor1.innerHTML = html;


let html1 ='';
elevado1.forEach(prom => {
   
    html1 += `<ul > <li>${prom}</li></ul>`
}
    );
const Contenedor11 = document.querySelector(`#mod1`);
Contenedor11.innerHTML = html1;



let html2 ='';
vector2.forEach(prom => {
   
    html2 += `<ul > <li>${prom}</li></ul>`
}
    );
const Contenedor2 = document.querySelector(`#num2`);
Contenedor2.innerHTML = html2;


let html22 ='';
elevado2.forEach(prom => {
   
    html22 += `<ul > <li>${prom}</li></ul>`
}
    );
const Contenedor22 = document.querySelector(`#mod2`);
Contenedor22.innerHTML = html22;




let html3 ='';
vector3.forEach(prom => {
   
    html3 += `<ul > <li>${prom}</li></ul>`
}
    );
const Contenedor3 = document.querySelector(`#num3`);
Contenedor3.innerHTML = html3;


let html33 ='';
elevado3.forEach(prom => {
   
    html33 += `<ul > <li>${prom}</li></ul>`
}
    );
const Contenedor33 = document.querySelector(`#mod3`);
Contenedor33.innerHTML = html33;


