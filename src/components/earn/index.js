import React from "react";
import check from "./../../assets/Group 1000000827.png"
import check1 from "./../../assets/next.png"
import { Header } from "../header";
export function Earn() {
    return (
        <div className="">
            <Header/>
            <div className="flex justify-center text-center  font-righteous text-white text-lg tracking-widest text-shadow-lg">
                <span>EARN</span>
            </div>
           <div className="flex items-center justify-center mt-12">
                <div className=" overflow-hidden w-[500px] rounded-3xl">
                    <table className="w-full border-collapse">
                        <thead className="text-lightBlue bg-table_head h-20 font-righteous text-white text-lg tracking-widest text-shadow-lg">
                            <tr>
                                <th>TASKS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-table_body text-center h-20 font-barlow ">
                                <td className="text-lightBlue flex justify-around px-4 py-3 items-center">
                                    <div className="text-left">
                                        <span className="text-xl">Subscribe to Youtube</span><br />
                                        <span>+200</span>
                                    </div>
                                    <img src={check} alt="check" className="w-12 h-auto" /></td>
                            </tr>
                            <tr className="bg-table_head text-center h-20 font-barlow">
                                <td className="text-lightBlue flex justify-around px-4 pt-4  items-center">
                                    <div className="text-left">
                                        <span className="text-xl">Join Telegram Channel</span><br />
                                        <span>+200</span>
                                    </div>
                                    <img src={check1} alt="check" className="w-4 h-auto mr-3" /></td>
                            </tr>
                            <tr className="bg-table_body text-center h-20 font-barlow">
                                <td className="text-lightBlue flex justify-around px-4 py-3 items-center">
                                    <div className="text-left">
                                        <span className="text-xl"> Join Twitter (x)</span><br />
                                        <span>+200</span>
                                    </div>
                                    <img src={check} alt="check" className="w-12 h-auto ml-9" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}