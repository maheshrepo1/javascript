import React from "react"; 
import HeaderTitle from './headertitle';
import MemberForm from "./memberform";
import AddUserForm from "./addressform";
import './members.css';
import {MemberProvider} from './membercontext';



//let arr = ['mahesh','usha','ravinder','usha','mahesh','mahesh','parveen'];

let arr = [2,2,3,4,5,8];
let unique = [];
for(let i=0 ; i < arr.length; i ++ )
{
    if(unique.includes(arr[i]) === false )
    {
      unique.push(arr[i]);
    }     
}
console.log('unique array',unique);


const objects = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' },
  { id: 3, name: 'Doe' },
  { id: 2, name: 'Jane' },
];

 let ids = [];
 const uniqueArray = [];

  for(let i=0 ; i < objects.length; i ++ )
  {
         
      if(!ids[objects[i].id])
      {
        ids.push(objects[i].id);
        uniqueArray.push(objects[i]);
      }
  }
  console.log(uniqueArray);


let maxArr = [100,2,3,5,6,8,90,91,6,7,89,1,123];

let min = maxArr[0];
let max = maxArr[0];

for(let i=1 ; i < maxArr.length; i++)
{
  // debugger;
  
  let item =  maxArr[i];
   
  if(item > max)
   {  
      max = item;
   }

    if(item < min)
    {  
      min = item;
    }
 

}

let seondLargestNumber = [1,2,4,5,6,7,19,30,29];
let secondLargest = 0;
max = seondLargestNumber[0];
for(let i=0; i < seondLargestNumber.length; i ++)
{
    let item = seondLargestNumber[i];
    if(item > max)
    {
       max = item;
      secondLargest = max;
   
    }else if(item > secondLargest && secondLargest !==max)
    {  
      secondLargest = item;
    }


}

console.log('second largest',secondLargest);


const AddMembers = ()=>
{
  return(
    <div className="container">
      <MemberProvider>
        <HeaderTitle title="Add Member" height="20px" />
           <MemberForm />
        <AddUserForm/>
     </MemberProvider>
    </div>

  )

}

export default  AddMembers;
