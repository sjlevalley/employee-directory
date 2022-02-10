import React, { useEffect, Component } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResultContainer from "./components/SearchResultContainer";
import TestPage from "./components/TestPage";
import Jumbotron from "./components/Jumbotron";
import { fetchEmployeeData } from './store/employee-actions';
import { uiActions } from './store/ui-slice';



export default function App() {
  const dispatch = useDispatch();
  // const cartTotal = useSelector((state) => state.ui.cartModalVisible);
  // const cart = useSelector((state) => state.cart);
  // const notification = useSelector((state) => state.ui.notification);
  // const products = useSelector((state) => state.products.items);
  // const categories = useSelector((state) => state.products.categories);
  const loading = useSelector((state) => state.ui.loading)
  const employeeData = useSelector((state) => state.employees.employees);

  useEffect(() => {
    dispatch(fetchEmployeeData());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Jumbotron />
        <Routes>
          <Route path="/" element={<SearchResultContainer />} />

          <Route path="/test" element={<TestPage />}>
          </Route>
        </Routes>
      </Router>

    </>
  )
}

