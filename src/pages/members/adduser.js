import React, { useState } from "react";

const Adduser = () => {
  const [title, setTitle] = useState("mahesh");
  const [quantity, setQuantity] = useState(1);
  const [id, setId] = useState(1);
  const [cart, setCart] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editModeId, setEditModeId] = useState(0);

  const addCart = () => {
    const obj = [...cart, { id: id, name: title, quantity }];
    setCart(obj);
    setId((prev) => prev + 1);
    setTitle("");
    setQuantity(1);
  };

  const titelFun = (e) => {
    setTitle(e.target.value);
  };

  const editFun = (idVal) => {
    const editProduct = cart.find((data) => data.id === idVal);
    if (editProduct) {
      setTitle(editProduct.name);
      setQuantity(editProduct.quantity);
      setEditMode(true);
      setEditModeId(idVal);
    }
  };

  const editCart = () => {
    const updatedData = cart.map((data) =>
      data.id === editModeId ? { ...data, name: title, quantity } : data
    );
    setCart(updatedData);
    setEditMode(false);
    setEditModeId(0);
    setTitle("");
    setQuantity(1);
  };


  const delFun = (id)=>{
   let delResult =  cart.filter((data)=>data.id !==id)
   setCart(delResult);
  }

  return (
    <div>
      <h2>Cart Items:</h2>
       <div style={{ display: "flex" }}>
        <div style={{ margin: "0px 15px" }}>
          Title:
          <input type="text" name="title" value={title} onChange={titelFun} />
        </div>
        <div>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
          />
        </div>
        <div>
          <button name="Add in Cart" onClick={editMode ? editCart : addCart}>
            {editMode ? <span>Edit Cart</span> : <span>Add to Cart</span>}
          </button>
        </div>
        <div>
          {editMode && (
            <span>
              You are in Edit Mode
              <div>this is another div</div>
            </span>
          )}
        </div>
      </div>
      <div>
        {cart.map((data, index) => (
          <div key={index} style={{ margin: "10px 0", display: "flex" }}>
            <div>{data.id}</div>
            <div>Product: {data.name}</div>
            <div>Quantity: {data.quantity}</div>
            <div style={{ margin: "0px 20px 0px 20px" }}>
              <span
                style={{
                  backgroundColor: "lightblue",
                  border: "1px solid black",
                  padding: "5px",
                  borderRadius: "2px",
                  cursor: "pointer",
                  margin : "0px 10px"
                }}
                onClick={() => editFun(data.id)}
              >
                Edit
              </span>
              <span
                style={{
                  backgroundColor: "black",
                  border: "1px solid black",
                  padding: "5px",
                  borderRadius: "2px",
                  cursor: "pointer",
                  color:"white"
                }}
                onClick={()=>delFun(data.id)}
              >
                Delete
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adduser;
