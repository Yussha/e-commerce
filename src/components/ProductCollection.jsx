import styles from './styles.module.css'

import { Link } from "react-router-dom";

import { ProductCartContext } from '../context/CartProvider';

import { useContext } from 'react';

export default function ProductCollection() {

    const { setActiveLink } = useContext(ProductCartContext)

    const bannersObj = [
        {
            id: 1,
            discount: "50",
            title: "sport shoes",
        },

        {
            id: 2,
            discount: "50",
            title: "latest shoes",
        },

        {
            id: 3,
            discount: "50",
            title: "office shoes",
        },
    ]

    return (
        <div className={`${styles.customBackground} grid grid-rows-3 gap-y-8 p-3 grid-cols-0  sm:grid-rows-3 sm:grid-cols-0 md:grid-cols-2 md:grid-rows-2 h-auto sm:p-10 sm:items-center sm:gap-x-8 sm:gap-y-8 lg:grid-cols-3 lg:grid-rows-1 sm:w-auto`}>
            {bannersObj.map(banner => (
                <Link to="/shop">
                    <div onClick={() => setActiveLink("/shop")} key={banner.id} className={`${styles.customBanner} ${styles[`customBanner-${banner.id}`]} h-96 sm:h-96 md:h-80 flex-col sm:w-full flex sm:flex-col items-center sm:pt-5 lg:h-72`}
                    >
                        <span style={{ color: "#EEEEEE" }} className='text-2xl sm:text-2xl lg:text-xl '>Sale {banner.discount}% Off</span>
                        <h1 style={{ color: "#EEEEEE" }} className='text-3xl sm:text-3xl font-bold'>{banner.title.toUpperCase()}</h1>
                    </div>
                </Link>
            ))}
        </div>
    )
}