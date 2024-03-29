"use client"
import { useEffect } from 'react';
import {ButtonUI} from '../UI/ButtonUi';
import ImageUi from '../UI/ImageUi';
import SubTexts from '../UI/SubTexts';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';
import Aos from "aos";
import "aos/dist/aos.css";

interface ServicesProps {
  lang: any;
  id:string;
}

interface PathSrcProps {
  web: string;
  backend: string;
  mobile: string;
}

export default function Services({ lang, id }: ServicesProps) {
  const pathSrc: PathSrcProps = {
    web: "https://www.blog.omertex.com/wp-content/uploads/2019/11/UI-design-15_optimized.png",
    backend: "https://wallpapercave.com/wp/wp10318694.png",
    mobile: "https://i.postimg.cc/sX3H5D6M/mobile.png"
  };

  const titleTextItem: Record<string, string> = {
    web: lang.projects.titleProjectsFront,
    backend: lang.projects.titleProjectsBack,
    mobile: lang.projects.titleProjectsMobile 
  }

  const subText: Record<string, string> = {
    web: lang.projects.subtTextProjectFront,
    backend: lang.projects.subtTextProjectBack,
    mobile: lang.projects.subtTextProjectMobile
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.projectsContainer} id={id} data-aos="fade-up">
      <div className={styles.textTitle}>
        <TitleText
          colorText='white'
          fontSize='48px'
          text={lang.projectTitle}
        />
      </div>
      <div className={styles.projectsCard}>
        {Object.entries(pathSrc).map(([key, imagePath]) => (
          <div className={styles.projectsItem} key={key}>
            <div className={styles.projectImage}>
              <ImageUi
                alt={`Imagem dos projetos - ${key}`}
                height={1200}
                width={1200}
                path={imagePath}
              />
            </div>
            <div className={styles.projectTitle}>
              <TitleText
                colorText='white'
                fontSize='24px'
                text={titleTextItem[key]}
              />
            </div>
            <div className={styles.projectDescription}>
              <SubTexts
                colorText='white'
                fontSize='18px'
                text={subText[key]}
              />
            </div>
            <div className={styles.projectButton}>
              <ButtonUI 
                fontSize='24px'
                height={'100%'}
                width={'100%'}
                text={lang.buttonProject}
                localPath={`/products/${key}`}
                click={()=> console.log('')}
                target=''
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
