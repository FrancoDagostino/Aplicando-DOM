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


     productoElegidos(cantArticulo,productos,listaProductosMostrar){

        let compra = [];
        for (let i = 0; i < cantArticulo; i++) {
    
            let productoId = parseInt(prompt(listaProductosMostrar + "\n" + productos.map(p => `${p.id}:  ${p.nombre}  ${p.precio} \n`)));
            compra[i] = productos.find(p => p.id === productoId);
            productos[productoId - 1].vendido = true;
            if(productos[productoId - 1].stock === 0) return alert("el producto elegido no tiene mas stock")
            else productos[productoId - 1].stock -= 1;
        }
        return compra;
    }

}

class ListaCompra{
    constructor(id,lista,metodopago,descuento){
        this.id = id;
        this.lista = lista;
        this.metodopago = metodopago;
        this.descuento = descuento;
    }
}

const productos =[];
const listacompras = [];

productos.push(new Productos(1,"Microprocesador",50000,10));
productos.push(new Productos(2,"RAM",6000,5));
productos.push(new Productos(3,"Disco Duro",5000,6));
productos.push(new Productos(4,"Placa de Video",80000,3));
productos.push(new Productos(5,"Fuente", 17000,4));

for(const producto of productos) producto.sumaIva();


const realizarCompra = () =>{

    let p = new Productos();
    let cantArticulo = parseInt(prompt("Seleccione la cantidad de artículos a adquirir (Máximo de artículos por compra 10)"));
    
    let listaProductosMostrar = `Eliga componente de pc a adquirir seleccionando su número: \n (maximo productos a elegir ${cantArticulo}) \n`;

    if(cantArticulo > 10) return alert("La cantidad seleccionada supera el limite de 10 articulos")

    let compra = p.productoElegidos(cantArticulo,productos,listaProductosMostrar);

    if (compra != undefined){

        listacompras.push(new ListaCompra(Math.round(Math.random() * 10000),compra,"efectivo",false));
        let total = compra.reduce((acc,c) => acc + c.precio,0);
    
        const listadeProductos = ()=>{  
            let lista = "Los productos comprados fueron: \n";
            compra.forEach(c => {
                const {nombre,precio} = c;
                lista += ` ${nombre}: ${precio} \n`;
            })
            return lista;
        }
        
        alert(listadeProductos() + "\n" + "El total a pagar es: " + total);
    
         return listacompras;
    }else{
        realizarCompra();
    }
}

let comprafinalizada = realizarCompra();

console.log(comprafinalizada);


