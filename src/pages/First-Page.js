import React from 'react';
import Image from 'next/image'
import redgreenblue from '../../public/redgreenblue.png';

export default function FirstPage() { 
    return (
        <div className="w-full h-screen bg-cover bg-no-repeat relative flex ">
            <Image src={redgreenblue} layout="fill" objectFit="cover" objectPosition="center" className="z-10" />
            <div className="max-w-screen-2xl absolute inset-0 z-10">
                <div className="px-5 py-5 flex flex-col z-0">
                    <div className="min-h-screen flex flex-col justify-center">
                        <div className="h-16 text-black flex flex-row items-center justify-between">
                            {/* Header */}
                            <img src="/RFDN.svg" height="21"/>
                            <div className="flex gap-6">
                                <span>Contact</span>
                                <span>Our Past Iteration</span>
                            </div>
                            <div className="px-3 py-2 bg-black rounded-lg">
                                <button className="text-white">Work with us</button>
                            </div>
                        </div>
                        {/* The tagline and the svg  */}
                        <div className="flex flex-1 ">
                            <div className="text-8xl font-bold font-SuisseIntl self-center">
                                We are a 501(c)3 non-profit that creates hackathon opportunities for youth.
                            </div>
                        </div>
                        <div className="justify-self-end">
                            <div className="flex flex-row gap-4 justify-center ">
                                <button className="px-3 py-2 bg-black rounded-lg text-white ">
                                    BUILD'23 - Our Past Iteration
                                </button>
                                <button className="px-3 py-2 bg-black rounded-lg text-white">
                                    Join us as a hackathon organizer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}