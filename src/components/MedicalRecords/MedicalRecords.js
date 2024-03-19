import React from "react";
import "./medicalRecords.css";

const MedicalRecords = () => {
  return (
    <div className="container">
      <div className="box1">
        <div className="entry">
          <h4>Primary Physician:</h4>
          <p>TEST ONLY</p>
        </div>
        <div className="entry">
          <h4>Primary Location:</h4>
          <p>EBS Demo Facility - 35</p>
        </div>
        <div className="entry">
          <h4>Referred by:</h4>
          <p>Not provided</p>
        </div>
        <div className="entry">
          <h4>Last Visit:</h4>
          <p>15-Nov-2019</p>
        </div>
        <div className="entry">
          <h4>No of visit:</h4>
          <p>
            7 <span>(in last 12 months)</span>
          </p>
        </div>
        <div className="entry">
          <h4>No of Hospitalizations:</h4>
          <p>
            0 <span>(in last 3 months)</span>
          </p>
        </div>
        <div className="entry readmission">
          <h4>Readmissions:</h4>
          <p className="readmission-number">0</p>
        </div>
      </div>

      <div className="box2">
        <h4>Condition:</h4>
        <div className="left-aligned">
          <p>Heart Failure, Hypertension, Ischemic Heart Disease</p>
          <h4>Habits: </h4>
          <p>Smoking</p>
          <h4>Vitals: </h4>
          <p>
            BMI: NA, Systolic/Diastolic: 127/84, Glucose: NA, O2 Saturation: NA
          </p>
          <div className="lab-results">
            <h4>Lab:</h4>
            <div className="lab-box">
              <p>HDL N/A</p>
              <p>LDL N/A</p>
              <p>HbA1c N/A</p>
            </div>
          </div>
        </div>
      </div>

      <div className="box3">
        <h4>Allergy:</h4>
        <p>Env (Fungicide), Food (Egg), Food (Tree Nut)</p>
        <h4>Medication:</h4>
        <p>DIA-EZE</p>
        <h4>Immunization:</h4>
        <p>1122 (dtp)</p>
      </div>

      <div className="box4">
        <h4>Programs:</h4>
        <p>Remote Monitoring, Disease Management Program, CCM, AWW,...</p>
        <h4>Service Category:</h4>
        <p>High Acuity, Straight Medicare</p>
        <h4>Measures:</h4>
        <p>Adult Access to Preventive/Ambulatory Health Services ALL, Adult BMI Assessment, Controlling High Blood Pressure with 18-59 years of age</p>
      </div>
    </div>
  );
};

export default MedicalRecords;
