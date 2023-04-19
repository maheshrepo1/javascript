import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import '../../../css/main.css';

const Login = ()=>{

     const {register,handleSubmit,formState: { errors } } = useForm(); 
     const[getEmail,setEmail] = useState();
     const[getPassword,setPassword] = useState();
     const[form_obj,setFormData] = useState();

     let frm_submit= (e)=>{
          e.preventdefault();
     }
     
     let set_form_data = (e)=>{
      const {name, value} = e.target;
      setFormData({...form_obj,[name]:value});
    }


    let submitData =(data)=>{

      console.log('submitData' , errors);

      localStorage.setItem("email",getEmail);
      localStorage.setItem("password",getPassword);
      localStorage.setItem("loggedin", Date.now());

    }

    return (<>  
    
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit(submitData)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In  {JSON.stringify(form_obj)}</h3>
          <div className="form-group mt-3">
            <label>Email address {getEmail}   </label>
            <input
               {...register('email', {
                required: 'Email is required please enter ',
                pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid email',
                },
               })}
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e)=>{
                setEmail(e.target.value);
                set_form_data(e);
              }}
            />
            {errors.email && <p>Email is required .</p>}
          </div>
          <div className="form-group mt-3">
            <label>Password {getPassword}</label>
            <input
              type="password"
              name="password"
              {...register('password', { required: true })}
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e)=>{
               setPassword(e.target.value);
               set_form_data(e);
              }}
            />
             {errors.password && <p>Password is required.</p>}
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" >
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>  

     </>)

}
export default Login;