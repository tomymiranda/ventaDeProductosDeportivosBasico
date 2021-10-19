import React from 'react';
import { Fragment } from 'react';
import "./Changuito.css";
import Producto from './Producto';

const Changuito = ({changuito, agregarProducto}) =>{
    return (

        <Fragment>
            <div className = "changuito">
                <h3>Changuito de compras</h3>
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