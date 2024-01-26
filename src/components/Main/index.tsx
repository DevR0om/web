import React from "react";
import styles from "./styles.module.scss";
import TitleText from "../UI/TitleText";
import ButtonUI from "../UI/ButtonUi";
import SubTexts from "../UI/SubTexts";

interface MainProps {
  lang: any;
  id:string;
}

export default function Main({ lang, id }: MainProps) {
  return (
    <div className={styles.main_container2}>
      <div className={styles.main_container}></div>
      <div className={styles.main_box}>
        <TitleText text={lang.textTitle} colorText="white" fontSize="54px" />
        <SubTexts colorText="white" fontSize="28px" text={lang.subMainText} />
        <div className={styles.buttonCard}>
          <ButtonUI
            fontSize="20px"
            height={"100%"}
            width={"100%"}
            text={lang.textButton}
            localPath="https://api.whatsapp.com/send?1=pt_BR&phone=5551995930496"
            target="blank"
            click={''}
          />
        </div>
      </div>
    </div>
  );
}
