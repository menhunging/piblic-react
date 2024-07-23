import { ChangeEvent, useRef } from "react";
import styles from "./FileLoad.module.scss";

interface IProps {
  file: File | null;
  setFile: (arg: File | null) => void;
  title: string;
  textSize: string;
  htmlFor: string;
  theme?: "dark" | null;
  className?: string;
}

const FileLoad = ({
  file,
  setFile,
  title,
  textSize,
  htmlFor,
  theme,
  className,
}: IProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className={`${styles.fileUpload} ${className ? className : ""}`}>
      <div className={styles.fileUpload__left}>
        <span className={styles.fileUpload__title}>{title}</span>
        <span className={styles.fileUpload__size}>{textSize}</span>
      </div>
      <div className={styles.fileUpload__right}>
        <label
          htmlFor={htmlFor}
          className={`${styles.fileUpload__upload} ${
            theme === "dark" ? "svgUploadDarkIcon" : "svgUploadIcon"
          } `}
        >
          Upload
        </label>
      </div>
      <input
        type="file"
        id={htmlFor}
        name={htmlFor}
        onChange={handleChange}
        ref={fileInputRef}
      />
      {file && (
        <div className={styles.fileUpload__bottom}>
          <label htmlFor={htmlFor}>{file?.name}</label>
          <span
            className={`${styles.fileUpload__delete} ${
              theme === "dark" ? "svgCloseDarkIcon" : "svgCloseWhiteIcon"
            } `}
            onClick={() => {
              if (fileInputRef?.current) {
                fileInputRef.current.value = "";
                setFile(null);
              }
            }}
          ></span>
        </div>
      )}
    </div>
  );
};

export default FileLoad;
