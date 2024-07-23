import { useState, Dispatch, SetStateAction } from "react";
import Select from "react-select";

import { OptionsComercial } from "src/components/ui/Selects/Options/Options";
import FileLoad from "src/components/ui/FileLoad/FileLoad";

import styles from "../auth.module.scss";

interface IProps {
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const SignUpStep2 = ({ setCurrentStep }: IProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);

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

      <div className={styles.companyInfo}>
        <span className={styles.companyInfo__title}>Company Information</span>

        <div className={`${styles.authBlock__list} inputList`}>
          <div className="inputItem">
            <label htmlFor="">Company commercial register number</label>
            <input
              type="text"
              placeholder="Company commercial register number"
            />
          </div>
          <div className="inputItem">
            <label htmlFor="">Company commercial register name </label>
            <input type="text" placeholder="Company commercial register name" />
          </div>
          <div className="inputItem">
            <label htmlFor="">Commercial activities</label>
            <Select
              // menuIsOpen={true}
              isSearchable={false}
              styles={{
                control: () => ({}),
                option: () => ({}),
              }}
              classNamePrefix={"select"}
              className={"select"}
              placeholder="Commercial activities"
              options={OptionsComercial}
            />
          </div>
        </div>

        <FileLoad
          file={file}
          setFile={setFile}
          title="Copy of the Company commercial register"
          textSize="Valid format jpeg, pdf и tiff. Max size 10 Mb"
          htmlFor="file-1"
        />

        <FileLoad
          file={file2}
          setFile={setFile2}
          title="Copy of proof that the one registering has the authority to place a request/proposal from the company."
          textSize="Valid format jpeg, pdf и tiff. Max size 10 Mb"
          htmlFor="file-2"
        />
      </div>
    </>
  );
};

export default SignUpStep2;
