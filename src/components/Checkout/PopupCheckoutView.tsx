import { Dispatch, SetStateAction } from "react";

import Button from "../ui/Buttons/Button";
import Popup from "../ui/Popups/Popup";

import styles from "./Checkout.module.scss";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const PopupCheckoutView = ({ isOpen, setIsOpen }: IProps) => {
  return (
    <>
      <Popup type="small" isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className={styles.offerInfo}>
          <span className={styles.offerInfo__caption}>Offer information</span>
          <span className={styles.offerInfo__date}>01 May 2024</span>
          <a href="#" className={styles.attachments}>
            <span
              className={`${styles.attachments__icon}  svgAttachmentIcon`}
            ></span>
            Proposal Description file
          </a>
          <div className={styles.offerInfo__content}>
            Here will be a note from the contractor in a few linesHere will be a
            note from the contractor in a few linesHere will be a note from the
            contractor in a few linesHere will be a note from the contractor in
            a few linesHere will be a note from the contractor in a few lines
          </div>
          <div className={styles.offerInfo__price}>
            <span>Requested price:</span>
            <span className={styles.offerInfo__value}>1000$</span>
          </div>

          <div className={styles.offerContacts__controls}>
            <Button theme="green" type="default">
              Get contact
            </Button>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default PopupCheckoutView;
