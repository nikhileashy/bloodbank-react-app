import React from "react";
// import NavBar from "./NavBar";
import axios from "axios";

const AddDonor = () => {

  const [data, setData] = React.useState({
    donor_name: "",
    age: "",
    gender: "",
    blood_group: "",
    phone: "",
    email: "",
    city: "",
    weight_kg: "",
    last_donation_date: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://host-demo-app.onrender.com/api/add-donor", data)
      .then((res) => {
        alert("Donor added successfully");
      })
      .catch((err) => {
        alert("Error adding donor");
      });
  };

  return (
    <div>
      {/* <NavBar /> */}
      <div className="container" style={{ padding: 10, margin: 50 }}>
        <h1 style={{ marginBottom: 50 }}>Add Donor</h1>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="donor_name" className="form-label">
              Donor Name
            </label>
            <input
              type="text"
              name="donor_name"
              id="donor_name"
              className="form-control"
              value={data.donor_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              name="age"
              id="age"
              className="form-control"
              value={data.age}
              onChange={handleChange}
              min="18"
              max="65"
              required
            />
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              className="form-select"
              value={data.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="blood_group" className="form-label">
              Blood Group
            </label>
            <select
              name="blood_group"
              id="blood_group"
              className="form-select"
              value={data.blood_group}
              onChange={handleChange}
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              className="form-control"
              value={data.phone}
              onChange={handleChange}
              pattern="\d{10}"
              required
            />
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              className="form-control"
              value={data.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="weight_kg" className="form-label">
              Weight (kg)
            </label>
            <input
              type="number"
              name="weight_kg"
              id="weight_kg"
              className="form-control"
              value={data.weight_kg}
              onChange={handleChange}
              min="50"
              required
            />
          </div>
          <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="last_donation_date" className="form-label">
              Last Donation Date
            </label>
            <input
              type="date"
              name="last_donation_date"
              id="last_donation_date"
              className="form-control"
              value={data.last_donation_date}
              onChange={handleChange}
            />
          </div>
          <div className="col col-12 col-sm-12">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDonor;