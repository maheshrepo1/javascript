import React, { useState } from "react";
const AllFields = (props)=>{

    let count_map = [];
    for(let i =1; i <= props.total; i ++)
    {
        count_map[i] = i;
    }
    console.log('count_map',count_map)

    return (<>
    {

            count_map.map((obj)=>{
                return (<>
                   <div style={{paddingTop:"5px",paddingBottom:"5px"}}>
                    First Name {obj} : <input type='text' key={obj}  name='first_name' />
                    Last Name {obj} : <input type='text' key={obj}   name='last_name' />
                    Email {obj} : <input type='text'  key={obj}  name='email'/>
                    </div>
                    </>
                )
               // console.log('obj ',obj);
            })
    }

       
        </>
    )


}

const AddMore = ()=>{

    const [formVal,setFormVal] = useState();
    let [addcount,setcount]  = useState(0);

    const add_more_push = ()=>{

        setFormVal(1);
        alert("add_more_push");
    }
    
    const remove_more_push =()=>{
    
    
    }

    let add_more_fields = (e)=>{

        addcount = addcount + 1;
        setcount(addcount);
        alert(addcount);


    }

    let remove_more_fields = (e)=>{
        addcount = addcount - 1;
        setcount(addcount);
        alert(addcount);
    }
   
    return(<>
    
     {addcount}

     {alert('Component Rerender ...')}

     <AllFields  total={addcount} ></AllFields>

       Form Val {formVal}
       First Name: <input type='text' id='first_name' name='first_name' />
       Last Name : <input type='text' id='last_name' name='last_name' />
       Email : <input type='text' id='email' name='email'/>
       <button name='addmore' id='addmore' value='addmore' onClick={add_more_fields} > Add More..</button>
       <button name='removemore' id='removemore' value='addmore' onClick={remove_more_fields} > Remove More..</button>
       <br/>
       <br/>
       <button name='addmorepush' id='addmorepush' value='addmorepush' onClick={add_more_push} > <span style={{backgroundColor: "red"}}> Add</span>  </button>
       <button name='removemorepush' id='removemorepush' value='removemorepush' onClick={remove_more_push} > <span style={{backgroundColor: "green"}}> Remove</span></button>
     
    </>)
    
} 

export default AddMore;