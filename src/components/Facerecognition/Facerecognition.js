import React from "react";
import './Facerecognition.css';

const Facerecognition = ({imageUrl, box}) => {
    const { topRow, rightCol, bottomRow, leftCol, } = box;
    return (
         <div className='center ma'>
             <div className="absolute mt2">
                <img 
                    id='inputimage'
                    width='500px'
                    height='auto'
                    src={imageUrl} 
                    alt="" 
                />
                <div className="bounding-box" style={{top:topRow, right:rightCol, bottom:bottomRow, left:leftCol}} ></div>
             </div>
         </div>
    )
}

export default Facerecognition;