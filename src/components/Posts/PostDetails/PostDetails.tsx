import { useNavigate } from "react-router-dom";
import { useState } from "react";

import BlockWhite from "src/components/ui/BlockWhite/BlockWhite";
import Button from "src/components/ui/Buttons/Button";

import styles from "./PostDetails.module.scss";
import Popup from "src/components/ui/Popups/Popup";
import PopupMessage from "src/components/ui/Popups/PopupMessage";

const PostDetails = () => {
  const [isOpenContact, setIsOpenContact] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.postDetails}>
      <div className={styles.postDetails__controls}>
        <span className="linkBack" onClick={() => navigate(-1)}>
          Back
        </span>
      </div>
      <BlockWhite
        className={`${styles.postDetails__item} ${styles.postDetails__item_data}`}
      >
        <div className={styles.postInfo}>
          <div className={styles.postInfo__head}>
            {/* <span className={`status status_active`}>Active</span> */}
            {/* <span className={`status status_very`}>Under verification</span> */}
            {/* <span className={`status status_closed`}>Closed</span> */}
            <span className={`status status_need`}>
              Additional information needed
            </span>
            <Button
              type="default"
              theme="dark"
              icon={`${styles.icon} svgEditIcon`}
              className={styles.postInfo__btn}
            >
              Change job posts
            </Button>
          </div>
          <div className={styles.postInfo__body}>
            <div className={styles.postInfo__admin}>
              Here there will be information from the administrator about what
              information needs to be provided. Here there will be information
              from the administrator about what information needs to be
              provided.
            </div>

            <h2 className={`${styles.postInfo__caption} caption`}>
              React developer needed
            </h2>
            <span className={styles.cat}>Other </span>
            <span className={styles.date}>
              Due Date:<span>29 May 2024</span>
            </span>
            <span className={styles.adress}>Tabuk Province, Tabuk </span>
            <div className={styles.postInfo__content}>
              Here will be a text with a detailed description of the job. Here
              will be a text with a detailed description of the job. Here will
              be a text with a detailed description of the job. Here will be a
              text with a detailed description of the job. Here will be a text
              with a detailed description of the job. Here will be a text with a
              detailed description of the job. Here will be a text with a
              detailed description of the job. Here will be a text with a
              detailed description of the job. Here will be a text with a
              detailed description of the job. Here will be a text with a
              detailed description of the job.
            </div>
            <div className={styles.attachments}>
              <a href="#" className={styles.attachments__link}>
                <span
                  className={`${styles.attachments__icon} svgAttachmentIcon`}
                ></span>
                Attachments
              </a>
            </div>
          </div>
        </div>
      </BlockWhite>
      <BlockWhite
        className={`${styles.postDetails__item} ${styles.postDetails__item_info}`}
      >
        <div className={styles.contactInfo}>
          <h3 className={`${styles.contactInfo__caption}`}>
            My contact information
          </h3>
          <span className={`${styles.edit} svgEditIcon`}></span>

          <div className={styles.contactInfo__item}>
            <span className={styles.contactInfo__title}>
              Contact info of person responsible
            </span>
            <ul>
              <li>
                <span>Name:</span>
                <span className={styles.data}>John</span>
              </li>
              <li>
                <span>Email:</span>
                <span className={styles.data}>johnstevenson@gmail.com</span>
              </li>
              <li>
                <span>Phone number:</span>
                <span className={styles.data}>+966 123 45 67</span>
              </li>
            </ul>
          </div>
          <div className={styles.contactInfo__item}>
            <span className={styles.contactInfo__title}>
              Contact info of person responsible (backup)
            </span>
            <ul>
              <li>
                <span>Name:</span>
                <span className={styles.data}>Michael</span>
              </li>
              <li>
                <span>Email:</span>
                <span className={styles.data}>michaelstevenson@gmail.com</span>
              </li>
              <li>
                <span>Phone number:</span>
                <span className={styles.data}>+966 123 45 67</span>
              </li>
            </ul>
          </div>
        </div>
      </BlockWhite>
      <BlockWhite
        className={`${styles.postDetails__item} ${styles.postDetails__item_proposals}`}
      >
        <div className={styles.proposals}>
          <div className={styles.proposals__head}>
            <h2 className={styles.proposals__caption}>Proposals</h2>
            <span className={styles.proposals__new}>+ 10 new proposals</span>
          </div>

          <div className={styles.proposals__body}>
            <div className={styles.proposals__row}>
              <div className={styles.proposals__col}>
                <span className={styles.date}>01 May 2024</span>
              </div>
              <div className={styles.proposals__col}>
                <a href="#" className={styles.proposals__link}>
                  <span
                    className={`${styles.proposals__icon} svgAttachmentIcon`}
                  ></span>
                  Proposal Description file
                </a>
              </div>
              <div className={styles.proposals__col}>
                Here will be a note from the contractor in a few lines
              </div>
              <div className={styles.proposals__col}>
                <div className={styles.proposals__price}>
                  <span className={styles.proposals__tit}>
                    Requested price:
                  </span>
                  <span className={styles.proposals__value}>1000$</span>
                </div>
              </div>
              <div className={styles.proposals__col}>
                <Button
                  theme="green"
                  type="default"
                  className={styles.proposals__btn}
                  onClick={() => {
                    setIsOpenContact(true);
                  }}
                >
                  Get contact
                </Button>
              </div>
            </div>
            <div className={styles.proposals__row}>
              <div className={styles.proposals__col}>
                <span className={styles.date}>01 May 2024</span>
              </div>
              <div className={styles.proposals__col}>
                <a href="#" className={styles.proposals__link}>
                  <span
                    className={`${styles.proposals__icon} svgAttachmentIcon`}
                  ></span>
                  Description file
                </a>
              </div>
              <div className={styles.proposals__col}>
                Here will be a note from the contractor in a few lines
              </div>
              <div className={styles.proposals__col}>
                <div className={styles.proposals__price}>
                  <span className={styles.proposals__tit}>
                    Requested price:
                  </span>
                  <span className={styles.proposals__value}>800$</span>
                </div>
              </div>
              <div className={styles.proposals__col}>
                <Button
                  theme="green"
                  type="default"
                  className={styles.proposals__btn}
                >
                  Get contact
                </Button>
              </div>
            </div>
            <div className={styles.proposals__row}>
              <div className={styles.proposals__col}>
                <span className={styles.date}>01 May 2024</span>
              </div>
              <div className={styles.proposals__col}>
                <a href="#" className={styles.proposals__link}>
                  <span
                    className={`${styles.proposals__icon} svgAttachmentIcon`}
                  ></span>
                  File
                </a>
              </div>
              <div className={styles.proposals__col}>text</div>
              <div className={styles.proposals__col}>
                <div className={styles.proposals__price}>
                  <span className={styles.proposals__tit}>
                    Requested price:
                  </span>
                  <span className={styles.proposals__value}>1200$</span>
                </div>
              </div>
              <div className={styles.proposals__col}>
                <Button
                  theme="dark"
                  type="default"
                  className={styles.proposals__btn}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </BlockWhite>

      <Popup type="small" isOpen={isOpenContact} setIsOpen={setIsOpenContact}>
        <PopupMessage
          title="Get a contact"
          text="To view the contact you need to make a payment"
          btnMain="Proceed to checkout"
          btnMainHandle={() => {
            navigate("/checkout");
          }}
        >
          <div className={styles.getContact}>
            <span className={styles.getContact__title}>
              1 contact information of a company:
            </span>
            <span className={styles.getContact__data}>
              40 SAR <span className={styles.getContact__icon}></span>
            </span>
          </div>
        </PopupMessage>
      </Popup>
    </div>
  );
};

export default PostDetails;
