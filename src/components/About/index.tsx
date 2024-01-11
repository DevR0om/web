import ImageUi from '../UI/ImageUi';
import SubTexts from '../UI/SubTexts';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';

interface AboutProps{
    lang:any
}

export default function About({lang}: AboutProps) {
    const imgPath = "https://w0.peakpx.com/wallpaper/184/644/HD-wallpaper-css-coding-ultra-computers-hardware-internet-laptop-working-technology-computer-code-programming-software-development-workplace-website-sourcecode.jpg";
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

            <div className={styles.imgContainer}>
            <div className={styles.imageAbout}>
                <ImageUi 
                alt='Imagem lateral texto'
                height={1980}
                width={1080}
                path={imgPath}
                />
            </div>

            </div>
        </div>
    )
}