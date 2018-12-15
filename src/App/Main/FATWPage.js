import React from 'react' 
import FATWData, { getFATWMap } from './MainLeft/MainLeftBlocks/FATWblocks/FATWData';

const FATWPage = ({
    productsItem = getFATWMap(FATWData),
    match
}) => 
<main className="main float">
    <h1>{productsItem[match.params.FATWId].headline}</h1>
    <img src={productsItem[match.params.FATWId].image}/>
    <p>{productsItem[match.params.FATWId].text}</p>
</main>


export default FATWPage 
