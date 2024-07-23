import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useEffect, useState } from "react";
import { useAppSelector } from "src/redux/store";

import BlockWhite from "src/components/ui/BlockWhite/BlockWhite";
import { OptionsComercial } from "src/components/ui/Selects/Options/Options";
import FileLoad from "src/components/ui/FileLoad/FileLoad";
import Button from "src/components/ui/Buttons/Button";

import styles from "./AddInfo.module.scss";

const AddInfo = () => {
  let navigate = useNavigate();

  const [file, setFile] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);

  const { status } = useAppSelector((state) => state.authReducers);

  useEffect(() => {
    if (status !== "additional") {
      navigate("/");
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Link to={".."} className="linkBack">
        Back
      </Link>

      <BlockWhite>
        <div className={styles.addInfo}>
          <h2 className={styles.addInfo__caption}>Add information</h2>
          <span className={styles.addInfo__text}>
            Here there will be information from the administrator about what
            information needs to be provided.
          </span>

          <form action="" className={styles.addInfo__form}>
            <h3 className={styles.addInfo__caption_small}>
              Company Information
            </h3>

            <div className={`${styles.addInfo__list} inputList`}>
              <div className="inputItem">
                <label htmlFor="">Company commercial register number </label>
                <input
                  type="text"
                  placeholder="Company commercial register number"
                />
              </div>
              <div className="inputItem">
                <label htmlFor="">Company commercial register name </label>
                <input
                  type="text"
                  placeholder="Company commercial register name"
                />
              </div>
              <div className="inputItem">
                <label htmlFor="">Commercial activities </label>
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
              theme="dark"
              className={styles.fileload}
            />

            <FileLoad
              file={file2}
              setFile={setFile2}
              title="Copy of proof that the one registering has the authority to place a request/proposal from the company."
              textSize="Valid format jpeg, pdf и tiff. Max size 10 Mb"
              htmlFor="file-2"
              theme="dark"
              className={styles.fileload}
            />

            <Button className={styles.btn} theme="green" type="submit">
              Save changes
            </Button>
          </form>
        </div>
      </BlockWhite>
    </div>
  );
};

export default AddInfo;
