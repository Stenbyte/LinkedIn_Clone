import React from "react";
import { useParams } from "react-router-dom";
import { Network as data } from "../data";
import styled from "styled-components";
export default function NetworkProfile() {
  let user;
  const params = useParams();

  user = data.find(({ id }) => id === +params.id.slice(1, 2));

  return (
    <Container>
      <ConT>
        <ImgContainer>
          <img src={user.backImg} alt="" className="sizze" />
          <img src={user.proImg} alt="" className="sizze1" />
        </ImgContainer>
        <Second>
          <img src="images/linkedin.png" alt="" />

          <Sec>
            <Sec1>
              <h1>{user.name}</h1>
              <p>{user.role} </p>
              <p>{user.location} </p>
              <span>48 Connections</span>
              <div style={{ display: "flex", marginTop: "1rem" }}>
                <Btn style={{ backgroundColor: "#1565c0", color: "white" }}>
                  Open to
                </Btn>
                <Btn>Add section</Btn>
                <Btn>More</Btn>
              </div>
            </Sec1>
            <Sec2>
              <p>{user.company}</p>
            </Sec2>
          </Sec>
        </Second>
      </ConT>
    </Container>
  );
}
const Container = styled.div`
  padding-top: 72px;
  max-width: 100%;
`;
const ConT = styled.div`
  background-color: white;
  width: 70vw;
  height: 70vh;
  border-radius: 10px;
  margin: 0 auto;
`;
const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .sizze {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
  }
  .sizze1 {
    position: absolute;
    top: 5rem;
    left: 1rem;
    width: 11rem;
    border-radius: 50%;
    border: 4px solid white;
  }
`;
const Second = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
  img {
    position: absolute;
    top: -60px;
    right: 5rem;
    height: 50px;
    width: 50px;
  }
`;
const Sec = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 1rem;
  margin-top: 6rem;
`;
const Sec1 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;
const Sec2 = styled.div`
  margin-right: 9rem;
`;
const Btn = styled.button`
  padding: 0.7rem;
  margin-right: 1rem;
  font-weight: 400;
  font-size: 18px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  min-width: 100px;
`;
