import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Transition } from "react-transition-group";

import Button from "src/components/ui/Buttons/Button";
import Input from "src/components/ui/Inputs/Input";
import Overlay from "src/components/ui/Overlay/Overlay";
import Filter from "../../Filter/Filter";
import useResize from "src/hooks/useResize";

import styles from "./PostsControls.module.scss";

interface Iprops {
  setOpenPopupPost: Dispatch<SetStateAction<boolean>>;
}

const PostsControls = ({ setOpenPopupPost }: Iprops) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const nodeRef = useRef(null);
  const { isScreenSm } = useResize();

  const closeFilter = () => {
    setIsOpenFilter(false);
  };

  return (
    <div className={styles.controls}>
      <div className={styles.controls__left}>
        <div className={`${styles.inputItem} inputItem`}>
          <Input type="text" placeholder="Search" />
          <span className={`${styles.controls__icon} svgSearchIcon`}></span>
        </div>
        <span
          className={`${styles.controls__btnfilter} svgFilterIcon ${
            isOpenFilter ? "active" : ""
          }`}
          onClick={() => {
            setIsOpenFilter(!isOpenFilter);
          }}
        >
          Filter
        </span>
      </div>

      <div className={styles.controls__right}>
        <Button
          className={styles.btn}
          type="default"
          theme="green"
          onClick={() => setOpenPopupPost(true)}
        >
          Post a new job
        </Button>
      </div>

      <Transition
        nodeRef={nodeRef}
        in={isOpenFilter}
        timeout={isScreenSm ? 300 : 0}
        unmountOnExit={true}
      >
        {(state) => (
          <Filter
            state={isScreenSm ? state : undefined}
            nodeRef={nodeRef ? nodeRef : undefined}
            closeFilter={closeFilter}
          />
        )}
      </Transition>
      {isScreenSm && (
        <Overlay handleClick={closeFilter} isOpen={isOpenFilter} />
      )}
    </div>
  );
};

export default PostsControls;
