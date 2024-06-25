import { createContext, useEffect, useState } from "react";

export const ProductCartContext = createContext();

export default function ProductInCartProvider({ children, setActiveOverlay }) {
    const [productInCart, setProductInCart] = useState([]);
    const [openSideCart, setOpenSideCart] = useState(false);
    const [totalInCart, setTotalInCart] = useState(0);
    const [activeLink, setActiveLink] = useState("/e-commerce/")

    const [productInWishlist, setProductInWishlist] = useState([]);

    const [subTotal, setSubTotal] = useState(0);

    useEffect(() => {
        function handleSubTotal(total, currentValue) {
            return total + (currentValue.price * currentValue.quantity)
        }
        const subT = productInCart.reduce(handleSubTotal, 0)

        setSubTotal(subT)
    }, [productInCart])

    useEffect(() => {
        function handleTotalQuantity(total, currentValue) {
            return total + currentValue.quantity
        }

        const quantityTotal = productInCart.reduce(handleTotalQuantity, 0)
        setTotalInCart(quantityTotal)

    }, [productInCart, totalInCart])

    function clearCart() {
        setProductInCart([])
    }

    function clearWishlist() {
        setProductInWishlist([])

    }

    // For addtocart
    function addToCart(data) {
        const stringToNum = parseInt(data.price);

        setProductInCart(prevProducts => {
            /**Find array method, it returns a value of the first element if the condition is true, 
             * then it returns undefined if no elements are found
             */
            const existingProduct = prevProducts.find(product => product.id === data.id);

            if (existingProduct) {
                return prevProducts.map(product => (
                    product.id === data.id ? { ...product, quantity: product.quantity + 1, price: stringToNum, pricePerQuan: (product.quantity + 1) * product.price } : product
                ))
            } else {
                return [...prevProducts, { ...data, quantity: 1, price: stringToNum, pricePerQuan: stringToNum }]
            }
        })

        setOpenSideCart(true);
        setActiveOverlay(true);
    };


    // For addtowishlist
    function addToWishList(data) {
        setProductInWishlist(prevProducts => {
            const existingProduct = prevProducts.find(product => product.id === data.id);

            if (existingProduct) {
                alert("product already in the wishlist")
                return [...prevProducts]
            } else {
                alert("product successfully added")
                return [...prevProducts, data]
            }
        })
    }

    // For handledelete for wishlist and addtocart
    function handleDelete(data, items, setItems) {
        const filteredItems = [...items].filter(item => item.id !== data.id)

        setItems(filteredItems);
    }

    // for cart
    function handleDeleteInCart(data) {
        handleDelete(data, productInCart, setProductInCart)
    }

    // for wishlist
    function handleDeleteInWishlist(data) {
        handleDelete(data, productInWishlist, setProductInWishlist)
    }

    // for handle to add quantity
    function handleAddQuantity(data) {
        const updateQuantity = [...productInCart].map(product => (
            product.id === data.id ? { ...product, quantity: product.quantity + 1, pricePerQuan: (product.quantity + 1) * product.price } : product
        ))

        setProductInCart(updateQuantity)
    }

    // for handle to minus quantity
    function handleMinusQuantity(data) {
        const updateQuantity = [...productInCart].map(product => (
            product.id === data.id && product.quantity >= 2 ? { ...product, quantity: product.quantity - 1, pricePerQuan: (product.quantity - 1) * product.price } : product
        ))

        setProductInCart(updateQuantity)
    }

    return (
        <ProductCartContext.Provider value={{ addToCart, productInCart, openSideCart, setOpenSideCart, totalInCart, addToWishList, productInWishlist, handleDeleteInCart, handleDeleteInWishlist, handleAddQuantity, handleMinusQuantity, setProductInCart, setActiveLink, activeLink, clearCart, clearWishlist, subTotal }}>
            {children}
        </ProductCartContext.Provider>
    )
}   