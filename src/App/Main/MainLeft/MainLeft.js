import React from 'react'
import FATW from './MainLeftBlocks/FATW'
import LA from './MainLeftBlocks/LA'
import Gallery from './MainLeftBlocks/Gallery'
import TechNews from './MainLeftBlocks/TechNews'

const MainLeft = () =>
        <div className="main-left float">
			<FATW/>
			<LA/>
			<Gallery/>
			<TechNews/>
		</div>

export default MainLeft