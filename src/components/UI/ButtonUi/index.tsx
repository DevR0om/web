import Link from "next/link";
import styles from "./styles.module.scss";

interface ButtonUIProps {
    text: string;
    fontSize: string;
    width: number;
    height: number;
    localPath: string;
}

const ButtonUI: React.FC<ButtonUIProps> = ({ width, height, text, fontSize, localPath }) => {
    return (
        <div className={styles.buttonUi} style={{ fontSize, width, height }}>
            <Link href={localPath}>
                {text}
            </Link>
        </div>
    );
}

export default ButtonUI;
