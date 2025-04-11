import React, { useEffect, useState } from "react";



const Sproduct = ()=>{

    const[garr,sarr] = useState([]);

    let text = "Hello world, welcome to the universe.";
    let result = text.includes("w");
    const names = ['James', 'John', 'Paul', 'Ringo', 'George'];  
    const names2 = ['James', 'John', 'Paul', 'Ringo', 'George']; 
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let textd = fruits.toString();
    
    //sarr(names2.filter(name => name.includes('J')));
    
    /*let narray =  names.filter((val) =>{

      if(val.includes('J'))
      {
         return val;
      }
        
      var a = {
"name":"varun",
"age":29,
"b":function(){
console.log(this);
}




    })*/ 

   // sarr(narray);
    
    return (
      
      <div>  {garr}
        {names.filter(name => name.includes('J')).map(filteredName => (
          <li>
            {filteredName}
          </li>
        ))}
      </div>
    )


}

export default Sproduct;

