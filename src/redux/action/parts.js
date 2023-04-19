const getpartData = (data)=>{
  return {
        type:'GET_PART_DATA',
        payload:data
      } 
      
 }
 const setpartData = (data)=>{

  return {
     type:'SET_PART_DATA',
     payload:data
   }

}

export {getpartData,setpartData}