import React, { useState } from "react";
import styled from "styled-components";
import PeopleN from "./PeopleN";

export default function Network() {
  const [open, setOpen] = useState(true);
  const openHandler = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <Leftside>
        <a>
          <img src="/images/nav-network.svg" alt="" />
          <span>Connection</span>
          <span>48</span>
        </a>
        {open && (
          <Body>
            <a>
              <img src="/images/contact.png" alt="" />
              <span>Contacts</span>
              <span>48</span>
            </a>
            <a>
              <img src="/images/people.png" alt="" />
              <span>People | Follow</span>
              <span>48</span>
            </a>
            <a>
              <img src="/images/meeting.png" alt="" />
              <span>Group</span>
              <span>48</span>
            </a>
            <a>
              <img src="/images/event.png" alt="" />
              <span>Event</span>
              <span>48</span>
            </a>
            <a>
              <img src="/images/computer.png" alt="" />
              <span>Pages</span>
              <span>48</span>
            </a>
            <a>
              <img src="/images/news.png" alt="" />
              <span>NewsLetters</span>
              <span>48</span>
            </a>
            <a>
              <img src="/images/hash.png" alt="" />
              <span> Hashtags</span>
              <span>48</span>
            </a>
          </Body>
        )}
        <Button onClick={openHandler}>
          Show less
          <img src="/images/up.png" alt="" />
        </Button>
        <hr />
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </Leftside>
      <RightSide>
        <RightBar>No pending invitations</RightBar>
        <div style={{ backgroundColor: "white", padding: "1rem" }}>
          <h1>People you may know</h1>
          <RightCont>
            <PeopleN />
            <PeopleN />
            <PeopleN />
            <PeopleN />
            <PeopleN />
            <PeopleN />
            <PeopleN />
            <PeopleN />
            <PeopleN />
          </RightCont>
        </div>
      </RightSide>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  height: 90vh;
  padding: 2rem;
`;
const Leftside = styled.div`
  flex: 0.5;
  flex-direction: column;
  display: flex;
  padding: 1rem;
  border-radius: 10px;
  width: 400px;
  background-color: white;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;

    img {
      margin-right: -120px;
      width: 30px;
      height: 30px;
    }
    span {
      color: grey;
      width: 60px;
      text-align: left;
      font-size: 16px;
    }
  }
`;
const RightSide = styled.div`
  flex: 2.5;
  /* padding: 1rem; */
  margin: 0 7rem 0 1rem;
`;
const RightBar = styled.div`
  border-radius: 10px;
  background-color: white;
  padding: 1rem;
  margin-bottom: 10px;
  /* height: 30px; */
`;
const RightCont = styled.div`
  border-radius: 10px;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  min-height: 90vh;

  /* width: 60vw; */
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  width: 150px;
  border: none;
  background-color: white;
  cursor: pointer;
  img {
    width: 20px;
    height: 15px;
    padding-left: 10px;
  }
`;
const Body = styled.div``;
