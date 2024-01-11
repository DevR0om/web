import React from 'react'
import styles from "./styles.module.scss";
import TitleText from '../UI/TitleText';

interface MainProps{
    lang: any;
} 

export default function Main({ lang }: MainProps) {
    return (
        <div className={styles.main_container}>
            <TitleText lang={lang} colorText='white' fontSize='54px' family='Gill Sans'/>
        </div>
    );
}
