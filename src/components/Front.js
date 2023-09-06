import React from 'react'
import { UilArrowRight } from '@iconscout/react-unicons'

const Front = () => {
    return (
        <div className='front-wrapper '>
            <div className="relative w-full">
                <img
                    src="/images/frontPage.avif"
                    alt="Front Page"
                    className="w-screen h-screen"
                />
                <div className="absolute top-0 left-0 w-full h-full text-white pt-20 pl-10 flex ">
                    <div className="front-text-2 font-suisse font-normal text-base  ">
                        <h1 className="text-2xl pr-8 text-gray-200 ">Aēsop</h1>
                    </div>
                    <div className="front-text-2 flex flex-col space-y-4 font-suisse text-gray-300 w-[40%] max-w-[25rem] font-medium">
                        <h3>Bar Soap</h3>
                        <h1 className="text-2xl  ">
                            A body care classic,
                            reimagined
                        </h1>
                        <p>
                            Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.
                        </p>
                        <div class="button-con pt-[5%] ">

                            <div className='flex  items-center justify-between border border-solid border-gray-300 p-4 w-[60%] hover:bg-white hover:text-gray-700 '>
                                <div class="font font-bold">Discover Bar Soaps</div>
                                <UilArrowRight size={25} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Front
