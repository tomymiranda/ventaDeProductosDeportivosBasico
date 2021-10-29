import React from 'react';
import { Fragment } from 'react';

const Producto = ({producto,productos,changuito,agregarProducto}) => {
  
  const {id,articulo,precio,cantidad} = producto;
  //funcion que agrega productos al carrito
  const seleccionarProducto = (id) =>{ 
    const productoAAgregar = productos.filter(
        producto => producto.id === id
        )[0];
    const productoEnElChanguito = changuito.filter( producto => producto.id === id)[0];
   
    if(productoEnElChanguito != null ){
      productoEnElChanguito.cantidad = productoEnElChanguito.cantidad + 1; 
    }
    else{
      agregarProducto([...changuito,productoAAgregar]);   
    }
    
     
    //console.log(producto);
    console.log(changuito);
    }  
  
  const eliminarProducto = (id) =>{
    const productoQueQuieroEliminarEnElChanguito = changuito.filter( producto => producto.id === id)[0];
    if(productoQueQuieroEliminarEnElChanguito.cantidad > 0){
        productoQueQuieroEliminarEnElChanguito.cantidad = productoQueQuieroEliminarEnElChanguito.cantidad - 1;
      }
    else{
      const productosSinElEliminado = changuito.filter( producto => producto.id != id);
      agregarProducto(productosSinElEliminado);
    }
       
  } 

  return (
        <Fragment>
          <div>
            <h3>{articulo} - ${precio} - {cantidad}</h3>
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