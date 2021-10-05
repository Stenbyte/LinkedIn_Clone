import React from "react";
import styled from "styled-components";

export default function PeopleN() {
  return (
    <Container>
      <ImgContainer>
        <img src="/images/card-bg.svg" alt="" className="sizze" />
        <img src="/images/user.svg" alt="" className="sizze1" />
      </ImgContainer>
      <Profile>
        <h3>Sten Scheifel</h3>
        <h4>Frontend Developer</h4>
        <span>Company A</span>
      </Profile>
      <Button>Connect</Button>
    </Container>
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
const Description = styled.div``;
const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rgba(0, 20, 90, 0.8);
  background-color: white;
  margin: 0 auto;
  margin-bottom: 20px;
`;
