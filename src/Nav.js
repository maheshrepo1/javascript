import React from "react";
import {Link} from 'react-router-dom';

let Nav = ()=> {

    return (
        <div>
            <ul>
              <li> <Link to="pcrud"> Product Crud  </Link> </li>
               <li> <Link to="product"> Product </Link> </li>
               <li> <Link to="plist"> Product List </Link> </li>
               <li> <Link to="ulist"> User List </Link> </li>
               <li> <Link to="partlist"> Part List </Link> </li>
               <li> <Link to="callthree">Three List </Link> </li>
             </ul>
        </div>
    )


}

export default Nav;