import React from 'react';
import { Fragment } from 'react';

const Producto = ({producto,productos,changuito,agregarProducto}) => {
  
  const {id,articulo,precio} = producto;
  //funcion que agrega productos al carrito
  const seleccionarProducto = (id) =>{
      const producto = productos.filter(
        producto => producto.id === id
        )[0];
        agregarProducto([...changuito,producto]); 
      //console.log(producto);
        console.log(changuito);
    }  
  
  const eliminarProducto = (id) =>{
    const productos = changuito.filter( producto => producto.id != id);
    agregarProducto(productos);
  }  
  

  return (
        <Fragment>
          <div>
            <h3>{articulo} - ${precio}</h3>
            {

              productos
              ?
                          <button
                            type = "button"
                            onClick = { () => seleccionarProducto(id)}
                          >
                          comprar</button>
              :
                          <button
                          type = "button"
                          onClick = { () => eliminarProducto(id)}
                          >
                          eliminar</button>


            }
            
           
          </div>
        </Fragment>
        

      );
}
 
export default Producto;