"use client"
import Link from "next/link";
import styles from "./styles.module.scss";

interface ButtonUIProps {
  text: string;
  fontSize: string;
  width: string;
  height: string;
  localPath: string;
  click?: any;
  target?: string;
}
interface ButtonServiceProps {
  text: string;
  fontSize: string;
  width: string;
  height: string;
  click?: any;
  contact: string;
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

const ButtonServices: React.FC<ButtonServiceProps> = ({ fontSize, height, width, click, text, contact }: ButtonServiceProps) => {
  return(
    <div className={styles.buttonServices} style={{ fontSize, width, height }} onClick={click}>
      <a href={contact}>
        {text}
      </a>
    </div>
  );
}

export { ButtonUI, ButtonServices };
