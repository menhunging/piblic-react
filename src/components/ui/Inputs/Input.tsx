import { useState } from "react";

interface IProps {
  value?: string | undefined;
  type: string;
  placeholder: string;
  readonly?: boolean;
}

const Input = ({ type, placeholder, value, readonly, ...props }: IProps) => {
  const [inputType, setInputType] = useState(type);
  const [activeEye, setActiveEye] = useState(false);

  const handleEye = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
    setActiveEye(!activeEye);
  };

  return (
    <>
      <input
        type={inputType}
        placeholder={placeholder}
        value={value ? value : undefined}
        readOnly={readonly}
        {...props}
      />
      {type == "password" && (
        <span
          className={`iconInvis svgEyeIcon ${activeEye && "active"}`}
          onClick={handleEye}
        ></span>
      )}
    </>
  );
};

export default Input;
