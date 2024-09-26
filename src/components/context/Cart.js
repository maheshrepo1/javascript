import React from "react";


export const functionOne = () => {
    return "This is function one";
};

// Named export function 2
export const functionTwo = () => {
    return "This is function two";
};


const Cart = ()=>{
        return (

              <div className="cart">
               <li>MacBookPro - $10000 </li>
               <h5>Total Bill:  </h5>
              </div>

        )

}

export default Cart;