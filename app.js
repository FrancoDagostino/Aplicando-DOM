/* Creacion de la clase Productos y  Creacion de Productos */
class Productos{
    constructor (id,nombre,precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;
    }
    
    sumaIva(){
        this.precio = this.precio * 1.21;
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
const listacompras = []

productos.push(new Productos(1,"Microprocesador",50000));
productos.push(new Productos(2,"RAM",6000));
productos.push(new Productos(3,"Disco Duro",5000));
productos.push(new Productos(4,"Placa de Video",80000));
productos.push(new Productos(5,"Fuente", 17000));

for(const producto of productos)
producto.sumaIva();

const realizarCompra = () =>{

    let cantArticulo = parseInt(prompt("Seleccione la cantidad de artículos a adquirir (Máximo de artículos por compra 10)"));
    let listaProductosMostrar = `Eliga componente de pc a adquirir seleccionando su número: \n (maximo productos a elegir ${cantArticulo}) \n`;

    const productoElegidos = (cantArticulo,productos) =>{
        let compra = [];
        for (let i = 0; i < cantArticulo; i++) {
    
            let productoId = parseInt(prompt(listaProductosMostrar + "\n" + productos.map(p => `${p.id}:  ${p.nombre}  ${p.precio} \n`)))
            compra[i] = productos.find(p => p.id === productoId);
            productos[productoId - 1].vendido = true;
        }
        return compra
    }
    
    let listado = "";
    let compra = productoElegidos(cantArticulo,productos)
    listacompras.push(new ListaCompra(Math.round(Math.random() * 10000),compra,"efectivo",false));
    let total = compra.reduce((acc,c) => acc + c.precio,0);
     alert(`${ listado +="Los productos comprados fueron: \n" + compra.map(m => `${m.nombre} : ${m.precio} \n` ).toString().replace(',','')} 
     \n El total a pagar es: ${total}`);
     return listacompras;
}

let comprafinalizada = realizarCompra();


