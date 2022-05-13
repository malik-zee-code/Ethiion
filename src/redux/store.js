import { configureStore } from "@reduxjs/toolkit";
import templateReducer from "./template-store";
import toggleReducer from "./toggle-store";

export const store = configureStore({
  reducer: { template: templateReducer, toggle: toggleReducer },
});
