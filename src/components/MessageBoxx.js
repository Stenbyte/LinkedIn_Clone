import React, { useState } from "react";
import styled from "styled-components";
export default function MessageBoxx({ m, idHandler }) {
  const [click, setClick] = useState(true);
  return (
    <MessageBox
      onClick={() => {
        idHandler(m._id);
        setClick(false);
      }}
      style={{ backgroundColor: click === false ? "white" : "#eef3f8" }}
    >
      <img src="/images/user.svg" alt="" />
      <div>
        <h6>{m.name}</h6>
        <p>{m.description} •</p>
      </div>
      <p>{m.time}</p>
    </MessageBox>
  );
}
const MessageBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-right: 1rem;
  /* height: 50px; */
  background-color: #eef3f8;
  padding: 1rem;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
  }
`;
