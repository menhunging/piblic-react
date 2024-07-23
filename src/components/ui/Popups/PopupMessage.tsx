import { ReactNode } from "react";
import Button from "../Buttons/Button";
import styles from "./Popup.module.scss";

interface IProps {
  title: string;
  text: string;
  btnAdditional?: string;
  btnMain: string;
  children?: ReactNode;
  btnMainHandle: () => void;
}

const PopupMessage = ({
  title,
  text,
  btnAdditional,
  btnMain,
  children,
  btnMainHandle,
}: IProps) => {
  return (
    <div className={styles.popupMessage}>
      <h2 className={`${styles.popupMessage__caption} caption`}>{title}</h2>
      <span>{text}</span>
      {children && children}
      <div className={styles.popupMessage__controls}>
        {btnAdditional && (
          <Button type="default" theme="dark">
            {btnAdditional}
          </Button>
        )}

        <Button type="default" theme="green" onClick={btnMainHandle}>
          {btnMain}
        </Button>
      </div>
    </div>
  );
};

export default PopupMessage;
