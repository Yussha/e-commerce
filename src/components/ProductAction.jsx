// Module styles
import styles from './styles.module.css';

// Product Action Btn
import ViewInfoModalBtn from "./ViewInfoModalBtn";
import AddToCartIconBtn from './AddToCartIconBtn';
import AddToWishListBtn from './AddToWishListBtn';

export default function ProductAction({ isHovered, data }) {
    return (
        <div className={`${styles.productAction} ease-in-out duration-300  flex flex-col gap-y-4 absolute top-8 right-0 ${isHovered ? 'right-4 opacity-1' : 'right-0 opacity-0'}`}>
            <AddToCartIconBtn data={data} />
            <ViewInfoModalBtn data={data} />
            <AddToWishListBtn data={data} />
        </div>
    )
}