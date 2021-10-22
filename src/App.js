import { useState } from "react";
import Changuito from "./components/Changuito";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Producto from "./components/Producto";
import 'bootstrap/dist/css/bootstrap.min.css';
{/*import {BrouserRouter as Router,Switch,Route} from 'react-router-dom';*/}

function App() {
  
  const [productos,guardarProductos] = useState([

    {id:1, articulo:"Botines Nike Mercurial Vapor",precio:15000},
    {id:2, articulo:"Botines Adidas F50",precio:16000},
    {id:3, articulo:"Camiseta Seleccion Argentina 2021",precio:8999},
    {id:4, articulo:"Camiseta Real Madrid 19/20",precio:5000},
    {id:5, articulo:"Camiseta Manchester United 19/20",precio:5000}
    ]);
  
  const [changuito,agregarProducto] = useState([])


  return (
    <div>
      <Header />
      <div className = "container">
      <h1>Venta de Articulos deportivos "es gatorade"</h1>
      {productos.map( producto =>(
        <Producto
          key = {producto.id}
          producto = {producto}
          productos = {productos}
          changuito = {changuito}
          agregarProducto = {agregarProducto}
        />
      )
      )}
      </div>
      <div>
      <Changuito
        changuito = {changuito}
        agregarProducto = {agregarProducto}
        />
      </div>
      <div>
      <Footer/>
      </div>
      
    </div>
    
  );
}

export default App;
