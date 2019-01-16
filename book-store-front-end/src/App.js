import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./modules/layouts/containers/Header";
import routes from "./modules/router/index";
import { Segment } from "semantic-ui-react";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <HashRouter>
            <Segment>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      name={route.name}
                      render={props => <route.component {...props} />}
                    />
                  ) : null;
                })}
                <Redirect from="/" to="/books" />
              </Switch>
            </Segment>
          </HashRouter>
        </div>
      </HashRouter>
    );
  }
}

export default App;
