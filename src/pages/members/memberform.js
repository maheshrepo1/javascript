import React, { useState } from "react";
import * as Yup from "yup";
import './members.css';
import { useContext } from "react";
import {MemberContext} from  './membercontext';

// Define Yup validation schema
const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .matches(/^[A-Za-z ]*$/, "Please enter a valid name"),
//   mobile: Yup.string()
//     .required("Mobile number is required")
//     .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"),
//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
});

const MemberForm = () => {

  const memberContextState = useContext(MemberContext);

  const [fData, setData] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState({}); // State to handle validation errors

  let btnClick = async (event) => {
    event.preventDefault();

    const frmData = {
      firstName,
      mobile,
      email,
      sex,
      age,
    };

    try {

        alert("one");
      // Validate form data using Yup schema
      await validationSchema.validate(frmData, { abortEarly: false });
      setErrors({}); // Clear errors if validation passes
      frmData.firstname = frmData.firstName; // Assign the value to the new key
      delete frmData.firstName; // Remove the old key
      setData(frmData); // Update form data if validation is successful
      memberContextState.setMemberContextData(frmData);

    


      alert("sadasd");
//      console.log('formData',formData);
      
      


   //   alert(" Add member ...")



    } catch (error) {
      // If validation fails, set the errors
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
      <div>{JSON.stringify(fData)}</div>
      <form onSubmit={btnClick}>
        <div className="fieldset">
          <div className="labelbox">Name</div>
          <div>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            {errors.firstName && <div className="validationerror">{errors.firstName}</div>}
          </div>
        </div>

        <div className="fieldset">
          <div className="labelbox">Mobile No</div>
          <div>
            <input
              type="text"
              name="mobile"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
            />
            {errors.mobile && <div className="validationerror">{errors.mobile}</div>}
          </div>
        </div>

        <div className="fieldset">
          <div className="labelbox">Email</div>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors.email && <div className="validationerror">{errors.email}</div>}
          </div>
        </div>

        <div className="fieldset">
          <div className="labelbox">Sex</div>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "16px" }}>
              <input
                name="sex"
                type="radio"
                value="M"
                onChange={(event) => setSex(event.target.value)}
                checked={sex === "M"}
              />{" "}
              Male
            </div>
            <div>
              <input
                name="sex"
                type="radio"
                value="F"
                onChange={(event) => setSex(event.target.value)}
                checked={sex === "F"}
              />{" "}
              Female
            </div>
          </div>
        </div>

        <div className="fieldset">
          <div className="labelbox">Age</div>
          <div>
            <input
              type="number"
              name="age"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </div>
        </div>

        <div className="fieldset">
          <div className="labelbox" />
          <div>
            <button className="buttonbox" type="submit">
              Add Member
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MemberForm;
