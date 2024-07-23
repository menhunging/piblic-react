import { MouseEvent, ReactNode } from "react";
import { NavLink } from "react-router-dom";

import styles from "./buttons.module.scss";

type IButton = {
  children: ReactNode;
  type: "submit" | "link" | "default";
  theme: "green" | "white" | "dark";
  className?: string;
  disabled?: boolean;
  href?: string;
  icon?: string;
  onClick?: () => void;
};

const Button = ({
  type,
  theme,
  children,
  className,
  disabled,
  href,
  icon,
  onClick,
  ...props
}: IButton) => {
  const btnMode = theme && `${styles[`btn-${theme}`]}`;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    type === "default" && event.preventDefault();
    onClick && onClick();
  };

  return type !== "link" ? (
    <button
      type={type !== "default" ? type : undefined}
      className={`${styles.btn} ${btnMode} ${className}`}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}

      {icon && <span className={`${styles.icon} ${icon}`}></span>}
    </button>
  ) : (
    <>
      <NavLink
        to={href ? href : ""}
        className={`${styles.btn} ${btnMode} ${className}`}
        onClick={handleClick}
        {...props}
      >
        {children}
      </NavLink>
    </>
  );
};

export default Button;
