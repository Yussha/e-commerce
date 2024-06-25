import styles from './styles.module.css';

export default function ContactForm() {
    return (
        <div className={`${styles.formContainer} ml-3 mr-3 p-4 sm:ml-16 sm:mr-16 mt-20 sm:mb-8 h-auto rounded-lg sm:p-10 xl:ml-1 xl:mr-1 w-auto xl:col-span-3`}>
            <h1 className='text-2xl mb-6 sm:text-3xl sm:mb-6'>We Are Here! <br /> Please Send A Message</h1>

            <form action="" className='grid gap-y-8 sm:grid-cols-1 sm:gap-y-8 md:grid-cols-2 md:gap-x-8'>
                <input type="text" placeholder='Name *' className={`${styles.customInput} pl-8 pt-3 pb-3`} />
                <input type="email" placeholder='Email *' className={`${styles.customInput} pl-8 pt-3 pb-3`} />
                <input type="text" placeholder='Subject (Optional)' className={`${styles.customInput} pl-8 pt-3 pb-3 md:col-span-full`} />
                <textarea name="messageBox" id="messageBox" placeholder='Message' className={`${styles.customInput} resize-none pl-8 pt-3 pb-3 md:col-span-full xl:h-96`}></textarea>
                <button type='submit' className={`${styles.contactUsBtn} w-32 p-2 sm:w-32 sm:p-2 md:w-40`}>Send Message</button>
            </form>
        </div>
    )
}