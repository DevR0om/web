import styles from './styles.module.scss';

interface TitleProps {
    colorText: string;
    fontSize: string;
    family: string;
    text:string;
}

export default function TitleText({ colorText, fontSize, family, text }: TitleProps) {

    return (
        <h1 className={styles.TitleText} style={{ color: colorText, fontSize, fontFamily: family }}>
            {text}
        </h1>
    );
}
