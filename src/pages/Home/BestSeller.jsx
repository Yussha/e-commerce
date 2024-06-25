// Product Data
import { shoesData } from "../../data/shoesData"

// Components
import PagesTitle from "../../components/PagesTitle"
import ProductAction from "../../components/ProductAction"

// Module styles
import styles from './styles.module.css'

// Custom Hooks
import useProductActionHover from "../../hooks/useProductActionHover"

export default function BestSeller() {
    const { handleMouseEnter, handleMouseLeave, hoveredProductId } = useProductActionHover();

    const bestProductFilter = shoesData.filter(handleFilter)

    function handleFilter(shoeData) {
        return shoeData.best === true;
    }

    return (
        <div>
            <div className={`${styles.customBackground} pt-12 sm:pt-20`}>
                <PagesTitle>
                    Best Seller
                </PagesTitle>
                <div className="p-3 gap-7 mt-8 sm:p-10 grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:mt-4 xl:mt-10 2xl:mt-0 xl:pl-32 xl:pr-32  2xl:pt-20 2xl:pb-32 2xl:pl-32 2xl:pr-32">
                    {bestProductFilter.map(shoeData => (
                        <div key={shoeData.id} className="h-auto relative" onMouseEnter={() => handleMouseEnter(shoeData.id)} onMouseLeave={handleMouseLeave}>
                            <div className="relative w-auto mb-4 sm:mb-4">
                                <img style={{ border: "1px solid #686D76" }} className="rounded-lg object-cover h-60 w-full md:h-64 lg:h-48 xl:h-64" src={shoeData.img} alt="" />
                                {shoeData.discount >= 10 && <div className={`${styles.discountTag} absolute top-3 left-3 w-14 p-1 rounded-md font-bold text-center sm:top-4 sm:left-4 sm:w-14 sm:p-1 lg:text-sm`}>{shoeData.discount > 10 ? `${shoeData.discount}%` : "10%"}</div>}
                            </div>
                            <div>
                                <span style={{ color: "#686D76" }}>Men/Women</span>
                                <h1 className="font-bold text-xl mt-2 mb-2 sm:text-xl sm:mt-2 sm:mb-2 lg:text-lg xl:text-xl" style={{ color: "#373A40" }}>{shoeData.productName}</h1>
                                <span className="text-xl sm:text-xl lg:text-lg xl:text-xl" style={{ color: "#686D76" }}>₱{shoeData.price}</span>
                            </div>
                            <ProductAction isHovered={shoeData.id === hoveredProductId} data={shoeData} />
                        </div>
                    ))}</div>
            </div>
        </div>
    )
}