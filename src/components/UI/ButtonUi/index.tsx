"use client"
import Link from "next/link";
import styles from "./styles.module.scss";

interface ButtonUIProps {
  text: string;
  fontSize: string;
  width: string;
  height: string;
  localPath: string;
  click: any;
  target: string;
}

const ButtonUI: React.FC<ButtonUIProps> = ({ width, height, text, fontSize, localPath, click, target  }) => {

  return (
    <div className={styles.buttonUi} style={{ fontSize, width, height }} onClick={click}>
       <Link href={localPath} passHref target={target}>
        {text}
      </Link>
    </div>
  );
};

export default ButtonUI;
