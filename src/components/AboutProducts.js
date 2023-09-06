import React from 'react'
import { UilArrowRight } from '@iconscout/react-unicons';

const AboutProducts = ({ AboutProductsData }) => {

    let checkNum = AboutProductsData.id

    const imgDiv = (
        <div class="about-products-right lg:w-[55%] w-full p-20  flex justify-center items-center" >
            <div class="img">
                {console.log(AboutProductsData.image)
                }
                {
                    AboutProductsData.image ?
                        <img
                            src={AboutProductsData.image}
                            alt="Front Page"
                            className="w-full h-[80vh] "
                        />
                        :
                        <video autoPlay muted loop >
                            <source
                                src={AboutProductsData.video}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>

                }
            </div>
        </div>

    )

    const textDiv = (
        <div class="about-products-left space-y-9 px-28 lg:w-[45%] w-full py-5 ">
            <div class="small-heading font-semibold text-sm ">
                <h3>{AboutProductsData.smallHeading }</h3>
            </div>
            <div class="heading  font-medium text-3xl text-gray-700">
                <h1>
                    {AboutProductsData.heading}
                </h1>
            </div>
            <div class="para">
                <p>
                    {AboutProductsData.para}
                </p>
            </div>
            <div className='btn flex  items-center justify-between border border-solid border-gray-300 p-4 w-[60%] hover:bg-black hover:text-white '>
                <div class="font font-bold">{AboutProductsData.btn}</div>
                <UilArrowRight size={25} />
            </div>

        </div>
    )

    return (
        // console.log("AboutProductsData", AboutProductsData)
        <div class="about-products-wrapper">
            <div class="about-products-container py-28 font-suisse flex flex-col lg:flex lg:flex-row justify-between w-full">
                {/* ==== left side ===  */}

                {console.log("checkNum", checkNum % 2 === 0 ?  'yes' : 'no')}

                {
                    checkNum % 2 === 0 ? (
                        <>
                            {imgDiv}
                            {textDiv}
                        </>
                    ) : (
                        <>
                            {textDiv}
                            {imgDiv}
                        </>
                    )

                }

            </div>
        </div >

    )
}

export default AboutProducts