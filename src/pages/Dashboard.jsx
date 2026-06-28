// import React from 'react'
import "../css/dashboard.css";
import {useAuth} from "../context/AuthContext";

const Dashboard = () => {
  const {logout} = useAuth();

  // Function to handle logout
  const handleLogout = ()=>{
    logout();
  }
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
        <button>Sale POS</button>
        <button>Rubic POS</button>
        <button>Purchase POS</button>
        <button onClick={handleLogout}><i className="fa-solid fa-arrow-right-from-bracket"></i> LogOut</button>
      </div>
     </div>
    </div>
  );
};

export default Dashboard;
