import React from "react";
import { Header } from "../../components/header";
import UpDown from '../../assets/down-up.png'
import ClipBoard from '../../assets/clip-board.png'
export function Home() {
     const data = [
                { created: '03.08.24', name: 'Jan', link: 'https://updown.gamblifygame.bet?ref', friends: '0', earn: '0.00', total_earn: '0.00' },
                { created: '03.08.24', name: 'Feb', link: 'https://updown.gamblifygame.bet?ref', friends: '0', earn: '0.00', total_earn: '0.00' },
                { created: '03.08.24', name: 'Mar', link: 'https://updown.gamblifygame.bet?ref', friends: '0', earn: '0.00', total_earn: '0.00' },
        ];
    return (
        <div className="">
            <Header/>
            <div className="flex justify-center text-center  font-righteous text-white text-lg tracking-widest text-shadow-lg">
                <span>REFERRAL PROGRAM LINK MANAGER</span>
            </div>
            <div className="mx-12 font-thin text-2xl font-barlow mt-2 text-lightBlue">
                <span>{data.length} Links Created</span>
            </div>
            <div>
                <div className="overflow-hidden rounded-tl-2xl rounded-tr-2xl">
                    <table className="w-full border-collapse">
                        <thead className="text-lightBlue bg-table_head h-20">
                            <tr >
                                <th >
                                    <div className="flex gap-4 justify-center">
                                        DATE CREATED                                
                                        <img src={UpDown} alt="up-down" className="w-2 h-3  mt-2" />
                                    </div>
                                </th>
                                <th>NAME</th>
                                <th>LINK</th>
                                <th >
                                    <div className="flex gap-4 justify-center">
                                        FRIENDS REGISTERED                               
                                        <img src={UpDown} alt="up-down" className="w-2 h-3  mt-2" />
                                    </div>
                                </th>
                                <th >
                                    <div className="flex gap-4 justify-center">
                                        EARN TODAY                                
                                        <img src={UpDown} alt="up-down" className="w-2 h-3  mt-2" />
                                    </div>
                                </th>
                                <th >
                                    <div className="flex gap-4 justify-center">
                                       EARNINGS TOTAL                              
                                        <img src={UpDown} alt="up-down" className="w-2 h-3  mt-2" />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                            <tr key={index} className="bg-table_body text-center h-20 font-barlow text-xl">
                                <td className="text-lightBlue ">{item.created}</td>
                                <td className="text-lightBlue ">{item.name}</td>
                                    <td className="text-lightBlue">
                                        <div className="flex justify-center gap-2">
                                            {item.link}
                                            <img src={ClipBoard} alt="clipboard" className="w-5 h-5 mt-1"/>
                                        </div>
                                    </td>
                                <td className="text-lightBlue">{item.friends}</td>
                                <td className="text-lightGreen">${item.earn}</td>
                                <td className="text-lightGreen">${item.total_earn}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>

        </div>
    )
}