import React, { StrictMode } from "react";
import { render } from "react-dom";
import "./locales/i18n";
import { Home } from "./pages";
import { Todos } from "./pages";
import { Counter } from "./components/counter";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <StrictMode>
      <Router>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todos/1">Todos</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>

        <hr />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/todos/:todo" component={Todos} />
          <Route exact path="/counter" component={Counter} />
        </Switch>
      </Router>
    </StrictMode>
  );
}

const root = document.getElementById("root");

render(<App />, root);
