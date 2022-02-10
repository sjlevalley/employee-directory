// Import the Configure Store functionality from redux toolkit
import { configureStore } from '@reduxjs/toolkit';

// Import your State "Slices" from each individual slice
import uiSlice from './ui-slice';
import employeeSlice from './employee-slice';


// Set the store variable to export and call configureStore with the reducer being an object comprised of all your 

const store = configureStore({ // different slice reducers
  reducer: {
    ui: uiSlice.reducer,
    employees: employeeSlice.reducer
  },
});


// Export the store
export default store;
