import React, { useEffect, useState } from 'react';
import InputUi from '../UI/InputUi';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';
import Aos from "aos";
import "aos/dist/aos.css";

interface ContactProps {
    lang: any;
    title: string;
    service: string;
    id: string;
}

export default function ContactForm({ title, service, lang, id }: ContactProps) {
    const [message, setMessage] = useState(`${lang.buy} ${service}-${title}.`);

    useEffect(() => {
        setMessage(`${lang.buy} ${service}-${title}!`);
    }, [title]);
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return (
        <div className={styles.contactContainer} id='contact' data-aos="fade-up">
            <TitleText
                colorText='white'
                fontSize=''
                text={lang.enterContact}
            />
            <form
                action="https://formsubmit.co/clovissantannaa@gmail.com"
                method="POST"
                className={styles.formContainer}
            >
                <div className={styles.card}>
                    <InputUi
                        id='name'
                        label='name'
                        labelName='Nome:'
                        placeholder={lang.enterName}
                        type='text'
                        name='name'
                    />
                </div>
                <div className={styles.card}>
                    <InputUi
                        id='email'
                        label='name'
                        labelName='Email:'
                        placeholder={lang.enterEmail}
                        type='text'
                        name='email'
                    />
                </div>
                <div className={styles.textareaCard}>
                    <label htmlFor="message">{lang.message}</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder={lang.enterMessage}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={styles.textareaField}
                    ></textarea>
                </div>
                <div className={styles.submitContainer}>
                    <button className={styles.submitButton} type="submit">
                        {lang.submit}
                    </button>
                    <input type="hidden" name="_captcha" value="http://localhost:3000/en/products/"></input>
                    <input type="hidden" name="_next" value="http://localhost:3000/en/products/"></input>
                </div>
            </form>
        </div>
    );
}
