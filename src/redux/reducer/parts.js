const intialState = { partdata:{name: '2 seat' }, errorMessage: 'no'}
const partList = (state=intialState, action)=>{
    const {type} = action;
     switch(type){
        case 'SET_PART_DATA':
          //  let out_put = {...state, set_part_data: action.response, errorMessage:'no'};
            return {...state, set_part_data: action.response, errorMessage:'no'}
       default:
            return state;
            
    }
}
export default partList;

//That one root reducer function is responsible for handling all of the actions that are dispatched, and calculating what the entire new state result should be every time.
// calculating the entire new state   
// type / payload // handle all the action