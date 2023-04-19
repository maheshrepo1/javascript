import React, { useEffect } from "react";
import {useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import {getpartData} from "../../redux/action/parts";

const Partlist = ()=>{
 
  const[saga_content,set_saga_content] = useState();
  const[saga_updated,set_saga] = useState();
  const [count, setCount] = useState(0);
  
   let ds = useDispatch();
  const state =  useSelector((state)=>{return state});

  useEffect(() => {
    
   
    // Update the document title using the browser API
    //document.title = `You clicked ${count} times`;
  },[count]);

  function calculateVolume(length) {
    return  (breadth) => {
        return  (height) => {
            return length + breadth + height;
        }
    }
 }
 
 let part_list = (e)=>{
    set_saga(1);
    set_saga_content(calculateVolume(4)(5)(6));
    ds(getpartData());
  
   // console.log('saga_content',state.partList.set_part_data);
  }  
  return (<>
           <h1> Part List  ... {JSON.stringify(state.partList.set_part_data)} </h1>
            <h1> Calculate  Volume  ... {JSON.stringify(saga_content)} </h1>
             <button name='btn' data='product list' onClick={part_list} > Part  List  </button>
             <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
              Click me
            </button>
          </>
    )
}
export default Partlist;