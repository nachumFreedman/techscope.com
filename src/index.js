import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Switch } from 'react-router';
import createHashHistory from 'history/createHashHistory';
import home from './Home'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ResponsiveProvider from './ResponsiveProvider';
import Layout from './Layout';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const history = createHashHistory();

ReactDOM.render(
  <Router history={history}>

    <MuiThemeProvider>
      <ResponsiveProvider>
        <Layout>
          <Switch>
            <Route key={home} path='/' exact component={home}/>            
          </Switch>
        </Layout>
      </ResponsiveProvider>
    </MuiThemeProvider>

  </Router>, document.getElementById('root'));
  registerServiceWorker();
