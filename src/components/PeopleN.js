import React, { useState } from "react";
import styled from "styled-components";

export default function PeopleN({ el }) {
  const [btn, setBtn] = useState(el.con);

  const btnHandler = () => {
    btn === "Connect" ? setBtn("Connected") : setBtn("Connect");
  };

  return (
    <React.Fragment>
      <Container key={el.id}>
        <ImgContainer>
          <img src={el.backImg} alt="" className="sizze" />
          <img src={el.proImg} alt="" className="sizze1" />
        </ImgContainer>
        <Profile>
          <h3>{el.name} </h3>
          <h4>{el.role} Developer</h4>
          <span>{el.company} </span>
        </Profile>
        <Button
          onClick={btnHandler}
          type="button"
          style={{
            backgroundColor: btn === "Connected" ? "#9575cd" : "white",
            color: btn === "Connected" ? "#FFFCFF" : "black",
          }}
        >
          {btn}
        </Button>
      </Container>
    </React.Fragment>
  );
}
const Container = styled.div`
  width: 250px;
  border-radius: 10px;
  height: 350px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  .sizze {
    width: 250px;
    height: 100px;
    border-radius: 10px;
  }
  .sizze1 {
    position: absolute;
    top: 40px;
    left: 70px;
    height: 100px;
    border: 2px solid white;
    border-radius: 50%;
  }
`;
const Profile = styled.div`
  text-align: center;
`;
// const Description = styled.div``;
const Button = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rgba(0, 20, 90, 0.8);
  background-color: white;
  margin: 0 auto;
  font-size: 17px;
  margin-bottom: 20px;
  &:hover {
    background-color: rgba(0, 0, 200, 0.1);
  }
`;
