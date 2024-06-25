import styles from './styles.module.css';

// Components
import PagesBg from '../../components/PagesBg';
import SideCart from "../../components/SideCart"

// Parts of about us
import AboutContent from './AboutContent';

export default function About() {
    return (
        <section className={`${styles.customAbout} h-auto w-auto relative `}>
            <PagesBg>ABOUT US</PagesBg>
            <AboutContent />
            <SideCart />
        </section>
    )
}