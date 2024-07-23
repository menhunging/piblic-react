import { useState } from "react";
import Select from "react-select";

import BlockWhite from "../ui/BlockWhite/BlockWhite";
import Input from "../ui/Inputs/Input";
import { OptionsCountry } from "../ui/Selects/Options/Options";
import Button from "../ui/Buttons/Button";
import FileLoad from "../ui/FileLoad/FileLoad";
import PopupCheckoutSuccess from "./PopupCheckoutSuccess";

import styles from "./Checkout.module.scss";
import PopupMessage from "../ui/Popups/PopupMessage";
import Popup from "../ui/Popups/Popup";
import PopupCheckoutView from "./PopupCheckoutView";

type method = "bycard" | "directTransfer";

const Checkout = () => {
  const [file, setFile] = useState<File | null>(null);
  const [method, setMethod] = useState<method>("bycard");
  const [isOpenNewCard, setIsOpenNewCard] = useState<boolean>(false);

  const [isPopupThanks, setIsPopupThanks] = useState(false);
  const [isPopupError, setIsPopupError] = useState(false);
  const [isNotPay, setIsNotPay] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <div className={styles.checkout}>
      <h2 className={`${styles.caption} caption`}>Checkout</h2>
      <BlockWhite className={styles.checkout__item}>
        <span className={styles.checkout__caption}>Billing details</span>
        <div className={styles.billingDetails}>
          <div className={`${styles.inputItem} inputItem`}>
            <label htmlFor="">First name*</label>
            <Input type="text" placeholder="First name" />
          </div>
          <div className={`${styles.inputItem} inputItem`}>
            <label htmlFor="">Last name*</label>
            <Input type="text" placeholder="First name" />
          </div>
          <div className={`${styles.inputItem} inputItem`}>
            <label htmlFor="">Email*</label>
            <Input type="text" placeholder="First name" />
          </div>
          <div className={`${styles.inputItem} inputItem`}>
            <label htmlFor="">Country*</label>
            <Select
              // menuIsOpen={true}
              isSearchable={false}
              styles={{
                control: () => ({}),
                option: () => ({}),
              }}
              classNamePrefix={"select"}
              className={"select"}
              placeholder="Your country"
              options={OptionsCountry}
            />
          </div>
          <div className={`${styles.inputItem} inputItem`}>
            <label htmlFor="">Address*</label>
            <textarea name="" id=""></textarea>
          </div>
        </div>
      </BlockWhite>
      <BlockWhite
        className={`${styles.checkout__item} ${styles.checkout__item_pay}`}
      >
        <span className={styles.checkout__caption}>To pay</span>
        <div className={styles.pay}>
          <span className={styles.pay__title}>Information of a company:</span>
          <ul>
            <li>
              <span className={styles.tit}>1 contact:</span>
              <span className={styles.data}>
                40 SAR <span className={styles.icon}></span>
              </span>
            </li>
          </ul>
        </div>
      </BlockWhite>
      <BlockWhite className={styles.checkout__item}>
        <span className={styles.checkout__caption}>Payment method</span>
        <div className={styles.paymentMethod}>
          <div className={styles.paymentMethod__check}>
            <div className="radioBlock">
              <input
                type="radio"
                id="bycard"
                name="payment"
                checked={method === "bycard" && true}
                onChange={() => {
                  setMethod("bycard");
                }}
              />
              <label htmlFor="bycard">By card</label>
            </div>
            <div className="radioBlock">
              <input
                type="radio"
                id="transfer"
                name="payment"
                checked={method === "directTransfer" && true}
                onChange={() => {
                  setIsOpenNewCard(false);
                  setMethod("directTransfer");
                }}
              />
              <label htmlFor="transfer">Direct transfer</label>
            </div>
          </div>

          {method === "bycard" ? (
            <div className={styles.byCard}>
              <span className={styles.byCard__title}>By card:</span>

              <div className={styles.byCard__list}>
                <div className={styles.byCard__item}>
                  <input type="radio" id="pay1" name="pay" />
                  <label
                    htmlFor="pay1"
                    className="visa"
                    onClick={() => {
                      setIsOpenNewCard(false);
                    }}
                  >
                    ****1234
                  </label>
                </div>
                <div className={styles.byCard__item}>
                  <input type="radio" id="pay2" name="pay" />
                  <label
                    htmlFor="pay2"
                    className="mastercard"
                    onClick={() => {
                      setIsOpenNewCard(false);
                    }}
                  >
                    ****9876
                  </label>
                </div>
                <div className={styles.byCard__item}>
                  <input type="radio" id="pay3" name="pay" />
                  <label
                    htmlFor="pay3"
                    className="card"
                    onClick={() => {
                      setIsOpenNewCard(true);
                    }}
                  >
                    Add a new card
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.directTransfer}>
              <div className={styles.directTransfer__row}>
                <span className={styles.directTransfer__title}>
                  Direct transfer:
                </span>
                <ul>
                  <li>
                    <span className={styles.directTransfer__tit}>
                      Bank's name
                    </span>
                    <span className={styles.directTransfer__data}>
                      Bank of America
                    </span>
                  </li>
                  <li>
                    <span className={styles.directTransfer__tit}>
                      Holder name
                    </span>
                    <span className={styles.directTransfer__data}>
                      John&John
                    </span>
                  </li>
                  <li>
                    <span className={styles.directTransfer__tit}>
                      Bank account
                    </span>
                    <span className={styles.directTransfer__data}>
                      40817 840 0 0000 123 567
                    </span>
                  </li>
                </ul>
              </div>
              <div className={styles.directTransfer__row}>
                <span className={styles.directTransfer__title}>
                  Enter information about the account from which the transfer
                  will be made and also attach a receipt:
                </span>

                <div className={styles.addNewCard}>
                  <div className={`${styles.inputItem} inputItem`}>
                    <label htmlFor="">Bank's name</label>
                    <Input type="text" placeholder="Bank's name" />
                  </div>
                  <div className={`${styles.inputItem} inputItem`}>
                    <label htmlFor="">Holder name</label>
                    <Input type="text" placeholder="Holder name" />
                  </div>
                  <div className={`${styles.inputItem} inputItem`}>
                    <label htmlFor="">Bank account</label>
                    <Input type="text" placeholder="00000 000 0 0000 000000" />
                  </div>
                  <div className={`${styles.checkBlock} checkBlock`}>
                    <input type="checkbox" id="payments" />
                    <label htmlFor="payments">
                      Save card details for future purchases
                    </label>
                  </div>
                </div>

                <FileLoad
                  file={file}
                  setFile={setFile}
                  title="Attachments"
                  textSize="Valid format jpeg, pdf и tiff. Max size 10 Mb"
                  htmlFor="file-1"
                  theme="dark"
                  className={styles.fileload}
                />

                <Button
                  theme="green"
                  type="default"
                  className={styles.checkout__btn}
                >
                  Send
                </Button>
              </div>
            </div>
          )}
        </div>

        {isOpenNewCard && (
          <div className={styles.addNewCard}>
            <div className={`${styles.inputItem} inputItem`}>
              <label htmlFor="">Card number</label>
              <Input type="text" placeholder="0000 0000 0000 0000" />
            </div>
            <div className={`${styles.inputItem} inputItem`}>
              <label htmlFor="">Expiration date</label>
              <Input type="text" placeholder="month/year" />
            </div>
            <div className={`${styles.inputItem} inputItem`}>
              <label htmlFor="">CVC code</label>
              <Input type="text" placeholder="000" />
            </div>
            <div className={`${styles.checkBlock} checkBlock`}>
              <input type="checkbox" id="payments" />
              <label htmlFor="payments">
                Save the card for future payments
              </label>
            </div>
          </div>
        )}

        {method === "bycard" && (
          <Button
            theme="green"
            type="default"
            className={styles.checkout__btn}
            onClick={() => {
              setSuccess(true);
              // setIsNotPay(true);
              // setIsPopupError(true);
              // setIsPopupThanks(true);
            }}
          >
            Make a payment
          </Button>
        )}
      </BlockWhite>

      <PopupCheckoutSuccess isOpen={success} setIsOpen={setSuccess} />

      <PopupCheckoutView
        isOpen={isNotPay}
        setIsOpen={setIsNotPay}
      ></PopupCheckoutView>

      <Popup type="small" isOpen={isPopupError} setIsOpen={setIsPopupError}>
        <PopupMessage
          title="Sorry, there was an error when paying by card"
          text="Try again or write to support"
          btnMain="Try again"
          btnMainHandle={() => {
            console.log(123);
          }}
          btnAdditional="Contact support"
        ></PopupMessage>
      </Popup>

      <Popup type="small" isOpen={isPopupThanks} setIsOpen={setIsPopupThanks}>
        <PopupMessage
          title="Thanks for your payment!"
          text="We will check your payment and send you a notification"
          btnMain="View this job"
          btnMainHandle={() => {
            console.log(123);
          }}
          btnAdditional="All my job posts"
        ></PopupMessage>
      </Popup>
    </div>
  );
};

export default Checkout;
