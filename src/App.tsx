import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter, Switch, Route } from 'react-router-dom';

import 'reset-css';
import './styles/App.scss';

import ExampleView from './views/ExampleView';

const App: React.FC = () => {
  return (
    <div className='main-container'>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={ExampleView} />
        </Switch>
      </HashRouter>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('injection-site')
);

export default App;
module.hot.accept();
