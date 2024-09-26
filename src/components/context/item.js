import React, { useContext } from "react";
import { CartContext } from "../../context/Cart";

const Item = (props) => {
  const cart = useContext(CartContext);
    return (
           <div className="item-card">
             <h4> Iteam Name: {props.name} </h4>
            <p>Price: ${props.price} </p>
            <button onClick={()=> cart.setItems()}>Add to Cart Context</button>
           </div>
    )
}

export default Item;