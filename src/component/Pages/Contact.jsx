import React from 'react'

const Contact = () => {
  return (
    <div className='px-4 md:px-32 lg:px-56'>
      <div class="w-full h-[auto] bg-black rounded-lg px-8 lg:px-[25%] py-8 md:py-20 space-y-8">
        <h1 className='text-center text-4xl font-[500] text-white'>Join Our Member And Get Discount to 35%</h1>

        <div className=''>
        <form action="">
          <div className='w-full  h-[50px] bg-white flex justify-between pl-6 items-center rounded-[25px]'>
            <input type="email" placeholder='Enter Your Email' id="" className='bg-transparent w-[60%] md:w-[70%] h-[45px] text-gray-700 outline-none' />

            <button className='w-[40%] md:w-[30%] h-[50px] bg-green-600 rounded-[25px] text-white'>Sign in</button>
          </div>
        </form>
      </div>
      </div>

      
    </div>
  )
}

export default Contact