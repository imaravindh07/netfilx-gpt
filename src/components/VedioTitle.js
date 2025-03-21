import React from 'react'

export const VedioTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video py-36 pt-[10%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='text-lg  py-6 w-1/4'>{overview}</p>
        <div>
            <button className='bg-white text-black p-4 px-12 rounded-lg text-xl hover:bg-opacity-80'>
                ▶Play</button>
            <button className='mx-2 bg-gray-500 text-white p-4 px-12 rounded-lg text-xl bg-opacity-50'>
                More Info</button>
        </div>
    </div>
  )
}
