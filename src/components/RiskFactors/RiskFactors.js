import React from "react";

import "./riskFactors.css";

const RiskFactors = () => {
  return (
    <div className="activity-note-container">
      <div className="activity-card">
        <div className="activity-header">
          <span className="activity-title">Recent Activity:</span>
        </div>
        <p className="activity-text">Follow Up</p>
      </div>
      <div className="activity-card2">
        <div className="activity-header">
          <span className="activity-title">Latest Note</span>
        </div>
        <p className="activity-text">
          5. Type of Wellness Exam: IPPE - Welcome to Medicare - Select G0402,
          G0403, G0404 or G0405
        </p>
      </div>
    </div>
  );
};

export default RiskFactors;
