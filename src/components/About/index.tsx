import SubTexts from '../UI/SubTexts';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';

interface AboutProps{
    lang:any
}

export default function About({lang}: AboutProps) {
    return (
        <div className={styles.about_container}>
            <div className={styles.aboutTextContainer}>
                <div className={styles.titleText}>
                    <TitleText 
                    colorText='black'
                    family='Gill Sans'
                    fontSize='48px'
                    text={lang.aboutTitle}
                    />
                    </div>
                <div className={styles.aboutText}>
                    <SubTexts 
                    colorText='black'
                    family='Gill Sans'
                    fontSize='24px'
                    text={lang.subAboutText}
                    />
                </div>

            </div>
            <div className={styles.imageAbout}></div>
        </div>
    )
}