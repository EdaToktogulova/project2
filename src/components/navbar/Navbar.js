import React from "react";
import {FaIceCream, FaBars} from "react-icons/fa"
import './Navbar.css'

const Navbar = () => {
   return (
      <div className="navbar">
         <div className="container">
            <div><FaIceCream size={40} style={{marginleft: '4px'}} /></div>
            <ul className="nav-menu">
               <li>Home</li>
               <li>Order</li>
               <li>Menu</li>
               <li>Delivery</li>
               <li>Contact</li>
            </ul>
         <div className="IceCream">
            <FaBars />
         </div>
         </div>
      </div>
   )
}

export default Navbar;