import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <Link
          to="/"
          className={`${styles.footer__logo} svgLogoSmallIcon`}
        ></Link>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottom__left}>
          <Link to="/" className={styles.footer__link}>
            Privacy Policy
          </Link>
          <Link to="/" className={styles.footer__link}>
            Terms of use
          </Link>
        </div>
        <div className={styles.footerBottom__right}>
          <div className={styles.copyRight}>
            Monaqasa, {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
