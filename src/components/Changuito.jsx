import React from 'react';
import { Fragment } from 'react';
import "./Changuito.css";
import Producto from './Producto';
import 'bootstrap/dist/css/bootstrap.min.css';

const Changuito = ({changuito, agregarProducto}) =>{
    return (

        <Fragment>
            <div className = "changuito">
                <h5>🛒</h5>
                {

                    changuito.map(
                        (producto,idx) => (
                            <Producto
                                key = {idx}
                                producto = {producto}
                                changuito = {changuito}
                                agregarProducto = {agregarProducto}
                            />
                        )

                    )

                }
            </div>
        </Fragment>
    )
}

export default Changuito;