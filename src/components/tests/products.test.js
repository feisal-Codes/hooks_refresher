import { Card } from "../products";
import { toHaveAttribute } from "@testing-library/jest-dom";
expect.extend({ toHaveAttribute });
test("test for product card", () => {
  let div = document.createElement("div");
  ReactDOM.render(<Card />, div);
  expect(div.querySelector("#product_card")).toHaveAttribute(
    "id",
    "product_image"
  );
});
