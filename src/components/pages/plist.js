import React from "react";
import {useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import {shortbloglist} from "../../redux/action/product";

const Plist = ()=>{

   let ds = useDispatch();
   const state =  useSelector((state)=>{return state});
   console.log("=========>  call plist again ",state);

   let add_bloglist = (e)=>{

    let blog_detail = {
       title : 'News !!!',
       description: 'Kia Seltos 2020 Launched  !!!',
       price : 400000,
       tex: 12000
    }

    ds(shortbloglist(blog_detail));
   // set_redux_product_val(state);

 }
  
return (<>
    <h1>Product Page ... {JSON.stringify(state.productList.productdata)} </h1>
   <button name='btn' data='product list' onClick={add_bloglist} > Blog  List  </button>

</>
)

}

export default Plist;