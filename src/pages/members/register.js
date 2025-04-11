import React, { useEffect, useState } from "react";
import axios from 'axios';

const MemberRegister = () => {
  const [fData, setFormData] = useState({});
  const [userData, setUserData] = useState();
  const [dataAdded, setDataAdded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // Function to submit form data
  const submitForm = async () => {
    try {
      if (isEditing) {
        // Update user
        await axios.put(`http://localhost:3010/users/${editId}`, fData);
        alert("User updated successfully");
      } else {
        // Add user
        await axios.post('http://localhost:3010/users', fData);
        alert("User added successfully");
      }
      setFormData({});
      setIsEditing(false);
      setEditId(null);
      setDataAdded(true);
    } catch (error) {
      console.error("There was an error processing the form:", error);
    }
  };

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:3010/users');
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
    setDataAdded(false);
  }, [dataAdded]);

  // Function to update form data
  const frmDataSet = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to delete a user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3010/users/${id}`);
      alert('User deleted successfully');
      setDataAdded(true);
    } catch (error) {
      console.error("There was an error deleting the user:", error);
    }
  };

  // Function to edit a user
  const editBtn = (id) => {
     let editData = userData.filter((data)=>data.id ===id);
    setFormData(editData[0]);
    setIsEditing(true);
   };

  return (
    <div>
      {/* Form Container */}
      <div
        style={{
          width: '1100px',
          height: '300px',
          border: '1px solid black',
          padding: '10px',
          borderRadius: '4px',
          margin: '20px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div style={{ padding: '10px', margin: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div>Name:</div>
            <input type="text" name="name" value={fData.name || ''} onChange={frmDataSet} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div>Email:</div>
            <input type="text" name="email" value={fData.email || ''} onChange={frmDataSet} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div>Age:</div>
            <input type="text" name="age" value={fData.age || ''} onChange={frmDataSet} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="button"
              style={{ backgroundColor: isEditing ? 'orange' : 'royalblue', color: 'white' }}
              onClick={submitForm}
            >
              {isEditing ? <span>Update User </span> : <span> Add User </span>}
            </button>
          </div>
        </div>
      </div>

      {/* User Data Display Container */}
      <div
        style={{
          width: '1100px',
          height: '300px',
          border: '1px solid black',
          padding: '10px',
          borderRadius: '4px',
          margin: '20px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <div style={{ padding: '10px', margin: '20px' }}>
          <h3>User Data</h3>
          {userData && userData.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', fontWeight: 'bold', gap: '20px' }}>
                <div style={{ width: '50px' }}>ID</div>
                <div style={{ width: '200px' }}>Name</div>
                <div style={{ width: '300px' }}>Email</div>
                <div style={{ width: '100px' }}>Age</div>
              </div>
              {userData.map((data, index) => (
                <div key={index} style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ width: '50px' }}>{data.id}</div>
                  <div style={{ width: '200px' }}>{data.name}</div>
                  <div style={{ width: '300px' }}>{data.email}</div>
                  <div style={{ width: '100px' }}>{data.age}</div>
                  <button onClick={() => editBtn(data.id)}>Edit</button>
                  <button style={{ background: 'lightblue' }} onClick={() => deleteUser(data.id)}>Delete</button>
                </div>
              ))}
            </div>
          ) : (
            <div>No user data available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberRegister;
