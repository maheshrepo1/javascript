import Home from "./pages/home/Home";
import {addToCart, emptyCart, removeToCart } from  "./redux/action/add_to_cart";
import { productList } from './redux/action/productAction';
import {useDispatch,useSelector} from 'react-redux';
import  './App.css';
import { useEffect } from "react";
import Item from "./components/context/item";
import Cart from "./components/context/Cart";
import { CartProvider } from "./context/Cart";



function App() {

      const dispatch = useDispatch();
      useEffect(()=>{
        dispatch(productList());
      },[])
     

      let data = useSelector((state)=>state.productData);
      return(<>
        
        <div> 
          <CartProvider>
          
          <Item name='Mac Book Pro' price={1000}  /> 
          <Item name='Pendrive' price={1000}  /> 
          <Item name='Mouse' price={100}  /> 
          <Item name='Monitor' price={5000}  /> 
          <Cart/>

          </CartProvider>
        
        </div>
      
      <div style={{width:"1100px",backgroundColor:"#",border:"1px solid"}} > <div>
         <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>  <button onClick={() => dispatch(productList())}>Call Product List</button> </div>
        </div>  
      <Home/>
       <div  className="product-container" > 
       {   
               data.map((item)=><div className="product-item"> 
                <img src={item.photo} alt="" height="200"  width="200"/>
                <div>Name: {item.name}</div>
                <div>Color: {item.color}</div>
                <div>Brand: {item.brand}</div>
                <div>Price: {item.price}</div>
                <div>Category: {item.category}</div>
                <div><button onClick={() => dispatch(addToCart(item))} >Add</button> <button onClick={() => dispatch(removeToCart(item.id))}>Remove</button>  </div>
               </div>) 

       }
       
       </div>
      
      </>)
}

export default App;
