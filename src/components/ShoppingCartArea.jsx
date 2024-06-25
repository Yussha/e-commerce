import styles from './styles.module.css';

import PagesBg from "./PagesBg"
import SideCart from "./SideCart"
import ShoppingCartContent from './ShoppingCartContent';

import { ProductCartContext } from "../context/CartProvider";

import { useContext } from "react";

import { Link } from 'react-router-dom';

export default function ShoppingCartArea() {
    // Continue this tomorrow

    const { productInCart, clearCart, subTotal } = useContext(ProductCartContext);

    return (
        <section className={`${styles.customWishlistPage} h-auto w-auto relative `}>
            <PagesBg>
                SHOPPING CART
            </PagesBg>
            {productInCart.length === 0 ?
                <div style={{ color: "#373A40" }} className="font-bold mt-20 mb-12 flex justify-center items-center text-2xl xl:text-8xl">Cart Empty</div> :

                <>
                    <div className="mt-20 mb-12 ml-3 mr-3 grid grid-cols-12 grid-rows-1 overflow-x-auto md:ml-16 md:mr-16 xl:ml-32 xl:mr-32">
                        <ShoppingCartContent />
                    </div>

                    <div className='ml-3 mr-3 mb-10 flex flex-col gap-y-3 md:flex-row md:gap-x-3 md:ml-16 md:mr-16 xl:ml-32 xl:mr-32'>
                        <button className={`${styles.clearCartBtn} pt-3 pb-3 md:pl-3 md:pr-3`} onClick={clearCart}>Clear Cart</button>
                        <Link to="/shop" className={`${styles.continueShoppingBtn} pt-3 pb-3 md:pl-3 md:pr-3 text-center`}>
                            <button>Continue Shopping</button>
                        </Link>

                    </div>

                    <div className='ml-3 mr-3 mb-10 md:ml-16 md:mr-16 xl:ml-32 xl:mr-32 grid grid-row-2 gap-y-8 sm:grid-cols-2 sm:gap-x-2 md:gap-x-4'>
                        <div >
                            <h1 style={{ color: "#373A40" }} className='text-xl mb-1 font-bold'>Coupon Code</h1>
                            <span style={{ color: "#686D76" }} className='text-sm'>Enter your coupon code if you have one</span>
                            <input type="text" placeholder='Enter Your Coupon Code' className={`${styles.inputCouponCode} block mt-6 mr-auto ml-auto p-3 pl-6 text-sm w-72 mb-6 sm:w-11/12`} />
                            <div><button style={{ borderBottom: "3px solid #373A40", color: "#373A40" }} className='text-md pb-2 font-bold'>Apply Coupon</button></div>
                        </div>

                        <div>
                            <h1 style={{ color: "#373A40" }} className='text-xl mb-4 font-bold'>Cart Totals</h1>

                            <div style={{ backgroundColor: "#686D76" }} className='p-6'>
                                <div className='flex gap-x-3 mb-3'>
                                    <h6>Subtotal </h6>
                                    <span>₱{subTotal}</span>
                                </div>
                                <div className='flex gap-x-3  mb-3'>
                                    <h6>Shipping</h6>
                                    <ul className='flex flex-col gap-y-3'>
                                        <div className='flex gap-x-2'>
                                            <li><input readOnly type="radio" id='radio1' checked /></li>
                                            <label htmlFor="radio1">Flat Rate</label>
                                        </div>

                                        <div className='flex gap-x-2'>
                                            <li><input readOnly type="radio" id='radio2' /></li>
                                            <label htmlFor="radio2">Free Shipping</label>
                                        </div>

                                        <div className='flex gap-x-2'>
                                            <li><input readOnly type="radio" id='radio3' /></li>
                                            <label htmlFor="radio3">Local Pickup</label>
                                        </div>

                                    </ul>
                                </div>
                                <div className='flex gap-x-3 mb-6'>
                                    <h6>Total </h6>
                                    <span>₱{subTotal}</span>
                                </div>

                                <div><button style={{ borderBottom: "3px solid #373A40", color: "#373A40" }} className='text-md pb-2 font-bold'>PROCEED TO CHECKOUT</button></div>
                            </div>
                        </div>
                    </div>
                </>


            }


            <SideCart />
        </section >
    )

}

