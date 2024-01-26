"use client";
import React, { useState } from "react";
import SubTexts from "../UI/SubTexts";
import TitleText from "../UI/TitleText";
import styles from "./styles.module.scss";
import ButtonUI from "../UI/ButtonUi";
import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import NavBar from "../Navbar";
import ImageUi from "../UI/ImageUi";
import Footer from "../Footer";
import ContactForm from "../ContactForm";

interface ProductsKeyProps {
  lang: any;
  titleMain: string;
  title: string;
  select: string;
  subTitles: string[];
  values: string[];
  coin: string;
  utils: string[];
  buttonLang: string;
  textDescription: string;
  descriptionTitle: string;
  imgPath: string;
}

const toRoman = (num: number): string => {
  const romanNumerals = ["I", "II", "III", "IV"];
  return romanNumerals[num - 1] || num.toString();
};

const backgroundFooter = "var(--colors-secondary-50)";

const ProductsList: React.FC<ProductsKeyProps> = ({
  lang,
  titleMain,
  title,
  subTitles,
  values,
  coin,
  select,
  utils,
  buttonLang,
  textDescription,
  descriptionTitle,
  imgPath,
}) => {
  const [showContactEmail, setShowContactEmail] = useState(false);
  const [selectedPlanTitle, setSelectedPlanTitle] = useState("");

  return (
    <div className={styles.container}>
      <NavBar lang={lang} />
      <div className={styles.mainCard}>
        <div className={styles.titleMain}>
          <div className={styles.buttonCard}>
            <ButtonUI
              fontSize="16px"
              height="100%"
              width="100%"
              localPath="https://api.whatsapp.com/send?1=pt_BR&phone=5551995930496"
              text={buttonLang}
              target="_blank"
              click={() => console.log(title)}
            />
          </div>
          <TitleText colorText="white" fontSize="" text={titleMain} />
        </div>
        <div className={styles.descriptionMain}>
          <div className={styles.imageCard}>
            <ImageUi
              alt="Image Site"
              height={1000}
              width={1000}
              path={imgPath}
            />
          </div>
          <div className={styles.descriptionCard}>
            <div className={styles.titleDescription}>
              <TitleText
                colorText="white"
                fontSize="24px"
                text={descriptionTitle}
              />
            </div>
            <SubTexts
              colorText="white"
              fontSize="18px"
              text={textDescription}
            />
          </div>
        </div>
      </div>
      <div className={styles.productsContainer}>
        {subTitles.map((subTitle, index) => (
          <ProductsCard
            key={index}
            title={title}
            subTitle={subTitle}
            value={values[index]}
            coin={coin}
            select={select}
            util={utils}
            index={index}
            lang={lang}
            setShowContactEmail={setShowContactEmail}
            setSelectedPlanTitle={setSelectedPlanTitle}
          />
        ))}
      </div>
      {showContactEmail && <ContactForm title={selectedPlanTitle} service={titleMain} lang={lang}/>}
      <Footer
        id="Footer"
        lang={lang}
        background={backgroundFooter}
        textColor="black"
        iconColor="black"
      />
    </div>
  );
};

const ProductsCard: React.FC<{
  title: string;
  subTitle: string;
  value: string;
  coin: string;
  select: string;
  util: string | string[];
  index: number;
  lang: string;
  setShowContactEmail: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPlanTitle: React.Dispatch<React.SetStateAction<string>>;
}> = ({
  title,
  subTitle,
  value,
  coin,
  select,
  util,
  index,
  lang,
  setShowContactEmail,
  setSelectedPlanTitle,
}) => {
  const romanNumber = toRoman(index + 1);

  const renderIcon = (icon: React.ReactElement) => (
    <div className={styles.utilsIcon}>{icon}</div>
  );

  const titlePlan = `${title} ${romanNumber}`;

  return (
    <div className={styles.productsCard} key={romanNumber}>
      <div className={styles.productTitle}>
        <TitleText colorText="white" fontSize="24px" text={titlePlan} />
        <SubTexts colorText="white" fontSize="16px" text={subTitle} />
      </div>
      <div className={styles.productCoin}>
        <SubTexts colorText="black" fontSize="16px" text={coin} />
        <SubTexts colorText="black" fontSize="24px" text={value} />
        <SubTexts colorText="black" fontSize="16px" text=",00" />
      </div>
      <div className={styles.productInformation}>
        {Array.isArray(util) ? (
          util.map((item, i) => (
            <div className={styles.utils} key={romanNumber}>
              <SubTexts colorText="black" fontSize="16px" text={item} />
              {(romanNumber === "I" && i <= 2) ||
              (romanNumber === "II" && i <= 3) ||
              (romanNumber === "III" && i < 5) ||
              romanNumber === "IV"
                ? renderIcon(<FaCheck color="green" />)
                : renderIcon(<IoCloseSharp color="red" />)}
            </div>
          ))
        ) : (
          <div className={styles.utils}>
            <SubTexts colorText="black" fontSize="8px" text={util as string} />
            {romanNumber === "I" ||
            romanNumber === "III" ||
            romanNumber === "IV"
              ? renderIcon(<FaCheck />)
              : renderIcon(<IoCloseSharp />)}
          </div>
        )}
      </div>
      <div className={styles.productButton}>
        <ButtonUI
          fontSize="16px"
          height={"100%"}
          width={"100%"}
          text={select}
          localPath="#"
          key={"plan"}
          target="_self"
          click={() => {
            setShowContactEmail(true);
            setSelectedPlanTitle(titlePlan);
          }}
        />
      </div>
    </div>
  );
};

export default ProductsList;
