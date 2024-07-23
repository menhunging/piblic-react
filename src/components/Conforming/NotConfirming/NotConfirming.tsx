import { useAppSelector } from "src/redux/store";

import BlockWhite from "src/components/ui/BlockWhite/BlockWhite";
import Button from "src/components/ui/Buttons/Button";

import styles from "./NotConfirming.module.scss";
import { InputMask } from "@react-input/mask";
import { useState } from "react";

const NotConfirming = () => {
  const { isConfirming, isConfirmingPhone, status } = useAppSelector(
    (state) => state.authReducers
  );

  const [isEnter, setIsEnter] = useState(false);

  const handleClick = () => {
    setIsEnter(true);
  };

  const StatusAdditional = () => {
    return (
      <>
        <div className={styles.notConfirmingItem__info}>
          <span
            className={`${styles.notConfirmingItem__very} ${styles.notConfirmingItem__very_additional}`}
          >
            Additional information needed
          </span>
        </div>
        <p>Please re-submit your application by clicking on the button below</p>
        <div className={styles.notConfirmingItem__controls}>
          <Button
            href="/addinfo"
            type="link"
            theme="green"
            className={styles.notConfirmingItem__btn}
          >
            Re-submit application
          </Button>
        </div>
      </>
    );
  };

  const StatusRejected = () => {
    return (
      <>
        <div className={styles.notConfirmingItem__info}>
          <span
            className={`${styles.notConfirmingItem__very} ${styles.notConfirmingItem__very_rejected}`}
          >
            Rejected
          </span>
        </div>
        <p>Unfortunately, your registration was denied.</p>
        <p>
          Please <a href="#">click here</a> to check the reason of account
          rejection.
        </p>
        <div className={styles.notConfirmingItem__controls}>
          <span>Do you have any questions?</span>
          <Button
            href="#"
            type="link"
            theme="green"
            className={styles.notConfirmingItem__btn}
          >
            Contact support
          </Button>
        </div>
      </>
    );
  };

  const StatusUnderVerification = () => {
    return (
      <>
        <div className={styles.notConfirmingItem__info}>
          <span className={styles.notConfirmingItem__very}>
            Under verification
            <span
              className={`${styles.notConfirmingItem__icon} svgReloadIcon`} // ${styles.notConfirmingItem__icon_rotate}
            ></span>
          </span>
        </div>
        <p>
          Your account is being reviewed by a moderator. Wait until the check is
          completed. Verification usually takes 1-3 days.
        </p>
        <div className={styles.notConfirmingItem__controls}>
          <span>Do you have any questions?</span>
          <Button
            href="#"
            type="link"
            theme="green"
            className={styles.notConfirmingItem__btn}
          >
            Contact support
          </Button>
        </div>
      </>
    );
  };

  const PrintStatus = () => {
    switch (status) {
      case "additional":
        return <StatusAdditional />;

      case "rejected":
        return <StatusRejected />;

      case "underverification":
        return <StatusUnderVerification />;

      case "ok":
        return "ok";
    }
  };

  return (
    <div className={styles.notConfirming}>
      <h2 className={styles.notConfirming__title}>
        A few steps left before you can start using your account:
      </h2>
      <BlockWhite className={styles.notConfirming__item_email}>
        <div className={styles.notConfirmingItem}>
          <h3 className={styles.notConfirmingItem__title}>
            Email confirmation status
          </h3>
          <div className={styles.notConfirmingItem__info}>
            <span className={styles.notConfirmingItem__mail}>
              johnstevenson@gmail.com
            </span>

            <span
              className={`${styles.notConfirmingItem__status} ${
                isConfirming ? styles.confirmed : styles.not
              }`}
            >
              <span>{isConfirming ? "Confirmed" : "Not confirmed"}</span>
            </span>
          </div>

          {isConfirming ? (
            <p>Your email has been successfully confirmed!</p>
          ) : (
            <>
              <p>
                An email has been sent to the email address you provided. You
                need to follow the link provided in the letter.
              </p>

              <div className={styles.notConfirmingItem__controls}>
                <span>Did not get the email?</span>
                <Button
                  href="#"
                  type="link"
                  theme="green"
                  className={styles.notConfirmingItem__btn}
                >
                  Send again
                </Button>
              </div>
            </>
          )}
        </div>
      </BlockWhite>

      <BlockWhite className={styles.notConfirming__item_phones}>
        <div className={styles.notConfirmingItem}>
          <h3 className={styles.notConfirmingItem__title}>
            Confirmation phone number
          </h3>
          <div className={styles.notConfirmingItem__info}>
            <span className={styles.notConfirmingItem__mail}>
              +996 123 45 67 89
            </span>

            {isConfirmingPhone ? (
              <span
                className={`${styles.notConfirmingItem__status} ${styles.confirmed}`}
              >
                <span>Confirmed</span>
              </span>
            ) : (
              <>
                {!isEnter && (
                  <a onClick={handleClick} className={`${styles.linkVerify}`}>
                    Verify
                  </a>
                )}
              </>
            )}
          </div>

          {isConfirmingPhone ? (
            <p>Your phone number has been successfully confirmed!</p>
          ) : (
            <>
              {isEnter ? (
                <div className={styles.codeInput}>
                  <p>Enter the code sent to the specified phone number</p>

                  <div className={styles.notConfirmingItem__info}>
                    <span className={styles.notConfirmingItem__mail}>
                      Didn't receive the code?
                    </span>

                    <a onClick={handleClick} className={`${styles.linkVerify}`}>
                      Resend
                    </a>
                  </div>

                  <div className={styles.code}>
                    <div className="inputItem">
                      <label htmlFor="" className={styles.label}>
                        The code will expire in <span>00:01:29</span>
                      </label>
                      <InputMask
                        placeholder="0 - 0 - 0 - 0"
                        mask="0 - 0 - 0 - 0"
                      />
                      <span
                        className={`${styles.textInvis} textInvis svgConfirmedIcon completed`}
                      >
                        Confirmed
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <p className={styles.text}>
                  You need to confirm the specified phone number
                </p>
              )}
            </>
          )}
        </div>
      </BlockWhite>

      <BlockWhite className={styles.notConfirming__item_status}>
        <div className={styles.notConfirmingItem}>
          <h3 className={styles.notConfirmingItem__title}>Account status</h3>
          <PrintStatus />
        </div>
      </BlockWhite>
    </div>
  );
};

export default NotConfirming;
