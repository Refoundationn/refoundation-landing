import React from 'react';
import Image from "next/image"
import RFDNWhite from "../../public/rfdn-white.svg"

export default function Footer() {
    return (
        <div className="max-w-screen-2xl flex flex-col bg-black px-5 py-10">
            <div className="flex flex-row justify-between">
                <div className="flex justify-center">
                    <Image src={RFDNWhite}  height={21} />
                </div>
                <div className="flex flex-col text-white text-right">
                    <ul className="py-5">
                        <li className="list-item py-1">Back to the top</li>
                        <li className="list-item py-1">Join our team</li>
                        <li className="list-item py-1 ">Contact/Sponsor</li>
                    </ul>
                </div>
            </div>
            <div className="text-gray-300 text-center flex flex-col ">
                © 2022 - 2023 Refoundation, All Rights Reserved
            </div>
        </div>
    )
}