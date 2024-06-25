import styles from './styles.module.css';

import { motion } from "framer-motion"

import { Link } from "react-router-dom";

import { useState } from "react";

export default function PagesBg({ children }) {
    const [activeLink, setActiveLik] = useState("/")
    return (
        <div className={`${styles.pagesBg} h-72 gap-y-2 sm:h-72 flex flex-col justify-center items-center sm:gap-y-2 lg:h-96 lg:pt-32 lg:pb-8 xl:gap-y-4`}>
            <motion.h1
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
                className='text-4xl sm:text-4xl md:text-5xl xl:text-5xl'>
                {children}
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: -0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ delay: 0.8, duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}>

                <span style={{ color: "#DC5F00" }} className='text-2xl sm:text-2xl'>//</span>
                <span style={{ color: "#DC5F00" }} className='text-lg ml-3 sm:text-lg sm:ml-3 xl:text-xl'>{children}</span>

            </motion.div>
        </div>
    )
}