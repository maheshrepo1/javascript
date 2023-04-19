import React, { useEffect, useState } from 'react';
import logo from '../../../logo.svg';

import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';

const Pccrud = ()=>{

     const[addcat,setcat] = useState();

     useEffect(()=>{

          alert('onload');
     })
  

     return (
          <>
          <div className="App">
               <table border='2' cellPadding='3' cellPadding='4'  >
               <tr>
                    <th>Name</th>
                    <th>Age</th>  
                    <th>Gender</th>
               </tr>
               <tr>
                    <td>Anom</td>
                    <td>19</td>
                    <td>Male</td>
               </tr>
               <tr>
                    <td>Megha</td>
                    <td>19</td>
                    <td>Female</td>
               </tr>
               <tr>
                    <td>Subham</td>
                    <td>25</td>
                    <td>Male</td>
               </tr>
               <tr>
                    <td>ddff</td>
                    <td>25</td>
                    <td><button>submit </button></td>
               </tr>

               </table>
    </div> 
          </>
     )
 

}

export default Pccrud;