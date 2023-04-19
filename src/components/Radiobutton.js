
import React from "react";

let MulCheckBox = ({key,name,options,is_selected})=>{
   // is_selected ? use

  return(<>
    {options && options.map((obj)=>{

       return is_selected ===obj.id ? <> <input type="radio" name={name} id={key} value={obj.id} checked/> {obj.name}</>: 
       <> <input type="radio" name={name} id={key} value={obj.id} /> {obj.name}</>
      
   }) 
    
  }
  </>)
}

let Chkgarage = ()=>{
  let cars_prop1 = { make:'Kia' , model:'Seltos' , year:'2019' };
  let cars_prop2 = { make:'Kia' , model:'Seltos' , year:'2019' };
 
  let cars_prop = [
  { make:'Kia' , model:'Seltos' , year:'2019' },
  { make:'Maruti' , model:'Swift' , year:'2012'},
  { make:'Hyundai' , model:'Creta' , year:'2020'}
  ];

  let props_out = <Garage cars={cars_prop} > </Garage>
 // let cars_prop = [{ make:'Kia' , model:'Seltos' , year:'2019' }];
  return(<>
       {props_out}
  </>)

}

function Garage(props) {
    const cars = props.cars;
  //  console.log('With Object.entries ..' , Object.entries(props.cars));
 //   console.log('With Object.key ..' , Object.keys(props.cars));
   // console.log('Direct props ..' , props.cars[0]);
    //console.log('in CARS ...' , Object.entries(props.cars));

  //    console.log('cars' ,cars.length);


    return (
      <>
        <h1>Garage System </h1>
        {cars.length > 0 &&
          <h2>
            You have {cars.length} cars in your garage.
          </h2>
        }

        {cars.length > 0 ?  <h2>
            You have more  {cars.length} cars in your garage.
          </h2> : ''
        }
        { cars.length > 0 && 
          <h1> lenth greater than ZERO </h1>
        } 


      </>
    );
  }

export default Chkgarage;
export {MulCheckBox} ;

