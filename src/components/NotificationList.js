import React, { useState } from "react";
import styled from "styled-components";
export default function NotificationList({ n }) {
  const [click, setClick] = useState("Apply");
  const clickHandler = () => {
    click === "Apply" ? setClick("Applied") : setClick("Apply");
  };
  return (
    <Main1
      //   style={{
      //     backgroundColor: n.color ? "#50ad2" : "white",
      //   }}
      key={n.id}
    >
      <img src="images/logo.png" alt="" />
      <div>
        <p className="para">
          <span style={{ fontWeight: 600 }}>{n.name}</span> is promoting a high
          priority <span style={{ fontWeight: 600 }}>{n.role}</span> developer
        </p>
        <Button onClick={clickHandler}>{click}</Button>
      </div>
      <MainBox>
        <p>{n.time}</p>
        <img src="images/elipsis.png" alt="" />
      </MainBox>
    </Main1>
  );
}
const Main1 = styled.div`
  display: flex;
  background-color: white;
  height: 150px;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  margin: 0.1rem 0;
  border-radius: 10px;
  & > div {
    .para {
      padding: 0.5rem;
      /* overflow-wrap: break-word; */

      width: 400px;
    }
  }

  img {
    width: 60px;
    height: 60px;
    margin-right: -8rem;
  }
`;
const Button = styled.button`
  margin: 0.5rem;
  padding: 0.7rem;
  font-size: 16px;
  border-radius: 30px;
  width: 100px;
  border: none;
  background-color: rgba(0, 50, 230, 0.2);
  color: blue;
  &:hover {
    background-color: rgba(0, 50, 240, 0.5);
  }
`;
const MainBox = styled.div`
  margin-bottom: 2rem;
  p {
    margin-right: 0.8rem;
    color: rgba(0, 0, 0, 0.4);
  }
  img {
    width: 20px;
    height: 20px;
    /* margin-left: 0.5rem; */
  }
`;
