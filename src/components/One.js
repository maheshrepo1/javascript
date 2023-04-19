import React, { useEffect,useContext } from "react";
import {Contextu} from './Callthree';

let One = (props)=>{

   const usecon = useContext(Contextu);
    let sr = {name:"mahesh" , company:"Photon Interactive " ,address:"Delhi aaj"}
    return( <>
     <p> Again one component  This is first Component {JSON.stringify(usecon)}  </p>
      </>
    )

}

export default One;
