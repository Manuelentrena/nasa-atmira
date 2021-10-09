//Dependencies
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Pages
import Home from "../views/Home";
import PageError from "../views/PageError";
import Detail from "../views/Detail";

export default function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:year/:day/:month" exact component={Detail} />
        <Route component={PageError} />
      </Switch>
    </Router>
  );
}
