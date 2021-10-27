import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signInApi } from "../actions";

function Login(props) {
  return (
    <Container>
      {/* {props.user && <Redirect to="/home" />} */}
      <Nav>
        <a href="" target="_blank">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <div className="intro">
          Hi, welcome to the desktop LinkedIn clone app. Project was build by
          using <span>ReactJs</span>, <span>Styled Components</span>,{" "}
          <span>Firebase</span>, <span>Redux</span>, and <span>Router</span>.
          <br />
          Functionality <span>tips</span>:
          <br /> • <span>Log in</span> is connected to Firebase Authentication
          <br /> • <span>Navigation</span> bar is fully <span>functional</span>
          <br /> • <span>User</span> can create a <span>post</span>, and upload{" "}
          <span>image</span> or <span>video</span>(it is connected to Firebase)
          <br /> • My Network, Jobs, Messaging, and Notifications{" "}
          <span>components</span> are using <span>dummy data</span>
          <br />• My Network component <span>redirects</span> to user{" "}
          <span>profile page</span> <br />• All of the <span>buttons</span> are
          clickable
          <br />
          <span style={{ textDecoration: "underline" }}>
            Sign In, and enjoy
          </span>
        </div>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google onClick={() => props.signIn()}>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: 90px;
  }
`;
const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.09);
    color: rgba(0, 0, 0, 1);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
    @media (max-width: 768px) {
    }
  }
`;
const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  .intro {
    position: absolute;
    top: 5rem;
    right: -7vw;
    background-color: white;
    z-index: 10;
    width: 35vw;
    min-height: 35vh;
    padding: 1rem;
    line-height: 1.5;
    border-radius: 10px;
    font-weight: 300;
    font-size: 1.2rem;
    span {
      font-weight: 400;
    }
  }
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  width: 100%;
  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;
    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Google = styled.button`
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition-duration: 167ms;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInApi()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
