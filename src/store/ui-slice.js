import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui', // Initial State
  initialState: {
    cartModalVisible: false,
    cartIsVisible: false,
    notification: null,
    loading: false, category: ""
  },

  reducers: { // Reducers
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    setLoadingTrue(state) {
      state.loading = true
    },
    setLoadingFalse(state) {
      state.loading = false
    },
    setCategory(state, action) {
      state.category = action.payload
    },
    toggleCartModal(state) {
      state.cartModalVisible = !state.cartModalVisible
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
