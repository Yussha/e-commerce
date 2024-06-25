import styles from './styles.module.css';

import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactDetails() {

    const contactDetails = [
        {
            id: 1,
            icon: <FaHome />,
            title: "Address",
            details: "123 Location st.",
        },

        {
            id: 2,
            icon: <FaPhoneAlt />,
            title: "Phone No",
            details: "123456789",
        },

        {
            id: 3,
            icon: <MdEmail />,
            title: "Email",
            details: "mamamo123@gmail.com",
        },

    ]

    return (
        <div className={`${styles.contactDetails} lg:grid lg:grid-cols-3 lg:ml-16 lg:mr-16 lg:gap-x-4 xl:grid-cols-1 xl:ml-1 xl:mr-1 xl:mt-20`}>
            {contactDetails.map(contact => (
                <div key={contact.id} className={`${styles.formContainer} ml-3 mr-3 gap-y-6 sm:ml-16 sm:mr-16 mt-20 mb-8 p-10 sm:mb-8 h-auto rounded-lg sm:p-10 flex flex-col justify-center items-center sm:gap-y-6 lg:ml-1 lg:mr-1 xl:mt-1 xl:w-60`}>
                    <span style={{ color: "#DC5F00" }} className='text-6xl sm:text-6xl'>{contact.icon}</span>
                    <h1 className='text-2xl sm:text-3xl font-bold'>{contact.title}</h1>
                    <p className='text-2xl sm:text-xl'>{contact.details}</p>
                </div>
            ))}

        </div>
    )
}