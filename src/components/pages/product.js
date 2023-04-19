import React from "react";
import {useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import {productList} from "../../redux/action/product";


const Prolist = ()=>{

   const state =  useSelector((state)=>{return state});
   console.log("=========>  call again ",state);
   let dis =  useDispatch();
   const[redux_product_val, set_redux_product_val] = useState();

   

   let add_product= (e)=>{

      let product_detail = {
         title : 'Seltos',
         description: 'Kia Seltos',
         price : 400,
         tex: 12
      }
      
      dis(productList(product_detail));
     // set_redux_product_val(state);

   }

return (<>
    <h1>Product Page ...  {JSON.stringify(state.productList.blogdata)}</h1>
   <button name='btn' data='product list' onClick={add_product} > Product List  </button>

</>
)

}

export default Prolist;