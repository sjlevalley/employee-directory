import React, { useEffect, Component } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResultContainer from "./components/SearchResultContainer";
import TestPage from "./components/TestPage";
import Jumbotron from "./components/Jumbotron";
import { fetchEmployeeData } from './store/employee-actions';
// import { uiActions } from './store/ui-slice';



export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployeeData());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Jumbotron />
        <Routes>
          <Route path="/" element={<SearchResultContainer />} />
          <Route path="/employee-directory" element={<TestPage />}>
          </Route>
        </Routes>
      </Router>

    </>
  )
}

