import { useEffect, useState } from "react";
import "./contactus.css";

export default function Contact(){

 const[fname,sfname] = useState({});
 const[lname,slname] = useState({});
 const[fnameobj , setfnameobj] = useState([]);
 const[counter,scounter] = useState(0);
 const[glastname,slastnmae] = useState({});

 let first_name_f un = (e)=>{
      sfname(e.target.value);
      // set_form_data({...get_form_data,[name]:value});
 }
 
 let lastname_fun = (e)=>{  
  slname(e.target.value);
 // set_form_data({...get_form_data,[name]:value});
}

 let add_data = (e)=>{
   setfnameobj({...fnameobj,[counter]:fname});
   slastnmae({...glastname,[counter]:lname});
   scounter(counter+1);
 }

   let ar_again  = Object.keys(fnameobj);

  let edit = (e)=>{ 
    let id = e.target.getAttribute('dataindex');
    alert(id);
    delete fnameobj[id];
    console.log(fnameobj);
    setfnameobj(fnameobj);
    //delete()
  }
 
  useEffect(()=>{

       console.log('rerender again !!');
       setfnameobj(fnameobj);
  },[fnameobj])

  return(
     <><div className="content">  
       <div>FNAME : {JSON.stringify(fnameobj)}</div>
       {(fnameobj && fnameobj !=undefined) ?  <div>
           
             {
                ar_again.map(index=>{
                   return(<>
                   <div style={{float:"left",padding:"10px"}} keys={`e_${index}`} > {fnameobj[index]} </div>
                   <div style={{float:"left",padding:"10px"}} keys={`e_${index}`} > <button name="edit" keys={`edit_${index}`} value="Edit">Edit</button> </div>
                   <div style={{float:"left",padding:"10px"}} keys={`e_${index}`} > <br />  <br /> </div>
                   </>
                   )
                })
             
             /*fnameobj.map((ar)=>{
              return(<> {ar} </>)

             })*/}

       </div> : <div></div>
       
       }
         <table border="1" cellPadding={3} cellPadding={3}>
         {(fnameobj && fnameobj !=undefined) ?  <div>
           
           {
              ar_again.map(index=>{
                 return(<> <tr><td>{fnameobj[index]}</td><td><button name="edit" keys={`edit_${index}`} dataindex={index} onClick={edit} value="Edit">Edit</button> </td> <td><button name="edit" keys={`edit_${index}`} value="Edit">Delete</button> </td></tr>
                 
                 </>
                 )
              })
           
           /*fnameobj.map((ar)=>{
            return(<> {ar} </>)

           })*/}

     </div> : <div></div>
     
     }
     </table>


       <div className="subcontent"> 
          <div className="tablediv">First Name    </div> 
          <div className="tablediv"> <input type="text" className="input" name="first_name"   onChange={first_name_fun}  placeholder="First Name"/></div>

          <div className="tablediv">Last Name </div> 
          <div className="tablediv"> <input type="text" className="input" name="last_name"  onChange={lastname_fun} placeholder="Last Name"/></div>

          <div className="tablediv"></div> 
          <div className="tablediv"> <button name="submit" style = {{ width:"140px", textAlign: "center",padding:"15px" , margin:"10px 10px 10px 10px"}}  id="submit" onClick={add_data}>Submit </button> </div>

           
        </div>
      </div> </>
  )
}

// https://www.youtube.com/watch?v=VlXZaO24DgY&t=7s
//https://www.youtube.com/watch?v=phDUGm_UnsQ
// https://www.geeksforgeeks.org/10-most-asked-es6-interview-questions-answers-for-developers/