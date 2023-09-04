import React from 'react'

const Quotes = () => {
    return (
        <div className='q-container h-[50vh] flex flex-col justify-center items-center text-center space-y-8'>
            <div class="quote font-suisse font-medium text-3xl">
                ‘Nothing is ever ended, everything only begun.’
            </div>
            <div class="writer font-suisse text-gray-500">
                Sara Teasdale
            </div>
        </div>
    )
}

export default Quotes