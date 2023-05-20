import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import axios from "axios";
import { useParams } from 'react-router';
import ArticleDetail from "./articledetail";

const Article = ()=>{

   const[data , sdata ] = useState({name:"mahesh"});
   const [childData, setChildData] = useState("");
   const[frmdata,setfrmdata] = useState("");
   const[form_obj ,setFormData] = useState({title:'',price:''});

   let set_values =(e)=>{
    let {name,value} =  e.target;
        setFormData({...form_obj,[name]:value})
   }
   function  setdatafun (val) {

          if(val)
          {
                sdata(val);
          }
          else { 
             sdata({name:"Ravinder Malik"});
          }
    }
    function handleChildData(data) {
        setChildData(data);
      }

    const handleSubmit = (event) => {
          event.preventDefault();
          if(!form_obj.name)
          {
            alert("Author Name   is blank !!");
          }

          if(!form_obj.title)
          {
            alert("Title  is blank !!");
          }
     };

     function form_data(event) {
      let {name,value} =  event.target;
      setfrmdata({...frmdata , [name]:value})
    
    //  alert(title);
      // Do something with the value of the input field
    }
   return(
           <>
            {JSON.stringify(form_obj)}
             <form onSubmit={handleSubmit}>
                  <div><lablel> Article Title:</lablel> <input  onChange={set_values}  name="title"  style={{width:"250px"}} type="text" /> </div>
                  <div><lablel> Author Name: </lablel> <input onChange={set_values}  name="author" style={{width:"250px"}} type="text"/> </div>
                  <div><lablel> Description: </lablel> <input onChange={set_values}  name="description" style={{width:"250px"}} type="text"/> 
                  </div>
                  <div><button name='submit'> Submit Article</button></div> 
             </form>
             <ArticleDetail passdata={data}   onChildData={handleChildData}/>
             <div><button onClick={setdatafun}> State Data</button></div>
           </>
      )

}
export default Article;