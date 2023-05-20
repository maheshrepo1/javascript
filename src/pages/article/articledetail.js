import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import axios from "axios";
import { useParams } from 'react-router';

const ArticleDetail = ({passdata,onChildData})=>{
    
   // passstate({name:"Usha Malik.."});
   //const { id } = useParams();

   //passfun({name:"Ramesh Kumar"})

   const data = "Hello from ChildComponent!    hhhhh";
   onChildData(data);

  
   return(
           <> 
            <h3>Child Component</h3>
           <button >Send Data to Parent</button>
           </>
   )

}

export default ArticleDetail;