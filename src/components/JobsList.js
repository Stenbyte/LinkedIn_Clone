import React from "react";

export default function JobsList() {
  return (
    <React.Fragment>
      <div>
        <img src="/images/logo.png" alt="" className="logo" />
        <div>
          <h5>Front</h5>
          <p>Comapny</p>
          <p>Location</p>
          <p>1 day ago</p>
        </div>
        <img src="/images/badge.png" alt="" />
      </div>
      <hr style={{ opacity: 0.4, marginRight: "1rem" }} />
    </React.Fragment>
  );
}
