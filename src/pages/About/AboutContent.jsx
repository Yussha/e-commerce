import shoesImg from '../../assets/banner2ndShoes.jpg'

import styles from './styles.module.css';

import { Link } from "react-router-dom";

import { ProductCartContext } from '../../context/CartProvider';

import { useContext } from 'react';

export default function AboutContent() {
    const { setActiveLink } = useContext(ProductCartContext)

    return (
        <div className={`${styles.customContentCon} mt-20 mb-20 p-3 flex-col items-center gap-y-10 sm:mt-20 sm:mb-20 sm:p-3 h-auto flex sm:flex-col sm:items-center sm:gap-y-14 md:items-start md:pl-4 md:pr-4 lg:grid lg:grid-cols-2 lg:gap-x-0 lg:items-center`}>
            <div className={`${styles.bgShoes} flex jusitfy-center sm:flex sm:justify-center w-60 h-40 sm:w-96 sm:h-96 md:w-11/12 md:ml-1 lg:w-auto lg:h-fit lg:ml-0`}>
                <img className={`${styles.shakeElement} lg:w-80 lg:h-full`} src={shoesImg} alt="" />
            </div>

            <div className=' pl-2 pr-2 sm:pl-12 sm:pr-12 lg:pl-2 lg:pr-2'>
                <h6 className='text-3xl mb-3 sm:text-3xl sm:mb-3'>Smart Life</h6>
                <h1 className='text-4xl mb-3 sm:text-4xl font-bold sm:mb-3 md:text-5xl'>With Smart Shoes</h1>
                <p className='text-md leading-8 mb-6 sm:text-md sm:mb-6 md:text-lg md:leading-10 xl:w-11/12'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmol tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minivel quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata non proident, sunt in culpa qui officia.
                </p>
                <Link to="/contactUs" >
                    <button onClick={() => setActiveLink("/contactUs")} className={`${styles.contactUsBtn} w-32 p-2 sm:w-32 sm:p-2 md:w-40`}>Contact Us</button>
                </Link>

            </div>
        </div>
    )
}