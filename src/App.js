import './App.css';
import Landing from './pages/Landing';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CodeEditor from './pages/CodeEditor';
import LoginForm from './pages/LoginForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/codeEditor" component={CodeEditor}/>
          <Route exact path="/login" component={LoginForm}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
