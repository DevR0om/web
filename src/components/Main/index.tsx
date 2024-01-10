import React from 'react'
import styles from "./styles.module.scss";

interface MainProps{
    lang: any;
} 

export default function Main({ lang }: MainProps) {
    return (
        <div className={styles.main_container}>
        </div>
    );
}
