import { useLayoutEffect, useState } from "react";

const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const calculatePosition = (mouseObj) => {
    // console.log(mouseObj);
    let { x, y } = mouseObj;
    setX(() => x);
    setY(() => y);
  };

  useLayoutEffect(() => {
    window.addEventListener("mousemove", calculatePosition);
    return () => window.removeEventListener("mousemove", calculatePosition);
  }, []);

  return [x, y];
};

export default useMousePosition;
