import React from 'react'
import { MdDeliveryDining } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdWorkspacePremium } from "react-icons/md";

const About = () => {
  
  return (
    <div className=''>
      <div className='my-[38px] px-6 md:px-32 lg:px-0 lg:py-12 h-[auto]'>
        <div className='flex space-x-1 text-2xl md:text-4xl text-white justify-center my-20 font-[600]'>
          <p>ABOUT</p>
          <p>US</p>
        </div>
      <div className='flex flex-row flex-wrap lg:space-x-10 lg:space-y-0 space-y-10  justify-center' data-aos="fade-up-right">
        <div className='w-full lg:w-[300px] h-[260px] bg-gray-100 rounded-md shadow-2xl text-center px-8 py-8'>
          <div className='w-14 h-14 p-1 rounded-full mx-auto bg-gray-200 mb-4'>
            <MdDeliveryDining className='w-10 h-10 mx-auto ' />
          </div>

          <div>
            <b>Fastest Delivery</b>
            <p className='text-gray-500'> The entire process of order capture, bagging, routing, and delivery happens within 10 minutes</p>
          </div>
        </div>


         <div className='w-full lg:w-[300px] h-[260px] bg-gray-100 rounded-md shadow-2xl text-center px-8 py-8'>
          <div className='w-14 h-14 p-1 rounded-full mx-auto bg-gray-200 mb-4'>
            <BiSolidFoodMenu className='w-10 h-10 mx-auto ' />
          </div>

          <div>
            <b>Easy to Order</b>
            <p className='text-gray-500'>Order quickly and smoothly on board Destination Gotland!</p>
          </div>
          
        </div>


         <div className='w-full lg:w-[300px] h-[260px] bg-gray-100 rounded-md shadow-2xl text-center px-8 py-8'>
          <div className='w-14 h-14 p-1 rounded-full mx-auto bg-gray-200 mb-4'>
            <MdWorkspacePremium className='w-10 h-10 mx-auto ' />
          </div>

          <div>
            <b>Best Quality</b>
            <p className='text-gray-500'> It is of high quality is typically built to meet or exceed the needs and expectations of the customer.</p>
          </div>
          
        </div>
      </div>

      

    </div>
    </div>
  )
}

export default About