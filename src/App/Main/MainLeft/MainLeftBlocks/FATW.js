import React from 'react'
import FATWData from './FATWblocks/FATWData'
import FATWBlock from './FATWblocks/FATWBlock'
const FATW = () => {
    return (
    <div className="from-around-the-world both">
        <div className="more">FROM AROUND THE WORLD<a href="">MORE +</a></div>
        
        
        {
                    FATWData.map(({
                        id,
                        headline,
                        image,
                    })=>(
                        <div key={id}>
                            <FATWBlock
                                id={id}
                                headline={headline}
                                image={image}
                            />
                        </div>
                    ))
                }



    </div>
    )
}
export default FATW