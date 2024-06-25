import { useState, createContext } from "react";

export const ViewInfoContext = createContext();

export default function ViewInfoModalContext({ children, setActiveOverlay }) {
    const [infoModal, setInfoModal] = useState({});
    const [openModal, setOpenModal] = useState(false)

    function handelViewModal(data) {
        setInfoModal(data)
        setOpenModal(true);
        setActiveOverlay(true)
    }

    function handleHideModal() {
        setOpenModal(false)
        setActiveOverlay(false)
    }

    return (
        <ViewInfoContext.Provider value={{ infoModal, handelViewModal, openModal, setOpenModal, handleHideModal }}>
            {children}
        </ViewInfoContext.Provider>
    )
}