import React from 'react';
import Image from 'next/image'
import redgreenblue from '../../public/redgreenblue.png';

export default function FirstPage() { 

    // id="build23-scroll" on second page 
    function ScrollButton() {
        const handleButtonClick = () => {
            const targetElement = document.getElementById("build23-scroll");
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        return (
            <a onClick={handleButtonClick}>BUILD&apos;23 - Our Past Iteration</a>
        )
    }
    return (
        <div className="w-full h-screen bg-cover bg-no-repeat relative flex ">
            <Image alt="blurred colors background" src={redgreenblue} layout="intrinsic" objectFit="cover" objectPosition="center" className="z-10 " />
            <div className="max-w-screen-2xl absolute inset-0 z-10 mx-auto text-center">
                <div className="px-5 py-5 flex flex-col z-0">
                    <div className="min-h-screen flex flex-col justify-center">
                        <div className="h-16 text-black flex flex-row items-center justify-between">
                            {/* Header */}
                            <img alt="RFDN Logo" src="/RFDN.svg" height="21"/>
                            <div id="firstpage-scroll" className="flex gap-6">
                                <span><a href="mailto:info@refoundation.co">Contact</a></span>
                                <span><a href="https://build23.xyz" target="_blank">Our Past Iteration</a></span>
                            </div>
                            <div className="cursor-pointer hover:bg-blue-400 focus:outline-none px-3 py-2 bg-black rounded-lg">
                                <button className="text-white ">
                                    Work with us
                                </button>
                            </div>
                        </div>
                        {/* The tagline and the svg  */}
                        <div className="flex flex-1 ">
                            <div className="text-8xl font-bold font-SuisseIntl self-center px-5">
                                We are a 501(c)(3) non-profit that creates hackathon opportunities for youth.
                            </div>
                        </div>
                        <div className="justify-self-end">
                            <div className="flex flex-row gap-4 justify-center ">
                                <button  className="cursor-pointer hover:bg-blue-400 focus:outline-none px-3 py-2 bg-black rounded-lg text-white">
                                    <ScrollButton />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}