import React, { useState,useEffect } from "react"; 
import AddMembers from './addmember'


let Component = () =>{

  const[toggle , setToggle] = useState(true);
  const[chkradio , setRadio] =useState(true);
  const[showForm,setForm] = useState(true);
  return(
       <>
         {showForm   && (
          <>  
           <h1> Mahesh New Coponent </h1>
             { toggle && (<h1> On </h1>)}
            { toggle  ? <h1> On</h1> : <h1> off </h1> }
            <input type='radio' name='chkradio' checkked ={toggle && chkradio && (chkradio)  } />
            <input type='radio' name='chkradio' checkked ={toggle ? true : false} /> </>
         )}
         {toggle ?  <h1>On </h1> : <h1>Off </h1>}
       </>
  )
}


const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // State to control the running of the counter

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000); // Increment every second
    }
    // Cleanup function to clear the interval when the component unmounts or the interval is stopped
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true); // Start incrementing
  };

  const handleStop = () => {
    setIsRunning(false); // Stop incrementing
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleStart} disabled={isRunning}>Start Incrementing</button>
      <button onClick={handleStop} disabled={!isRunning}>Stop Incrementing</button>
    </div>
  );
};


const Members = ()=>
{

  return(
   <>Mahesh
     <AddMembers />
     <CounterApp/>
   
   </>

  )

}

export default  Members;
