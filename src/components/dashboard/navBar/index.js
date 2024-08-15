import React, { useState,useRef  } from "react";
import './style.css'
import NavLeftImg from '../../../assets/Pommie Dollar 1.png'
import Affiliate from '../../../assets/Group 2.png'
import Tasks from '../../../assets/Group 3.png'
import navLogoG from '../../../assets/LOGO 1.png'
import navMenu from '../../../assets/Menu.png'
import { Link } from "react-router-dom";

const NavBar = () => {

    const [image, setImage] = useState(NavLeftImg); // Default image
    const fileInputRef = useRef(null); // Reference to the hidden file input

    // Function to handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Update image with the uploaded file
            };
            reader.readAsDataURL(file); // Convert file to base64
        }
    };

    // Function to trigger file input click
    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Programmatically click the hidden file input
        }
    };


    const [flag, setFlag] = useState(false)

    const ConnectWalletFlag = () => {
        setFlag(true)
    }

    return (
        <div className="navBar">
            <div >
                <img 
                    className="navLeftImg cursor-pointer rounded-full" 
                    src={image} 
                    alt="Uploaded" 
                    onClick={handleImageClick} 
                />
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                    style={{ display: 'none' }} 
                    ref={fileInputRef} 
                />
            </div>
            <div className="navMiddle">
                <Link className="navBGnone" to="/dashboard">
                    <img src={Affiliate} />
                </Link>
                <button className="navBG" onClick={ConnectWalletFlag}>

                    {
                        !flag == true ? <div className="connectbtn">Connect Wallet</div> : <div>
                            <p className="NavMoneyTitle">USDT BALANCE</p>
                            <p className="NavMoney">$0.00</p>
                        </div>
                    }

                </button>

                <button className="navBGnone">
                    <img src={Tasks} />
                </button>
            </div>
            <div className="navRLogo">
                <img className="navLogo" src={navLogoG} />
                <img className="navMenu" src={navMenu} />
            </div>
        </div>
    )
}

export default NavBar