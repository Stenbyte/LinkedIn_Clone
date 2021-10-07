import React from "react";
import styled from "styled-components";
import { Notification as data } from "../data";

export default function Notifications(props) {
  console.log(data);
  return (
    <Container>
      <Leftside>
        <Box1>
          <h4>Notifications</h4>
          <p>You have new notifications</p>
        </Box1>
        <Box2>
          <p>Improve your notifications</p>
          <span>View settings</span>
        </Box2>
      </Leftside>
      <Main>
        {data.map((n) => (
          <Main1
            style={{
              backgroundColor: n.color ? "#50ad2" : "white",
            }}
          >
            <img src="images/logo.png" alt="" />
            <div>
              <p className="para">
                <span style={{ fontWeight: 600 }}>{n.name}</span> is promoting a
                high priority <span style={{ fontWeight: 600 }}>{n.role}</span>{" "}
                developer
              </p>
              <Button>Apply early</Button>
            </div>
            <MainBox>
              <p>{n.time}</p>
              <img src="images/elipsis.png" alt="" />
            </MainBox>
          </Main1>
        ))}
      </Main>

      <RightSide>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </RightSide>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  height: 90vh;
  padding: 2rem;
`;
const Leftside = styled.div`
  flex: 1;
`;
const RightSide = styled.div`
  flex: 1;
  img {
    margin-left: 1rem;
  }
`;
const Box1 = styled.div`
  text-align: center;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  border-radius: 10px 10px 0 0;
  padding-bottom: 1rem;
  h4 {
    padding: 1rem;
  }
`;
const Box2 = styled.div`
  text-align: center;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  border-radius: 0 0 10px 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 1rem;
  background-color: rgba(0, 10, 30, 0.1);
  p {
    padding: 1rem;
  }
  span {
    color: blue;
    font-weight: 600;
  }
`;
const Main1 = styled.div`
  display: flex;
  background-color: rgba(90, 10, 210, 0.1);
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
const Main = styled.div`
  flex: 2;
`;
const Button = styled.button`
  margin: 0.5rem;
  padding: 0.7rem;
  font-size: 16px;
  border-radius: 30px;
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
