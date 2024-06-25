import styles from './styles.module.css'

import { Link } from "react-router-dom";

import { ProductCartContext } from '../../context/CartProvider';

import { useContext } from 'react';

export default function Banners() {

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
            title: "new arrival",
        },

        {
            id: 3,
            discount: "50",
            title: "new sneakers",
        },
    ]

    return (
        <div className={`${styles.customBackground} grid grid-rows-3 gap-y-8 p-3 sm:grid-rows-1 sm:grid-cols-2 h-auto sm:p-6 sm:items-center sm:gap-x-8 sm:gap-y-8 lg:grid-cols-3 `}>
            {bannersObj.map(banner => (
                <Link to="/shop">
                    <div onClick={() => setActiveLink("/shop")} key={banner.id} className={`${styles.customBanner} ${styles[`customBanner-${banner.id}`]} h-64 flex-col sm:h-64 flex sm:flex-col items-center justify-center lg:h-72`}
                    >
                        <span className='text-2xl sm:text-2xl lg:text-xl '>Sale {banner.discount}% Off</span>
                        <h1 className='text-3xl sm:text-3xl font-bold'>{banner.title.toUpperCase()}</h1>
                    </div>
                </Link>

            ))}
        </div>
    )
}