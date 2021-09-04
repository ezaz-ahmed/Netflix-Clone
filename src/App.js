import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './pages';

const App = () => {
  return (
    <Router>
      <Switch>
        <Home />
      </Switch>
    </Router>
  );
};

export default App;
