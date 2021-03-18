import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import Saved from './pages/Saved';
import Search from './pages/Search';
import Navigation from './components/navbar/Navigation';
import Header from './components/header/Header';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Navigation />
        <Header />
        <Switch>
          <Route exact path='/'>
            {' '}
            <Search />
          </Route>
          <Route exact path='/saved'>
            {' '}
            <Saved />
          </Route>
          <Route>
            {' '}
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
