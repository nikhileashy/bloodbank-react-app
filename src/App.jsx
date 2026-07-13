import { useState } from "react";
import "./App.css";
import AddDonor from "./components/AddDonor";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<AddEmployee />} /> */}
          <Route path="add" element={<AddDonor />} />
          {/* <Route path="search" element={<SearchEmployee />} />
          <Route path="delete" element={<DeleteEmployee />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
