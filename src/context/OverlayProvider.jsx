import { createContext, useState, useEffect, useContext } from "react";

import { ProductCartContext } from "./CartProvider";
import { ViewInfoContext } from "./ViewInfoModalContext";

export const OverlayContext = createContext();

export default function OverlayProvider({ children, setActiveOverlay, activeOverlay }) {
    const { openSideCart, setOpenSideCart } = useContext(ProductCartContext);
    const { openModal } = useContext(ViewInfoContext)

    function handleOpenSideCart() {
        setOpenSideCart(true);
        setActiveOverlay(true);
    }

    function handleCloseSideCart() {
        setOpenSideCart(false);
        setActiveOverlay(false);
    }


    useEffect(() => {
        if (activeOverlay && openSideCart) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [openSideCart, activeOverlay])

    useEffect(() => {
        if (activeOverlay && openModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [openModal, activeOverlay])

    return (
        <OverlayContext.Provider value={{ activeOverlay, handleOpenSideCart, handleCloseSideCart, setActiveOverlay }}>
            {children}
        </OverlayContext.Provider>
    )
}