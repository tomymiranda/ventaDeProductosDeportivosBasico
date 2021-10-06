import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Producto from "./components/Producto";

function App() {
  
  const [productos,guardarProductos] = useState([

    {id:1, articulo:"Botines Nike Mercurial Vapor",precio:15000},
    {id:2, articulo:"Botines Adidas F50",precio:16000},
    {id:3, articulo:"Camiseta Seleccion Argentina 2021",precio:8999},
    {id:4, articulo:"Camiseta Real Madrid 19/20",precio:5000}
    ]);

  return (
    <div >
      <Header />
      
      <h1>Venta de Articulos deportivos online "es gatorade"</h1>
      {productos.map( producto =>(

        <Producto
          producto = {producto}
        />


      )
      )}
      <Footer 
        anio = {2021}
      />
    </div>
    
  );
}

export default App;