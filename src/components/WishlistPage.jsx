import PagesBg from "./PagesBg"
import WishlistContent from "./WishlistContent";
import SideCart from "./SideCart"

import { ProductCartContext } from "../context/CartProvider";

import { useContext } from "react";

import styles from './styles.module.css';

import { Link } from "react-router-dom";

export default function WishlistPage() {
    const { productInWishlist, clearWishlist } = useContext(ProductCartContext);
    return (
        <section className={`${styles.customWishlistPage} h-auto w-auto relative `}>
            <PagesBg>
                WISHLIST
            </PagesBg>
            {productInWishlist.length === 0 ?
                <div style={{ color: "#373A40" }} className="font-bold mt-20 mb-12 flex justify-center items-center text-2xl xl:text-8xl">Wishlist Empty</div> :

                <>
                    <div className="mt-20 mb-12 ml-3 mr-3 grid grid-cols-12 grid-rows-1 overflow-x-auto md:ml-16 md:mr-16 xl:ml-32 xl:mr-32">
                        <WishlistContent />
                    </div>

                    <div className='ml-3 mr-3 mb-10 flex flex-col gap-y-3 md:flex-row md:gap-x-3 md:ml-16 md:mr-16 xl:ml-32 xl:mr-32'>
                        <button className={`${styles.clearCartBtn} pt-3 pb-3 md:pl-3 md:pr-3`} onClick={clearWishlist}>Clear Wishlist</button>
                        <Link to="/shop" className={`${styles.continueShoppingBtn} pt-3 pb-3 md:pl-3 md:pr-3 text-center`}>
                            <button>Continue Shopping</button>
                        </Link>

                    </div>
                </>
            }
            <SideCart />
        </section>
    )
}