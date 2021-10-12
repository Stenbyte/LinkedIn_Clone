import React, { useState } from "react";
import styled from "styled-components";

export default function JobsList({ job }) {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <React.Fragment>
      <Comp>
        <img src="/images/logo.png" alt="" className="logo" />
        <div>
          <h5>{job.name}</h5>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.time}</p>
        </div>
        <img
          src="/images/badge.png"
          alt=""
          onClick={clickHandler}
          style={{ opacity: click ? 0.2 : 1 }}
        />
      </Comp>
      <hr style={{ opacity: 0.4, marginRight: "1rem" }} />
    </React.Fragment>
  );
}
const Comp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding-left: 6rem; */
  height: 150px;
  div {
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    align-items: flex-start;
    line-height: 30px;
    /* background-color: green; */
    min-width: 600px;
  }
  .logo {
    width: 60px;
    height: 60px;
    /* margin-right: -20rem; */
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 1rem;
  }
`;
