import { configureStore } from "@reduxjs/toolkit";
import dataProviderSlice from "./slice/detaproviderSlice";


const Store = configureStore({
    reducer:{
        Details: dataProviderSlice.reducer
    }
});

export default Store


