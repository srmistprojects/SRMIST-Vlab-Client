/**
 * Application Store
 */

// Dependencies
import { configureStore } from "@reduxjs/toolkit";
import appReducer from './features/app';

// Create Store
const store = configureStore({
    reducer: {
        app: appReducer,
    }
});

// Export Store
export default store;