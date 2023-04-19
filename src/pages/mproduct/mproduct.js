import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import axios from "axios";
import Mproductrow from "./mproduct_row";
import ModalDialog from '../../components/ModalDialog/ModalDialog'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


const Mproduct = ()=>{

   const[getData,setData]  = useState();
   const[getSearch,setSearch]  = useState();
     
    useEffect(()=>{
       let  url ="http://localhost:3010/fproduct";
       let params = {
            name:"mahesh",
            age:42,
       };
       let custom_header ="multipart/formdata";
       let all_data=  axios({
            method: 'get',
            url: url,
            headers:  {
                  'Content-Type': custom_header,
                  token: "TRED3445safiowieuioru49990434",
                },
            data: params,
          }).catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }
            console.log(error.config);
          });

          console.log("all_data",all_data);

          all_data.then((response) => {
            setData(response.data);
          });

          

    },[])

    const isLoggedIn = 12;
    const showElement = 123;
  
    useEffect(()=>{
   
      if(getData && getSearch)
      {
        const filteredHomes =  getData.filter(obj => obj.name.includes(getSearch));
        console.log(filteredHomes);
        setData(filteredHomes);
      }

    },[getSearch])
    
   return(
           <>  
             {isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>}
             {showElement && <p>Element is shown</p>  
             }
             <></>
             <ModalDialog />
             <table border='2' cellSpacing="2" cellPadding="3">
             <tr><td colSpan='3'> <input type="text" style={{width:"250px"}} name='fsearch' onChange={(event)=>{
                  setSearch(event.target.value);
             } } />   {getSearch} </td> </tr>
             <tr><td> Name</td><td> Color </td> <td> Price </td> </tr>
             {getData ? getData.map((item)=>
                <Mproductrow  items={item} />
             ):''}

             </table>
              

               
           
           </>
   )


}

export default Mproduct;

