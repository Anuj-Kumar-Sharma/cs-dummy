const cartSlice = (set, get) => {
  return {
      cart: [],
      addToCart: (product) => {
        const products = get().products;
        
      },
      incrementQuantity: (id) => {},
      decrementQuantity: (id) => {},
  };
}

export default cartSlice;