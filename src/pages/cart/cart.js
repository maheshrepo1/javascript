import React from "react";
import { useSelector} from "react-redux";

const Cart = ()=>{

   const result = useSelector((state)=>state.cartData);
   return (<>
                <table cellPadding="10px" border='1px'><tr>
               <td>Name</td>  
               <td>Color</td>
               <td>Price</td>
               <td>Brand</td>
               <td>Category</td>
               </tr>
               {result.map((item)=>
                     <tr>
                     <td>{item.name}</td>  
                     <td>{item.color}</td>  
                     <td>{item.price}</td> 
                     <td>{item.brand}</td> 
                     </tr>
               )}

               </table>
   </>)


}

export default Cart;

