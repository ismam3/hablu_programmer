import './App.css';
import Landing from './pages/Landing';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/hablu_programmer" component={Landing}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
