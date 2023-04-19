import React, { useEffect,useContext, useState } from "react";
import {Contextu} from './Callthree';

let HOC = ()=>{
   
    return(
        <>
          <HOCRed cont={Counter} /> 
          <HOCBlue cont={Counter} /> 
          <HOCGreen cont={Counter} /> 
        </>
    )

}

function HOCRed(props)
{
    return (<><h2 style={{backgroundColor:'red',width:"100px"}} ><props.cont/></h2></>)
}

function HOCGreen(props)
{
    return (<><h2 style={{backgroundColor:'green',width:"100px"}} ><props.cont/></h2></>)
}

function HOCBlue(props)
{
  return (<><h2 style={{backgroundColor:'blue',width:"100px"}} ><props.cont/></h2></>)
}


let Counter = ()=>{
  const[count,set_count] = useState(0);
  return (<><div> HOC HIGH ORDER FUNCTION {count} </div>
   <button onClick={()=>{set_count(count+1)}}>Update</button>
   </>)
}

export default HOC;
