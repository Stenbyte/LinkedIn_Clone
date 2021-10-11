import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
function Message(props) {
  return (
    <React.Fragment>
      <Container>
        {/* {!props.user && <Redirect to="/" />} */}
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
                <div>
                  <img src="/images/elipsis.png" alt="" />
                  <img src="/images/new-post.png" alt="" />
                </div>
              </Left1Top>
              {/* <hr style={{ opacity: 0.4, marginTop: "1.1rem" }} /> */}
              <Search>
                <div>
                  <input type="text" placeholder="Search messages" />
                </div>
                <SearchIcon>
                  <img src="/images/search-icon.svg" alt="" />
                </SearchIcon>
              </Search>
              <MessageBox>
                <img src="/images/user.svg" alt="" />
                <div>
                  <h6>John Doe</h6>
                  <p>sponsored •</p>
                </div>
                <p>Oct 1</p>
              </MessageBox>
              <hr style={{ opacity: 0.4, marginRight: "1rem" }} />
            </Left1>
            <Left2>
              <Left2Top>
                <div>
                  <h4>User Name</h4>
                  <p>Description</p>
                </div>
                <img src="images/elipsis.png" alt="" />
              </Left2Top>
              <Left2M>
                <h5>Info</h5>
                <Button>Read more</Button>
                <hr style={{ opacity: 0.4 }} />
              </Left2M>
              <Left2D>
                <Profile>
                  <img src="images/user.svg" alt="" />
                  <h6>User Name</h6>
                </Profile>
                <div className="last">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. <br /> <br />
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged.It was popularised in the 1960s with the release of
                  Letraset sheets containing Lorem Ipsum passages, and more
                  recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </div>
              </Left2D>
            </Left2>
          </Left>
          <Right>
            <img
              src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
              alt=""
            />
          </Right>
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
  margin-top: 1rem;
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  background-color: white;
  border-radius: 10px;
`;
const Left1 = styled.div`
  width: 350px;
  min-height: 300px;
  /* border: solid; */
  border-right: 1px solid rgba(0, 0, 0, 0.3);

  padding-left: 1rem;
`;
const Left1Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 1.15rem 1rem;
  /* padding-bottom: 1.65rem; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  h6 {
    font-weight: 400;
  }
  img {
    width: 25px;
    padding: 0.2rem;
  }
`;
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

const Right = styled.div`
  /* background-color: red; */
  flex: 1;
  margin-left: 2rem;
`;
const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 380px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 280px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left2 = styled.div`
  /* margin: 1rem; */
  display: flex;
  flex-direction: column;
`;
const Left2Top = styled.div`
  justify-content: space-between;
  display: flex;
  /* width: 540px; */
  /* padding-bottom: 0.5rem; */
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  img {
    width: 20px;
    height: 20px;
  }
`;
const Left2M = styled.div`
  /* margin: 1rem 1rem; */
  h5 {
    padding: 1rem;
  }
`;
const Button = styled.button`
  padding: 0.6rem;
  border-radius: 20px;
  border: none;
  background-color: lightblue;
  /* margin-top: 0.6rem; */
  margin-left: 0.6rem;
`;
const Left2D = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  .last {
    min-height: 30vh;
    margin-bottom: 2rem;
    padding: 0.6rem 5rem;
    font-size: 16px;
    line-height: 1.5;
    font-weight: 400;
  }
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0 0 1rem;
  img {
    width: 42px;
    height: 42px;

    border-radius: 10px;
    margin-right: 1rem;
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
// const mapDispatchToProps = (dispatch) => ({
//   signOut: () => dispatch(signOutApi()),
// });

export default connect(mapStateToProps)(Message);
