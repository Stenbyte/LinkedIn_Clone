import React from "react";
import { Redirect } from "react-router-dom";

export default function Jobs(props) {
  return (
    <React.Fragment>
      {!props.user && <Redirect to="/jobs" />}
      <div>Jobs</div>
      <div>Jobs</div>
      <div>Jobs</div>
      <div>Jobs</div>
      <div>Jobs</div>
    </React.Fragment>
  );
}
