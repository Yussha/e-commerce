import { useState } from "react"

export default function useProductActionHover() {
    const [hoveredProductId, setHoveredProductId] = useState(null);

    function handleMouseEnter(id) {
        setHoveredProductId(id)
    }

    function handleMouseLeave() {
        setHoveredProductId(null)
    }


    return { handleMouseEnter, handleMouseLeave, hoveredProductId }
}