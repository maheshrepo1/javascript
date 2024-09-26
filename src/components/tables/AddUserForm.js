import React, { useState } from "react";

const AddUserForm = props => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);
  const [emaildata ,setemaildata] = useState();
  const [personal_details , setpersonal_detail] = useState(  { name:"mahesh",address:"mayur vihar" });

  const  handleEmail = event =>{

    let personal_detail  = { name:"mahesh",address:"mayur vihar" };
    personal_detail = {doll:'doggg', ...personal_detail , delly:'777'};
    setpersonal_detail(personal_detail);
     
     const {name , value}  =   event.target;
     let name2 = `name_${name}`;
      setemaildata({ ...emaildata , [name2]: value });
  }
  
  const handleInputChange = event => {
   
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });

  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <label>Email</label>
       <input type="text" name="email" onChange={handleEmail} />
      <button>Add new user </button>
      <p> Email : { JSON.stringify(emaildata)}   { JSON.stringify(personal_details)} </p>
      
     { personal_details &&  Object.entries(personal_details).map(([key, value]) => {
          return  (<> <div >{key} </div>
                  <div >{value} </div>
           </>


          )
        }) }
 
     

    </form>
  );
};

export default AddUserForm;
