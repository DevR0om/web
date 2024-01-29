import LogoUi from '../UI/LogoUi';
import NavList from '../UI/NavList/index.';
import styles from './styles.module.scss';

interface NavbarProps {
    lang: any;
    home: string;
    about: string;
    services: string;
    contact: string;
}

export default function NavBar({ lang, home, about, contact,services }: NavbarProps) {
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
                    about={about}
                    contact={contact}
                    home={home}
                    services={services}
                />
            </div>
        </div>
    );
}
