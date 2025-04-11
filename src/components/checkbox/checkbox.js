import React, { useState } from 'react';

const Checkbox = (props) => {

 let key_chk =  props.key;
 let rid = props.id;


  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="chk"
          key={key_chk}
          onChange={() => props.handlerOnChange(rid)}
        />
       
      </label>
   
     
    </div>
  );
};

export default Checkbox;
