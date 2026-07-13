import { useState } from "react";
import "./App.css";
import AddDonor from "./components/AddDonor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewDonors from "./components/ViewDonors";
import Home from "./components/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="add" element={<AddDonor />} />
          <Route path="view" element={<ViewDonors />} />
          {/* <Route path="delete" element={<DeleteEmployee />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
