import styles from "./Help.module.scss";

const HelpItem = () => {
  return (
    <div className={styles.helpItem}>
      <span className={styles.helpItem__date}>01 May 2024</span>
      <span className={styles.helpItem__cat}>Ticket category</span>

      <p>
        There should be a text with an appeal here. There should be a text with
        an appeal here. There should be a text with...
      </p>

      <span className={`${styles.helpItem__status} status status_active`}>
        Response received
      </span>

      <a
        href="#"
        className={`${styles.helpItem__linkView} linkView linkView_new`}
      >
        View
      </a>
    </div>
  );
};

export default HelpItem;
