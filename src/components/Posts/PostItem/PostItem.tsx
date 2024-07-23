import { Dispatch, SetStateAction } from "react";

import { useState } from "react";
import styles from "../Posts.module.scss";
import useClickOutside from "src/hooks/useClickOutside";
import { Link } from "react-router-dom";

interface Iprops {
  setOpenPopupPost: Dispatch<SetStateAction<boolean>>;
}

const PostItem = ({ setOpenPopupPost }: Iprops) => {
  const [isOpen, setIsOpen] = useState(false);
  const outsideAlerterRef = useClickOutside(() => setIsOpen(false));

  return (
    <>
      <div className={styles.item}>
        <div className={styles.col}>
          <span className={styles.cat}>Other</span>
          <Link to={"/posts/1"} className={styles.name}>
            Web designer needed to create website
          </Link>
          <span className={styles.date}>Created 1 day ago</span>
        </div>
        <div className={styles.col}>
          <span className={styles.adress}>Tabuk Province, Tabuk </span>
        </div>
        <div className={styles.col}>
          <span className={`${styles.status} status status_active`}>
            Active
          </span>
        </div>
        <div className={styles.col}>
          <div className={styles.proposals}>
            <span className={styles.proposals__text}>1 proposals</span>
            <span className={styles.proposals__new}>
              + 1 <span>new</span>
            </span>
          </div>
        </div>

        <span
          className={`${styles.btnMore} ${
            isOpen ? "opened" : ""
          } btnMore svgMoreIcon`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        ></span>

        {isOpen && (
          <div className={styles.linksMore} ref={outsideAlerterRef}>
            <a
              href="#"
              className={`${styles.linksMore__link} ${styles.linksMore__edit}`}
              onClick={() => {
                setOpenPopupPost(true);
              }}
            >
              Edit
            </a>
            <a
              href="#"
              className={`${styles.linksMore__link} ${styles.linksMore__delete}`}
            >
              Delete
            </a>
          </div>
        )}
      </div>

      <div className={styles.item}>
        <div className={styles.col}>
          <span className={styles.cat}>Rental of equipment </span>
          <a href="#" className={styles.name}>
            React developer needed
          </a>
          <span className={styles.date}>Created 1 day ago</span>
        </div>
        <div className={styles.col}>
          <span className={styles.adress}>Tabuk Province, Tabuk </span>
        </div>
        <div className={styles.col}>
          <span className={`${styles.status} status status_very`}>
            Under verification
          </span>
          {/* <a href="#" className={styles.link}>
              Re-submit application
            </a> */}
        </div>
        <div className={styles.col}>
          <div className={styles.proposals}>
            <span className={styles.proposals__text}>0 proposals</span>
          </div>
        </div>

        <span className={`${styles.btnMore} btnMore svgMoreIcon`}></span>
      </div>

      <div className={styles.item}>
        <div className={styles.col}>
          <span className={styles.cat}>Testing Equipment</span>
          <a href="#" className={styles.name}>
            Web designer needed to create website
          </a>
          <span className={styles.date}>Created 1 day ago</span>
        </div>
        <div className={styles.col}>
          <span className={styles.adress}>Tabuk Province, Tabuk </span>
        </div>
        <div className={styles.col}>
          <span className={`${styles.status} status status_need`}>
            Additional information needed
          </span>
          <a href="#" className={styles.link}>
            Re-submit application
          </a>
        </div>
        <div className={styles.col}>
          <div className={styles.proposals}>
            <span className={styles.proposals__text}>15 proposals</span>
            <span className={styles.proposals__new}>
              + 10 <span>new</span>
            </span>
          </div>
        </div>

        <span className={`${styles.btnMore} btnMore svgMoreIcon`}></span>
      </div>

      <div className={styles.item}>
        <div className={styles.col}>
          <span className={styles.cat}>Testing Equipment</span>
          <a href="#" className={styles.name}>
            Web designer needed to create website
          </a>
          <span className={styles.date}>Created 1 day ago</span>
        </div>
        <div className={styles.col}>
          <span className={styles.adress}>Tabuk Province, Tabuk </span>
        </div>
        <div className={styles.col}>
          <span
            className={`${styles.status} ${styles.status_closed} status status_closed `}
          >
            Closed - Jan 18, 2024
          </span>
        </div>
        <div className={styles.col}>
          <div className={styles.proposals}>
            <span className={styles.proposals__text}>0 proposals</span>
          </div>
        </div>

        <span className={`${styles.btnMore} btnMore svgMoreIcon`}></span>
      </div>

      <div className={styles.item}>
        <div className={styles.col}>
          <span className={styles.cat}>Services + Goods </span>
          <a href="#" className={styles.name}>
            Web designer needed to create website
          </a>
          <span className={styles.date}>Created 1 day ago</span>
        </div>
        <div className={styles.col}>
          <span className={styles.adress}>Tabuk Province, Tabuk </span>
        </div>
        <div className={styles.col}>
          <span className={`${styles.status} status status_rejected`}>
            Rejected
          </span>
        </div>
        <div className={styles.col}>
          <div className={styles.proposals}>
            <span className={styles.proposals__text}>0 proposals</span>
          </div>
        </div>

        <span className={`${styles.btnMore} btnMore svgMoreIcon`}></span>
      </div>
    </>
  );
};

export default PostItem;
