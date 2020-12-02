import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './components/Index';
import Workstation from './components/Workstation';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Index } />
        <Route path="/workstation" component={ Workstation } />
      </Switch>
    </BrowserRouter>
  );
};

export default App;