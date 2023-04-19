import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { AccordionItem } from "reactstrap";
import Checkbox from '../../../components/Checkbox';
import SelectBox from "../../../components/Selectbox";
import RadioBox, { MulCheckBox } from "../../../components/Radiobutton";
import Catalogues, { SubCatalogues } from "./mock";

const Chkall = () => {

  console.log('SubCatalogues on  load..',SubCatalogues);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [list, setList] = useState([]);
  const [Rlist, setRList] = useState([]);
  const [subcat,setsubcat] = useState([]);
  const [show_sub,set_show_sub] = useState(false);
  const[is_selected_val,setis_selected_val] = useState('02');

  useEffect(() => {
    setList(Catalogues);
  }, [list]);

  useEffect(()=>{
    setRList(Catalogues);
  },[])

  const handleSelectAll = (e) => {
    setIsCheckAll(!isCheckAll);
    isCheckAll ? setIsCheck([]) : setIsCheck(list.map(li => li.id));
  };
  
  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  const handleOnchange = (e) =>{

      let selVal =   e.target.value ;
      let rows =  SubCatalogues.filter((obj)=>{
            return obj.id==selVal
      });
      let rows2 =  rows.length ? rows : [];
       rows.length ? set_show_sub(true) : set_show_sub(false);
      setsubcat(rows2);

      console.log('show sub',show_sub);
    
  }

  console.log(isCheck);

  var arr = [2, 5, 6, 3, 8, 9];
  var newArr = arr.map(function (val, index) {
    return { key: index, value: val * val };
  })

  // console.log(newArr)

  let map_result = JSON.stringify(newArr);
  let cat_log2 = list.map(({ id, name }) => {
    return (
      <>
        {id}  ===> {name}
      </>
    )
  });

  const catalog = list.map(({ id, name }) => {
    return (
      <>
        <Checkbox
          key={id}
          type="checkbox"
          name={name}
          id={id}
          handleClick={handleClick}
          isChecked={isCheck.includes(id)}
        />
        {name}
      </>
    );
  });

  return (
    <div>

    
      <Checkbox
        type="checkbox"
        name="selectAll"
        id="selectAll"
        handleClick={handleSelectAll}
        isChecked={isCheckAll}
      />
      Select All {catalog}
      <p>After select AL</p>
      {cat_log2}

      <p><SelectBox 
       name='foods'
       key='foods'
       options={list}
       is_selected_val={is_selected_val}
       handleOnchange={handleOnchange}
       /> </p>

      <p>  { show_sub ? <SelectBox 
                name='subfood'
                key='subfood'
                options={subcat}
         /> :''}
       </p>

       <p>{ <RadioBox ></RadioBox> } </p>
      
       <br key='br1' />
       <br key='br2' />
       <br key='br3' />
       <br key='br4' />
       <br key='br5' />
       <br />
       <p>{<MulCheckBox key='mulchk' name='mulchk' options={Rlist} is_selected="04"/> }</p>
      {map_result}
      <button name="save" >  Save ... </button>

    </div>
  );
};
export default Chkall;