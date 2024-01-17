import React from "react";
import SubTexts from "../UI/SubTexts";
import TitleText from "../UI/TitleText";
import styles from "./styles.module.scss";
import ButtonUI from "../UI/ButtonUi";
import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

interface ProductsKeyProps {
  title: string;
  select: string;
  subTitles: string[];
  values: string[];
  coin: string;
  utils: string[];
}

const toRoman = (num: number): string => {
  const romanNumerals = ["I", "II", "III", "IV"];
  return romanNumerals[num - 1] || num.toString();
};

const ProductsList: React.FC<ProductsKeyProps> = ({
  title,
  subTitles,
  values,
  coin,
  select,
  utils,
}) => {
  return (
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
        />
      ))}
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
}> = ({ title, subTitle, value, coin, select, util, index }) => {
  const romanNumber = toRoman(index + 1);

  const renderIcon = (icon: React.ReactElement) => (
    <div className={styles.utilsIcon}>{icon}</div>
  );

  return (
    <div className={styles.productsCard} key={romanNumber}>
      <div className={styles.productTitle}>
        <TitleText
          colorText="white"
          fontSize="24px"
          text={`${title} ${romanNumber}`}
        />
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
        <SubTexts
          colorText="black"
          fontSize="18px"
          text={item}
        />
        {((romanNumber === "I" && i <= 2) || (romanNumber === "II" && i <= 3) ||
          (romanNumber === "III" && i < 5) || (romanNumber === "IV"))
          ? renderIcon(<FaCheck color="green"/>)
          : renderIcon(<IoCloseSharp  color="red"/>)}
      </div>
    ))
  ) : (
    <div className={styles.utils}>
      <SubTexts
        colorText="black"
        fontSize="18px"
        text={util as string}
      />
      {(romanNumber === "I" || romanNumber === "III" || romanNumber === "IV")
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
          keyItem={subTitle}
          localPath="teste"
        />
      </div>
    </div>
  );
};

export default ProductsList;
