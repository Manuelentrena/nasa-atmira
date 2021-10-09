import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../views/Home";
import PageError from "../views/PageError";

export default function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/:lng(en|es)?/home" exact component={Detail} /> */}
        <Route component={PageError} />
      </Switch>
    </Router>
  );
}
