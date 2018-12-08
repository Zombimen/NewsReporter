import React from 'react'
import {Link} from 'react-router-dom'

const BarLeft = () =>
        <div className="bar-left">
            <div className="logo"></div>
            <nav className="menu">
                <ul className="both">
                    <li><Link to="/">Home</Link></li>	
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Subscribe</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
        </div>
export default BarLeft