import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import App from './components/App';
import Layout from './components/Layout';
import getTheme from './theme';

const theme = getTheme();

const Routes = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/app1' component={App} />
          <Route path='/app2' component={App} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);

export default Routes;
