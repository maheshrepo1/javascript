import React, { useEffect, useState } from "react";
import axios from "axios";


let Articletest = ()=>{

  const[data,setdata] = useState();
  useEffect(()=>{

      async function get_data()
      {
         let data_online = await axios.get('https://jsonplaceholder.typicode.com/posts');
         console.log()
         setdata(data_online.data);
      }
      get_data();


  },[]);


  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {data && data.map((item, index) => (<>
         <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
           </tr>
          </>))}
      </tbody>
    </table>
  )
}


export default Articletest;