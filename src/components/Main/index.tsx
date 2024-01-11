import React from 'react'
import styles from "./styles.module.scss";
import TitleText from '../UI/TitleText';
import ButtonUI from '../UI/ButtonUi';
import SubTexts from '../UI/SubTexts';


interface MainProps{
    lang: any;
} 

export default function Main({ lang }: MainProps) {
    return (
        <div className={styles.main_container}>
            <TitleText text={lang.textTitle} colorText='white' fontSize='54px' family='Gill Sans'/>
            <ButtonUI fontSize='20px' height={48} width={140} text={lang.textButton}/>
            <SubTexts colorText='white' fontSize='28px' family='Gill Sans' text={lang.subMainText}/>

        </div>
    );
}
