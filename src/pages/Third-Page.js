import React from 'react';
import {Spacer} from "@nextui-org/react";
import Image from "next/image"
import diamond from '../../public/join-us/volunteer.svg'
import circle from '../../public/join-us/Our-team.svg'

export default function ThirdPage() {
    return (
        <div>
            <div className="grid grid-cols-3 gap-5">
                <div className="bg-white py-20 px-4 flex flex-col items-center justify-center rounded-lg shadow-lg min-h-[50px]">
                    <div className="flex flex-col">
                        <div className="font-SuisseIntl font-bold text-6xl text-center">
                            Join us
                        </div>
                        <div className="font-SuisseIntl font-regular text-1xl text-center inline-block px-2.5 py-6 rounded-lg shadow-lg">
                            <div className="inline-block">
                                Here
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white py-20 px-10 flex flex-col items-center justify-center rounded-lg shadow-lg min-h-[50px]">
                    <div className="flex flex-col">
                        <div className="flex items-center justify-center pb-6">
                            <Image src={diamond} width={81} height={81} />
                        </div>
                        <div className="font-SuisseIntl font-bold text-4xl text-center pb-2 ">
                            Volunteer Perks
                        </div>
                        <div className="font-SuisseIntl font-regular text-1xl text-center">
                            We are apart of the larger networks of HackPlus and Hack Club. Perks include Google Services and Grammarly subscriptions.
                        </div>
                    </div>
                </div>
                <div className="bg-white py-20 px-10 flex flex-col items-center justify-center rounded-lg shadow-lg min-h-[50px]">
                    <div className="flex flex-col">
                        <div className="flex items-center justify-center pb-6">
                            <Image src={circle} width={77} height={77} />
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
    )
}