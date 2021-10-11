import "./App.css";
import React, { useEffect } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { getUserAuth } from "./actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <Router>
      <div className="App">{props.user ? <Header /> : <Login />}</div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
