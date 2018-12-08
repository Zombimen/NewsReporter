import React from 'react'
import BarLeft from './HeaderBlocks/BarAndSearch/BarLeft'
import BarRight from './HeaderBlocks/BarAndSearch/BarRight'
import Submenu from './HeaderBlocks/Submenu'
const Header = () =>
    <header>
    <div className="bar">
        <BarLeft/>
        <BarRight/>
    </div>

    <Submenu/>
</header>

export default Header