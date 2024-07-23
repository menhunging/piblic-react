import Button from "../ui/Buttons/Button";
import styles from "./Help.module.scss";

const HelpEmpty = () => {
  return (
    <div className={styles.helpEmpty}>
      <p>You don't have any ticket yet. You can create new ticket right now.</p>
      <Button theme="green" type="default" className={styles.helpEmpty__btn}>
        Create new ticket
      </Button>
    </div>
  );
};

export default HelpEmpty;
