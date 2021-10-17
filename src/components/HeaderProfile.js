import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { signOutApi } from "../actions";
function HeaderProfile(props) {
  let history = useHistory();
  console.log(props.user);
  return (
    <Con>
      <ProTop>
        {props.user && props.user.photoURL ? (
          <img src={props.user.photoURL} alt="" />
        ) : (
          <img src="/images/user.svg" alt="" />
        )}
        <div>
          <span>{props.user.displayName}</span>
          <p>User info</p>
        </div>
      </ProTop>
      <ProBtn>View Profile</ProBtn>
      <hr style={{ opacity: 0.2 }} />
      <ProM>
        <h3>Account</h3>
        <p>Access My Premium</p>
        <p>Settings & Privacy</p>
        <p>Help</p>
        <p>Language</p>
      </ProM>
      <hr style={{ opacity: 0.2 }} />
      <ProB>
        <h3>Manage</h3>
        <p>Posts & Activity</p>
        <p>Job Posting Account</p>
      </ProB>
      <hr style={{ opacity: 0.2 }} />
      <SignOut
        onClick={() => {
          props.signOut();
          history.push("/");
        }}
      >
        Sign Out
      </SignOut>
    </Con>
  );
}
const Con = styled.div`
  padding: 0.7rem;
`;
const ProTop = styled.div`
  display: flex;
  img {
    border-radius: 50%;
    width: 42px;
    height: 42px;
    margin-right: 10px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    p {
      font-weight: 300;
    }
  }
`;
const ProBtn = styled.button`
  width: 100%;
  border-radius: 10px;
  border: 1px solid lightblue;
  background-color: white;
  color: blue;
  margin-top: 0.5rem;
  padding: 0.1rem;
  font-size: 16px;
`;
const ProM = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 400;
    margin-bottom: 0.3rem;
  }
  p {
    font-weight: 300;
    line-height: 1.5;
  }
`;
const ProB = styled(ProM)``;
const SignOut = styled.button`
  background: white;
  border: none;
  color: crimson;
  font-size: 16px;
  @media (max-width: 768px) {
    top: -10px;
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderProfile);
