import { ReactNode } from "react";
import styles from "./BlockWhite.module.scss";

type IProps = {
  children: ReactNode;
  className?: string;
};

const BlockWhite = ({ children, className }: IProps) => {
  let classNames = className
    ? `${styles.blockWhite} ${className}`
    : `${styles.blockWhite}`;

  return <div className={classNames}>{children}</div>;
};

export default BlockWhite;
