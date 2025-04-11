import React, { useEffect, useState } from "react";

const Mproductrow = (props)=>{
    
    let itemrow =  props.items;
   return (<> 
            <tr><td> {itemrow.name} </td><td> {itemrow.color} </td> <td> {itemrow.price} </td> </tr>
   </>)

}

export default Mproductrow;

