import { Link } from "react-router-dom";
import { useAppSelector } from "src/redux/store";

import HeaderNotifications from "../Notificate/HeaderNotifications/HeaderNotifications";
import HeaderProfile from "./Profile/HeaderProfile";
import MobileMenu from "./MobileMenu/MobileMenu";
import Lang from "./LangBlock/Lang";

import styles from "./header.module.scss";

interface IProps {
  authLayout?: boolean;
}

const Header = ({ authLayout }: IProps) => {
  const { isLoggedIn, isConfirming } = useAppSelector(
    (state) => state.authReducers
  );

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.logo}>
          <Link
            to="/"
            className={`${styles.logo__icon} ${
              !authLayout ? "svgLogoIconDark" : "svgLogoIcon"
            } `}
          ></Link>
        </div>

        <div className={styles.header__controls}>
          <Lang authLayout={authLayout} />

          {!authLayout && (
            <>
              <HeaderNotifications />
              <HeaderProfile />
            </>
          )}
        </div>

        <div className={styles.header__mobile}>
          {!authLayout && <HeaderNotifications isMobile={true} />}
          <MobileMenu
            isLoggedIn={isLoggedIn}
            authLayout={authLayout}
            isConfirming={isConfirming}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
