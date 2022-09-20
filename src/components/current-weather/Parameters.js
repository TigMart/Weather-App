import React from "react";
import "./Parameters.scss";
const Parameters = ({ icon = null, title, value }) => {
  return (
    <div className="parameters-wrapper">
      <div>
        {icon ? (
          <div className="parameter-icon">
            <img src={icon} alt="params" />
          </div>
        ) : (
          <></>
        )}
        <p className="parameter-title">{title}</p>
      </div>
      <p className="parameter-value">{value}</p>
    </div>
  );
};

export default Parameters;
