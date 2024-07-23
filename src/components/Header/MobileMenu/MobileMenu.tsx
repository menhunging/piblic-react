import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Transition } from "react-transition-group";

import Overlay from "src/components/ui/Overlay/Overlay";

import styles from "./MobileMenu.module.scss";

interface IProps {
  authLayout?: boolean;
  isLoggedIn: boolean;
  isConfirming: boolean;
}

const MobileMenu = ({ authLayout, isLoggedIn, isConfirming }: IProps) => {
  const [opened, setOpened] = useState(false);
  const nodeRef = useRef(null);

  const closeMenu = () => {
    setOpened(false);
  };

  return (
    <>
      <span
        className={` ${styles.burger} ${
          !authLayout ? styles.burger_dark : styles.burger_white
        }`}
        onClick={() => {
          setOpened(!opened);
        }}
      >
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
        <span className={styles.burger__line}></span>
      </span>

      <Transition
        nodeRef={nodeRef}
        in={opened}
        timeout={300}
        unmountOnExit={true}
      >
        {(state) => (
          <div className={`${styles.mobileMenu} ${state}`} ref={nodeRef}>
            <span
              className={`${styles.close} svgCloseDarkIcon`}
              onClick={closeMenu}
            ></span>

            {isLoggedIn && (
              <>
                <div className={styles.userInfo}>
                  <span className={styles.userInfo__icon}></span>
                  <span className={styles.userInfo__name}>John Stevenson</span>
                  <span className={styles.userInfo__status}>Customer</span>
                </div>
                <nav className={styles.menu}>
                  <ul>
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          [isActive ? `${styles.active}` : ""].join(" ") +
                          ` ${!isConfirming ? `${styles.disabled}` : ""} `
                        }
                        onClick={closeMenu}
                      >
                        Applications
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                          [isActive ? `${styles.active}` : ""].join(" ")
                        }
                        onClick={closeMenu}
                      >
                        Profile settings
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/help"
                        className={({ isActive }) =>
                          [isActive ? `${styles.active}` : ""].join(" ")
                        }
                        onClick={closeMenu}
                      >
                        Help
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/notifications"
                        className={({ isActive }) =>
                          [isActive ? `${styles.active}` : ""].join(" ")
                        }
                        onClick={closeMenu}
                      >
                        Notifications
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </>
            )}

            <div className={styles.lang}>
              <div className={styles.langTitle}>
                <span
                  className={`${styles.langTitle__icon} svgLangIconDark`}
                ></span>
                <span className={styles.langTitle__text}>Language</span>
              </div>
              <ul className={styles.langChange}>
                <li>
                  <a href="#" className={styles.active}>
                    En
                  </a>
                </li>
                <li>
                  <a href="#">Ar</a>
                </li>
              </ul>
            </div>

            {isLoggedIn && (
              <div className={styles.logout}>
                <a href="#" className={styles.logout__link}>
                  <span
                    className={`${styles.logout__icon} svgLogOutIcon`}
                  ></span>
                  Log out
                </a>
              </div>
            )}
          </div>
        )}
      </Transition>

      <Overlay handleClick={closeMenu} isOpen={opened} />
    </>
  );
};

export default MobileMenu;
