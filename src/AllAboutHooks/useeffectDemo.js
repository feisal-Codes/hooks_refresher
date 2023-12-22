import { useEffect, useMemo, useReducer, useState } from "react";
import useAnyKeyToRender from "./customHooks/useAnyKeyToRender";

const CheckBox = ({ children = "" }) => {
  // const [checked, setChecked] = useState(false);
  const [checked, toggle] = useReducer((checked) => !checked, false);
  // const [words, setWords] = useState(["hello", "feisal", "new"]);

  useAnyKeyToRender();
  const words = useMemo(() => {
    let words = children.split("");
    return words;
  }, [children]);
  useEffect(() => {
    console.log("after render and whenever checked changes ");
  }, [checked]);
  useEffect(() => {
    console.log("renders cz of word");
    console.log(words);
  }, [words]);

  return (
    <>
      <input type="checkbox" onChange={() => toggle(checked)} value={checked} />
      {checked ? "checked" : "not checked"}
      <div>{children}</div>
    </>
  );
};

export default CheckBox;
