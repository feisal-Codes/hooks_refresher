import { useLayoutEffect, useState } from "react";

const useWindowResize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resize = () => {
    setWidth(() => window.innerWidth);
    setHeight(() => window.innerHeight);
  };
  /*useLayoutEffect is used to calculate the window’s width
and height before the paint*/
  useLayoutEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return [width, height];
};

export default useWindowResize;
