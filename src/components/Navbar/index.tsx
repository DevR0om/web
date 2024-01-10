import LogoUi from '../UI/LogoUi';
import NavList from '../UI/NavList/index.';
import styles from './styles.module.scss';
import Image from 'next/image';
interface NavbarProps {
    lang: any;
}

export default function NavBar({ lang }: NavbarProps) {
    return (
        <div className={styles.nav_container}>
            <div className={styles.logoCard}>
                <LogoUi
                  alt={'Logo DevRoom'}
                  width={280}
                  height={180}
                  priority={true} 
                />
            </div>
            <div className={styles.itemsContainer}>
                <NavList 
                lang={lang}
                />
            </div>
        </div>
    );
}
