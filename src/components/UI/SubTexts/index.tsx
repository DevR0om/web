import styles from './styles.module.scss';

interface SubTextsProps{
    colorText: string;
    fontSize: string;
    text:string;
}
export default function SubTexts({colorText, fontSize, text}: SubTextsProps){
    return(
        <h2   className={styles.subText} style={{ color: colorText, fontSize, fontFamily: 'sans-Serif' }}>
            {text}
        </h2>
    )
}