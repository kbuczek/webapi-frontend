import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Customer from "./pages/customer";
import CustomerEdit from "./pages/customer/Edit";
import CustomerAdd from "./pages/customer/Add";
import CustomerDelete from "./pages/customer/Delete";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Customer />} />
          <Route path="/edit/:id" element={<CustomerEdit />} />
          <Route path="/delete/:id" element={<CustomerDelete />} />
          <Route path="/add" element={<CustomerAdd />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
