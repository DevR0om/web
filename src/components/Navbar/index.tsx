import styles from './styles.module.scss';
import Image from 'next/image';
interface NavbarProps {
    lang: any;
}
const imagePath ='https://i.ibb.co/Bc4KjTB/logo.webp';

export default function NavBar({ lang }: NavbarProps) {
    return (
        <div className={styles.nav_container}>
            <div className={styles.logoCard}>
        
                <Image 
                    src={imagePath}
                    alt="Logo Alt Text" 
                    width={280}
                    height={180}
                    layout='responsive'
                    priority={true}
                />
            </div>
            <div className={styles.itemsContainer}>
                <ul>
                    <li>{lang.init}</li>
                    <li>{lang.about}</li>
                    <li>{lang.services}</li>
                    <li>{lang.contact}</li>
                </ul>
            </div>
        </div>
    );
}
