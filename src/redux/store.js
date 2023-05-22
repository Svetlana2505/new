import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/usersSlice";
import { registrationReducer } from "./registration/registrationSlice";
import { positionsReducer } from "./positions/positionSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    registration: registrationReducer,
    positions: positionsReducer,
  },
});
