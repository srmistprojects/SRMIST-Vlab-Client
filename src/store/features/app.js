/**
 * Application State
 */

// Dependencies
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        snackbar: {
            severity: 'error', // error, success, warning, info
            message: '',
            open: false,
        },
        isLoading: false,
    }
}

// App Slice
const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        showSnackbar: (state, action) => {
            // Action Payload: Object, {message, severity}
            state.value.snackbar = { ...initialState.value.snackbar, ...action.payload, open: true }
        },
        hideSnackbar: (state) => {
            // Action Payload: none
            state.value.snackbar.open = false;
        },
        showLoading: (state, action) => {
            // Action Payload: Boolean
            state.value.isLoading = action.payload;
        },
        resetApp: () => {

        }
    }
});

// App actions
export const { showSnackbar, hideSnackbar, showLoading } = appSlice.actions;

// App Reducer
export default appSlice.reducer;