export const filterActions = {
  ByPrice: "BY_PRICE",
  CombinedCriteria: "COMBINED_CRITERIA"
};

export const filtersReducer = (state, action) => {
  const { ByPrice, CombinedCriteria } = filterActions;
  switch (action.type) {
    case CombinedCriteria: {
      const { rating, category } = action.payload;
      const filteredProducts = state.data.products.filter((product) => {
        //check a flag for rating
        let isRatingMatch = rating === "" || product.rating === Number(rating);
        let isCategoryMatch =
          category.length === 0 ||
          category.includes(product.category.toLowerCase());

        return isCategoryMatch && isRatingMatch;
      });

      return {
        ...state,
        filteredData: [...filteredProducts]
      };
    }
  }
};
