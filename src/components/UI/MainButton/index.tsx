import styles from './styles.module.scss';
interface buttonProps{
    text: string;
    color: string;
    fontSize: string;
    fontWeight: string;
}

export default function MainButton({color,fontSize,text, fontWeight}: buttonProps) {
    return (
        <button className={styles.button}
         style={{ color: color, fontSize, fontWeight }}>
            {text}</button>
            

        
    )
}