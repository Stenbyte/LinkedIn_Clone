import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signOutApi } from "../actions";
import { Redirect } from "react-router-dom";
import { Switch, Route, NavLink } from "react-router-dom";
import Network from "./Network";
import Home from "./Home";
import Notifications from "./Notifications";
import Message from "./Message";
import Jobs from "./Jobs";
import HeaderProfile from "./HeaderProfile";

function Header(props) {
  // let history = useHistory();
  const [open, setOpen] = useState(false);
  const [work, setWork] = useState(false);

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
              <NavLink to="/home" style={{ textDecoration: "none" }}>
                <NavList>
                  <a>
                    <img src="/images/nav-home.svg" alt="" />
                    <span>Home</span>
                  </a>
                </NavList>
              </NavLink>

              <NavLink to="/network" style={{ textDecoration: "none" }}>
                <NavList>
                  <a>
                    <img src="/images/nav-network.svg" alt="" />
                    <span>My Network</span>
                  </a>
                </NavList>
              </NavLink>

              <NavLink to="/jobs" style={{ textDecoration: "none" }}>
                <NavList>
                  <a>
                    <img src="/images/nav-jobs.svg" alt="" />
                    <span>Jobs</span>
                  </a>
                </NavList>
              </NavLink>

              <NavLink to="/message" style={{ textDecoration: "none" }}>
                <NavList>
                  <a>
                    <img src="/images/nav-messaging.svg" alt="" />
                    <span>Messaging</span>
                  </a>
                </NavList>
              </NavLink>

              <NavLink to="/notifications" style={{ textDecoration: "none" }}>
                <NavList>
                  <a>
                    <img src="/images/nav-notifications.svg" alt="" />
                    <span>Notifications</span>
                  </a>
                </NavList>
              </NavLink>

              <User onClick={() => setOpen(!open)}>
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
                {open && (
                  <ProfileH>
                    <HeaderProfile />
                  </ProfileH>
                )}
              </User>

              <Work onClick={() => setWork(!work)}>
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
        {work && (
          <WorkM onClick={() => setWork(!work)}>
            <ModalW className={!work && "WorkModal"}>
              <h1 onClick={() => setWork(!work)}>X</h1>
              <ModalW1>
                <h1>Visit More LinkedIn Products</h1>
                <hr style={{ margin: "0 -1rem 0.5rem -1rem" }} />
                <ModalW11>
                  <div>
                    <img src="images/audience.png" alt="" />
                    <span>Insights</span>
                  </div>
                  <div>
                    <img src="images/jobss.png" alt="" />
                    <span>Post a job</span>
                  </div>
                  <div>
                    <img src="images/ads.png" alt="" />
                    <span>Advertise</span>
                  </div>
                  <div>
                    <img src="images/interview.png" alt="" />
                    <span>Find Leads</span>
                  </div>
                  <div>
                    <img src="images/meeting.png" alt="" />
                    <span>Groups</span>
                  </div>
                  <div>
                    <img src="images/serv.png" alt="" />
                    <span style={{ textAlign: "center" }}>
                      Services <br /> Marketplace
                    </span>
                  </div>
                  <div>
                    <img src="images/salary.png" alt="" />
                    <span>Salary</span>
                  </div>
                </ModalW11>
              </ModalW1>
              <ModalW2>
                <h1>LinkedIn Business</h1>
                <hr style={{ margin: "-0.5rem -1rem 0.3rem -1rem" }} />
                <ModalW22>
                  <div>
                    <h2>Talent Solutions</h2>
                    <p>Find, attract and recruit talent</p>
                  </div>
                  <div>
                    <h2>Sales Solutions</h2>
                    <p>Unlock sales opportunities</p>
                  </div>
                  <div>
                    <h2>Post a job for free</h2>
                    <p>Get your job in front of quality candidates</p>
                  </div>
                  <div>
                    <h2>Marketing Solutions</h2>
                    <p>Acquire customers and grow your business</p>
                  </div>
                  <div>
                    <h2>Learning Solutions</h2>
                    <p>Develop talent across your organization</p>
                  </div>
                </ModalW22>
              </ModalW2>
            </ModalW>
          </WorkM>
        )}
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
const ProfileH = styled.div`
  position: absolute;
  z-index: 100;
  top: 60px;
  right: 0;
  width: 250px;
  height: 360px;
  border-radius: 5% 0 5% 5%;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: white;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.6);
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

const WorkM = styled.div`
  position: absolute;
  top: 53px;
  width: 100%;
  margin: 0 -1.5rem;
  transition: all 2s ease;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;
const ModalW = styled.div`
  background-color: white;
  height: 100vh;
  width: 30vw;
  position: absolute;
  right: 3rem;
  padding: 1rem;
  display: flex;

  flex-direction: column;
  transition: all 1s ease;
  > h1 {
    text-align: right;
    font-weight: 400;
    width: 30px;
    margin-left: 25rem;
  }
  &.WorkModal {
    right: -28rem;
  }
`;
const ModalW1 = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 1rem;
  height: 250px;
  margin-top: 0.4rem;
  h1 {
    font-weight: 400;
    text-align: left;
    padding-bottom: 2rem;
  }
`;
const ModalW11 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  height: 180px;
  div {
    display: flex;
    flex-direction: column;

    align-items: center;
    padding: 0.4rem;
    width: 70px;
    height: 50px;
    img {
      border: 1px solid rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      width: 32px;
      padding: 0.5rem;
    }
    span {
      margin-top: 0.2rem;
    }
  }
`;
const ModalW2 = styled(ModalW1)`
  height: 260px;
`;
const ModalW22 = styled.div`
  > div {
    line-height: 1.4;
    > h2 {
      font-weight: 400;
    }
    > p {
      font-weight: 300;
    }
  }
`;
// End
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
