import styles from './styles.module.scss';

interface SubTextsProps{
    colorText: string;
    fontSize: string;
    family: string;
    text:string;
}
export default function SubTexts({colorText, family, fontSize, text}: SubTextsProps){
    return(
        <h2   className={styles.subText} style={{ color: colorText, fontSize, fontFamily: family }}>
            {text}
        </h2>
    )
}