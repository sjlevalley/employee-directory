import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeDirectory from "./components/EmployeeDirectory";
import Jumbotron from "./components/Jumbotron";
import { fetchEmployeeData } from './store/employee-actions';


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
          <Route path="/employee-directory" element={<EmployeeDirectory />}></Route>
          <Route path="*" element={<Navigate to="/employee-directory" replace={true} />}>
          </Route>
        </Routes>
      </Router>

    </>
  )
}

