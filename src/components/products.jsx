import { useEffect, useState } from "react";
import { useData } from "../context/dataFetching/store";

const Products = () => {
  const { productsState, refetchData } = useData();
  const [isMoreData, setIsMoreData] = useState(true);
  const [products, setProducts] = useState([]);
  console.log("*************************");
  console.log(productsState.data.products);
  const { data, filteredData } = productsState;
  // console.log("alldata");
  // console.log(data.products);
  console.log("filteredData");
  console.log(filteredData);

  const handleClick = () => {
    console.log("this is skip2", data.skip);
    let newPage = Number(data.skip) + 20;
    if (newPage < data.total) {
      refetchData(newPage);
    } else {
      setIsMoreData(false);
    }
  };

  useEffect(() => {
    if (filteredData.length > 0) {
      console.log("inside useEffect");
      console.log("*******************");

      setProducts(filteredData);
    } else {
      console.log("we reached inside the if else to set products");
      setProducts(data.products);
    }
  }, [filteredData, data.products]);
  return (
    <>
      <h1> These are products</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "2px",
          flexWrap: "wrap"
        }}
      >
        {products?.map((product, idx) => (
          <Card key={product.id + idx} product={product} />
        ))}
      </div>
      <button onClick={handleClick}>Load More</button>
      {!isMoreData && <h3>No More Data is Available</h3>}
    </>
  );
};

export default Products;

export const Card = ({ product }) => {
  return (
    <div
      id="product_card"
      style={{
        backgroundColor: "#fff",
        width: "400px",
        color: "black",
        padding: "5px 10px",
        textAlign: "left",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        overflow: "hidden",
        marginBottom: "30px"
      }}
    >
      <div id="product_image">
        <img
          src={product.images[0]}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0"
          }}
          alt={product.title}
        />
      </div>
      <h4 style={{ margin: "10px 0" }}>{product.title}</h4>
      <p style={{ marginBottom: "10px" }}>{product.description}</p>
      <p>
        <strong>{product.price}</strong>
      </p>
      <p>
        <i>{product.category}</i>
      </p>
      <p>
        <i>{"rated: " + product.rating}</i>
      </p>
      <button
        style={{
          backgroundColor: "#007BFF",
          color: "#fff",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          border: "none"
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};
