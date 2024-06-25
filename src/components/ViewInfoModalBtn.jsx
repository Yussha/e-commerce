import { FaEye } from "react-icons/fa";

import { ViewInfoContext } from "../context/ViewInfoModalContext";

import { useContext } from "react";

export default function ViewInfoModalBtn(props) {
    const { data } = props;
    const { handelViewModal } = useContext(ViewInfoContext)

    return (
        <button className="text-2xl sm:text-2xl" onClick={() => handelViewModal(data)}>
            <FaEye />
        </button>
    )
}