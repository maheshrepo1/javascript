import React, { useState,useEffect } from "react";
import '../../../css/main.css';

let Productlist = () => {
    const [get_div_toggle,set_div_toggle] = useState(0);
    const [get_opt, set_opt_toggle] = useState();
    
    useEffect(() => {

        set_opt_toggle('')
    },[]);

    let div_onclick = (e)=>{
      set_div_toggle('div_one_click');
      alert('on click');
    }

    let handleOnclk = ()=>{
        
        alert('handleOnclk');

    }

    let prorows = [
        { title: 'Nike', price: 300, desc: 'Nike is a shoe Brand' },
        { title: 'Puma', price: 500, desc: 'Puma is a shoe Brand' },
        { title: 'Adidas', price: 600, desc: 'Adidas is a shoe Brand'},
        { title: 'Woodland', price: 600, desc: 'Woodland is a shoe Brand'}
    ];

      return (<> this is again <Productlist2 rows={prorows} handleOnclk={handleOnclk} />
      {
        // alert('component rerender ... ')
      }

    <div>{get_opt}</div>
    
    <div style={{border:"2px solid red",width:"400px"}}>
        <div style={{padding:"50px",backgroundColor:"red",float:"left"}}  onClick={div_onclick}>One  </div>
        <div style={{padding:"10px",backgroundColor:"blue",float:"left"}}> Two </div>
        <div style={{padding:"10px",backgroundColor:"yellow",float:"left"}}>Three </div>
        <div style={{padding:"10px",backgroundColor:"green",float:"left"}}>Four </div>

        { get_div_toggle==="div_one_click" ? <div  style={{padding:"10px",backgroundColor:"#ccc",float:"left"}}>Five </div>:
        <div  style={{padding:"10px",backgroundColor:"#aaa",float:"left"}}>Five </div>}
       </div>

           
        
        {prorows.map((obj) => {
            return<><div id="leftbox"> {obj.title} </div>
                <div id = "middlebox" > {obj.price} </div>
                <div id = "rightbox" > {obj.desc} </div></>

        })}
    </>)
}

let Productlist2 = (prows) => {

     return (<>
         {JSON.stringify(prows)} this is the component ...
         <div style={{backgroundColor:"#dddd",padding:"20px"}} onClick={prows.handleOnclk}></div>

    </>)

}
export default Productlist;