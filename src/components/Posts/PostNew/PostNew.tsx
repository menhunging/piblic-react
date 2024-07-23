import { Dispatch, SetStateAction, useState } from "react";

import Button from "src/components/ui/Buttons/Button";
import Steps from "src/components/ui/Steps/Steps";

import PostsNewContent from "./PostNewSteps";

import styles from "./PostNew.module.scss";

interface IProps {
  warning?: boolean;
  setOpenPopupPost: Dispatch<SetStateAction<boolean>>;
  setOpenPopupSucces: Dispatch<SetStateAction<boolean>>;
}

const PostNew = ({ warning, setOpenPopupSucces, setOpenPopupPost }: IProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [date, setDate] = useState<Date | number>(new Date());
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handeClickButton = () => {
    if (currentStep === 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setOpenPopupPost(false);
      setOpenPopupSucces(true);
    }
  };

  return (
    <form className={styles.postNewJob}>
      <h2 className={`${styles.postNewJob__caption} caption`}>
        Post a new job
      </h2>

      <Steps steps={[1, 2]} currentStep={currentStep}></Steps>

      {warning && (
        <span className={styles.postNewJob__warning}>
          Please note that your job post would be sent for verification if you
          updated it
        </span>
      )}

      <div className={styles.postNewJob__content}>
        <PostsNewContent
          file={file}
          setFile={setFile}
          date={date}
          setDate={setDate}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>

      <div className={styles.postNewJob__controls}>
        <Button
          className={styles.postNewJob__btn}
          theme="green"
          type={currentStep === 1 ? "default" : "default"} // submit
          onClick={handeClickButton}
        >
          {currentStep === 1 ? "Next step" : " Сreate a new job"}
        </Button>
      </div>
    </form>
  );
};

export default PostNew;
