import styles from "./styles.module.scss"
interface ButtonUI{
    text: string;
    fontSize: string;
    width: number;
    height: number;

}

 export default function ButtonUI({width, height, text, fontSize}: ButtonUI) {
    return(
        <button className={styles.buttonUi} style={{ fontSize, width, height }}>
            {text}
        </button>
    )
}