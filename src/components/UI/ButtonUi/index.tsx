"use client"
import Link from "next/link";
import styles from "./styles.module.scss";

interface ButtonUIProps {
  text: string;
  fontSize: string;
  width: string;
  height: string;
  localPath: string;
  keyItem: string;
}

const ButtonUI: React.FC<ButtonUIProps> = ({ width, height, text, fontSize, localPath, keyItem }) => {

  return (
    <div className={styles.buttonUi} style={{ fontSize, width, height }} >
       <Link href={localPath} passHref>
        {text}
      </Link>
    </div>
  );
};

export default ButtonUI;
