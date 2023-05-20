import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import axios from "axios";
import { useParams } from 'react-router';

const Fproductdetail = ()=>{

   const[data , sdata ] = useState();
   const { id } = useParams();
 


   return(
           <> {id}

           
            
                This is product detail page
           </>
   )

}

export default Fproductdetail;