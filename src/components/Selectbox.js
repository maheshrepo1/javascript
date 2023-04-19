import React from "react";
const SelectBox = ({key,name,options,is_selected_val,handleOnchange})=>{
  console.log('options', options);
 return(<>
       <select name={name} key={key} onChange={handleOnchange}>
       {options && options.map((obj)=>{
         return ( is_selected_val== obj.id ?   <option key={obj.id} value={obj.id} selected>{obj.name}</option>  :
         <option value={obj.id} key={obj.id}>{obj.name}</option>)
        })
       }
       </select></>)
}

export default SelectBox;
