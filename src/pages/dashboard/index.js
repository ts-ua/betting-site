import React, { useState } from "react";
import './style.css'
import NavBar from "../../components/dashboard/navBar";
import LayoutL from "../../components/dashboard/layoutL";
import LayoutR from "../../components/dashboard/layoutR";
import MiddleBody from "../../components/dashboard/middleBody";



const Dashboard = () => {
    const [startTimer, setStartTimer] = useState(false);
    return (
        <div>
            <NavBar />
            <div className="TradingBody">
                <LayoutL setStartTimer={setStartTimer} startTimer={startTimer} />
                <MiddleBody startTimer={startTimer} setStartTimer={setStartTimer}/>
                <LayoutR setStartTimer={setStartTimer} startTimer={startTimer}/>
            </div>

        </div>
    )
}
export default Dashboard