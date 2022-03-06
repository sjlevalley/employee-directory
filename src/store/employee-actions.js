// Import the reducers from each respective state slice. 
import { uiActions } from './ui-slice';
import { employeeActions } from './employee-slice';

// Action Creator Thunk (A function that can return another function as well as execute asynchronous functions). This action creator is used to fetch the cart data from the Firebase database.
export const fetchEmployeeData = () => {
  return async (dispatch) => {
    // fetch the data from the database (with fetch, the default method is "GET")
    const fetchData = async () => {

      const BASEURL = "https://randomuser.me/api/?results=200&nat=us";
      dispatch(uiActions.setLoadingTrue());
      // Set the response variable in an async function
      const response = await fetch(BASEURL);

      // If the response is not okay, throw an error
      if (!response.ok) {
        throw new Error('Could not fetch product data!');
      }

      // Set the response in the "data" constant and return the response after parsing the body text to JSON
      const data = await response.json()

      dispatch(uiActions.setLoadingFalse());

      // Ultimately, the fetchData function will return this 'data' variable
      return data;
    };


    // In a try/catch statement, call that fetchData function
    try {
      // Call the function and await the response
      const employeeData = await fetchData();

      // Dispatch the action created in and imported from the cart-slice.js file. Again, the 'type' property is not needed with react toolkit.
      dispatch(
        employeeActions.populateEmployeesArray({
          //replace the cart with the updated items. If there is no items, make it an empty array.
          employees: employeeData || [],
        })
      );
      // This catches any new errors thorn from the fetchData function above.
    } catch (error) {

      // Set the notification component to 'error' status
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching employee data failed!',
        })
      );
    }
  };
};

