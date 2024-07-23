import HelpItem from "./HelpItem";

import styles from "./Help.module.scss";
import Button from "../ui/Buttons/Button";

const HelpList = () => {
  return (
    <div className={styles.helpList}>
      <div className={styles.helpList__head}>
        <h2 className="caption">Your requests</h2>
        <span className={styles.helpList__newMessage}>+ 1 new message</span>
      </div>

      <HelpItem />

      <Button theme="dark" type="default">
        Load more
      </Button>
    </div>
  );
};

export default HelpList;
