import React from 'react'
import styles from "./styles.module.scss";
import MainButton from '../UI/MainButton';

interface MainProps {
    lang: any;
}

export default function Main({ lang }: MainProps) {
    return (
        <div className={styles.main_container}>
            <div className={styles.buttonCard}>
            <MainButton 
            color='black' 
            fontSize='16px' 
            text={lang.buttonMainText} 
            fontWeight='bold'
            />
            </div>
        </div>
    );
}
