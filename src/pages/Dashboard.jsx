// import React from 'react'
import "../css/dashboard.css";
import {useAuth} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const {logout} = useAuth();
const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = ()=>{
    logout();
  }

  // Function to handle navigation to different POS pages
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <img
            src="https://intercom.help/scoutmotors/assets/favicon"
            alt="SaleSync Logo" className="dashboard-logo"
          />
          <h2>aleSync</h2>
      </div>
     
     
     <div className="dashboard-body">

      <div className="dashboard-buttons">
        <button onClick={() => handleNavigation("/sale-pos")}>Sale POS</button>
        <button onClick={() => handleNavigation("/rubic-pos")}>Rubic POS</button>
        <button onClick={() => handleNavigation("/purchase-pos")}>Purchase POS</button>
        <button onClick={handleLogout}><i className="fa-solid fa-arrow-right-from-bracket"></i> LogOut</button>
      </div>
     </div>
    </div>
  );
};

export default Dashboard;
