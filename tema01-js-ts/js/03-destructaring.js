const producto ={
    id: 101,
    nombre: "Laptop",
    precio: 2500,
    detalles: {
        marca: "Dell",
        garantia: "1 año"
    }
}

const {nombre, precio, detalles:{marca}} = producto;

console.log(`Producto: ${nombre}, Precio: $${precio}, Marca: ${marca}`);