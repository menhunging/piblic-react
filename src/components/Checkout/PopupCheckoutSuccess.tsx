import { Dispatch, SetStateAction } from "react";

import Button from "../ui/Buttons/Button";
import Popup from "../ui/Popups/Popup";

import styles from "./Checkout.module.scss";

interface IProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const PopupCheckoutSuccess = ({ isOpen, setIsOpen }: IProps) => {
  return (
    <>
      <Popup type="small" isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className={styles.offerInfo}>
          <span className={styles.offerInfo__caption}>Offer information</span>
          <span className={styles.offerInfo__date}>01 May 2024</span>
          <span className={styles.offerInfo__name}>Company name</span>
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

          <div className={styles.offerContacts}>
            <div className={styles.offerContacts__line}>
              <span className={styles.offerContacts__title}>
                Contact info of person responsible
              </span>
              <ul>
                <li>
                  <span className={styles.tit}>Name:</span>
                  <span className={styles.data}>John</span>
                </li>
                <li>
                  <span className={styles.tit}>Email:</span>
                  <span className={styles.data}>johnstevenson@gmail.com</span>
                </li>
                <li>
                  <span className={styles.tit}>Phone number:</span>
                  <span className={styles.data}>+966 123 45 67</span>
                </li>
              </ul>
            </div>
            <div className={styles.offerContacts__line}>
              <span className={styles.offerContacts__title}>
                Contact info of person responsible (backup)
              </span>
              <ul>
                <li>
                  <span className={styles.tit}>Name:</span>
                  <span className={styles.data}>Michael</span>
                </li>
                <li>
                  <span className={styles.tit}>Email:</span>
                  <span className={styles.data}>
                    michaelstevenson@gmail.com
                  </span>
                </li>
                <li>
                  <span className={styles.tit}>Phone number:</span>
                  <span className={styles.data}>+966 123 45 67</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.offerContacts__controls}>
            <Button theme="green" type="default">
              See other offers
            </Button>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default PopupCheckoutSuccess;
