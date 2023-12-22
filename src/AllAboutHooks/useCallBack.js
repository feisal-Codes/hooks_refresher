import { useCallback, useEffect } from "react";
import useAnyKeyToRender from "./customHooks/useAnyKeyToRender";

const Logging = () => {
  useAnyKeyToRender();
  const fn = useCallback(() => {
    console.log("hello");
    console.log("world");
  }, []);

  useEffect(() => {
    console.log("fresh render");
    fn();
  }, [fn]);
  return (
    <>
      <h2>Follow for more</h2>
    </>
  );
};

export default Logging;
