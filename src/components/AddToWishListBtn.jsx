// Icons
import { FaRegHeart } from "react-icons/fa";

import { ProductCartContext } from "../context/CartProvider";

import { useContext } from "react";

export default function AddToWishListBtn({ data }) {
    const { addToWishList } = useContext(ProductCartContext)

    return (
        <button onClick={() => addToWishList(data)} className="text-2xl sm:text-2xl">
            <FaRegHeart />
        </button>
    )
}