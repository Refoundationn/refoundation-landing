import React from 'react';
import Image from "next/image"
import RFDNWhite from "../../public/rfdn-white.svg"

export default function Footer() {

    // id="firstpage-scroll"
    function ScrollButton() {
        const handleButtonClick = () => {
            const targetElement = document.getElementById("firstpage-scroll");
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        return (
            <a onClick={handleButtonClick}>Back to the top</a>
        )
    }

    return (
        <div className="w-full bg-black ">
            <div className="max-w-screen-2xl flex flex-col  px-5 py-10 pb-4 mx-auto">
                <div className="flex flex-row justify-between">
                    <div className="flex justify-center items-center">
                        <Image alt="RFDN logo" src={RFDNWhite}  height={21} />
                    </div>
                    <div className="flex flex-col text-white text-right">
                        <ul className="py-5">
                            <li className="list-item py-1 cursor-pointer focus:outline-none"><ScrollButton /></li>
                            <li className="list-item py-1 cursor-pointer focus:outline-none"><a href="https://refoundation.notion.site/Hiring-Refoundation-45fdc936471b47a28c4676e0fc41b342" target='blank'>Join our team</a></li>
                            <li className="list-item py-1 cursor-pointer focus:outline-none"><a href="mailto:info@refoundation.co">Contact/Sponsor</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-gray-800 text-center flex flex-col ">
                    © 2022 - 2023 Refoundation, All Rights Reserved
                </div>
            </div>
        </div>
        
    )
}