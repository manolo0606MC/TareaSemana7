 const productos = [{
         categoria: "Mariscos", 
         precio: 70,

     },
     {
         categoria: "Carnes", 
         precio: 60,

     },
     {
         categoria: "Bebidas", 
         precio: 27,

     },
     {
         categoria: "Golosinas", 
         precio: 20,

     }
 ];


 let pre = productos.filter((prod) => {
     return prod.categoria == "Mariscos";
     return prod.categoria == "Carnes";
     return prod.categoria == "Bebidas";
     return prod.categoria == "Golosinas";
 });


 console.log(pre);
 const category = productos.find((prod) => {
     return prod.categoria == "Mariscos";
     return prod.categoria == "Carnes";
     return prod.categoria == "Bebidas";
     return prod.categoria == "Golosinas";
 });


 let resultado = productos.reduce((precioTotal, prod) => {
     if (prod.categoria === "Mariscos")
         return precioTotal + prod.precio;
     if (prod.categoria === "Carnes")
         return precioTotal + prod.precio;
     if (prod.categoria === "Bebidas")
         return precioTotal + prod.precio;
     if (prod.categoria === "Golosinas")
         return 0;
     else
         return precioTotal;
 }, 0);


 console.log(`El total de la categoria ${category.categoria} es: ${resultado}`);
 console.log(productos);

 let html ='';
productos.forEach(prod => {
   
    html += `<li>${prod}</li>`
});

const contenedor = document.querySelector(`#Categorias`);
contenedor.innerHTML = html;