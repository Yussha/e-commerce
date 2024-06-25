import styles from './styles.module.css';

// Components
import PagesBg from '../../components/PagesBg';
import SideCart from "../../components/SideCart"

import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';

export default function ContactUs() {
    return (
        <section className={`${styles.customContactUs} h-auto w-auto relative `}>
            <PagesBg>CONTACT US</PagesBg>
            <div className='xl:grid xl:grid-cols-4 xl:ml-32 xl:mr-32 xl:gap-x-10'>
                <ContactForm />
                <ContactDetails />
            </div>
            <SideCart />
        </section>
    )
}