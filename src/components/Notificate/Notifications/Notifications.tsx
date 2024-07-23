import styles from "../Notifications.module.scss";

const Notifications = () => {
  return (
    <div className={styles.notifications__page}>
      <h2 className="caption">Notifications</h2>
      <div className={styles.notifications__list}>
        <div className={styles.notifications__item}>
          <span className={styles.notifications__date}>Today 12:00</span>
          <p>
            Your account has been successfully verified! You can use all the
            functions of our service
          </p>
          <button
            className={`${styles.notifications__delete} svgCloseWhiteIcon`}
          ></button>
        </div>
        <div className={styles.notifications__item}>
          <span className={styles.notifications__date}>Today 12:00</span>
          <p>
            Your account has been successfully verified! You can use all the
            functions of our service. Your account has been successfully
            verified! You can use all the functions of our service. Your account
            has been successfully verified! You can use all the functions of our
            service
          </p>
          <button
            className={`${styles.notifications__delete} svgCloseWhiteIcon`}
          ></button>
        </div>
        <div className={styles.notifications__item}>
          <span className={styles.notifications__date}>Today 12:00</span>
          <p>
            Your account has been successfully verified! You can use all the
            functions of our service
          </p>
          <button
            className={`${styles.notifications__delete} svgCloseWhiteIcon`}
          ></button>
        </div>
        <div className={styles.notifications__item}>
          <span className={styles.notifications__date}>Today 12:00</span>
          <p>
            Your account has been successfully verified! You can use all the
            functions of our service. Your account has been successfully
            verified! You can use all the functions of our service. Your account
            has been successfully verified! You can use all the functions of our
            service
          </p>
          <button
            className={`${styles.notifications__delete} svgCloseWhiteIcon`}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
