const intialState = { productdata:{title:'creta'} , set_user_data :{},get_user_data:{} , errorMessage: 'yes'}

const productList = (state=intialState, action)=>{
    const {type} = action;
    switch(type){
        case 'LIST_PRODUCT':
            return {...state, productdata: action.payload, errorMessage:'no'}
        case 'SHORT_BLOG':
            return {...state, blogdata: action.payload, errorMessage:'no'}
        case 'SET_USER_DATA':
           return {...state, set_user_data: action.response, errorMessage:'no'}
        case 'GET_USER_DATA':
           return {...state, get_user_data: action, errorMessage:'no'}
        default:
            return state;

    }
}
export default productList;