import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const existingCartItem = state.items.find((item) => item.product.id === newProduct.id);
      if (existingCartItem) {
        existingCartItem.quantity += 1;
        return;
      }

      state.items.push({ product: newProduct, quantity: 1 });
    },
    changeQuantity: (state, action) => {
      const { productId, amount } = action.payload;

      const cartItem = state.items.find((item) => item.product.id === productId);

      if (cartItem) {
        cartItem.quantity += amount;
      }

      if (cartItem.quantity <= 0) {
        state.items = state.items.filter((item) => item.product.id !== productId);
      }
    },
  },
});

export const selectNumberOfItems = (state) => state.cart.items.length;

export const selectSubtotal = (state) =>
  state.cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

const cart = (state) => state.cart;

export const deliveryFeeSelector = createSelector(cart, selectSubtotal, (cart, subtotal) =>
  subtotal >= cart.freeDeliveryFrom ? 0 : cart.deliveryFee
);

export const totalAmount = createSelector(
  deliveryFeeSelector,
  selectSubtotal,
  (deliveryFee, subtotal) => deliveryFee + subtotal
);
