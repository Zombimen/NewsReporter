import React from 'react';
import Video from './AsideBlocks/Video';
import Ad from './AsideBlocks/Ad';
import Sign from './AsideBlocks/Sign';
import Popular from './AsideBlocks/Popular';
import Subscribe from './AsideBlocks/Subscribe';

const Aside = () =>
<aside className="float">
	<Video/>
	<Ad/>
	<Sign/>
	<Popular/>
	<Subscribe/>
</aside>

export default Aside