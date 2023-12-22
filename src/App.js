import Products from "./components/products";
import Filters from "./components/filters";
import DataFetchWrapper from "./context/dataFetching/store";
import "./styles.css";
import CheckBox from "./AllAboutHooks/useeffectDemo";
import Logging from "./AllAboutHooks/useCallBack";
import { useEffect, useLayoutEffect } from "react";
import useWindowResize from "./AllAboutHooks/customHooks/useWindowResize";
import useMousePosition from "./AllAboutHooks/customHooks/useMousePosition";
import User from "./AllAboutHooks/useReducerDemo";
import Product from "./AllAboutHooks/product";

export default function App() {
  useEffect(() => console.log("useEffect"));
  useLayoutEffect(() => console.log("useLayoutEffect"));

  const [width, height] = useWindowResize();
  const [x, y] = useMousePosition();
  console.log(x, y);
  console.log(width, height);

  let style =
    width > 600
      ? { backgroundColor: "red", color: "white" }
      : { backgroundColor: "white", color: "red" };
  return (
    <div className="App">
      {/* <DataFetchWrapper>
        <div
          style={{
            padding: "10px 0",
            backgroundColor: "#f1f1f1",
            width: "100%"
            // height: "40vh"
          }}
        >
          <Filters />
        </div>
        <Products />
      </DataFetchWrapper> */}

      <CheckBox>this is a checkbox</CheckBox>
      <Logging />
      <User />
      <Product />
    </div>
  );
}
