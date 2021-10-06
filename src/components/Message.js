import React from "react";
import styled from "styled-components";
export default function Message() {
  return (
    <React.Fragment>
      <Container>
        <Box>
          <h1>
            <span style={{ color: "blue" }}>A Unique pre-IPO Offer</span> -
            TransparentBusiness has reached $2,4B
          </h1>
        </Box>
        <Box1>
          <Left>
            <Left1>
              <Left1Top>
                <h6>Messaging</h6>
                <img src="/images/badge.png" alt="" />
                <img src="/images/badge.png" alt="" />
              </Left1Top>
              <input type="search" />
              <MessageBox>user</MessageBox>
            </Left1>
            <Left2></Left2>
          </Left>
          <Right>Right</Right>
        </Box1>
      </Container>
    </React.Fragment>
  );
}
const Container = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  height: 90vh;
  padding: 2rem;
`;
const Box = styled.div`
  margin: 0 auto;
`;
const Box1 = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 2;
  background-color: white;
`;
const Left1 = styled.div``;
const Left1Top = styled.div`
  img {
    width: 40px;
  }
`;
const MessageBox = styled.div``;
const Left2 = styled.div``;
const Right = styled.div`
  background-color: red;
  flex: 1;
`;
