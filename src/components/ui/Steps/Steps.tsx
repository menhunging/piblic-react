import styles from "./steps.module.scss";

type ISteps = {
  steps: number[];
  currentStep: number;
};

const Steps = ({ steps, currentStep }: ISteps) => {
  return (
    <div className={styles.steps}>
      <div className={styles.stepsNubmers}>
        {steps?.map((step, i) => {
          let classActive = currentStep === i + 1 && styles.active;
          let classComplete = i + 1 < currentStep && styles.complete;

          return (
            <div
              key={i}
              className={`${styles.stepsNubmers__item} ${classActive} ${classComplete} `}
            >
              {step}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Steps;
