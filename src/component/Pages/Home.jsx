import React, { useEffect } from 'react'
import Shawarma from '../../assets/shawarma.png';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Home = () => {
  useEffect(()=>{
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: false,
    })
  }, [])
  return (
    <div className='lg:my-[38px] px-6 lg:mx-10 lg:px-20 lg:py-2 h-[auto]'>
      <div className='mt-20 flex flex-col lg:flex-row justify-center gap-20'>
        <div className='mt-20'>
          <p className='text-yellow-300 text-lg'>_Restaurant</p>
          <h1 className='text-3xl font-[800] mt-6 text-white'>
            We Serve <br /> Delicious Wrap&Roll <br /> Meal
          </h1>
          <p className='text-gray-300 mt-4'>Keep it easy with these simple and delicious recipes <br /> from make-ahead lunches and midweek meals to fuss-free sides 
          </p>

          <button className='text-white w-[150px] h-[50px] bg-yellow-500 text-xl font-[600] mt-6 rounded-[25px]'>Get Started</button>

        </div>

        <img data-aos="fade-left" className='rounded-[360px] md:w-[500px] md:h-[500px]'  src={Shawarma} alt="shawarma-image" />

      </div>
    </div>
  )
}

export default Home