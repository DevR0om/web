import styles from './styles.module.scss';

interface TitleProps {
    colorText: string;
    fontSize: string;
    text:string;
}

export default function TitleText({ colorText, fontSize, text }: TitleProps) {

    return (
        <h1 className={styles.TitleText} style={{ color: colorText, fontSize, fontFamily: 'Gill Sans' }}>
            {text}
        </h1>
    );
}
