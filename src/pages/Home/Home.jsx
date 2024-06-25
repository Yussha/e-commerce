// Parts of Home
import Hero from "./Hero"
import Banners from "./Banners"
import FeaturedProduct from "./FeaturedProduct"
import BannerSecond from "./BannerSecond"
import Services from "./Services"
import BestSeller from "./BestSeller"

// Components
import ProductInfoModal from "../../components/ProductInfoModal"
import SideCart from "../../components/SideCart"

// Module style
import styles from './styles.module.css'

import { Routes, Route } from "react-router-dom";

export default function Home() {
    return (
        <section className={`${styles.customHome} h-auto w-auto relative`}>
            <Routes>
                <Route exact path='/' element={<Hero />} />
            </Routes>
            <Banners />
            <FeaturedProduct />
            <ProductInfoModal />
            <SideCart />
            <BannerSecond />
            <Services />
            <BestSeller />
        </section>
    )
}