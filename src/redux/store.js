import { configureStore } from "@reduxjs/toolkit";
import candidateReducer from "./candidate-reducer";
import templateReducer from "./template-store";
import toggleReducer from "./toggle-store";

export const store = configureStore({
  reducer: {
    template: templateReducer,
    toggle: toggleReducer,
    candidate: candidateReducer,
  },
});
