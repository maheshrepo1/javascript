import "./topbar.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Contact from "../../pages/contactus/Contactus";
import About from "../../pages/aboutus/Aboutus";
import User from "../../pages/users/users";
import Cart from "../../pages/cart/cart";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { articleList } from "../../redux/action/productAction";
import Fproduct from "../../pages/fproduct/fproduct";
import Mproduct from "../../pages/mproduct/mproduct";
import Sproduct from "../../pages/searchproduct/sproduct";
import Fproductdetail from "../../pages/fproductdetail/fproductdetail";
import Article from "../../pages/article/articletest";
import Members from "../../pages/members/members";
import AddMembers from "../../pages/members/adduser";
import MemberRegister from "../../pages/members/register";


export default function Topbar() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(articleList());
    }, [dispatch]);

    const result = useSelector((state) => state.cartData);

    const navLinks = [
        { to: "/home", label: "Home" },
        { to: "/article", label: "Article" },
        { to: "/about", label: "About" },
        { to: "/user", label: "User" },
        { to: "/cart", label: "Cart" },
        { to: "/fproduct", label: "Feature Products" },
        { to: "/mproduct", label: "Member Products" },
        { to: "/sproduct", label: "Search Products" },
        { to: "/contact", label: "Contact Us" },
        { to: "/members", label: "Members" },
        { to: "/members/addmember", label: "Add Members" },
        { to: "/members/register", label: "Member Register" }
    ];

    return (
        <>
            <span style={{ backgroundColor: "#cdcdcd" }}>{result.length}</span>
            <BrowserRouter>
                <div style={{
                    display: "flex",
                    background: 'black',
                    padding: '5px 0 5px 5px',
                    fontSize: '15px',
                    textDecoration: 'none'
                }}>
                    {navLinks.map((link) => (
                        <div key={link.to} style={{ margin: '10px' }}>
                            <NavLink to={link.to} className="nav1" style={({ isActive }) => ({
                                color: isActive ? 'greenyellow' : 'white'
                            })}>
                                {link.label}
                            </NavLink>
                        </div>
                    ))}
                </div>
                <Routes>
                    <Route path="/productdetail/:id" element={<Fproductdetail />} />
                    <Route exact path="/home" element={<div>Home</div>} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/user" element={<User />} />
                    <Route exact path="/fproduct" element={<Fproduct />} />
                    <Route exact path="/mproduct" element={<Mproduct />} />
                    <Route exact path="/sproduct" element={<Sproduct />} />
                    <Route exact path="/contact" element={<Contact />} /> 
                    <Route exact path="/article" element={<Article />} />
                    <Route exact path="/members" element={<Members />} />
                    <Route exact path="/members/addmember" element={<AddMembers />} />
                    <Route exact path="/members/register" element={<MemberRegister />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
