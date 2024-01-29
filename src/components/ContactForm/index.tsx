import React, { useEffect, useState } from 'react';
import InputUi from '../UI/InputUi';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';

interface ContactProps {
    lang: any;
    title: string;
    service: string;
    id: string;
}

export default function ContactForm({ title, service, lang, id }: ContactProps) {
    const [message, setMessage] = useState(`Olá, gostaria de contratar o serviço de ${service}-${title}.`);

    useEffect(() => {
        setMessage(`Olá, gostaria de contratar o serviço de ${service}-${title}!`);
    }, [title]);

    return (
        <div className={styles.contactContainer} id='contact'>
            <TitleText
                colorText='white'
                fontSize=''
                text='Entre em contato'
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
                        placeholder='Digite seu nome'
                        type='text'
                        name='name'
                    />
                </div>
                <div className={styles.card}>
                    <InputUi
                        id='email'
                        label='name'
                        labelName='Email:'
                        placeholder='Digite seu email'
                        type='text'
                        name='email'
                    />
                </div>
                <div className={styles.textareaCard}>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={styles.textareaField}
                    ></textarea>
                </div>
                <div className={styles.submitContainer}>
                    <button className={styles.submitButton} type="submit">
                        Submit
                    </button>
                    <input type="hidden" name="_captcha" value="http://localhost:3000/en/products/"></input>
                    <input type="hidden" name="_next" value="http://localhost:3000/en/products/"></input>
                </div>
            </form>
        </div>
    );
}
