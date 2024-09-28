import React from "react";
import smallChops from '../../assets/small-chops.jpg'
import sandwish from '../../assets/sandwish.jpg'
import suasage from '../../assets/suasage.jpeg'








const Menu = () => {
    return (
        <div className="px-4 md:px-32 lg:px-24">
            <div className="text-center">
                <div className="mb-10">
                    <h1 className="text-4xl text-white font-[500] mb-2">Our Menu</h1>

                    <p className="text-gray-100 text-lg">
                        All our menu are special, and will definitely meet your wants.
                    </p>
                </div>

                <div>
                    <div
                        className="flex flex-row flex-wrap lg:space-x-10 lg:space-y-0 space-y-10  justify-center"
                        data-aos="fade-up-left">
                        <div className="w-full lg:w-[300px] h-[260px] bg-gray-100 rounded-md shadow-2xl text-center px-8 py-8">
                            <img className="w-full h-full" src={smallChops} alt="" />
                        </div>

                        <div className="w-full lg:w-[300px] h-[260px] bg-gray-100 rounded-md shadow-2xl text-center px-8 py-8">
                            <img className="w-full h-full" src={sandwish} alt="" />
                        </div>

                        <div className="w-full lg:w-[300px] h-[260px] bg-gray-100 rounded-md shadow-2xl text-center px-8 py-8">
                            <img className="w-full h-full" src={suasage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
