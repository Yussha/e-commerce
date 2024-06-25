import { FaRegHeart } from "react-icons/fa";
import { SlHandbag } from "react-icons/sl";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdArrowDropleft } from "react-icons/io";

import styles from './styles.module.css'

import { ProductCartContext } from "../context/CartProvider";
import { OverlayContext } from "../context/OverlayProvider";

import { useRef, useState, useEffect, useContext } from "react";


// Routes
import { Link } from "react-router-dom";

export default function Navbar() {
    const responsiveNavbarRef = useRef(null);
    const [changeMenuIcon, setChangeMenuIcon] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const { totalInCart, productInWishlist, setActiveLink, activeLink } = useContext(ProductCartContext)
    const { handleOpenSideCart } = useContext(OverlayContext)

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    function toggleNavbar() {
        const navLinksContainer = responsiveNavbarRef.current;

        if (screenWidth >= 100 && screenWidth <= 1023) {
            if (navLinksContainer.style.height === '0px' || navLinksContainer.style.height === '') {
                // Expand the navbar
                navLinksContainer.style.height = '208px'; // Adjust height as per your requirement
                navLinksContainer.style.paddingTop = '32px';
                navLinksContainer.style.paddingBottom = '32px';
            } else {
                // Collapse the navbar
                navLinksContainer.style.height = '0px';
                navLinksContainer.style.paddingTop = '0px';
                navLinksContainer.style.paddingBottom = '0px';
            }
        }

        setChangeMenuIcon(prevMenuIcon => !prevMenuIcon);
    }

    return (
        <nav id="navBar" className={`${styles.nav} pt-6 pb-6 pl-1 pr-1 sm:pt-8 sm:pb-8 sm:pr-14 sm:pl-14 lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:z-20 lg:bg-transparent`}>
            <div className="flex justify-between items-center sm:justify-between sm:items-center lg:ml-8 lg:mr-8 xl:ml-28 xl:mr-28">
                <Link to="/" onClick={() => setActiveLink("/")}>
                    <div>
                        <h1 className={`${styles.logo} italic ml-2 sm:ml-0 text-xl lg:text-4xl`}>ShoeShop</h1>
                    </div>
                </Link>

                <div ref={responsiveNavbarRef} className={`absolute z-30 top-74 w-full top-16 end-0 sm:absolute sm:z-30 sm:top-24 sm:w-full sm:end-0 lg:w-fit ${screenWidth >= 1024 ? styles.showNavLinksContainer : styles.navLinksContainer}`} >
                    <div className="flex flex-col items-center gap-y-4 sm:flex-col sm:items-center sm:gap-y-4 lg:flex-row lg:gap-x-8">

                        <Link to="/" className={`${screenWidth >= 1024 ? `${styles.navLinkShow} ${activeLink === "/" ? styles.active : ""}` : `${styles.navLink} ${activeLink === "/" ? styles.active : ""}`}  lg:text-md`} onClick={() => setActiveLink("/")}>Home</Link>

                        <Link to="/about" className={`${screenWidth >= 1024 ? `${styles.navLinkShow} ${activeLink === "/about" ? styles.active : ""}` : `${styles.navLink} ${activeLink === "/about" ? styles.active : ""}`} lg:text-md`} onClick={() => setActiveLink("/about")}>About</Link>

                        <Link to="/shop" className={`${screenWidth >= 1024 ? `${styles.navLinkShow} ${activeLink === "/shop" ? styles.active : ""}` : `${styles.navLink} ${activeLink === "/shop" ? styles.active : ""}`} lg:text-md`} onClick={() => setActiveLink("/shop")}>Shop</Link>

                        <Link to="/contactUs" className={`${screenWidth >= 1024 ? `${styles.navLinkShow} ${activeLink === "/contactUs" ? styles.active : ""}` : `${styles.navLink} ${activeLink === "/contactUs" ? styles.active : ""}`} lg:text-md`} onClick={() => setActiveLink("/contactUs")}>Contact Us</Link>
                    </div>
                </div>

                <div className="flex mr-4 sm:mr-0 items-center gap-x-3 sm:gap-x-5 sm:items-center ">
                    {screenWidth <= 1023 &&
                        <div>
                            <button className={`${styles.iconButton} text-xl`} onClick={toggleNavbar}>{changeMenuIcon ? <IoMdArrowDropleft /> : <HiOutlineMenu />}</button>
                        </div>
                    }

                    <Link to="/wishlist" onClick={() => setActiveLink("/wishlist")}>
                        <div className="relative w-auto h-auto ">
                            <button className={`${activeLink === "/wishlist" ? styles.iconButtonActive : styles.iconButton} text-xl lg:text-lg`}><FaRegHeart /></button>
                            <div className={`${styles.countProductSave} flex items-center justify-center rounded-full absolute -top-2 -right-3 sm:w-4 sm:h-4 sm:-top-2 sm:-right-4 sm:text-lg lg:text-sm`}>{productInWishlist.length}</div>
                        </div>
                    </Link>


                    <div className="relative w-auto h-auto">
                        <button onClick={handleOpenSideCart} className={`${activeLink === "/shoppingCartArea" ? styles.iconButtonActive : styles.iconButton} text-xl lg:text-lg`}><SlHandbag className="" /></button>
                        <div className={`${styles.countProductSave} flex items-center justify-center rounded-full absolute -top-2 -right-3 sm:w-4 sm:h-4 sm:-top-2 sm:-right-4 sm:text-lg lg:text-sm`}>{totalInCart}</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}