import React, { useEffect, useState , useContext,createContext } from "react";
import One from './One';
import Two from './Two';
import Three from "./Three";
import ErrorBoundary from "./ErrorBoundary";

let initialValue = {emp_id:153179};
const Contextu = createContext(initialValue);

let Callthree = ()=>{
    const [u_ses,sets] = useState('Mahesh Malik..  ');
    
    return(<> Mahesh Kumar
      <div style={{backgroundColor:"red"}} > This is the on load ..... {u_ses} </div>
      <Contextu.Provider value={{bankid:'paytm'}}>
      <ErrorBoundary>
        <One  first='1' second='2' third='3' four='4'></One>
        <Two></Two>
        <Three></Three>
      </ErrorBoundary>
      </Contextu.Provider>
    </>)
} 
export default Callthree;
export  {Contextu};    
