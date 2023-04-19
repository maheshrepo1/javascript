const productList =  (data) => {
    console.log("action ==> ",data);

    return {
          type:'LIST_PRODUCT',
          payload:data

    }
}

const shortbloglist = (data) =>{
    return {
       type:'SHORT_BLOG',
       payload:data
    }

}

const userData = (data)=>{

    return {
       type:'SET_USER_DATA',
       payload:data
     }

}

const getuserData = (data)=>{

    return {
        type:'GET_USER_DATA',
        payload:data
      }
 
 }

export {productList , shortbloglist,userData,getuserData}