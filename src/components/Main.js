import styled from "styled-components";

export default function Main(props) {
  return (
    <Container>
      <ShareBox>Share</ShareBox>
    </Container>
  );
}

const Container = styled.div`
  grid-area: main;
`;

const ShareBox;
