import { Dispatch, ReactNode, SetStateAction, useRef } from "react";
import { Transition } from "react-transition-group";

import Overlay from "../Overlay/Overlay";

import styles from "./Popup.module.scss";

interface IProps {
  type?: "small" | "big";
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

const Popup = ({ isOpen, setIsOpen, type, children }: IProps) => {
  const nodeRef = useRef(null);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Transition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={600}
      unmountOnExit={true}
    >
      {(state) => (
        <div
          className={`${styles.popup} ${type ? `${styles[`${type}`]}` : ""}`}
        >
          <div
            className={`${styles.popup__content} ${state ? state : ""}`}
            ref={nodeRef}
          >
            <span
              onClick={handleClose}
              className={`${styles.popup__close} svgCloseDarkIcon`}
            ></span>
            {children}
          </div>

          <Overlay handleClick={handleClose} isOpen={isOpen} />
        </div>
      )}
    </Transition>
  );
};

export default Popup;
