import React from "react";

const Item = (props) => {
    return (
           <div className="item-card">
             <h4> Iteam Name: {props.name} </h4>
            <p>Price: ${props.price} </p>
            <button>Add to Cart Context</button>
           </div>
    )
}

export default Item;