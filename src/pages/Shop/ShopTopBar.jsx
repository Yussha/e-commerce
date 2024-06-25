import { FaList } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

import styles from './styles.module.css';

import { useRef, useEffect } from "react";

export default function ShopTopBar({ setLayout, layout, handleSorting, sortMonitor, sortData }) {
    const dropDownRef = useRef(null)

    function toggleDropdown() {
        if (dropDownRef.current) {
            if (dropDownRef.current.style.display === "flex") {
                dropDownRef.current.style.display = "none"
            } else {
                dropDownRef.current.style.display = "flex"
                dropDownRef.current.style.flexDirection = "column"
            }
        }
    }

    useEffect(() => {
        dropDownRef.current.style.display = "none";
    }, [])

    const dropdownContents = [
        {
            id: 1,
            content1: "Default",
            content2: "Price High to Low",
            content3: "Price Low to High"
        },
    ]

    return (
        <div className="mt-20 sm:mt-20 flex justify-center">
            <div className={`${styles.containerContents} flex flex-col justify-center w-9/12 items-center gap-y-2 pt-2 pb-2 sm:grid sm:grid-cols-2 sm:gap-4 sm:p-6 rounded-lg sm:w-9/12 md:flex md:justify-between md:flex-row md:w-11/12 md:pt-4 md:pb-4`}>
                <div className="sm:text-lg" style={{ color: "#686D76" }}><span style={{ color: "#DC5F00" }}>{sortData.length}</span> Product Found of <span style={{ color: "#DC5F00" }}>{sortData.length}</span></div>
                <div className="text-end sm:text-xl md:text-start lg:flex lg:justify-center lg:items-center">
                    <button style={layout === "default" ? { color: "#DC5F00" } : { color: "#686D76" }} onClick={() => setLayout("default")} className="mr-6 sm:mr-6"><FaTableCells /></button>
                    <button style={layout === "secondLayout" ? { color: "#DC5F00" } : { color: "#686D76" }} onClick={() => setLayout("secondLayout")} ><FaList /></button>
                </div>
                <div className="dropdown relative sm:col-span-full flex items-center gap-x-2 md:col-span-1">
                    <span style={{ color: "#686D76" }} className="sm:text-lg ">Sort By:</span>
                    <div onClick={toggleDropdown} style={{ cursor: "pointer" }} className="flex items-center justify-between gap-x-20 sm:w-80 md:w-auto md:gap-x-20">
                        <button style={{ color: "#373A40" }} className="dropbtn sm:text-lg capitalize">{sortMonitor}</button>
                        <div className="sm:text-lg" style={{ color: "#DC5F00" }}><IoIosArrowDown /></div>
                    </div>


                    {dropdownContents.map(content => (
                        <div ref={dropDownRef} key={content.id} id="myDropdown" className={`${styles.dropdownContent} top-8 left-16 gap-y-2 p-2 absolute sm:w-9/12 sm:top-8 sm:left-16 z-40`}>
                            <button href="" onClick={(e) => handleSorting(content.content1, e)} style={{ color: sortMonitor === "default" ? "#DC5F00" : "#373A40" }}>{content.content1}</button>
                            <button href="" onClick={(e) => handleSorting(content.content2, e)} style={{ color: sortMonitor === "highToLow" ? "#DC5F00" : "#373A40" }}>{content.content2}</button>
                            <button href="" onClick={(e) => handleSorting(content.content3, e)} style={{ color: sortMonitor === "lowToHigh" ? "#DC5F00" : "#373A40" }}>{content.content3}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}