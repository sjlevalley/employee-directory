// Enables you to create a new slice
import { createSlice } from '@reduxjs/toolkit';


// Initialize & create the new Slice of State, which ends up being an object with a name, initial state, and reducer functions which must be "pure"
const employeeSlice = createSlice({

  // Set the name
  name: 'employees',

  // Set the intiial State
  initialState: {
    employees: []
  },

  // Add the reducer functions. Note: Below it appears that the state is being mutated (which is NOT cool with redux). However, this is not the case. Redux toolkit allows the syntax below and, behind the scenes, translates the syntax into the proper syntax that does NOT mutate the state. 

  // Also, remember that these reducers are "pure" and do not contain "Async" logic, these are ONLY for updating the state. All functions such as HTTP requests and other "fetching" or other async actions goes in the "cart-actions.js" file. This is where that asynchronous functionality lives and is called an Action Creator Thunk.
  reducers: {
    populateEmployeesArray(state, action) {
      state.employees = action.payload;
    }
  },
});

// When using Redux toolkit, the Dispatch "type" is automatically created and linked up internally, which is why a switch statement with each conditional "type" (i.e. type: "ADD_ITEM") is not needed.
export const employeeActions = employeeSlice.actions;

export default employeeSlice;
