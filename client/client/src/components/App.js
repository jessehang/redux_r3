import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; //react router dependency
//Browser router creates history object (background) and listens to changes
//It communicates path down to the route components
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

//3 different types of routers
//browser router looks at anything after top level domain (.com etc)
//must respond with index.html instead of 404 via server file * line

//hash router /#/ after top level domain
//# is only being used by client

//memory router does not look at url

export default App;
