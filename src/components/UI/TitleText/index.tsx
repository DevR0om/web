import styles from './styles.module.scss';
interface TitleProps {
    lang: any;
    colorText: string;
    fontSize: string;
    family: string;
}

export default function TitleText({ lang, colorText, fontSize, family }: TitleProps) {

    return (
        <h1 className={styles.title} style={{ color: colorText, fontSize, fontFamily: family }}>
            {lang.textTitle}
        </h1>
    );
}
