import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as ROUTES from './constants/routes';

import { Browse, Home, Signin, Signup } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.BROWSE} exact>
          <Browse />
        </Route>

        <Route path={ROUTES.SIGN_IN} exact>
          <Signin />
        </Route>

        <Route path={ROUTES.SIGN_UP} exact>
          <Signup />
        </Route>

        <Route path={ROUTES.HOME} exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
