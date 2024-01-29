"use client"
import { useEffect } from 'react';
import ImageUi from '../UI/ImageUi';
import SubTexts from '../UI/SubTexts';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';
import Aos from "aos";
import "aos/dist/aos.css";

interface AboutProps{
    lang:any
    id: string;
}

export default function About({lang, id}: AboutProps) {
    const imgPath = "https://w0.peakpx.com/wallpaper/184/644/HD-wallpaper-css-coding-ultra-computers-hardware-internet-laptop-working-technology-computer-code-programming-software-development-workplace-website-sourcecode.jpg";
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
    return (
        <div className={styles.about_container} id={id}>
            <div className={styles.aboutTextContainer} data-aos="fade-right">
                <div className={styles.titleText} >
                    <TitleText 
                    colorText='black'
                    fontSize='48px'
                    text={lang.aboutTitle}
                    />
                    </div>
                <div className={styles.aboutText}>
                    <SubTexts 
                    colorText='black'     
                    fontSize='18px'
                    text={lang.subAboutText}
                    />
                </div>
<div></div>
            </div>

            <div className={styles.imgContainer} data-aos="fade-left">
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