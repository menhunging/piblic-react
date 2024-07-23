import { useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "src/components/ui/Buttons/Button";
import Input from "src/components/ui/Inputs/Input";

import styles from "../auth.module.scss";

const Login = () => {
  useEffect(() => {
    console.log("Login rerender");
  }, []);

  return (
    <>
      <div className={styles.authBlock}>
        <form className={styles.login}>
          <h2 className={styles.authBlock__title}>Sign-in</h2>

          <div className={`${styles.authBlock__list} inputList`}>
            <div className="inputItem">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Enter email" />
            </div>
            <div className="inputItem">
              <label htmlFor="">Password</label>
              <Input type={"password"} placeholder={"Enter password"} />
            </div>
          </div>

          <div className={styles.authBlock__links}>
            <Link to="/pass">Forgot your password?</Link>
          </div>

          <div className={styles.authBlock__btns}>
            <Button
              type="submit"
              theme="green"
              className={styles.authBlock__btn}
            >
              {"Sign-in"}
            </Button>
          </div>

          <div className={styles.authBlock__text}>
            <p>
              By signing in you accept the{" "}
              <Link to="#">
                Terms of Use and acknowledge the Privacy Policy and Cookie
                Policy.
              </Link>
            </p>
          </div>

          <div className={styles.authBlock__bottom}>
            <span>
              Don't have an account yet? <Link to="/signup">Sign-up</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
