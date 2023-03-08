import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <div className="hero min-w-full flex justify-between min-h-[91.5vh] z-0 relative">
            <div className="absolute content z-20 pl-12 md:pl-24 pt-20">
                <h1 className=' font-semibold text-3xl'>HandyHome: Job Marketplace</h1>
                <div className="h-3" />
                <h3 className='text-xl'>Find to employ or post to get <br /> employed</h3>
                <div className="h-9" />
                <button className='button min-h-[3rem] min-w-[8rem] rounded bg-primary text-white border hover:bg-black hover:ease-in-out hover:duration-300'>Post a Job</button>
            </div>

            <div className="hidden md:block absolute z-10 hero_icon h-full min-w-full pt-4">
                <Image src="/air_support.png" className=' h-full w-full max-w-full object-cover object-top' height={720} width={1920} alt="hero_icon" />
            </div>
        </div>
    )
}