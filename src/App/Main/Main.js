import React from 'react'
import Slider from './Slider/Slider';
import MainLeft from './MainLeft/MainLeft';
import MainRight from './MainRight/MainRight';

const Main = () => {
	return (
    <main className="main float">
			<Slider/>
			<MainLeft/>
			<MainRight/>
	</main>
	)}

export default Main