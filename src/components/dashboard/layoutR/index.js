import React from "react";
import './style.css'
import redBtn from '../../../assets/Group 14.png'
import Poket2 from '../../../assets/q (2).png'

const LayoutR = ({ startTimer, setStartTimer }) => {
    const handleClick = () => {
        setStartTimer(true)
    }
    return (
        <div className="LayoutR">
            <div className="redLine"></div>
            <div>
                <button onClick={handleClick}>
                    <img className="poket2" src={Poket2} />
                    <img className="redBtn" src={redBtn} />
                </button>
            </div>
        </div>
    )
}
export default LayoutR