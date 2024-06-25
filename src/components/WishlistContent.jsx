import shoesData from '../data/shoesData'

import styles from "./styles.module.css"

import { MdDelete } from "react-icons/md";

import { ProductCartContext } from '../context/CartProvider';

import { useContext } from 'react';

export default function WishlistContent() {
    const { productInWishlist, addToCart, handleDeleteInWishlist } = useContext(ProductCartContext);

    return (
        <div className={`${styles.customTableCon} col-span-12 w-auto sm:place-self-start md:place-self-start `}>
            <table className='border-separate border-spacing-y-6 w-tableWidthmr sm:w-screen '>
                <thead className=''>
                    <tr style={{ backgroundColor: "#EEEEEE", color: "#373A40" }}>
                        <th ></th>
                        <th ></th>
                        <th >Product</th>
                        <th >Price</th>
                        <th ></th>
                    </tr>
                </thead>

                <tbody className='text-center'>
                    {productInWishlist.map(data => (
                        <tr key={data.id}>
                            <td style={{ color: "#DC5F00" }} className='text-2xl' onClick={() => handleDeleteInWishlist(data)}><MdDelete /></td>
                            <td><img className='w-20 block ml-auto mr-auto' src={data.img} alt="" /></td>
                            <td>
                                <h1 >{data.productName}</h1>
                            </td>
                            <td>{data.price}</td>
                            <td><button style={{ color: "#DC5F00" }} onClick={() => addToCart(data)}>Add to cart</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}