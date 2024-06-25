import styles from './styles.module.css';

import { MdDelete } from "react-icons/md";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

import { ProductCartContext } from '../context/CartProvider';

import { useContext } from 'react';

export default function ShoppingCartContent() {
    const { productInCart, handleAddQuantity, handleMinusQuantity, handleDeleteInCart } = useContext(ProductCartContext);


    return (
        <div className={`${styles.customTableCon} col-span-12 w-auto sm:place-self-start md:place-self-start `}>
            <table className='border-separate border-spacing-y-6 w-tableWidthmr sm:w-screen '>
                <thead className=''>
                    <tr style={{ backgroundColor: "#EEEEEE", color: "#373A40" }}>
                        <th ></th>
                        <th ></th>
                        <th >Product</th>
                        <th >Price</th>
                        <th >Quantity</th>
                        <th >Total</th>
                    </tr>
                </thead>

                <tbody className='text-center'>
                    {productInCart.map(data => (
                        <tr key={data.id}>
                            <td style={{ color: "#DC5F00" }} className='text-2xl' onClick={() => handleDeleteInCart(data)} ><MdDelete /></td>
                            <td><img className='w-20 block ml-auto mr-auto' src={data.img} alt="" /></td>
                            <td>
                                <h1 >{data.productName}</h1>
                            </td>
                            <td>₱{data.price}</td>
                            <td>
                                <div className='flex justify-center items-center gap-x-2'>
                                    <button onClick={() => handleMinusQuantity(data)}><FaMinus /></button>
                                    <input className='text-center sm:w-14 sm:pt-2 sm:pb-2' type="type" value={data.quantity} readOnly />
                                    <button onClick={() => handleAddQuantity(data)}><FaPlus /></button>
                                </div>
                            </td>
                            <td>₱{data.pricePerQuan}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}