import { useState } from "react";

import { useMask } from "@react-input/mask";
import useClickOutside from "src/hooks/useClickOutside";

import styles from "./inputs.module.scss";

const InputPhone = () => {
  const [code, setCode] = useState("+966");
  const [openCodeList, setOpenCodeList] = useState(false);
  const outsideAlerterRef = useClickOutside(() => setOpenCodeList(false));

  const inputRef = useMask({
    mask: "000 00 00",
    replacement: { 0: /\d/ },
  });

  return (
    <>
      <div className={styles.phoneCode}>
        <div
          className={`${styles.phoneCode__code} ${
            openCodeList && styles.opened
          } `}
          onClick={() => {
            setOpenCodeList(!openCodeList);
          }}
        >
          <img
            className={styles.coutryFlag}
            src={"./images/flags/ae.webp"}
            alt={"текст"}
          />
          <span>{code}</span>
        </div>
        {openCodeList && (
          <div ref={outsideAlerterRef} className={styles.phoneCode__list}>
            <ul>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setOpenCodeList(false);
                    setCode("+7");
                  }}
                >
                  +7
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    setOpenCodeList(false);
                    setCode("+966");
                  }}
                >
                  +966
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder={"000 00 00"}
      />
    </>
  );
};

export default InputPhone;
