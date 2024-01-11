import ImageUi from '../UI/ImageUi';
import SubTexts from '../UI/SubTexts';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';

interface AboutProps{
    lang:any
}

export default function About({lang}: AboutProps) {
    const imgPath = "https://www.freecodecamp.org/news/content/images/size/w2000/2023/01/thumbnail.jpeg";
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
            <div className={styles.imageAbout}>
                <ImageUi 
                alt='Imagem lateral texto'
                height={248}
                width={248}
                path={imgPath}
                />
            </div>
        </div>
    )
}