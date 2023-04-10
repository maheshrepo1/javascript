import "./topbar.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import  Contact from "../../pages/contactus/Contactus";
import  About from  "../../pages/aboutus/Aboutus";
import  User from  "../../pages/users/users";

export default function Topbar()
{

    let Home = ()=>{


    }
    return(<>
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
                        <NavLink to="/contact" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Contact Us.
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/home" element={<Home />} />
                    <Route exact path="/about" element={<About />} />
                    <Route exact path="/user" element={<User />} />
                    <Route exact path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
    </>
    )
}