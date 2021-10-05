import React from "react";
import styled from "styled-components";

export default function Notifications() {
  return (
    <Container>
      <Leftside>
        <a>Connection</a>
        <a>Connection</a>
        <a>Connection</a>
        <a>Connection</a>
      </Leftside>
      <RightSide>
        <RightBar>No pending invitations</RightBar>
        <RightCont>
          <p>People</p>
          <p>People</p>
          <p>People</p>
          <p>People</p>
          <p>People</p>
          <p>People</p>
          <p>People</p>
        </RightCont>
      </RightSide>
    </Container>
  );
}
const Container = styled.div``;
const Leftside = styled.div``;
const RightSide = styled.div``;
const RightBar = styled.div``;
const RightCont = styled.div``;
