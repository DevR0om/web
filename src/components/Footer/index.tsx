import styles from "./styles.module.scss"
import TitleText from "../UI/TitleText";

interface Footerprops {
    lang: any;
}

export default function Footer({lang}: Footerprops){
    return(
        <div className={styles.footer_container}>
            <div className={styles.contactCard}>
            <TitleText text={lang.addresstTitle} colorText="black" fontSize="40px" />
            <TitleText text={lang.subcontact} colorText="black" fontSize="16px" />

            </div>
            <div className={styles.phoneCard}>
            <TitleText text={lang.phoneTitle} colorText="black" fontSize="40px" />
            <TitleText text={lang.subphone} colorText="black" fontSize="16px" />
            <TitleText text={lang.emailsub} colorText="black" fontSize="16px" />


            </div>
            <div className={styles.emailCard}>
            <TitleText text={lang.emailTitle} colorText="black" fontSize="40px" />
            <TitleText text={lang.subemail} colorText="black" fontSize="16px" />


            </div>
        </div>
    );
}