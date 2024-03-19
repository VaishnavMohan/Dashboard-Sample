import React from "react";
import "./medicalRecords.css";

const MedicalRecords = () => {
  return (
    <div className="container">
      <div className="box1">
        <div className="entry">
          <h6>Primary Physician:</h6>
          <p>TEST ONLY</p>
        </div>
        <div className="entry">
          <h6>Primary Location:</h6>
          <p>EBS Demo Facility - 35</p>
        </div>
        <div className="entry">
          <h6>Referred by:</h6>
          <p>Not provided</p>
        </div>
        <div className="entry">
          <h6>Last Visit:</h6>
          <p>15-Nov-2019</p>
        </div>
        <div className="entry">
          <h6>No of visit:</h6>
          <p>
            7 <span>(in last 12 months)</span>
          </p>
        </div>
        <div className="entry">
          <h6>No of Hospitalizations:</h6>
          <p>
            0 <span>(in last 3 months)</span>
          </p>
        </div>
        <div className="entry readmission">
          <h6>Readmissions:</h6>
          <p className="readmission-number">0</p>
        </div>
      </div>

      <div className="box2">
        <h6>Condition:</h6>
        <div className="left-aligned">
          <p>Heart Failure, Hypertension, Ischemic Heart Disease</p>
          <h6>Habits: </h6>
          <p>Smoking</p>
          <h6>Vitals: </h6>
          <p>
            BMI: NA, Systolic/Diastolic: 127/84, Glucose: NA, O2 Saturation: NA
          </p>
          <div className="lab-results">
            <h6>Lab:</h6>
            <div className="lab-box">
              <p>HDL N/A</p>
              <p>LDL N/A</p>
              <p>HbA1c N/A</p>
            </div>
          </div>
        </div>
      </div>

      <div className="box3">
        <h6>Allergy:</h6>
        <p>Env (Fungicide), Food (Egg), Food (Tree Nut)</p>
        <h6>Medication:</h6>
        <p>DIA-EZE</p>
        <h6>Immunization:</h6>
        <p>1122 (dtp)</p>
      </div>

      <div className="box4">
        <h6>Programs:</h6>
        <p>Remote Monitoring, Disease Management Program, CCM, AWW,...</p>
        <h6>Service Category:</h6>
        <p>High Acuity, Straight Medicare</p>
        <h6>Measures:</h6>
        <p>Adult Access to Preventive/Ambulatory Health Services ALL, Adult BMI Assessment, Controlling High Blood Pressure with 18-59 years of age</p>
      </div>
    </div>
  );
};

export default MedicalRecords;
