import React, { useState, useEffect } from "react";
import './style.css';
import MiddleNavImg1 from '../../../assets/middleImg1.png';
import MiddleNavImg2 from '../../../assets/middleImg2.png';
import MiddleNavImg from '../../../assets/middleImg.png';
import Graph from '../../../assets/Graph.jpg';

const MiddleBody = ({ startTimer, setStartTimer }) => {
  const [selectedValue, setSelectedValue] = useState(0);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setSelectedValue(value * 60); // Convert minutes to seconds
  };

  useEffect(() => {
    if (startTimer && selectedValue > 0) {
      const timer = setInterval(() => {
        setSelectedValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
      }, 1000); // Decrement every 1 second

      return () => clearInterval(timer); // Clear interval if component unmounts or startTimer changes
    }
  }, [startTimer, selectedValue]);

  // Format time as mm:ss
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="MiddleBody">
      <div className="MiddleTopBar">
        <div className="Flex">
          <div>
            {/* <div className="FlexDi">
              <p className="blueTitle">Potential Return's</p>
              <p className="blueContent textLeft"></p>
            </div> */}
            <div>
              <p className="blueTitle">Potential Return</p>
              <p className="blueContent textLeft">10 COINS</p>
            </div>
          </div>
          <div className="greenStyle">
            <p className="whiteText">Up<br />Wins</p>
            <p className="greenText">0.5%</p>
          </div>
        </div>
        <div className="MiddleTopBarImgGroup">
          <img className="MiddleTopBarImg1" src={MiddleNavImg1} alt="MiddleNavImg1" />
          <img className="MiddleTopBarImg2" src={MiddleNavImg2} alt="MiddleNavImg2" />
          <img className="MiddleTopBarImg5" src={MiddleNavImg} />
          <div className="middleTime">{formatTime(selectedValue)}</div>
        </div>
        <div className="Flex">
          <div className="greenStyle">
            <p className="whiteText">Up<br />Wins</p>
            <p className="redText">0.5%</p>
          </div>
          <div>
            {/* <div>
              <p className="blueTitle">Potential Return's</p>
              <p className="blueContent textRight"></p>
            </div> */}
            <div>
              <p className="blueTitle">Potential Return</p>
              <p className="blueContent textRight">10 COINS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="graph">
        <div className="graphInBtn">
          <select
            className="appearance-none text-center bg-gray-200 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          >
            <option value="0">Select an option</option>
            <option value="5">Oil 5</option>
            <option value="10">Oil 10</option>
            <option value="15">Oil 15</option>
            <option value="5">Gold 5</option>
            <option value="10">Gold 10</option>
            <option value="15">Gold 15</option>
          </select>
        </div>
        <img className="graph" src={Graph} alt="Graph" />
      </div>

      <div className="footer">
        {/* Footer content can go here */}
      </div>
    </div>
  );
};

export default MiddleBody;
