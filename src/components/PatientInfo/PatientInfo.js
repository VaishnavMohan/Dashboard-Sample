import React from "react";
import "./patientInfo.css";

const screenings = [
  "DM",
  "BP",
  "Depression",
  "Colorectal",
  "Breast Cancer",
  "Fall Risk",
  "Tobacco",
];
const PatientInfo = () => {
  return (
    <div className="patient-card">
      <div className="patient-top-section">
        <div className="patient-identity">
          <div className="patient-avatar"></div>
          <div className="patient-details">
            <div className="edit-patient">
              <h3>Pet3011 Par3011</h3>
              <button className="btn-edit">edit</button>
              <button>+ Chart</button>
              <button>+ Enroll</button>
            </div>

            <p>
              ♂ <strong>Male</strong> DOB: 01-Jan-1980 (42 Yrs)
            </p>
            <p>
              <strong>Ethnicity:</strong> Caucasian (European)
            </p>
            <p>
              <strong>Occupation:</strong> Management
            </p>
            <p>
              <strong>Account #:</strong> 1425154825 | MRN: - (EBS Demo Facility
              - 35)
            </p>
          </div>
        </div>
        <div className="patient-contact-and-screenings">
          <div className="patient-contact">
            <p>No details provided</p>
            <p>
              <strong>Primary:</strong> +91 16720
            </p>
            <p>
              <strong>Emergency:</strong> +1 3210
            </p>
            <p>
              <strong>Policy Number:</strong> 999999999
            </p>
            <p>
              <strong>Insurer:</strong> Medicare
            </p>
          </div>
        </div>
      </div>

      <div className="patient-metrics-section">
        <div className="metric-box">
          <h4>Risk</h4>
          <p>This Year: N/A</p>
          <p>Last Year: N/A</p>
        </div>
        <div className="metric-box">
          <h4>Care Gaps</h4>
          <div className="care-gaps-circle">3</div>
        </div>
        <div className="metric-box">
          <h4>ASCVD</h4>
          <p>Current Risk: 2.70</p>
          <p>Lowest Risk: 0.20</p>
        </div>
        <div className="metric-box">
          <h4>SDOH</h4>
          <p>This Year: 0.57</p>
          <p>Last Year: 0.60</p>
        </div>
        <div className="screenings-list">
          <h4>Screenings</h4>
          <div className="screenings-grid">
            {screenings.map((item, index) => (
              <div key={index} className="screening-item">
                <span className="bullet">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
