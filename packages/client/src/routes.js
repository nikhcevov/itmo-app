import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import Layout from './components/Layout';
import getTheme from './theme';

import WatchersPage from './modules/watchers';
import HomePage from './modules/home';
import AnswersPage from './modules/answers';
import ScoresPage from './modules/scores';
import SchedulePage from './modules/schedule';

const theme = getTheme();

const Routes = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/watchers' component={WatchersPage} />
          <Route path='/answers' component={AnswersPage} />
          <Route path='/scores' component={ScoresPage} />
          <Route path='/schedule' component={SchedulePage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);

export default Routes;
