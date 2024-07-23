import { useState } from "react";
import useClickOutside from "src/hooks/useClickOutside";

import styles from "./Lang.module.scss";

interface IProps {
  authLayout?: boolean;
}

const Lang = ({ authLayout }: IProps) => {
  const [opened, setOpened] = useState(false);
  const outsideAlerterRef = useClickOutside(() => setOpened(false));

  return (
    <div className={styles.lang} ref={outsideAlerterRef}>
      <div
        className={`${styles.langCurrent} ${
          authLayout && `${styles.langCurrent_white}`
        } ${opened && styles.langCurrent_active}`}
        onClick={() => {
          setOpened(!opened);
        }}
      >
        <span
          className={`${styles.langCurrent__icon} ${
            !authLayout ? "svgLangIconDark" : "svgLangIcon"
          }`}
        ></span>

        <span className={styles.langCurrent__text}>En</span>
      </div>
      {opened && (
        <ul className={styles.langList}>
          <li>
            <a href="#" className={`${styles.langList__link} ${styles.active}`}>
              En
            </a>
            <a href="#" className={styles.langList__link}>
              Ar
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Lang;
