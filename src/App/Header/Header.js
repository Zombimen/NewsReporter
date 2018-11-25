    import React from 'react'

const Header = () => {
    return (
    <header>
    <div className="bar">
        <div className="bar-left">
            <div className="logo"></div>
            <nav className="menu">
                <ul className="both">
                    <li><a href="">Home</a></li>	
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Subscribe</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
        </div>

        <div className="bar-right">
            <div className="sm">
                <div><input type="button"/></div>
                <div><input type="button"/></div>
                <div><input type="button"/></div>
                <div className="with-counter1 both">
                    <div></div>
                    <div className="counter">0</div>
                </div>
                <div className="with-counter2 both">
                    <div></div>
                    <div className="counter">0</div>
                </div>
            </div>
            <div className="search ">
                <input type="search" name="search"/>
                <input type="submit" name="" value=""/>
            </div>
        </div>
    </div>

    <nav className="submenu">
        <ul className="both">
            <li><a href="">WORLD NEWS</a></li>
            <li><a href="">SPORTS</a></li>
            <li><a href="">TECH</a></li>
            <li><a href="">BUSINESS</a></li>
            <li><a href="">MOVIES</a></li>
            <li><a href="">ENTERTEINMENT</a></li>
            <li><a href="">CULTURE</a></li>
            <li><a href="">BOOKS</a></li>
            <li><a href="">CLASSIFIEDS</a></li>
            <li><a href="">BLOGS</a></li>
        </ul>
    </nav>
</header>
    )}

export default Header