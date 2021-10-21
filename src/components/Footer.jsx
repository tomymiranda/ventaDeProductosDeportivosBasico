import React from 'react';


const Footer = ({anio}) => {
    //aca se debe tirar javaScript
    //entre {} se ponen constantes q quiero devolver o q figuren
    
    return ( 
        <div>
                
                <footer  className = "text-white py-4 bg-secondary">
                    <div className = "container">
                        <nav className = "row" >
                            <ul className = "col-12 col-md-3"></ul>

                        </nav>
                    </div>
                <h4>El año es: {anio} </h4>

                </footer>
                


        </div>
        
     );
}
 
export default Footer;