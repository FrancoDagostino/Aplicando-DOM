/* Creacion de la clase Productos y  Creacion de Productos */
class Productos{
    constructor (id,nombre,precio,stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
        this.stock = stock
    }
    
    sumaIva(){
        this.precio = this.precio * 1.21;
    }

    /* Se comenta el codigo hasta poder implementarlo */

//      productoElegidos(cantArticulo,productos,listaProductosMostrar){

//         let compra = [];
//         for (let i = 0; i < cantArticulo; i++) {
    
//             let productoId = parseInt(prompt(listaProductosMostrar + "\n" + productos.map(p => `${p.id}:  ${p.nombre}  ${p.precio} \n`)));
//             compra[i] = productos.find(p => p.id === productoId);
//             productos[productoId - 1].vendido = true;
//             if(productos[productoId - 1].stock === 0) return alert("el producto elegido no tiene mas stock")
//             else productos[productoId - 1].stock -= 1;
//         }
//         return compra;
//     }

// }

// class ListaCompra{
//     constructor(id,lista,metodopago,descuento){
//         this.id = id;
//         this.lista = lista;
//         this.metodopago = metodopago;
//         this.descuento = descuento;
//     }
// }
}



const productos =[];
const listacompras = [];

productos.push(new Productos(1,"Microprocesador",50000,10));
productos.push(new Productos(2,"RAM",6000,5));
productos.push(new Productos(3,"Disco Duro",5000,6));
productos.push(new Productos(4,"Placa de Video",80000,3));
productos.push(new Productos(5,"Fuente", 17000,4));

console.log(productos);

let contenedorMain = document.getElementById("contenedor");
let padre = document.getElementById("button");
let button = document.createElement("div");

let carrito = [];
for(const producto of productos) producto.sumaIva();


productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('contenedor');
    div.innerHTML += `<h2>${producto.nombre}</h2>
    <div id="prueba" class="mostrar">
    <button id="agregar${producto.id}">Agregar</button>
    </div>
 </div>
 <div>`;

 contenedorMain.appendChild(div);
    const boton = document.getElementById(`agregar${producto.id}`);
    console.log(boton);


        boton.addEventListener('click',()=>{
        agregarCarrito(producto.id);
    }); 
})



let carritoHTML = document.getElementById("carrito");

let carritoInv = document.querySelector(".carritoInv")

console.log(carritoInv)
const eliminarCarrito= (productoId)=>{
    const item = carrito.find(c => c.id === productoId);
    let indice = carrito.indexOf(item)
    carrito.splice(indice,1)
    actualizaCarrito();
}

const agregarCarrito = (productoId) =>{
    const item = productos.find(p => p.id === productoId)
    console.log(item);
    carrito.push(item);
    actualizaCarrito();
    carritoInv.classList.remove('carritoInv')
    console.log(carritoInv)
}



const actualizaCarrito = () =>{
    carritoHTML.innerHTML = "";
    carrito.forEach(prod => {
        const h4 = document.createElement('h4');
        h4.innerHTML+=`
        <div class="carritoProducto">
        <p>${prod.nombre}</p>
        <p>${prod.precio}</p>
        <button onclick="eliminarCarrito(${prod.id})">Eliminar</button>
        </div>         `;
        carritoHTML.appendChild(h4);
    })
}





