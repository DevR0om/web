import styles from "./styles.module.scss"
import TitleText from "../UI/TitleText";
import SubTexts from "../UI/SubTexts";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";

interface Footerprops {
    lang: any;
}

export default function Footer({lang}: Footerprops){
    return(
        <div className={styles.footer_container}>
            <div className={styles.contactCard}>
            <TitleText text={lang.addresstTitle} colorText="black" fontSize="36px" />

            <div className={styles.subcard}>
            <FaLocationDot/>
            <SubTexts colorText="black" fontSize="16px" text={lang.subcontact} />
            </div>
            </div>

            <div className={styles.phoneCard}>
            <TitleText text={lang.phoneTitle} colorText="black" fontSize="28px" />
            
            <div className={styles.sub_box}>
            <FaPhoneAlt/>
            <SubTexts colorText="black" fontSize="16px" text={lang.subphone} />
            </div>
            <div className={styles.sub_box}>
            <TfiEmail/>
            <SubTexts colorText="black" fontSize="16px" text={lang.emailsub} />
            </div>
            </div>
        </div>
    );
}