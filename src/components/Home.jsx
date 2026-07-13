import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="container" style={{ padding: 10, margin: "50px auto" }}>
        <h1 className="text-center" style={{ marginBottom: 50 }}>Welcome to Blood Bank App</h1>
        <div className="row text-center justify-content-center">
          <div className="col-12 col-sm-6 d-grid">
            <Link to="/add" className="btn btn-primary btn-lg" style={{ marginBottom: 20 }}>
              Add Donor
            </Link>
          </div>
          <div className="col-12 col-sm-6 d-grid">
            <Link to="/view" className="btn btn-success btn-lg" style={{ marginBottom: 20 }}>
              View Donors
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home