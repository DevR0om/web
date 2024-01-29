import styles from "./styles.module.scss";
import TitleText from "../UI/TitleText";
import SubTexts from "../UI/SubTexts";
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";

interface FooterProps {
  lang: any;
  background: string;
  textColor: string
  iconColor: string;
  id: string;
}

export default function Footer({ lang,background,textColor, iconColor, id }: FooterProps) {
  return (
    <div className={styles.footer_container} style={{backgroundColor: background}} id={id}>
      <div className={styles.contactCard}>
        <TitleText
          text={lang.addresstTitle}
          colorText={textColor}
          fontSize="36px"
        />
        <div className={styles.subcard}>
          <FaLocationDot color={iconColor}/>
          <SubTexts colorText={textColor} fontSize="16px" text={lang.subcontact} />
        </div>
      </div>

      <div className={styles.phoneCard}>
        <TitleText text={lang.phoneTitle} colorText={textColor} fontSize="28px" />
        <div className={styles.sub_box}>
          <FaPhoneAlt color={iconColor}/>
          <SubTexts colorText={textColor} fontSize="16px" text={lang.subphone} />
        </div>
        <div className={styles.sub_box}>
          <TfiEmail color={iconColor}/>
          <SubTexts colorText={textColor} fontSize="16px" text={lang.emailsub} />
        </div>
      </div>
    </div>
  );
}
