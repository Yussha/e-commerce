import styles from './styles.module.css';

import shoeData from '../../data/shoesData';

// Components
import PagesBg from '../../components/PagesBg';
import ProductInfoModal from "../../components/ProductInfoModal"
import SideCart from "../../components/SideCart"

import ShopTopBar from './ShopTopBar';
import ShoeProducts from './ShoeProducts';
import ShopProductsSecondLayout from './ShopProductsSecondLayout';

import { useState } from 'react';

export default function Shop() {
    const [layout, setLayout] = useState("default");
    const [sortMonitor, setSortMonitor] = useState("default");
    const [sortData, setSortData] = useState(shoeData);

    function handleSorting(order, event) {
        event.preventDefault();
        const copyShoeData = [...shoeData];

        const sorted = copyShoeData.sort((a, b) => {
            if (order === "Price High to Low") {
                setSortMonitor("highToLow")
                return b.price - a.price
            } else if (order === "Price Low to High") {
                setSortMonitor("lowToHigh")
                return a.price - b.price
            } else {
                setSortMonitor("default")
                return 0;
            }
        })

        setSortData(sorted)
    }

    return (
        <section className={`${styles.customShop} h-auto w-auto relative`}>
            <PagesBg>PRODUCT PAGE</PagesBg>
            <ShopTopBar setLayout={setLayout} layout={layout} handleSorting={handleSorting} sortMonitor={sortMonitor} sortData={sortData} />
            {layout === "default" && <ShoeProducts sortData={sortData} />}
            {layout === "secondLayout" && <ShopProductsSecondLayout sortData={sortData} />}
            <SideCart />
            <ProductInfoModal />
        </section>
    )
}