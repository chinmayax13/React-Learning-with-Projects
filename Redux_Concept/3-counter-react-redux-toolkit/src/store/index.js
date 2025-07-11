import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacySlice";

const counterStore = configureStore({reducer:{
  counter : counterSlice.reducer,
  privacy: privacySlice.reducer
}
});

export default counterStore;