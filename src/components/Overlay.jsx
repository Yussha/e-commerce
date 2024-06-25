import styles from './styles.module.css';

import { OverlayContext } from '../context/OverlayProvider';

import { useContext } from 'react';
export default function Overlay() {
    const { activeOverlay } = useContext(OverlayContext)

    return (
        <div style={{ background: "rgba(0, 0, 0, 0.7)" }} className={`${styles.overLay} fixed top-0 bottom-0 left-0 right-0 z-30 w-full h-full ${activeOverlay ? 'opacity-100 visible' : 'opactiy-0 invisible'}`}></div>
    )
}
