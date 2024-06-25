import styles from './styles.module.css';

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className='p-4 sm:p-6 flex flex-col gap-y-10 md:p-10 mt-20 xl:p-24'>
            <div className='flex gap-x-10 grid grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-8 md:grid md:grid-cols-2 md:gap-8 lg:grid-rows-1 lg:grid-cols-4 xl:grid-rows-1'>
                <div>
                    <h1 className={`${styles.logo} mb-3 italic ml-0 sm:ml-0 text-2xl lg:text-4xl sm:mb-3 md:text-4xl`}>ShoeShop</h1>
                    <p style={{ color: "#DC5F00" }} className='mb-3 sm:text-sm sm:mb-6 sm:w-40 md:w-full md:leading-7 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus deserunt facilis labore laboriosam, quis sed.</p>
                    <div className='flex gap-x-4 md:text-xl'>
                        <FaFacebook style={{ color: "#DC5F00" }} />
                        <FaTwitter style={{ color: "#DC5F00" }} />
                        <FaInstagram style={{ color: "#DC5F00" }} />
                        <FaTiktok style={{ color: "#DC5F00" }} />
                    </div>
                </div>

                <div className='mt-4 sm:mt-0'>
                    <h1 className='sm:text-md mb-2 md:text-2xl'>Services</h1>
                    <ul className='flex flex-col gap-y-2'>
                        <li className='sm:text-sm md:text-lg'>Free Home Delivery</li>
                        <li className='sm:text-sm md:text-lg'>Order Discount</li>
                        <li className='sm:text-sm md:text-lg'>Secure Payment</li>
                        <li className='sm:text-sm md:text-lg'>24 x 7 Online Support</li>
                    </ul>
                </div>

                <div className='mt-4 sm:mt-0'>
                    <h1 className='sm:text-md mb-2  md:text-2xl'>Pages</h1>
                    <ul className='flex flex-col gap-y-2'>
                        <li className='sm:text-sm md:text-lg'><a href="">Home</a></li>
                        <li className='sm:text-sm md:text-lg'><a href="">About</a></li>
                        <li className='sm:text-sm md:text-lg'><a href="">Shop</a></li>
                        <li className='sm:text-sm md:text-lg'><a href="">Contact Us</a></li>

                    </ul>
                </div>

                <div className='mt-4 sm:mt-0'>
                    <h1 className='sm:text-md mb-2  md:text-2xl'>Contact Info</h1>
                    <ul className='flex flex-col gap-y-2'>
                        <li className='sm:text-sm md:text-lg'>Address: 465 Gawagawa St.</li>
                        <li className='sm:text-sm md:text-lg'>Phone: 123456789</li>
                        <li className='sm:text-sm md:text-lg'>Email: mamamo123@gmail.com</li>
                    </ul>
                </div>
            </div>

            <div className='font-bold md:text-lg'>
                Developed by JsH
            </div>

        </footer>
    )
}