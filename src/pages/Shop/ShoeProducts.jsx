import styles from './styles.module.css';

import shoeData from '../../data/shoesData';

import ProductAction from "../../components/ProductAction"

import useProductActionHover from "../../hooks/useProductActionHover"

export default function ShoeProducts({ sortData }) {
    const { handleMouseEnter, handleMouseLeave, hoveredProductId } = useProductActionHover();

    return (
        <div className='grid grid-cols-1 p-4 gap-8 sm:grid-cols-2 sm:gap-8 sm:p-10 lg:grid-cols-3'>
            {sortData.map(data => (
                <div key={data.id} className="h-auto relative xl:w-11/12 xl:place-self-center" onMouseEnter={() => handleMouseEnter(data.id)} onMouseLeave={handleMouseLeave}>
                    <div className="relative w-auto mb-4 sm:mb-4">
                        <img style={{ border: "1px solid #686D76" }} className="rounded-lg object-cover h-60 w-full md:h-64 lg:h-48 xl:h-64" src={data.img} alt="" />
                        {data.discount >= 10 && <div className={`${styles.discountTag} absolute top-3 left-3 w-14 p-1 rounded-md font-bold text-center sm:top-4 sm:left-4 sm:w-14 sm:p-1 lg:text-sm`}>{data.discount > 10 ? `${data.discount}%` : "10%"}</div>}
                    </div>
                    <div>
                        <span style={{ color: "#686D76" }}>Men/Women</span>
                        <h1 className="font-bold text-xl mt-2 mb-2 sm:text-xl sm:mt-2 sm:mb-2 lg:text-lg xl:text-xl" style={{ color: "#373A40" }}>{data.productName}</h1>
                        <span className="text-xl sm:text-xl lg:text-lg xl:text-xl" style={{ color: "#686D76" }}>₱{data.price}</span>
                    </div>
                    <ProductAction isHovered={data.id === hoveredProductId} data={data} />
                </div>
            ))}
        </div>
    )
}