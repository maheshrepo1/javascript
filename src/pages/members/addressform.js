import React, { useState } from "react";
import './members.css';
import { useContext } from "react";
import { MemberContext }  from './membercontext'


const AddressForm = () => {

   const memberProfile =  useContext(MemberContext);   
    

    const [fData, setData] = useState({
        address: '',
        homeaddress: '',
        officeaddress: ''
    });

    const btnClick = () => {
     //   console.log('Submitted Addresses:', fData);
        // You can also reset the form or handle submission here if needed
        // setData({ address: '', homeaddress: '', officeaddress: '' });
    }

    const getFormData = (e) => {

        const {name , value}  = e.target;
         setData({...fData,[name]:value})
    }

    return (
        <div style={{ display: "flex", flexDirection: 'column', padding: '10px' }}>
            <div className="fieldset">  {JSON.stringify(memberProfile.memberContextData)}
                <div className="labelbox">Default Address</div>
                <div>
                    <input 
                        type="text" 
                        name="address" 
                        value={fData.address} 
                        onChange={getFormData} 
                    />
                </div>
            </div>

            <div className="fieldset">
                <div className="labelbox">Home Address</div>
                <div>
                    <input 
                        type="text" 
                        name="homeaddress" 
                        value={fData.homeaddress} 
                        onChange={getFormData} 
                    />
                </div>
            </div>

            <div className="fieldset">
                <div className="labelbox">Office Address</div>
                <div>
                    <input 
                        type="text" 
                        name="officeaddress" 
                        value={fData.officeaddress} 
                        onChange={getFormData} 
                    />
                </div>
            </div>
            <div className="fieldset">
                <div className="labelbox" />
                <div>
                    <button className="buttonbox" onClick={btnClick}>Add Address</button>
                </div>
            </div>
        </div>
    );
}

export default AddressForm;
