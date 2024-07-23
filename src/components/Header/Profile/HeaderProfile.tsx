import { useState } from "react";
import { NavLink } from "react-router-dom";

import useClickOutside from "src/hooks/useClickOutside";

import styles from "./HeaderProfile.module.scss";

const HeaderProfile = () => {
  const [opened, setOpened] = useState(false);
  const outsideAlerterRef = useClickOutside(() => setOpened(false));

  return (
    <div className={styles.profile} ref={outsideAlerterRef}>
      <span
        className={styles.profile__icon}
        onClick={() => {
          setOpened(!opened);
        }}
      ></span>
      {opened && (
        <div className={styles.profile__drop}>
          <div className={styles.profile__dropInner}>
            <span className={styles.profile__iconBig}></span>
            <span className={styles.profile__name}>John Stevenson</span>
            <span className={styles.profile__status}>Customer</span>

            <ul className={styles.profile__links}>
              <li>
                <NavLink
                  to="/profile"
                  onClick={() => {
                    setOpened(false);
                  }}
                >
                  <span className={`${styles.icon} svgSettingsIcon`}></span>
                  Profile settings
                </NavLink>
              </li>
              <li>
                <a href="#">
                  <span className={`${styles.icon} svgLogOutIcon`}></span>
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderProfile;
