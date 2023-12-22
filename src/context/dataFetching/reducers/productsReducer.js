export const startFetch = "startFetch";
export const storeData = "storeData";
export const failedFetch = "failedFetch";

export const productsReducer = (state, action) => {
  console.log("this is state");
  switch (action.type) {
    case startFetch: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case storeData: {
      // if (state.data.products.length > 0) {
      //   console.log("*##########################");
      //   console.log("**************************");
      //   console.log("here");
      //   console.log("**************************");
      //   console.log("############################");

      return {
        ...state,
        data: {
          ...action.payload,
          products: [...state.data.products, ...action.payload.products]
        },
        loading: false,
        error: false
      };
      // } else {
      //   return {
      //     ...state,
      //     data: {
      //       ...action.payload,
      //       products: [...action.payload.products]
      //     },
      //     loading: false,
      //     error: false
      //   };
      // }
    }

    case failedFetch: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    default: {
      return state;
    }
  }
};
