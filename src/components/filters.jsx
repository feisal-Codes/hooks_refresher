import { useEffect, useState } from "react";
import { useData } from "../context/dataFetching/store";
import { filterActions } from "../context/dataFetching/reducers/filtersReducer";

const Filters = () => {
  const [filters, setFilters] = useState({
    price: "",
    category: [],
    rating: ""
  });
  const {
    productsState: { data },
    dispatch
  } = useData();
  const categories = [
    ...new Set(data.products.map((product) => product.category))
  ];
  useEffect(() => {
    dispatch({ type: filterActions.CombinedCriteria, payload: filters });
  }, [filters.category.length, filters.category, filters.rating]);
  const options = [
    ...new Set(data.products.map((product) => product.rating))
  ].sort((a, b) => a - b);
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name !== "rating" && name !== "price") {
      if (checked) {
        setFilters((prev) => {
          return { ...prev, category: [...prev.category, name] };
        });
      } else if (!checked) {
        setFilters((prev) => {
          return {
            ...prev,
            category: [
              ...prev.category.filter(
                (category) => category.toLowerCase() !== name.toLowerCase()
              )
            ]
          };
        });
      }
    } else {
      setFilters((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  console.log(filters);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-around",
          gap: "10px"
        }}
      >
        <div style={{ flexWrap: "wrap" }}>
          <h4>Product Category</h4>
          <div
            style={{
              display: "flex",
              width: "400px",
              gap: "5px",
              flexWrap: "wrap"
            }}
          >
            {categories.map((category, idx) => (
              <div key={category + idx}>
                <CheckBox
                  name={category}
                  label={category}
                  onChange={handleChange}
                  value={filters.category}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4>Product Rating</h4>
          <Select
            onChange={handleChange}
            value={filters.rating}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;

const RadioButton = ({ type, label, name, onChange, value }) => {
  return (
    <label>
      {label}
      <input name={name} type={type} onChange={onChange} value={value} />
    </label>
  );
};

const CheckBox = ({ label, name, onChange, value }) => {
  return (
    <label style={{ display: "flex", gap: "5px" }}>
      <input name={name} type="checkbox" onChange={onChange} value={value} />
      <span>{label}</span>
    </label>
  );
};

const Select = ({ options, onChange }) => {
  return (
    <div>
      <select onChange={onChange} name="rating">
        <option value="">Select Rating</option>
        {options.map((option, idx) => (
          <option key={option + idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
