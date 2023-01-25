import reducer from "./reducers";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ 
    reducer: reducer
 })
 export default store
 
 export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch