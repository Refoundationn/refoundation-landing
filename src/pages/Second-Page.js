import React from 'react';
import Image from 'next/image';
import build23 from '../../public/image-grid-1.png'
import build23background from '../../public/build23background.png'
import blueline from '../../public/blue-line.png'
import {Spacer} from "@nextui-org/react";

export default function SecondPage() {
    return (
        <div className="w-full min-h-screen bg-cover bg-no-repeat relative flex ">
            <Image src={blueline} layout="fill" objectFit="contain" objectPosition="center" className="z-0"></Image>
            <div className="max-w-screen-2xl relative inset-0 z-10 px-5 py-5 flex flex-col mx-auto" >
                <div className="min-h-screen flex flex-col justify-center ">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 md:grid-cols-3 ">
                        <div id="build23-scroll" className="bg-white rounded-xl shadow-lg min-h-[50px] col-span-1 sm:col-span-3">
                            <Image src={build23background} className="rounded-xl"/>
                        </div>
                        <div className="bg-white py-14 px-11 flex flex-col items-center justify-center  shadow-lg min-h-[50px] lg:col-span-2 md:col-span-3 ">
                            <div  className="font-SuisseIntl font-bold text-6xl text-center pb-2">
                                Our Inaugural 2023 Hackathon
                            </div>
                            <div className="font-SuisseIntl font-regular text-1xl text-center">
                                BUILD&apos;23 was our inaugural 2023 hackathon focusing on addressing the most pressing social issues through using 21st century emerging technologies.
                            </div>
                        </div>
                        <div className="bg-white py-10 sm:py-14 px-4 flex flex-col items-center justify-center shadow-lg min-h-[50px]">
                            <div className="flex flex-col">
                                <div className="font-SuisseIntl font-bold text-6xl text-center bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
                                    440+
                                </div>
                                <div className="font-SuisseIntl font-regular text-1xl text-center">
                                    Applications
                                </div>
                            </div>
                        </div>
                        <div className="bg-white py-10 sm:py-14 px-4 flex flex-col items-center justify-center shadow-lg min-h-[50px]">
                            <div className="flex flex-col">
                                <div className="font-SuisseIntl font-bold text-6xl text-center bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">
                                    38+
                                </div>
                                <div className="font-SuisseIntl font-regular text-1xl text-center">
                                    Countries
                                </div>
                            </div>
                        </div>
                        <div className="bg-white py-10 sm:py-14 px-4 flex flex-col items-center justify-center shadow-lg min-h-[50px]">
                            <div className="flex flex-col">
                                <div className="font-SuisseIntl font-bold text-6xl text-center bg-gradient-to-r from-cyan-400 to-cyan-400 text-transparent bg-clip-text">
                                    40+
                                </div>
                                <div className="font-SuisseIntl font-regular text-1xl text-center">
                                    Projects
                                </div>
                            </div>
                        </div>
                        <div className="bg-white py-14 px-4 flex flex-col items-center justify-center shadow-lg min-h-[50px] lg:col-span-2 md:col-span-3">
                            <div className="flex flex-col">
                                <div className="font-SuisseIntl font-bold text-6xl text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
                                    Four Winning Tracks
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-20">
                        <div className="grid grid-cols-3 md:grid-cols-7 grid-rows-1 gap-5 justify-center items-center">
                            <div className="max-h-[64px]">
                                <Image
                                    alt="Adobe Logo"
                                    src="/sponsors/adobe.png"
                                    width={210}
                                    height={64}
                                    objectFit="cover"
                                />
                            </div>
                            <div className="max-h-[64px]">
                                <Image
                                    alt="Wolfram Logo"
                                    src="/sponsors/wolfram.png"
                                    width={181}
                                    height={64}
                                    objectFit="cover"
                                />
                            </div>
                            <div className=" max-h-[64px] flex justify-center">
                                <Image
                                    alt="XYZ Logo"
                                    src="/sponsors/xyz.png"
                                    width={111}
                                    height={64}
                                    objectFit="cover"
                                />
                            </div>
                            <div className="max-h-[64px]">
                                <Image
                                    alt="ISABC Logo"
                                    src="/sponsors/isabc.png"
                                    width={152}
                                    height={62}
                                    objectFit="cover"
                                />
                            </div>
                            <div className="max-h-[64px]">
                                <Image
                                    alt="AlphaWallet Logo"
                                    src="/sponsors/alphawallet.png"
                                    width={302}
                                    height={64}
                                    objectFit="cover"
                                />
                            </div>
                            <div className=" max-h-[64px]">
                                <Image
                                    alt="Verbwire Logo"
                                    src="/sponsors/verb.png"
                                    width={306}
                                    height={64}
                                    objectFit="cover"
                                />
                            </div>
                            <div className="max-h-[60px] col-span-3 sm:col-span-1 flex justify-center">
                                <Image
                                    alt="Mento Logo"
                                    src="/sponsors/mento.png"
                                    width={179}
                                    height={64}
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}