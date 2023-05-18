import React from 'react'
import laptop from '../Assets/img/laptop.jpg'

export default function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto my-10 md:grid grid-cols-2'>
        <div className=' col-span-1 md:w-[80%] text-center'>
            <img src={laptop} alt="" className='inline'/>
        </div>
        <div className=' flex flex-col justify-center col-span-1'>
        <h1 className='text-[#00df9a] font-bold'>LEARN FROM EXPERTS</h1>
        <p className='my-2 text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit soluta reprehenderit sequi nisi! Dolor nobis, voluptate excepturi architecto numquam nisi, quibusdam natus quos quae quidem amet necessitatibus eveniet voluptatum commodi.
        </p>
        <button className='bg-black w-[30%] text-white p-3 rounded'>Get started</button>
        </div>
        </div>
  )
}
