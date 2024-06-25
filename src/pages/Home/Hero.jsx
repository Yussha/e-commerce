import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

import { motion } from "framer-motion"

import { Link } from "react-router-dom";

import { ProductCartContext } from '../../context/CartProvider';

import { useContext } from 'react';

export default function Hero() {
    const { setActiveLink } = useContext(ProductCartContext)
    const [activeSlide, setActiveSlid] = useState(0);

    const slidesObj = [
        {
            id: 1,
            slide: 1,
        },

        {
            id: 2,
            slide: 2,
        },

        {
            id: 3,
            slide: 2,
        },
    ]
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                    delay: 2500
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                }}

                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                onSlideChange={(swiper) => setActiveSlid(swiper.realIndex)}
            >
                {slidesObj.map(s => (
                    <SwiperSlide key={s.id} className={`swiper-slide${s.slide} flex flex-col justify-center sm:justify-center relative`}>
                        <div className='overlay absoulte z-20 top-0 left-0 rigth-0 bottom-0'></div>
                        <div className=' flex flex-col items-center sm:items-center absolute z-30 lg:items-start lg:pl-14 xl:pl-32'>
                            <motion.h1
                                key={`h1-${s.id}-${activeSlide}`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
                                className='hero-header text-3xl mb-4 sm:text-7xl text-center sm:w-2/3 sm:leading-tight sm:mb-4 md:text-8xl lg:w-full lg:text-7xl lg:text-start lg:ml-6 xl:ml-14 2xl:text-9xl 2xl:w-2/3 2xl:leading-tight'>WELCOME TO SHOESHOP
                            </motion.h1>
                            <motion.p
                                key={`p-${s.id}-${activeSlide}`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ delay: 0.5, duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
                                className='text-center mb-8 pl-2 pr-2 sm:mb-8 sm:w-3/4 lg:text-start lg:ml-6 lg:text-xl xl:ml-14 xl:w-2/4 2xl:text-3xl 2xl:w-2/3 2xl:leading-tight'
                            >
                                Discover the perfect pair for every occasion. At ShoeShop, we offer a wide range of stylish and comfortable footwear for men, women, and children. Step into quality and fashion with our latest collections. Shop now and elevate your shoe game!
                            </motion.p>

                            <Link to="/about" onClick={() => setActiveLink("/about")}>
                                <motion.button
                                    key={`button-${s.id}-${activeSlide}`}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{ delay: 0.7, duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
                                    className='heroBtn w-48 text-sm lg:text-lg lg:w-60 lg:ml-6 xl:ml-14 2xl:text-2xl 2xl:w-72 2xl:p-4'
                                    onClick={() => setActiveLink("/about")}
                                >
                                    LEARN MORE ABOUT US
                                </motion.button>
                            </Link>

                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </>
    )
}