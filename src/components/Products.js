import React from 'react';
import { productData } from './../data/data.js';
import { UilAngleRight, UilAngleLeft, UilArrowRight } from '@iconscout/react-unicons'


function App() {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 400;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 400;
    };

    return (
        <div className='space-y-9 py-10'>
            {/* ======== heading ======= */}
            <div class="about-products-left  w-[50%] space-y-6 font-suisse px-28 ">
                <div class="small-heading font-semibold text-sm ">
                    <h3>Fragrance</h3>
                </div>
                <div class="heading  font-medium text-3xl text-gray-700">
                    <h1>
                        Our personal scents
                    </h1>
                </div>
                <div class="para">
                    <p>
                        Unorthodox, evocative, and refined, Aesop fragrances are sensory bridges to memory and connection points to those around us.

                    </p>
                </div>
                <div className='btn flex  items-center  w-[60%]  hover:scale-95 ease-in-out duration-200 '>
                    <div className="pr-6">See All Fragrance</div>
                    <UilArrowRight size={25} />
                </div>

            </div>



            {/* ===== scroller ====== */}
            <div className='relative flex items-center '>
                <UilAngleLeft className='text-white bg-gray-800 absolute left-0 z-50 ' onClick={slideLeft} size={60} />
                <div id='slider' className='flex w-full h-full overflow-x-scroll   scroll whitespace-nowrap scroll-smooth overflow-y-hidden px-20  '
                    style={{ overflowX: 'hidden' }}>
                    {productData.map((item, index) => (
                        <div key={index} className='flex flex-col w-full font-suisse h-full hover:scale-105 ease-in-out duration-300 text-center py-5'>
                            <img
                                className='min-w-[350px] p-2 cursor-pointer  '
                                src={item.img}
                                alt='product img'
                            />
                            <h2 className='hover:underline font-semibold text-sm'>Gloaam Eau De PerFum</h2>
                            <h4 className='font-extralight text-sm text-gray-500 '>Floral,Spicy,Green</h4>
                        </div>
                    ))}
                </div>
                <UilAngleRight className='text-white bg-gray-800 absolute right-0 ' onClick={slideRight} size={60} />
            </div>

        </div>
    );
}

export default App;