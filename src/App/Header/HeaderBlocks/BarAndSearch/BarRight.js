import React from 'react'

const BarRight = () =>
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

export default BarRight