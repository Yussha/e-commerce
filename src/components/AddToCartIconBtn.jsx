import { MdOutlineShoppingCart } from "react-icons/md";

// Context
import { ProductCartContext } from "../context/CartProvider";

// Hooks
import { useContext } from "react";

export default function AddToCartIconBtn({ data }) {
    const { addToCart } = useContext(ProductCartContext);
    return (
        <button onClick={() => addToCart(data)} className="text-2xl sm:text-2xl">
            <MdOutlineShoppingCart />
        </button>
    )
}