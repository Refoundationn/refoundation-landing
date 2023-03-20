import React from 'react';
import Image from 'next/image';
import build23 from '../../public/image-grid-1.png'

export default function SecondPage() {
    return (
        <div className="max-w-screen-2xl px-5 py-5 flex flex-col z-0">
            <div className="min-h-screen flex flex-col justify-center">
                <div className="grid grid-cols-5 gap-2 ">
                    <div className="bg-white rounded-3xl shadow-lg min-h-[50px] col-span-3">
                        <Image src={build23} />
                    </div>
                    <div className="px-11 flex flex-col items-center justify-center rounded-lg shadow-lg min-h-[50px] col-span-2">
                        <div className="font-SuisseIntl font-bold text-6xl text-center pb-2">
                            Our Inaugural 2023 Hackathon
                        </div>
                        <div className="font-SuisseIntl font-regular text-1xl text-center">
                            BUILD’23 was our inaugural 2023 hackathon focusing on addressing the most pressing social issues through using 21st century emerging technologies.
                        </div>
                    </div>
                    <div className="py-14 px-4 flex flex-col items-center justify-center rounded-lg shadow-lg min-h-[50px]">
                        <div className="flex flex-col">
                            <div className="font-SuisseIntl font-bold text-6xl text-center bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
                                440+
                            </div>
                            <div className="font-SuisseIntl font-regular text-1xl text-center">
                                Applications
                            </div>
                        </div>
                    </div>
                    <div className="py-14 px-4 flex flex-col items-center justify-center rounded-lg shadow-lg min-h-[50px]">
                        <div className="flex flex-col">
                            <div className="font-SuisseIntl font-bold text-6xl text-center bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">
                                38+
                            </div>
                            <div className="font-SuisseIntl font-regular text-1xl text-center">
                                Countries
                            </div>
                        </div>
                    </div>
                    <div className="py-14 px-4 flex flex-col items-center justify-center rounded-lg shadow-lg min-h-[50px]">
                        <div className="flex flex-col">
                            <div className="font-SuisseIntl font-bold text-6xl text-center bg-gradient-to-r from-blue-300 to-cyan-400 text-transparent bg-clip-text">
                                40+
                            </div>
                            <div className="font-SuisseIntl font-regular text-1xl text-center">
                                Projects
                            </div>
                        </div>
                    </div>
                    <div className="py-14 px-4 flex flex-col items-center justify-center rounded-lg shadow-lg min-h-[50px] col-span-2">
                        <div className="flex flex-col">
                            <div className="font-SuisseIntl font-bold text-6xl text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
                                Four Winning Tracks
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}