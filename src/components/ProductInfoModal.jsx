import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";

import { ViewInfoContext } from "../context/ViewInfoModalContext";
import { useContext } from "react";

import styles from './styles.module.css';

export default function ProductInfoModal() {
    const { infoModal, handleHideModal, openModal } = useContext(ViewInfoContext);

    return (
        <div style={{ backgroundColor: "#fff", color: "#373A40" }} className={`${styles.productInfoModal} transition duration-500  ease-in-out fixed top-6 left-2 right-2 bottom-10 h-fit p-3 sm:p-6 fixed z-40 rounded-lg overflow-y-scroll sm:top-10 sm:left-3 sm:right-3 sm:bottom-10 ${openModal ? "scale-100 opacity-100" : "scale-0 opacity-0"} xl:w-3/5 xl:h-3/4 xl:left-64 xl:top-32`}>
            <div className="relative md:flex md:h-full">
                <div className="absolute text-3xl sm:text-3xl right-0 top-0" onClick={handleHideModal}><IoIosCloseCircleOutline /></div>
                <img className="object-cover sm:w-screen sm:h-96 md:block md:mt-auto md:mb-auto " src={infoModal.img} alt="" />

                <div className="sm:mt-4">
                    <h1 className="text-2xl mb-2 sm:text-2xl font-bold sm:mb-2 md:text-3xl">{infoModal.productName}</h1>
                    <span className="text-2xl sm:text-2xl">₱{infoModal.price}</span>
                    <p className="mb-4 mt-2 sm:mb-4 sm:mt-2 leading-7 md:leading-8 md:mt-5">{infoModal.details}</p>

                    <div className="flex gap-5 sm:gap-5 md:items-end md:h-56 xl:h-48">
                        <div style={{ border: "1px solid #373A40" }} className="flex w-auto p-2 gap-2 sm:w-auto sm:p-2 sm:gap-2">
                            <button className="flex justify-center items-center w-4 tex-md sm:w-4 sm:text-md"><FaMinus /></button>
                            <input className="outline-none w-10 h-8 text-xl sm:w-10 sm:h-8 text-center font-bold sm:text-xl" type="text" />
                            <button className="flex justify-center items-center w-4 text-md sm:w-4 sm:text-md"><FaPlus /></button>
                        </div>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}