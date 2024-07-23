import { useState } from "react";

import HelpEmpty from "./HelpEmpty";
import FilterControls from "../Filter/FilterControls";
import HelpList from "./HelpList";

import styles from "./Help.module.scss";

const help = ["help"];
// const help = [];

const Help = () => {
  const [isCreateTicket, setIsCreateTicket] = useState<boolean>(false);

  return (
    <>
      <div className={styles.posts}>
        <h2 className="caption">Help</h2>
        {help.length > 0 ? (
          <>
            <FilterControls
              buttonName={"Create new ticket"}
              setOpenPopup={setIsCreateTicket}
            />

            <HelpList />
          </>
        ) : (
          <HelpEmpty />
        )}
      </div>
    </>
  );
};

export default Help;
