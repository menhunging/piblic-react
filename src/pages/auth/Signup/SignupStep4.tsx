import { Dispatch, SetStateAction } from "react";

import InputPhone from "src/components/ui/Inputs/InputPhone";

import styles from "../auth.module.scss";

interface IProps {
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const SignUpStep4 = ({ setCurrentStep }: IProps) => {
  return (
    <>
      <span
        className={styles.linkBack}
        onClick={() => {
          setCurrentStep((prev) => prev - 1);
        }}
      >
        Previous step
      </span>

      <div className={styles.phoneBlock}>
        <span className={styles.phoneBlock__title}>
          Backup Contact Information for the register
        </span>

        <div className={`${styles.authBlock__list} inputList`}>
          <div className="inputItem">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div className="inputItem">
            <label htmlFor="">Email address</label>
            <input type="text" placeholder="Email address" />
          </div>
          <div className="inputItem">
            <label htmlFor="">Phone number </label>
            <InputPhone />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpStep4;
