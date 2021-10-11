import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getUserAuth } from "../actions";
import { signOutApi } from "../actions";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Network from "./Network";
import Home from "./Home";
import Notifications from "./Notifications";
import Message from "./Message";
import Jobs from "./Jobs";
import Login from "./Login";
function Header(props) {
  let history = useHistory();
  let location = useLocation();
  const [home, setHome] = useState(true);
  const homeHandler = (bol) => {
    setHome(bol);
  };
  useEffect(() => {
    console.log(history, "history");
    console.log(location);
    console.log(props.user);
  }, [history, location, props.user]);

  return (
    <React.Fragment>
      <Container>
        <Content>
          <Logo>
            <a href="/home">
              <img src="/images/home-logo.svg" alt="" />
            </a>
          </Logo>
          <Search>
            <div>
              <input type="text" placeholder="Search" />
            </div>
            <SearchIcon>
              <img src="/images/search-icon.svg" alt="" />
            </SearchIcon>
          </Search>
          <Nav>
            <NavListWrap>
              <NavLink
                to="/home"
                style={{ textDecoration: "none" }}
                onClick={() => homeHandler(false)}
              >
                <NavList>
                  <a>
                    <img src="/images/nav-home.svg" alt="" />
                    <span>Home</span>
                  </a>
                </NavList>
              </NavLink>

              <NavLink
                to="/network"
                style={{ textDecoration: "none" }}
                onClick={() => homeHandler(false)}
              >
                <NavList>
                  <a>
                    <img src="/images/nav-network.svg" alt="" />
                    <span>My Network</span>
                  </a>
                </NavList>
              </NavLink>

              <NavLink
                to="/jobs"
                style={{ textDecoration: "none" }}
                onClick={() => homeHandler(false)}
              >
                <NavList>
                  <a>
                    <img src="/images/nav-jobs.svg" alt="" />
                    <span>Jobs</span>
                  </a>
                </NavList>
              </NavLink>

              <NavLink
                to="/message"
                style={{ textDecoration: "none" }}
                onClick={() => homeHandler(false)}
              >
                <NavList>
                  <a>
                    <img src="/images/nav-messaging.svg" alt="" />
                    <span>Messaging</span>
                  </a>
                </NavList>
              </NavLink>

              <NavLink
                to="/notifications"
                style={{ textDecoration: "none" }}
                onClick={() => homeHandler(false)}
              >
                <NavList>
                  <a>
                    <img src="/images/nav-notifications.svg" alt="" />
                    <span>Notifications</span>
                  </a>
                </NavList>
              </NavLink>

              <User>
                <a>
                  {props.user && props.user.photoURL ? (
                    <img src={props.user.photoURL} alt="" />
                  ) : (
                    <img src="/images/user.svg" alt="" />
                  )}
                  <span>
                    Me
                    <img src="/images/down-icon.svg" alt="" />
                  </span>
                </a>

                <SignOut
                  onClick={() => {
                    props.signOut();
                    history.push("/");
                  }}
                >
                  <a>Sign Out</a>
                </SignOut>
              </User>

              <Work>
                <a>
                  <img src="/images/nav-work.svg" alt="" />
                  <span>
                    Work
                    <img src="/images/down-icon.svg" alt="" />
                  </span>
                </a>
              </Work>
            </NavListWrap>
          </Nav>
        </Content>
      </Container>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/network">
          <Network />
        </Route>
        <Route path="/jobs">
          <Jobs />
        </Route>
        <Route path="/message">
          <Message />
        </Route>
        <Route path="/notifications">
          <Notifications />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
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

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
    overflow-x: scroll;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  color: crimson;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  @media (max-width: 768px) {
    top: -10px;
  }
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }
  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
  }
  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOutApi()),
  // getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
