import React from "react";
import {useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import {userData,getuserData} from "../../redux/action/product";

const Ulist = ()=>{

  let ds = useDispatch();
  const state =  useSelector((state)=>{return state});

  let get_userlist = (e)=>{
  let user_detail = {
    
   }
   ds(getuserData(user_detail));

 }
  
return (<>
   <h1>Product Page ... {JSON.stringify(state.productList.productdata)} </h1>
   <button name='btn'  data='get user list' onClick={get_userlist} > Get User  List  </button>
    </>
)

}

export default Ulist;