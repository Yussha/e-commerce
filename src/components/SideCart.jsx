// Icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// Components
import SideCartItems from "./SideCartItems";

// Module Styles
import styles from './styles.module.css'

// Context
import { ProductCartContext } from '../context/CartProvider';
import { OverlayContext } from "../context/OverlayProvider";

// Hooks
import { useContext } from 'react';

import { Link } from "react-router-dom";

export default function SideCart() {
    const { productInCart, openSideCart, setActiveLink, subTotal } = useContext(ProductCartContext)
    const { handleCloseSideCart } = useContext(OverlayContext);

    function handleViewModal() {
        setActiveLink("/shoppingCartArea")
        handleCloseSideCart()
    }
    return (
        <aside className={` ${styles.customCartSide} overflow-x-scroll ease-in-out duration-300 delay-150 fixed z-40 top-0  h-screen w-80 sm:w-80 sm:h-screen md:w-2/4 lg:w-2/5 xl:w-96 ${openSideCart === true ? "right-0" : "-right-full"}`}>
            <button onClick={handleCloseSideCart} className={`${styles.sideCartClose} ease-in-out duration-300 font-bold flex items-center justify-between w-full sm:p-4 md:pl-12 md:pr-12 md:text-md p-4`}>SHOPPING CART <MdOutlineKeyboardArrowRight className="md:text-3xl" /> </button>

            {productInCart.length === 0 ? <h1 className="font-bold text-center p-20 text-5xl">Empty Cart</h1> : <SideCartItems productInCart={productInCart} />}

            <div className="sm:mt-12 md:pl-12 md:pr-12 sm:p-4 p-4 mt-12">
                <div className="flex text-xl mb-8 justify-between sm:text-xl sm:mb-8 md:text-lg">
                    <span>Subtotal:</span>
                    <span>₱{subTotal}</span>
                </div>

                <div className="flex flex-col gap-4 font-bold items-center">
                    <Link to='/shoppingCartArea' onClick={handleViewModal}>
                        <button className={`${styles.sideCartBtnAction} w-32 p-2 sm:w-32 sm:p-2 md:w-40`}>VIEW CART</button>
                    </Link>
                    <button className={`${styles.sideCartBtnAction} w-32 p-2 sm:w-32 sm:p-2 md:w-40`}>CHECKOUT</button>
                </div>
            </div>
        </aside>
    )

}