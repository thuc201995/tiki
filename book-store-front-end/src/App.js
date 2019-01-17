import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./modules/layouts/containers/Header";
import routes from "./modules/router/index";
import { Segment } from "semantic-ui-react";
import BookForm from "./modules/books/containers/BookForm";

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
                  console.log(route);
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      name={route.name}
                      render={props => <route.component {...props} />}
                      exact={true}
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
