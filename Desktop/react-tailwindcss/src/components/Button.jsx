import React from 'react'

export const Button = ({ label, iconURL }) => {
    return (
        <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white rounded-full'>
            {label}
            {iconURL && <img src={iconURL} alt="w-5 h-5 arrow right icon" className='ml-2 rounded-full' />}
        </button>
    )
}
