import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import axios from "axios";

const ViewDonors = () => {
  const [donors, setDonors] = useState([]);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");

  useEffect(() => {
    let url = "http://localhost:5000/api/donors"; 
    if (selectedBloodGroup) {
      url += `?blood_group=${encodeURIComponent(selectedBloodGroup)}`;
    }

    axios
      .get(url)
      .then((response) => {
        setDonors(response.data.donors || response.data);
      })
      .catch((error) => {
        console.error("Error fetching donor data:", error);
      });
  }, [selectedBloodGroup]);

  const handleFilterChange = (e) => {
    setSelectedBloodGroup(e.target.value);
  };

  return (
    <div>
      <NavBar />
      <div className="container" style={{ padding: 10, margin: "50px auto" }}>
        <h1 style={{ marginBottom: 30 }}>View Donors</h1>

        <div className="row mb-4">
          <div className="col col-12 col-sm-6 col-md-4">
            <label htmlFor="bloodGroupFilter" className="form-label fw-bold">
              Filter by Blood Group
            </label>
            <select
              id="bloodGroupFilter"
              className="form-select"
              value={selectedBloodGroup}
              onChange={handleFilterChange}
            >
              <option value="">All Blood Groups</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>
          </div>
        </div>

        { donors.length === 0 ? (
          <div className="alert alert-warning text-center" role="alert">
            No donors found matching this criteria.
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover align-middle">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Phone</th>
                  <th scope="col">City</th>
                  <th scope="col">Weight (kg)</th>
                </tr>
              </thead>
              <tbody>
                {donors.map((donor, index) => (
                  <tr key={donor._id || index}>
                    <td>{donor.donor_name}</td>
                    <td>{donor.age}</td>
                    <td>{donor.gender}</td>
                    <td>
                      <span className="badge bg-danger fs-6">
                        {donor.blood_group}
                      </span>
                    </td>
                    <td>{donor.phone}</td>
                    <td>{donor.city}</td>
                    <td>{donor.weight_kg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewDonors;
