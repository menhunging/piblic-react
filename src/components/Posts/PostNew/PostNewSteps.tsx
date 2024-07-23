import { Dispatch, SetStateAction, useState } from "react";
import Select from "react-select";
import { format } from "date-fns";

import { OptionsComercial } from "src/components/ui/Selects/Options/Options";
import Input from "src/components/ui/Inputs/Input";
import UICalendar from "src/components/ui/DateRange/UICalendar";

import styles from "./PostNew.module.scss";
import FileLoad from "src/components/ui/FileLoad/FileLoad";
import InputPhone from "src/components/ui/Inputs/InputPhone";

interface IProps {
  file: File | null;
  date: Date | number;
  currentStep: Number;
  setFile: Dispatch<SetStateAction<File | null>>;
  setDate: Dispatch<SetStateAction<Date | number>>;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const PostNewSteps = ({
  file,
  date,
  currentStep,
  setFile,
  setDate,
  setCurrentStep,
}: IProps) => {
  const PostNewStep1 = () => {
    const [openedCalendar, setOpenedCalendar] = useState<boolean>(false);

    return (
      <>
        <span className={styles.postNewJob__desc}>Job information</span>

        <div className={`${styles.inputList} inputList`}>
          <div className="inputList__left">
            <div className={`${styles.inputItem} inputItem`}>
              <label htmlFor="">Category*</label>
              <Select
                // menuIsOpen={true}
                isSearchable={false}
                styles={{
                  control: () => ({}),
                  option: () => ({}),
                }}
                classNamePrefix={"select"}
                className={"select"}
                placeholder="Category"
                options={OptionsComercial}
              />
            </div>
            <div
              className={`${styles.inputItem} ${styles.inputItem__text} inputItem `}
            >
              <label htmlFor="">Job title*</label>
              <textarea></textarea>
            </div>
            <div
              className={`${styles.inputItem} ${styles.inputItem__desc} inputItem`}
            >
              <label htmlFor="">Description*</label>
              <textarea></textarea>
            </div>
          </div>
          <div className="inputList__right">
            <div className={`${styles.inputItem} inputItem`}>
              <label htmlFor="">Region*</label>
              <Select
                // menuIsOpen={true}
                isSearchable={false}
                styles={{
                  control: () => ({}),
                  option: () => ({}),
                }}
                classNamePrefix={"select"}
                className={"select"}
                placeholder="Region"
                options={OptionsComercial}
              />
            </div>
            <div className={`${styles.inputItem} inputItem`}>
              <label htmlFor="">City*</label>
              <Input type="text" placeholder="City" />
            </div>
            <div className={`${styles.inputItem} inputItem`}>
              <label htmlFor="">Due Date*</label>
              <div onClick={() => setOpenedCalendar(true)}>
                <Input
                  type="text"
                  placeholder="00 Jan 0000"
                  readonly
                  value={format(date, "dd MMM yyyy")}
                />
                <span
                  className={`${styles.iconInvis} iconInvis svgCalendarIcon`}
                ></span>
              </div>
              {openedCalendar && (
                <UICalendar
                  className={`${styles.postNewJob__date} dateCalendar`}
                  date={date}
                  setDate={setDate}
                  setOpened={setOpenedCalendar}
                />
              )}
            </div>
            <div
              className={`${styles.inputItem} ${styles.inputItem__text} inputItem`}
            >
              <label htmlFor="">Notes*</label>
              <textarea></textarea>
            </div>

            <FileLoad
              className={styles.postNewJob__file}
              file={file}
              setFile={setFile}
              theme={"dark"}
              htmlFor="filenew"
              title="Attachments"
              textSize="Valid format jpeg, pdf и tiff. Max size 10 Mb"
            />
          </div>
        </div>
      </>
    );
  };

  const PostNewStep2 = () => {
    return (
      <>
        <span
          className="linkBack"
          onClick={() => {
            setCurrentStep((prev) => prev - 1);
          }}
        >
          Previous step
        </span>

        <div className={`${styles.inputList} inputList`}>
          <div className="inputList__left">
            <span className={styles.postNewJob__desc}>
              Contact info of person responsible
            </span>

            <div className={`${styles.inputItem}  inputItem `}>
              <label htmlFor="">Name</label>
              <Input type="text" placeholder="Enter name" />
            </div>

            <div className={`${styles.inputItem}  inputItem `}>
              <label htmlFor="">Email address</label>
              <Input type="text" placeholder="Enter email address  " />
            </div>

            <div className="inputItem">
              <label htmlFor="">Phone number </label>
              <InputPhone />
            </div>
          </div>
          <div className="inputList__right">
            <span className={styles.postNewJob__desc}>
              Contact info of person responsible (backup)
            </span>

            <div
              className={`${styles.inputItem} ${styles.inputItem__text} inputItem `}
            >
              <label htmlFor="">Name</label>
              <Input type="text" placeholder="Enter name" />
            </div>

            <div
              className={`${styles.inputItem} ${styles.inputItem__text} inputItem `}
            >
              <label htmlFor="">Email address</label>
              <Input type="text" placeholder="Enter email address  " />
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

  switch (currentStep) {
    case 1:
      return <PostNewStep1 />;
    case 2:
      return <PostNewStep2 />;
  }
};

export default PostNewSteps;
