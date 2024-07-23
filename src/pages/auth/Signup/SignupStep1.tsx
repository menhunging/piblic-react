import InputMask from "src/components/ui/Inputs/InputMask";
import Input from "src/components/ui/Inputs/Input";
import InputPhone from "src/components/ui/Inputs/InputPhone";

import styles from "../auth.module.scss";

const SignUpStep1 = () => {
  return (
    <>
      <div className={styles.choose}>
        <span className={styles.choose__title}>Choose a type of account</span>
        <div className={styles.chooseList}>
          <div className={styles.chooseItem}>
            <input type="radio" id="customer" name="type" defaultChecked />
            <label htmlFor="customer">Customer</label>
          </div>
          <div className={styles.chooseItem}>
            <input type="radio" id="contractor" name="type" />
            <label htmlFor="contractor">Contractor</label>
          </div>
        </div>
      </div>

      <div className={`${styles.authBlock__list} inputList`}>
        <div className="inputItem">
          <label htmlFor="">Name</label>
          <Input type={"text"} placeholder={"Enter name"} />
        </div>
        <div className="inputItem">
          <label htmlFor="">Password</label>
          <Input type={"password"} placeholder={"Enter password"} />
        </div>
        <div className="inputItem">
          <label htmlFor="">Email address </label>
          <Input type={"email"} placeholder={"Enter email address"} />
        </div>
        <div className="inputItem">
          <label htmlFor="">Phone number </label>
          <InputPhone />
          <span className="textInvis svgVerifyIcon completed">Verify</span>
        </div>
        <div className="inputItem">
          <label htmlFor="">
            Enter the code sent to the specified phone number
          </label>
          <InputMask placeholder="0 - 0 - 0 - 0" mask="0 - 0 - 0 - 0" />
          <span className="textInvis svgConfirmedIcon completed">
            Confirmed
          </span>
        </div>
      </div>
    </>
  );
};

export default SignUpStep1;
