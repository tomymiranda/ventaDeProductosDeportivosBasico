import React from 'react';
import { Fragment } from 'react';
import "./Changuito.css";
import Producto from './Producto';

const Changuito = ({changuito}) =>{
    return (

        <Fragment>
            <div className = "changuito">
                <h3>Changuito de compras</h3>
                {

                    changuito.map(
                        producto => (
                            <Producto
                                key = {producto.id}
                                producto = {producto}
                            />
                        )

                    )

                }
            </div>
        </Fragment>
    )
}

export default Changuito;