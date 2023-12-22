import { useReducer } from "react";
const Initialproduct = {
  name: "table",
  id: 1,
  category: "furniture"
};
const Product = () => {
  const [product, setProduct] = useReducer(
    (initialProduct, newValues) => ({ ...initialProduct, ...newValues }),
    Initialproduct
  );

  return (
    <>
      <h2>{product.name}</h2>
      <p>{product.category}</p>
      <p>{product?.price}</p>
      <button onClick={() => setProduct({ price: 2000 })}>Add price</button>
    </>
  );
};

export default Product;
