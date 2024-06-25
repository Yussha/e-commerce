import { MdDelete } from "react-icons/md";

import { ProductCartContext } from "../context/CartProvider";

import { useContext } from "react";

export default function SideCartItems({ productInCart }) {
    const { handleDeleteInCart } = useContext(ProductCartContext);

    return (
        <div className="md:mt-10 mt-10">
            {productInCart.map(product => (
                <div key={product.id} className="flex p-4 sm:p-4 md:pl-12 md:pr-12 gap-3">
                    <img className="w-20" src={product.img} alt="" />
                    <div className="w-full">
                        <div className="flex justify-between sm:mb-2">
                            <h6>{product.productName}</h6>
                            <button onClick={() => handleDeleteInCart(product)} className="text-2xl"><MdDelete /></button>
                        </div>
                        <span>{product.quantity} ₱{product.price}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}