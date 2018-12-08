import React from 'react'
import {Link} from 'react-router-dom'

const FATW = () =>
    <div className="from-around-the-world both">
        <div className="more">FROM AROUND THE WORLD<a href="">MORE +</a></div>
        <div className="fatw-and-la-blocks float">
            <img src="/images/fatw1.jpg"/>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor.</p>
            <p><Link to="/FATW1">READ MORE</Link></p>
        </div>
        <div className="fatw-and-la-blocks float">
            <img src="/images/fatw2.jpg"/>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor.</p>
            <p><Link to="/FATW2">READ MORE</Link></p>
        </div>
        <div className="fatw-and-la-blocks float">
            <img src="/images/fatw3.jpg"/>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor.</p>
            <p><Link to="/FATW3">READ MORE</Link></p>
        </div>
    </div>

export default FATW