import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-[#269ffb] p-4'>
       <div className=" max-w-[1240px] mx-auto justify-between py-[50px] md:flex">
        <div className='m-2'>
            <h1 className='text-[20px] md:text-[40px] font-bold text-white'> Want to learn I.T. skills?</h1>
            <span className='text-white'>
                Signup for our newsletter and stay up to date.
            </span>
        </div>
        <div className='m-2'>
            <input type="text" className='sm:w-full rounded mb-2 p-3 mr-2 text-slate-600' placeholder='Email' />
            <button className='bg-black w-[30%] text-white p-3 rounded'>Get started</button>
            <br />
            <p className='text-white'>
             We care about the protection of your data. Read our <br /> <a href="" className='text-black'>Privacy Policy</a>
            </p>
        </div>
        </div>
        </div>
  )
}
