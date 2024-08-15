import React from "react";
import './style.css'
import greenBtn from '../../../assets/Group 13.png'
import Poket1 from '../../../assets/q (1).png'


const LayoutL = ({ startTimer, setStartTimer }) => {
    const handleClick = () => {
        // Check if setStartTimer is a function
        if (typeof setStartTimer === 'function') {
            setStartTimer(true);
        } else {
            console.error('setStartTimer is not a function');
        }
    };
    return (
        <div className="LayoutL">
            <div className="greenLine"></div>
            <button onClick={handleClick}>
                <img className="poket1" src={Poket1} />
                <img className="greenBtn" src={greenBtn} />
            </button>
        </div>
    )
}

export default LayoutL;