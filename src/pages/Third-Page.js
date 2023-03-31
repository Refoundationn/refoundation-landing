import React from 'react';
import {Spacer} from "@nextui-org/react";
import Image from "next/image"
import diamond from '../../public/join-us/volunteer.svg'
import circle from '../../public/join-us/Our-team.svg'

export default function ThirdPage() {
    return (
        <div className="w-full ">
            <div className="max-w-screen-2xl mx-auto py-5 px-5">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    <div className="bg-white xl:py-20 py-32 px-4 flex flex-col items-center justify-center shadow-lg min-h-[50px] md:col-span-2 lg:col-span-1">
                        <div className="flex flex-col">
                            <div className="font-SuisseIntl font-bold text-6xl text-center">
                                Join us
                            </div>
                            <div className=" flex inline-block items-center justify-center pt-6">
                                <div className="cursor-pointer hover:bg-blue-50 focus:outline-none font-SuisseIntl font-regular text-xl shadow-lg rounded-lg px-7 py-2.5">
                                <a href="https://refoundation.notion.site/Hiring-Refoundation-45fdc936471b47a28c4676e0fc41b342" target='blank'>Apply Today</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-4 border-r-0 border-l-0 border-black sm:border-white bg-white py-32 px-10 flex flex-col items-center justify-center min-h-[50px]  shadow-lg ">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center pb-6">
                                <Image alt="Diamond Shape" src={diamond} width={81} height={81} />
                            </div>
                            <div className="font-SuisseIntl font-bold text-4xl text-center pb-2 ">
                                Volunteer Perks
                            </div>
                            <div className="font-SuisseIntl font-regular text-1xl text-center">
                                We are apart of the larger networks of HackPlus and Hack Club. Perks include Google Services and Grammarly subscriptions.
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-r-4 border-black sm:border-white bg-white py-32 px-10 flex flex-col items-center justify-center  shadow-lg min-h-[50px]">
                        <div className="flex flex-col">
                            <div className="flex items-center justify-center pb-6">
                                <Image alt="Circle Shape" src={circle} width={77} height={77} />
                            </div>
                            <div className="font-SuisseIntl font-bold text-4xl text-center pb-2">
                            Our Team
                            </div>
                            <div className="font-SuisseIntl font-regular text-1xl text-center">
                                We are a group of ambitious youth looking to bring hackathon culture mainstream, to renew the educational system that is built for the previous decade.                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}