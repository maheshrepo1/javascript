import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import axios from "axios";
import { useParams } from 'react-router';
import Checkbox from "../../components/checkbox/checkbox";

const ArticleRow = (props)=>{

        let item  = props.data;
        let index  = props.index;
   return(
           <> 
            <tr key={index}>  
            <td key={index+1} > { item.id}  </td>
            <td key={index+1} > { <Checkbox id={item.id}  handleDelete ={props.handleDelete}  handlerOnChange ={props.handlerOnChange}    /> }  </td>
            <td key={index+2} >{item.title}</td>
            <td key={index+3} > {<button name='' onClick={() => props.handleDelete(item.id)}> Delete </button> }</td>
            </tr>
           </>
   )

}

export default ArticleRow;