import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'; //  react router dependency
//  Browser router creates history object (background) and listens to changes
// Change Browser Router to just Router so history object can be used
// Switch only shows one component (helps avoid problems with query parameters)
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

//  3 different types of routers
//  browser router looks at anything after top level domain (.com etc)
//  must respond with index.html instead of 404 via server file * line

//  hash router /#/ after top level domain
//  # is only being used by client

//  memory router does not look at url

export default App;
