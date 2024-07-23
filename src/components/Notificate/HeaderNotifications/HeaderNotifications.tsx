import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Transition } from "react-transition-group";
import useClickOutside from "src/hooks/useClickOutside";
import Overlay from "src/components/ui/Overlay/Overlay";

import styles from "../Notifications.module.scss";

interface IProps {
  isMobile?: boolean;
}

const HeaderNotifications = ({ isMobile }: IProps) => {
  const [opened, setOpened] = useState(false);
  const outsideAlerterRef = useClickOutside(() => setOpened(false));
  const nodeRef = useRef(null);

  const CloseIcon = () => {
    return (
      <span
        className={`${styles.notifications__close} svgCloseDarkIcon`}
        onClick={() => {
          setOpened(!opened);
        }}
      ></span>
    );
  };

  const DropBlockInner = () => {
    return (
      <div className={styles.notifications__dropBlockInner}>
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
              functions of our service
            </p>
            <button
              className={`${styles.notifications__delete} svgCloseWhiteIcon`}
            ></button>
          </div>
        </div>
        <Link
          to={"/notifications"}
          className={styles.notifications__linkAll}
          onClick={() => {
            setOpened(!opened);
          }}
        >
          See all notifications
        </Link>
      </div>
    );
  };

  return (
    <div
      className={`${styles.notifications} ${styles.notifications_new}`}
      ref={outsideAlerterRef}
    >
      <span
        className={`${styles.notifications__icon} ${
          opened ? "svgNotifIcon--opened" : "svgNotifIcon"
        }`}
        onClick={() => {
          setOpened(!opened);
        }}
      ></span>

      {isMobile ? (
        <>
          <Transition
            nodeRef={nodeRef}
            in={opened}
            timeout={300}
            unmountOnExit={true}
          >
            {(state) => (
              <div
                ref={nodeRef}
                className={`${styles.notifications__dropBlock} ${state}`}
              >
                <CloseIcon />
                <DropBlockInner />
              </div>
            )}
          </Transition>
          <Overlay
            handleClick={() => {
              setOpened(false);
            }}
            isOpen={opened}
          />
        </>
      ) : (
        <>
          {opened && (
            <div className={`${styles.notifications__dropBlock}`}>
              <CloseIcon />
              <DropBlockInner />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default HeaderNotifications;
