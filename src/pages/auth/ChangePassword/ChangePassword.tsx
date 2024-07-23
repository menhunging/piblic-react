import Button from "src/components/ui/Buttons/Button";
import Input from "src/components/ui/Inputs/Input";

import styles from "../auth.module.scss";

const ChangePassword = () => {
  return (
    <>
      <div className={styles.authBlock}>
        <form className={styles.login}>
          <h2 className={styles.authBlock__title}>Set up password</h2>

          <div className={`${styles.authBlock__list} inputList`}>
            <div className="inputItem">
              <label htmlFor="">New password </label>
              <Input type={"password"} placeholder={"Enter password"} />
            </div>
            <div className="inputItem">
              <label htmlFor="">Enter the new password again</label>
              <Input type={"password"} placeholder={"Enter password"} />
            </div>
          </div>

          <div className={styles.authBlock__btns}>
            <Button
              type="submit"
              theme="green"
              className={styles.authBlock__btn}
            >
              {"Save"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
