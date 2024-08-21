import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './features/filterSlice';
import clothesSlice from './features/clothesSlice';
import cartSlice from './features/cartSlice';

const store = configureStore({
  reducer: {
    filter: filterSlice,
    clothes: clothesSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;