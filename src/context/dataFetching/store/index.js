import { createContext, useContext, useEffect, useReducer } from "react";
import {
  productsReducer,
  startFetch,
  storeData,
  failedFetch
} from "../reducers/productsReducer";
import { filtersReducer, filterActions } from "../reducers/filtersReducer";

const DataFetching = createContext({});
let BASE_URL = "https://dummyjson.com/";
let skip = 0;
let limit = 20;
let query = `products?skip=${skip}&limit=${limit}`;

const DataFetchWrapper = ({ children }) => {
  const fetchData = async (page) => {
    let query = `products?skip=${page}&limit=${limit}`;

    try {
      dispatch({ type: startFetch });
      const res = await fetch(BASE_URL + query);
      const data = await res.json();
      dispatch({ type: storeData, payload: data });
    } catch (e) {
      dispatch({ type: failedFetch });
    }
  };
  const combinedReducer = (state, action) => {
    const { ByRating, ByCategory, ByPrice,CombinedCriteria } = filterActions;
    switch (action.type) {
      
      case ByPrice:
      case CombinedCriteria: {
        return filtersReducer(state, action);
      }

      case startFetch:
      case storeData:
      case failedFetch: {
        return productsReducer(state, action);
      }

      default: {
        return state;
      }
    }
  };

  const [productsState, dispatch] = useReducer(combinedReducer, {
    data: { products: [] },
    filteredData: [],
    loading: false,
    error: false
  });
  useEffect(() => {
    //20 products // 20
    // if (productsState.data.products.length < skip + limit) {
    fetchData(skip);
    // }
  }, []);

  return (
    <>
      <DataFetching.Provider
        value={{ productsState, dispatch, refetchData: fetchData }}
      >
        {children}
      </DataFetching.Provider>
    </>
  );
};

export default DataFetchWrapper;

export const useData = () => useContext(DataFetching);
