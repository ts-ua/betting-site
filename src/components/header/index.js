import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from './../../assets/Vector (3).png';
import pic1 from "./../../assets/q (3).png";
import pic2 from "./../../assets/q (4).png";
import pic3 from "./../../assets/Vector (4).png";
import pic4 from "./../../assets/Vector (5).png";
import pic5 from "./../../assets/Vector (6).png";
import Modal from "../modal";
import './style.css';

export function Header() {
    const button_list = [
        {
            url: pic1,  // Use imported image variable
            text: "EARN"
        },
        {
            url: pic2,  // Use imported image variable
            text: "Link Manager"
        },
        {
            url: pic3,  // Use imported image variable
            text: "Earning Report"
        },
        {
            url: pic4,  // Use imported image variable
            text: "Dashboard"
        }
    ];

   


    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <header className="mb-5">
            <div className="grid grid-cols-3 flex">
                <div className="flex justify-center gap-20 py-6">
                    <Link to="/" className="py-2" style={{zIndex:'1000'}}>
                        <img src={LogoImage} alt="Logo Image" className="w-12 h-auto"/>
                    </Link>
                    <div style={{zIndex:'1000'}}>
                        <button className="bg-violet px-8  text-white text-center rounded-lg"  onClick={openModal}>
                            <span className="font-thin text-lg font-barlow" >Generate Link</span>
                        </button>
                        <Modal
                            isOpen={isOpen}
                            onClose={closeModal}
                            title="Generate Affiliate Link"
                            buttonText="Create Link"
                        />
                    </div>
                </div>
                 <div className="navMiddle">
                    <button className="navBG">

                        {
                            <div>
                                <p className="NavMoneyTitle">USDT BALANCE</p>
                                <p className="NavMoney">$0.00</p>
                            </div>
                        }

                    </button>
                </div>
                <div className="flex justify-between items-center gap-8 mx-auto py-6"
                style={{ transform: 'translate(630px, 0px)' }}>
                    {button_list.map((item, index) => (
                        <div key={index} className="mx-auto h-auto text-white flex justify-center items-center flex-col">
                            <Link className="bg-darkViolet w-24 rounded-lg flex justify-center py-2" to={item.text === "EARN" ? "/earn" :'/link-manager' }>
                                <img src={item.url} alt={item.text} className="w-12 h-auto" /> {/* Corrected to use item.url */}
                            </Link>
                            <span className="font-thin text-sm font-roboto mt-2 text-lightBlue">{item.text}</span>
                        </div>
                    ))}
                     <Link>
                        <div className=" w-24 rounded-lg flex justify-center">
                            <img src={pic5} alt="menu" /> {/* Corrected to use item.url */}
                        </div>
                    </Link>
                </div>
            </div>
            
        </header>
    );
}
