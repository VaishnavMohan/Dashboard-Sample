import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import PatientInfo from '../PatientInfo/PatientInfo';
import RiskFactors from '../RiskFactors/RiskFactors';
import RecentActivity from '../RecentActivity/RecentActivity';
import MedicalRecords from '../MedicalRecords/MedicalRecords';
import './layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          <div className="info-risk-container">
            <PatientInfo />
            <RiskFactors />
          </div>
          <RecentActivity />
          <MedicalRecords />
        </div>
      </div>
    </div>
  );
};

export default Layout;
