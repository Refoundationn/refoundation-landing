import React from 'react';
import Image from 'next/image';
import build23 from '../../public/image-grid-1.png'
import blueline from '../../public/blue-line.png'
import {Spacer} from "@nextui-org/react";


export default function SecondPage() {
    return (
        <div className="w-full h-screen bg-cover bg-no-repeat relative flex ">
            <Image src={blueline} layout="fill" objectFit="cover" objectPosition="center" className="z-0"></Image>
            <div className="max-w-screen-2xl absolute inset-0 z-10 px-5 py-5 flex flex-col mx-auto" >
                <div className="min-h-screen flex flex-col justify-center ">
                    <div className="grid grid-cols-5 gap-2">
                        <div className="bg-white rounded-3xl shadow-lg min-h-[50px] col-span-3">
                            <Image src={build23} />
                        </div>
                        <div className="bg-white px-11 flex flex-col items-center justify-center  shadow-lg min-h-[50px] col-span-2">
                            <div className="font-SuisseIntl font-bold text-6xl text-center pb-2">
                                Our Inaugural 2023 Hackathon
                            </div>
                            <div className="font-SuisseIntl font-regular text-1xl text-center">
                                BUILD’23 was our inaugural 2023 hackathon focusing on addressing the most pressing social issues through using 21st century emerging technologies.
                            </div>
                        </div>
                        <div className="bg-white py-14 px-4 flex flex-col items-center justify-center shadow-lg min-h-[50px]">
                            <div className="flex flex-col">
                                <div className="font-SuisseIntl font-bold text-6xl text-center bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
                                    440+
                                </div>
                                <div className="font-SuisseIntl font-regular text-1xl text-center">
                                    Applications
                                </div>
                            </div>
                        </div>
                        <div className="bg-white py-14 px-4 flex flex-col items-center justify-center shadow-lg min-h-[50px]">
                            <div className="flex flex-col">
                                <div className="font-SuisseIntl font-bold text-6xl text-center bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">
                                    38+
                                </div>
                                <div className="font-SuisseIntl font-regular text-1xl text-center">
                                    Countries
                                </div>
                            </div>
                        </div>
                        <div className="bg-white py-14 px-4 flex flex-col items-center justify-center shadow-lg min-h-[50px]">
                            <div className="flex flex-col">
                                <div className="font-SuisseIntl font-bold text-6xl text-center bg-gradient-to-r from-cyan-400 to-cyan-400 text-transparent bg-clip-text">
                                    40+
                                </div>
                                <div className="font-SuisseIntl font-regular text-1xl text-center">
                                    Projects
                                </div>
                            </div>
                        </div>
                        <div className="bg-white py-14 px-4 flex flex-col items-center justify-center shadow-lg min-h-[50px] col-span-2">
                            <div className="flex flex-col">
                                <div className="font-SuisseIntl font-bold text-6xl text-center bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
                                    Four Winning Tracks
                                </div>
                            </div>
                        </div>
                    </div>
                    <Spacer y={8} />
                    <div className="py-10">
                        <div className="grid grid-cols-7 grid-rows-1 gap-5 justify-center items-center">
                            <div className="max-h-[64px]">
                                <Image
                                    src="/sponsors/adobe.png"
                                    width={210}
                                    height={64}
                                />
                            </div>
                            <div className="max-h-[64px]">
                                <Image
                                    src="/sponsors/wolfram.png"
                                    width={181}
                                    height={64}
                                />
                            </div>
                            <div className=" max-h-[64px] flex justify-center">
                                <Image
                                    src="/sponsors/xyz.png"
                                    width={111}
                                    height={64}
                                />
                            </div>
                            <div className="max-h-[64px]">
                                <Image
                                    src="/sponsors/isabc.png"
                                    width={152}
                                    height={62}
                                />
                            </div>
                            <div className="max-h-[64px]">
                                <Image
                                    src="/sponsors/alphawallet.png"
                                    width={302}
                                    height={64}
                                />
                            </div>
                            <div className=" max-h-[64px]">
                                <Image
                                    src="/sponsors/verb.png"
                                    width={306}
                                    height={64}
                                />
                            </div>
                            <div className="max-h-[64px]">
                                <Image
                                    src="/sponsors/mento.png"
                                    width={179}
                                    height={64}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}