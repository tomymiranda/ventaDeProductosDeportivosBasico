import React from 'react';


const Footer = () => {
    //aca se debe tirar javaScript
    //entre {} se ponen constantes q quiero devolver o q figuren
    
    return ( 
        <div>
                
                <footer  className = "text-white py-4 bg-secondary">
                    <div className = "container">
                        <nav className = "row" >
                            <ul className = "col-12 col-md-3 list-unstyled">
                                <li className = " font-weight-bold mb-2 " > Dirección</li>
                                <li className = "  mb-2 " >Sucursal 1: Vergara 123</li>
                                <li className = "  mb-2 " >Sucursal 2: Jauretche 598</li>
                                <li className = "  mb-2 " >Sucursal 3: Origone 501</li>
                            </ul>
                            <ul className = "col-12 col-md-3 list-unstyled">
                                <li className = " font-weight-bold mb-2 " > Deportes</li>
                                <li className = "  mb-2 " >Futbol</li>
                                <li className = "  mb-2 " >Running</li>
                                <li className = "  mb-2 " >Basquet</li>
                                <li className = "  mb-2 " >Rugby</li>
                            </ul>
                            <ul className = "col-12 col-md-3 list-unstyled">
                                <li className = " font-weight-bold mb-2 " > Novedades</li>
                                <li className = "  mb-2 " >Black Friday</li>
                                <li className = "  mb-2 " >Cyber Monday</li>
                                <li className = "  mb-2 " >Hot Sale</li>
                                <li className = "  mb-2 " >Rebajas</li>
                            </ul>
                        </nav>
                    </div>

                </footer>
                


        </div>
        
     );
}
 
export default Footer;