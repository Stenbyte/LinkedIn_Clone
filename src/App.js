import "./App.css";
import React, { useEffect } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import { getUserAuth } from "./actions";
import { connect } from "react-redux";
import Network from "./components/Network";
import Menu from "./components/Menu";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {/* <Route path="/home">
            <Header />
            <Menu />
          </Route> */}
          <Header />
          <Home />
          {/* <Route exact path="/home">
          </Route> */}
          {/* <Route exact path="/network">
            <Network />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
