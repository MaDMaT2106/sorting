import {useSelector } from "react-redux";
import React from 'react';

import './Histogram.css';
import '../../SortingVisualizer/SortingVisualizer.css';

export function Histogram() {
    const arrayToSort = useSelector((state) => state.sortReducer.arrayToSort);
    return (
        <div className="visualizeContainer">
            {arrayToSort.map((elem,index)=>{
                if (elem===undefined){
                    return null
                }else{
                    return(
                <div 
                id={`bar-${index}`}
                className='arrayBar'
                style={{width: '30px', height:`${elem*5}px`}}
                key={index}
                >{elem}</div>
                )
                }
            })}
        </div>
    )
}
export default React.memo(Histogram)