import "./topbar.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import  Contact from "../../pages/contactus/Contactus";
import  About from  "../../pages/aboutus/Aboutus";
import  User from  "../../pages/users/users";
import  Cart from  "../../pages/cart/cart";
import {useDispatch,useSelector} from 'react-redux';
import { useEffect } from "react";
import { articleList } from "../../redux/action/productAction";
import  Fproduct  from "../../pages/fproduct/fproduct";
import Mproduct from "../../pages/mproduct/mproduct";
import Sproduct from "../../pages/searchproduct/sproduct";
import Fproductdetail from "../../pages/fproductdetail/fproductdetail";
//import Article from "../../pages/article/article";
import Article from "../../pages/article/articletest";

export default function Topbar()
{  
    const dispatch = useDispatch();
    useEffect(()=>{
         dispatch(articleList());
    },[])

    const result = useSelector((state)=>state.cartData);
   // console.warn("data in header", result);

    let Home = ()=>{


    }
    return(<>
     <span style={{backgroundColor:"#cdcdcd"}}>{result.length}</span>
    <BrowserRouter>
                <div style={{
                    display: "flex",
                    background: 'black',
                    padding: '5px 0 5px 5px',
                    fontSize: '20px'
                }}>
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/home" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Home
                        </NavLink>
                    </div>

                    <div style={{ margin: '10px' }}>
                        <NavLink to="/article" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Article
                        </NavLink>
                    </div>
                    
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/about" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            About
                        </NavLink>
                    </div>
                    
                    <div style={{ margin: '10px' }}>
                        <NavLink to="/user" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                             User
                        </NavLink>
                    </div>

                    <div style={{ margin: '10px' }}>
                        <NavLink to="/cart" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                             Cart
                        </NavLink>
                    </div>

                    <div style={{ margin: '10px' }}>
                        <NavLink to="/fproduct" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                             Feature Products
                        </NavLink>
                    </div>

                    <div style={{ margin: '10px' }}>
                        <NavLink to="/mproduct" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                             Member Products
                        </NavLink>
                    </div>

                    <div style={{ margin: '10px' }}>
                        <NavLink to="/sproduct" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                             Search Products
                        </NavLink>
                    </div>

                    <div style={{ margin: '10px' }}>
                        <NavLink to="/contact" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Contact Us.
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route path="/productdetail/:id" element={<Fproductdetail/>} />
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/user" element={<User />} />
                    <Route exact path="/fproduct" element={<Fproduct />} />
                    <Route exact path="/mproduct" element={<Mproduct />} />
                    <Route exact path="/sproduct" element={<Sproduct />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/article" element={<Article />} />
                </Routes>
            </BrowserRouter>
    </>
    )
}