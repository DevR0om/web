import Image from "next/image"
import styles from './styles.module.scss';
interface imageUiProps{
    alt: string;
    path: string;
    width: number;
    height: number;
}
export default function ImageUi({alt, height, path, width}: imageUiProps){
    return(
        <Image 
        alt={alt}
        src={path}
        width={width}
        height={height}
        className={styles.imageUI}
        />
    )
}