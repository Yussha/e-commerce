// img
import shoesImg from '../../assets/banner2ndShoes.jpg'

// Module Styles
import styles from './styles.module.css';

import { Link } from "react-router-dom";

import { ProductCartContext } from '../../context/CartProvider';

import { useContext } from 'react';

export default function BannerSecond() {
    const { setActiveLink } = useContext(ProductCartContext)
    return (
        <div className={`${styles.backgroundBanner2nd} mt-14 h-auto pl-4 pr-4 pt-20 pb-20 gap-y-20 sm:mt-14 sm:h-auto flex flex-col lg:flex-row lg:gap-x-20 xl:justify-center xl:gap-x-44 items-center sm:p-20 sm:gap-y-20`}>
            <div className={`${styles.bannedImgCon} w-80 h-60 sm:w-80 sm:h-60 flex items-center justify-center xl:w-96`}>
                <img className={`${styles.shakeElement} w-60 sm:w-60 xl:w-full`} src={shoesImg} alt="" />
            </div>

            <div className='text-center lg:text-start'>
                <span style={{ color: "#DC5F00" }} className='text-xl sm:text-3xl xl:text-4xl'>Saving 50%</span>
                <h1 className='mt-4 text-4xl mb-4 sm:mt-4 sm:text-5xl font-bold sm:mb-4 xl:text-6xl'>All Online Store</h1>
                <h2 className='text-xl mb-8 sm:text-3xl sm:mb-8'>Offer Available All Shoes & Products</h2>
                <Link to="/shop">
                    <button onClick={() => setActiveLink("/shop")} className={`${styles.showNowBtn} w-32 p-2 sm:w-32 sm:p-2 md:w-40 xl:text-xl xl:p-2`}>Show Now</button>
                </Link>
            </div>
        </div>
    )
}