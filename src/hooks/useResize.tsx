import { useState, useEffect } from "react";

const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    isScreenSm: width < 767,
    isScreenMd: width <= 1023,
    isScreenLg: width <= 1199,
    isScreenXl: width <= 1439,
    isScreenXxl: width >= 1440,
  };
};

export default useResize;
