import React, { useEffect,useContext } from "react";
import Three from "./Three";
import {Contextu} from './Callthree';

let Two = (props)=>{
  const usecon = useContext(Contextu);
 // throw new Error("error !!");
     return (
           <>
             <div style={{backgroundColor:"green"}} > Two Component {JSON.stringify(usecon)} </div>
           </>
     )

}


export default Two; 