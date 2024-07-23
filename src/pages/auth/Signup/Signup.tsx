import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

import Steps from "src/components/ui/Steps/Steps";
import Button from "src/components/ui/Buttons/Button";
import SignUpStep1 from "./SignupStep1";
import SignUpStep2 from "./SignupStep2";
import SignUpStep3 from "./SignupStep3";
import SignUpStep4 from "./SignupStep4";

import styles from "../auth.module.scss";

const SignUpSteps = (
  currentStep: Number,
  setCurrentStep: Dispatch<SetStateAction<number>>
) => {
  switch (currentStep) {
    case 1:
      return <SignUpStep1 />;
    case 2:
      return <SignUpStep2 setCurrentStep={setCurrentStep} />;
    case 3:
      return <SignUpStep3 setCurrentStep={setCurrentStep} />;
    case 4:
      return <SignUpStep4 setCurrentStep={setCurrentStep} />;
  }
};

const SignUp = () => {
  const steps = [1, 2, 3, 4];
  const [currentStep, setCurrentStep] = useState(1);
  // const [complete, setComplete] = useState(false);

  const handleSkipStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleSubmit = () => {
    console.log("handleSubmit");
  };

  return (
    <>
      <div className={styles.authBlock}>
        <form onSubmit={handleSubmit} className={styles.login}>
          <h2 className={styles.authBlock__title}>Sign-up</h2>

          <Steps steps={steps} currentStep={currentStep} />

          <div className={styles.signUp}>
            {SignUpSteps(currentStep, setCurrentStep)}
          </div>

          <div className={styles.authBlock__btns}>
            {currentStep !== steps.length ? (
              <>
                {currentStep === 3 && (
                  <>
                    <Button
                      type="link"
                      theme="white"
                      className={styles.authBlock__btn}
                      onClick={handleSkipStep}
                    >
                      {"Skip this step"}
                    </Button>
                  </>
                )}

                <Button
                  type="link"
                  theme="green"
                  className={styles.authBlock__btn}
                  onClick={() => {
                    setCurrentStep((prev) => prev + 1);
                  }}
                >
                  {"Next step"}
                </Button>
              </>
            ) : (
              <Button
                type="submit"
                theme="green"
                className={styles.authBlock__btn}
                onClick={() => {
                  // setComplete(true);
                }}
              >
                {"Sign-up"}
              </Button>
            )}
          </div>

          {currentStep === steps.length && (
            <div className={styles.authBlock__text}>
              <p>
                By signing in you accept the{" "}
                <Link to="#">
                  Terms of Use and acknowledge the Privacy Policy and Cookie
                  Policy.
                </Link>
              </p>
            </div>
          )}

          <div className={styles.authBlock__bottom}>
            <span>
              Already have an account? <Link to="/signin">Sign-in</Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
